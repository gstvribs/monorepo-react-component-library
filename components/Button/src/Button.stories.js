import { action } from '@storybook/addon-actions';
import { withKnobs } from '@storybook/addon-knobs';
import Button from '@thedesignsystem/button';

export default {
  title: 'Button',
  component: Button,
  decorators: [withKnobs],
};

export const default = () => ({
  component: Button,
  props: {
    onClick: action('button-click'),
  },
});
