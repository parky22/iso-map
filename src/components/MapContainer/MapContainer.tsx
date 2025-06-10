import { useState } from "react";
import { Map, TimeSlider, TransitToggle } from "./components";
import type { TransitMode } from "./MapContainer.types";
import styles from "./MapContainer.module.css";

export const MapContainer = () => {
  const [transitMode, setTransitMode] = useState<TransitMode>("walk");
  const [time, setTime] = useState<number>(10);

  const onTransitModeChange = (mode: TransitMode) => {
    setTransitMode(mode);
  };

  const onTimeChange = (time: number) => {
    setTime(time);
  };

  return (
    <>
      <TransitToggle onChange={onTransitModeChange} />
      <TimeSlider onChange={onTimeChange} />
      <div className={styles.map}>
        <Map time={time} transitMode={transitMode} />
      </div>
    </>
  );
};
