import type { Meta, StoryObj } from '@storybook/react';

import HeaderMobile from './HeaderMobile';

const meta: Meta<typeof HeaderMobile> = {
  component: HeaderMobile,
};

export default meta;
type Story = StoryObj<typeof HeaderMobile>;

export const MobileHeader: Story = {
  args: {
    topbarLeft: 'Free shipping for all orders of $150+',
    logo: 'Junaid',
    navbar: ['Home', 'Shop', 'blog', 'Contact'],
  },
  
};