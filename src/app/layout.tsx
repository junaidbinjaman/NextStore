import type { Metadata } from 'next';
import { Inter, Ubuntu } from 'next/font/google';

import './globals.css';
import Header from '@/components/header/Header';
import Footer from '@/components/footer/Footer';
import { FaFacebookF } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';

// Correct usage: Remove the function calls
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

// Correct usage: Remove the function calls
const ubuntu = Ubuntu({
  weight: ['300', '400', '500', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-ubuntu',
});

export const metadata: Metadata = {
  title: 'NextStore',
  description: 'The best Next.js template for eCommerce stores',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${ubuntu.variable}`}>
        <header>
          <Header
            topbarLeft="Free shipping for all orders of $150+"
            topbarRight1="Mon - Fri 8:00 - 18:00 / Sunday 8:00 - 14:00"
            topbarRight2="1- 800-458-85968"
            topbarRight3="47 Bakery Street, London UK"
            logo="Logo"
            navbar={[
              { label: 'Home', link: '/' },
              { label: 'Shop', link: '/shop' },
              { label: 'Blog', link: '/blog' },
              { label: 'Contact', link: '/contact' },
            ]}
          />
        </header>
        {children}
        <footer>
          <Footer
            logo="Logo"
            phone="+880 1705294083"
            email="me@junaidbinjaman.com"
            address="3891 Ranchview Dr. Richardson, California 62639"
            navHeading="Information"
            footerNav={[
              { label: 'My Account', link: '/account' },
              { label: 'Login', link: '/account' },
              { label: 'My Cart', link: '/cart' },
              { label: 'Checkout', link: '/checkout' },
            ]}
            metaTitle="Subscribe"
            description="Enter your email below to be the first to know about new collections and product launches."
            paymentIcons={[
              {
                alt: 'Amex',
                src: '/payment-method/Amex.png',
              },
              {
                alt: 'Google Pay',
                src: '/payment-method/GooglePay.png',
              },
              {
                alt: 'Master Card',
                src: '/payment-method/Mastercard.png',
              },
              {
                alt: 'Paypal',
                src: '/payment-method/PayPal.png',
              },
              {
                alt: 'Visa',
                src: '/payment-method/Visa.png',
              },
            ]}
            copyright="©2024 junaid All Rights are reserved️"
            footerIcons={[
              <FaFacebookF key={''} />,
              <FaInstagram key={''} />,
              <FaTwitter key={''} />,
            ]}
          />
        </footer>
      </body>
    </html>
  );
}
