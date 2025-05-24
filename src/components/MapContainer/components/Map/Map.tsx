
import { INITIAL_CENTER, INITIAL_ZOOM } from './Map.constants';
import { useMap } from './Map.hooks';
import 'mapbox-gl/dist/mapbox-gl.css';
import styles from './Map.module.css';

export const Map = () => {
  const { mapRef, mapRootRef, center, zoom } = useMap();

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
