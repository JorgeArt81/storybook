import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Alert } from '../../components/Alert';

export default {
  title: 'UI/Alert',
  component: Alert,
  argTypes: {
    color: { control: 'select' },
  },
} as ComponentMeta<typeof Alert>;

const Template: ComponentStory<typeof Alert> = args => <Alert {...args} />;

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
export const Warning = Template.bind({});
Warning.args = {
  color: 'warning',
};
export const Info = Template.bind({});
Info.args = {
  color: 'info',
};
export const Light = Template.bind({});
Light.args = {
  color: 'light',
};
export const Dark = Template.bind({});
Dark.args = {
  color: 'dark',
};
