import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Card } from '../../components/Card';

export default {
  title: 'UI/Card',
  component: Card,
  argTypes: {
    link: { color: { control: 'select' } },
  },
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = args => <Card {...args} />;

export const Base = Template.bind({});
Base.args = {
  imageSrc: 'https://picsum.photos/200/300',
  text: `Some quick example text to build on the card title and make up the bulk of the card's content.`,
  title: 'Card title',
  link: {
    label: 'Go somewhere',
    href: '#',
    color: 'primary',
  },
};
