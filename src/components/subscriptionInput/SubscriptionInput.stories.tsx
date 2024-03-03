import type { Meta, StoryObj } from '@storybook/react';

import SubscriptionInput from './SubscriptionInput';

const meta: Meta<typeof SubscriptionInput> = {
  component: SubscriptionInput,
};

export default meta;
type Story = StoryObj<typeof SubscriptionInput>;

export const FirstStory: Story = {
  args: {
    color: 'white',
    backgroundColor: 'black',
    placeholder: 'Your Email'
  },
};