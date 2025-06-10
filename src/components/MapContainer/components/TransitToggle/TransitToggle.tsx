import { Toggle } from "@base-ui-components/react/toggle";
import { ToggleGroup } from "@base-ui-components/react/toggle-group";

import type { TransitMode } from "../../MapContainer.types";
import styles from "./TransitToggle.module.css";

interface TransitToggleProps {
  onChange: (mode: TransitMode) => void;
}

export const TransitToggle = ({ onChange }: TransitToggleProps) => {
  const toggleValue = (groupValue: TransitMode[], _event: Event) => {
    const selectedMode = groupValue[0];
    onChange(selectedMode);
  };

  return (
    <ToggleGroup
      defaultValue={["walk"]}
      onValueChange={toggleValue}
      className={styles.panel}
    >
      <Toggle aria-label="Walk" value="walk" className={styles.button}>
        Walk
      </Toggle>
      <Toggle aria-label="Bike" value="bike" className={styles.button}>
        Bike
      </Toggle>
      <Toggle aria-label="Drive" value="drive" className={styles.button}>
        Drive
      </Toggle>
    </ToggleGroup>
  );
};
