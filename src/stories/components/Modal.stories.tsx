import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Modal } from '../../components/Modal';

export default {
  title: 'UI/Modal',
  component: Modal,
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = args => <Modal {...args} />;

export const Ligth = Template.bind({});
Ligth.args = {
  color: 'ligth',
  description:
    'I am a fullstack software developer with ReactJS for frontend and NodeJS for backend',
  imageSrc: 'https://i.pravatar.cc/150?img=32',
  title: 'Viktoria Listunova',
  linkName: 'Hire me',
};

export const Dark = Template.bind({});
Dark.args = {
  color: 'dark',
  description:
    'I am a fullstack software developer with ReactJS for frontend and NodeJS for backend',
  imageSrc: 'https://i.pravatar.cc/150?img=32',
  title: 'Viktoria Listunova',
  linkName: 'Hire me',
};
