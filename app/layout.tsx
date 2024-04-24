import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import EmojiParticle from '../components/emoji-particles';
import { GeistSans } from 'geist/font/sans';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Why you should hire me as your intern: Antimetal',
  description: 'Why you should hire me as your intern at Antimetal',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={GeistSans.className}>
        <EmojiParticle>{children}</EmojiParticle>
      </body>
    </html>
  );
}
