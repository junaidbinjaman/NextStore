import type { Meta, StoryObj } from '@storybook/react';

import Product from './Product';

const meta: Meta<typeof Product> = {
  component: Product,
};

export default meta;
type Story = StoryObj<typeof Product>;

export const FirstStory: Story = {
  args: {
    thumbnail: 'https://junaidbinjaman.s3.ap-southeast-1.amazonaws.com/wp-content/uploads/2024/02/25013223/392761229_775977410952964_5135833169818198710_n-1234x1536.jpg',
    isNew: true,
    discount: 120,
    category: 'How Cloth',
    title: 'New product is here for grab',
    totalRating: 32,
    avgRating: 3,
    regularPrice: 300,
    salePrice: 260
  },
};