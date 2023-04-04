import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Card } from '../../components/Card';

export default {
  title: 'UI/Card',
  component: Card,
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = args => <Card {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  backgroundImage:
    'https://img.freepik.com/free-photo/pasta-spaghetti-with-shrimps-sauce_1220-5072.jpg?w=2000&t=st=1678041911~exp=1678042511~hmac=e4aa55e70f8c231d4d23832a611004f86eeb3b6ca067b3fa0c374ac78fe7aba6',
  description:
    'Our shrimp sauce is made with mozarella, a creamy taste of shrimp with extra kick of spices.',
  price: 'MVR 800',
  title: 'Spagetti with shrimp sauce',
  linkA: {
    name: 'View on foodies',
    url: 'foodiesapp://food/1001',
  },
  linkB: {
    name: 'Download app',
    url: 'https://apps.apple.com/us/app/id1493631471',
  },
};
