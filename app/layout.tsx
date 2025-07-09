import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Satyam Sharma - Full Stack Developer',
  description: 'Portfolio of Satyam Sharma, a passionate full-stack developer building experiences that scale.',
  keywords: 'full stack developer, react, next.js, node.js, portfolio, web development',
  authors: [{ name: 'Satyam Sharma' }],
  openGraph: {
    title: 'Satyam Sharma - Full Stack Developer',
    description: 'Portfolio of Satyam Sharma, a passionate full-stack developer building experiences that scale.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-gray-900 text-white overflow-x-hidden`}>
        {children}
      </body>
    </html>
  );
}