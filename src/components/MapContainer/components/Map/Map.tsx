import { useCallback, useEffect } from 'react';

import getIso from '../../../../apis/getIso';
import type { TransitMode } from '../../MapContainer.types';
import { INITIAL_CENTER, INITIAL_ZOOM } from './Map.constants';
import { useMap } from './Map.hooks';
import 'mapbox-gl/dist/mapbox-gl.css';
import styles from './Map.module.css';

interface MapProps {
  time: number;
  transitMode: TransitMode;
}

export const Map = ({ time, transitMode }: MapProps) => {
  const { mapRef, mapRootRef, center, zoom } = useMap();

  const handleReset = useCallback(() => {
    mapRef.current?.flyTo({
      center: INITIAL_CENTER,
      zoom: INITIAL_ZOOM,
    });
  }, [mapRef]);

  useEffect(() => {
    getIso({ time, transitMode }).then((data) => {
      const source = mapRef.current?.getSource('iso');
      if (source && 'setData' in source) {
        (source as any).setData(data);
      }
    });
  }, [time, transitMode]);

  return (
    <>
      <div className={styles.sidebar}>
        Longitude: {center[0].toFixed(4)} | Latitude: {center[1].toFixed(4)} | Zoom: {zoom.toFixed(2)}
      </div>
      <button onClick={handleReset} className={styles.resetButton}>Reset</button>
      <div id="map-root" ref={mapRootRef} className={styles.map} />
    </>
  );
}; 
