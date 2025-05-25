import { Toggle } from '@base-ui-components/react/toggle';
import { ToggleGroup } from '@base-ui-components/react/toggle-group';

export const TransitToggle = () => {
  return (
    <ToggleGroup defaultValue={['walk']}>
      <Toggle aria-label="Walk" value="walk">Walk</Toggle>
      <Toggle aria-label="Bike" value="bike">Bike</Toggle>
      <Toggle aria-label="Drive" value="drive">Drive</Toggle>
    </ToggleGroup>
  );
};
