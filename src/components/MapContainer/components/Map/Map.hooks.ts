import { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';

import getIso from '../../../../apis/getIso';
import type { CenterCoordinates } from './Map.types';
import { INITIAL_CENTER, INITIAL_ZOOM } from './Map.constants';

export const useMap = () => {
  const mapRef = useRef<mapboxgl.Map | null>(null)
  const mapRootRef = useRef<HTMLDivElement | null>(null)

  const [center, setCenter] = useState<CenterCoordinates>(INITIAL_CENTER)
  const [zoom, setZoom] = useState(INITIAL_ZOOM)

  useEffect(() => {
    mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_ACCESS_TOKEN;
    mapRef.current = new mapboxgl.Map({
      container: mapRootRef.current ?? 'map-root',
      center,
      zoom,
    })

    mapRef.current.on('load', () => {
      mapRef.current!.addSource('iso', {
        type: 'geojson',
        data: {
          type: 'FeatureCollection',
          features: [],
        },
      });

      mapRef.current!.addLayer(
        {
          id: 'isoLayer',
          type: 'fill',
          source: 'iso',
          layout: {},
          paint: {
            'fill-color': '#5a3fc0',
            'fill-opacity': 0.3,
          },
        },
      );
    });

    mapRef.current.on('move', () => {
      const mapCenter = mapRef.current?.getCenter();
      const mapZoom = mapRef.current?.getZoom();

      if (mapCenter) {
        setCenter([mapCenter.lng, mapCenter.lat]);
      }

      if (mapZoom) {
        setZoom(mapZoom);
      }
    })

    return () => {
      mapRef.current?.remove();
    }
  }, []);

  return {
    mapRef,
    mapRootRef,
    center,
    zoom,
  }
}
