import { Slider } from '@base-ui-components/react/slider';

import styles from './TimeSlider.module.css';

export const TimeSlider = () => {
  return (
    <Slider.Root className={styles.slider} defaultValue={10}>
      <Slider.Control className={styles.control}>
        <Slider.Track className={styles.track}>
          <Slider.Indicator className={styles.indicator} />
          <Slider.Thumb className={styles.thumb} />
        </Slider.Track>
      </Slider.Control>
    </Slider.Root>
  );
};
