import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Button } from '../../components/Button';

export default {
  title: 'UI/Button',
  component: Button,
  argTypes: {
    color: { control: 'select' },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = args => <Button {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  color: 'primary',
  size: 'medium',
};
export const Secondary = Template.bind({});
Secondary.args = {
  color: 'secondary',
};
