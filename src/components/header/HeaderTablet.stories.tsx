import type { Meta, StoryObj } from '@storybook/react';

import HeaderTablet from './HeaderTablet';

const meta: Meta<typeof HeaderTablet> = {
  component: HeaderTablet,
};

export default meta;
type Story = StoryObj<typeof HeaderTablet>;

export const TabletHeader: Story = {
  args: {
    topbarLeft: 'Free shipping for all orders of $150+',
    topbarRight1: 'Mon - Fri 8:00 - 18:00 / Sunday 8:00 - 14:00',
    logo: 'Junaid',
    navbar: ['Home', 'Shop', 'blog', 'Contact'],
    cartHandler: () => console.log('hello, World'),
    accountHandler: () => console.log('hello, World')
  },
  
};