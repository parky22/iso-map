import Map from './components/Map';
import TransitToggle from './components/TransitToggle';

export const MapContainer = () => {
  return <>
    <TransitToggle />
    <div>buttons for time</div>
    <Map />
  </>;
};
