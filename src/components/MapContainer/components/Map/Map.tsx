import { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';

import 'mapbox-gl/dist/mapbox-gl.css';
import styles from './Map.module.css';

export const Map = () => {
  const mapRef = useRef<mapboxgl.Map | null>(null)
  const mapRootRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_ACCESS_TOKEN;
    mapRef.current = new mapboxgl.Map({
      container: mapRootRef.current ?? 'map-root',
    })

    return () => {
      mapRef.current?.remove();
    }
  }, [])

  return <div id="map-root" ref={mapRootRef} className={styles.map} />;
}; 
