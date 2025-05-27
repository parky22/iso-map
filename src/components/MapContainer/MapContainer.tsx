import { useState } from "react";
import { Map, TimeSlider, TransitToggle } from "./components";
import type { TransitMode } from "./MapContainer.types";

export const MapContainer = () => {
  const [transitMode, setTransitMode] = useState<TransitMode>('walk');
  const [time, setTime] = useState<number>(10);

  const onTransitModeChange = (mode: TransitMode) => {
    setTransitMode(mode);
  };
  
  const onTimeChange = (time: number) => {
    setTime(time);
  };

  return <>
    <TransitToggle onChange={onTransitModeChange} />
    <TimeSlider onChange={onTimeChange} />
    <Map time={time} transitMode={transitMode} />
  </>;
};
