import type { Meta, StoryObj } from '@storybook/react';

import Header from './Header';

const meta: Meta<typeof Header> = {
  component: Header,
};

export default meta;
type Story = StoryObj<typeof Header>;

export const DesktopHeader: Story = {
  args: {
    topbarLeft: 'Free shipping for all orders of $150+',
    topbarRight1: 'Mon - Fri 8:00 - 18:00 / Sunday 8:00 - 14:00',
    topbarRight2: '1- 800-458-85968',
    topbarRight3: '47 Bakery Street, London UK',
    logo: 'Junaid',
    navbar: [{label: 'Home', link: '/'}, {label: 'Shop', link: '/shop'}, {label: 'Blog', link: '/blog'}, {label: 'Contact Us', link: '/contact'}],
    cartHandler: () => console.log('hello, World'),
    accountHandler: () => console.log('hello, World')
  },
  
};