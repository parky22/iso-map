import { Slider } from "@base-ui-components/react/slider";

import styles from "./TimeSlider.module.css";

interface TimeSliderProps {
  onChange: (time: number) => void;
}

export const TimeSlider = ({ onChange }: TimeSliderProps) => {
  return (
    <Slider.Root
      className={styles.slider}
      defaultValue={10}
      onValueChange={onChange}
    >
      <Slider.Control className={styles.control}>
        <Slider.Track className={styles.track}>
          <Slider.Indicator className={styles.indicator} />
          <Slider.Thumb className={styles.thumb} />
        </Slider.Track>
      </Slider.Control>
    </Slider.Root>
  );
};
