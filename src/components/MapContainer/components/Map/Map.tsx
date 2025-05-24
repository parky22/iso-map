import { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';

import { INITIAL_CENTER, INITIAL_ZOOM } from './Map.constants';
import type { CenterCoordinates } from './Map.types';
import 'mapbox-gl/dist/mapbox-gl.css';
import styles from './Map.module.css';

export const Map = () => {
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

  const handleOnClick = () => {
    mapRef.current?.flyTo({
      center: INITIAL_CENTER,
      zoom: INITIAL_ZOOM,
    });
  };

  return (
    <>
      <div className="sidebar">
        Longitude: {center[0].toFixed(4)} | Latitude: {center[1].toFixed(4)} | Zoom: {zoom.toFixed(2)}
      </div>
      <button onClick={handleOnClick}>Reset</button>
      <div id="map-root" ref={mapRootRef} className={styles.map} />
    </>
  );
}; 
