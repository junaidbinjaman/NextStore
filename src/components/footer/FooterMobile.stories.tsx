import type { Meta, StoryObj } from '@storybook/react';
import { FaFacebookF } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';

import FooterMobile from './FooterMobile';

const meta: Meta<typeof FooterMobile> = {
  component: FooterMobile,
};

export default meta;
type Story = StoryObj<typeof FooterMobile>;

export const FirstStory: Story = {
  args: {
    logo: 'Logo',
    phone: '+880 1705294083',
    email: 'me@junaidbinjaman.com',
    address: '3891 Ranchview Dr. Richardson, California 62639',
    metaTitle: 'Subscribe',
    description:
      'Enter your email below to be the first to know about new collections and product launches.',
    copyright: '©2024 junaid All Rights are reserved️',
    footerIcons: [
      <FaFacebookF key={''} />,
      <FaInstagram key={''} />,
      <FaTwitter key={''} />,
    ],
  },
};
