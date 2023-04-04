import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Button } from '../../components/Button';
import { Alert } from '../../components/Alert';

export default {
  title: 'UI/Alert',
  component: Alert,
  argTypes: {
    backgroundColor: { control: 'select' },
  },
} as ComponentMeta<typeof Alert>;

const Template: ComponentStory<typeof Alert> = args => <Alert {...args} />;

export const Info = Template.bind({});
Info.args = {
  backgroundColor: 'blue',
  message: 'An info alert for showing message.',
};
export const Error = Template.bind({});
Error.args = {
  backgroundColor: 'red',
  message: 'An error alert for showing message.',
};
export const Success = Template.bind({});
Success.args = {
  backgroundColor: 'green',
  message: 'An success alert for showing message.',
};
export const Warning = Template.bind({});
Warning.args = {
  backgroundColor: 'orange',
  message: 'An warning alert for showing message.',
};
