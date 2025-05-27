import { useState } from "react";
import { Map, TimeSlider, TransitToggle } from "./components";
import type { TransitMode } from "./MapContainer.types";

export const MapContainer = () => {
  const [transitMode, setTransitMode] = useState<TransitMode>('walk');

  const handleTransitModeChange = (mode: TransitMode) => {
    setTransitMode(mode);
  };

  return <>
    <TransitToggle onChange={handleTransitModeChange} />
    <TimeSlider />
    <Map transitMode={transitMode} />
  </>;
};
