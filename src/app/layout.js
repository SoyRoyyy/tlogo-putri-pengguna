import '../../styles/globals.css';
import { Inter } from 'next/font/google';
import { metadata } from './metadata';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <head>
        <meta name="description" content={metadata.description} />
        <title>{metadata.title}</title>
      </head>
      <body className={`${inter.variable} font-sans antialiased bg-white text-gray-800`}>
        {children}
      </body>
    </html>
  );
}
