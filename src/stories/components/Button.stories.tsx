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

export const Primary = Template.bind({});
Primary.args = {
  color: 'primary',
};
export const Secondary = Template.bind({});
Secondary.args = {
  color: 'secondary',
};
export const Success = Template.bind({});
Success.args = {
  color: 'success',
};
export const Danger = Template.bind({});
Danger.args = {
  color: 'danger',
};
