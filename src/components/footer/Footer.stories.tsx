import type { Meta, StoryObj } from '@storybook/react';
import { FaFacebookF } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';

import Footer from './Footer';

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof Footer> = {
  component: Footer,
};

export default meta;
type Story = StoryObj<typeof Footer>;

export const FirstStory: Story = {
  args: {
    logo: 'Logo',
    phone: '+880 1705294083',
    email: 'me@junaidbinjaman.com',
    address: '3891 Ranchview Dr. Richardson, California 62639',
    navHeading: 'Information',
    footerNav: [
      { label: 'My Account', link: 'google.com' },
      { label: 'Login', link: 'google.com' },
      { label: 'My Cart', link: 'google.com' },
      { label: 'Checkout', link: 'google.com' },
    ],
    metaTitle: 'Subscribe',
    description:
      'Enter your email below to be the first to know about new collections and product launches.',
    label: 'Your email',
    type: 'text',
    id: 'footer-sign-up-input',
    paymentIcons: [
      {
        alt: 'Amex',
        src: 'https://junaidbinjaman.s3.ap-southeast-1.amazonaws.com/Amex.png',
      },
      {
        alt: 'Google Pay',
        src: 'https://junaidbinjaman.s3.ap-southeast-1.amazonaws.com/GooglePay.png',
      },
      {alt: 'Master Card', src: 'https://junaidbinjaman.s3.ap-southeast-1.amazonaws.com/Mastercard.png'},
      {alt: 'Paypal', src: 'https://junaidbinjaman.s3.ap-southeast-1.amazonaws.com/PayPal.png'},
      {alt: 'Visa', src: 'https://junaidbinjaman.s3.ap-southeast-1.amazonaws.com/Visa.png'},
    ],
    copyright: '©2024 junaid All Rights are reserved️',
    footerIcons: [
      <FaFacebookF key={''} />,
      <FaInstagram key={''} />,
      <FaTwitter key={''} />,
    ],
  },
};
