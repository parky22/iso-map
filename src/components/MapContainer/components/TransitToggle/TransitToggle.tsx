import { Toggle } from '@base-ui-components/react/toggle';
import { ToggleGroup } from '@base-ui-components/react/toggle-group';

import type { TransitMode } from '../../MapContainer.types';

interface TransitToggleProps {
  onChange: (mode: TransitMode) => void;
}

export const TransitToggle = ({ onChange }: TransitToggleProps) => {
  const toggleValue = (groupValue: TransitMode[], _event: Event) => {
    const selectedMode = groupValue[0];
    onChange(selectedMode);
  };

  return (
    <ToggleGroup defaultValue={['walk']} onValueChange={toggleValue}>
      <Toggle aria-label="Walk" value="walk">Walk</Toggle>
      <Toggle aria-label="Bike" value="bike">Bike</Toggle>
      <Toggle aria-label="Drive" value="drive">Drive</Toggle>
    </ToggleGroup>
  );
};
