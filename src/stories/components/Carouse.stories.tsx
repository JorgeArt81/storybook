import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Carousel } from '../../components/Carousel';

export default {
  title: 'UI/Carousel',
  component: Carousel,
} as ComponentMeta<typeof Carousel>;

const Template: ComponentStory<typeof Carousel> = args => (
  <Carousel {...args} />
);

export const Base = Template.bind({});
Base.args = {
  images: [
    'https://cdn.pixabay.com/photo/2017/12/15/13/51/polynesia-3021072_1280.jpg',
    'https://cdn.pixabay.com/photo/2016/10/22/18/52/beach-1761410_1280.jpg',
    'https://cdn.pixabay.com/photo/2015/03/09/18/34/beach-666122_1280.jpg',
  ],
};
