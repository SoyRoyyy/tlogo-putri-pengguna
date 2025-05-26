// import '../../styles/globals.css';
// import { Inter } from 'next/font/google';
// import { metadata } from './metadata';

// const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

// export default function RootLayout({ children }) {
//   return (
//     <html lang="id">
//       <head>
//         <meta name="description" content={metadata.description} />
//         <title>{metadata.title}</title>
//       </head>
//       <body className={`${inter.variable} font-sans antialiased bg-white text-gray-800`}>
//         {children}
//       </body>
//     </html>
//   );
// }


import '../../styles/globals.css';
import { Inter } from 'next/font/google';
import { metadata } from './metadata';
import Script from 'next/script'; 

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <head>
        <meta name="description" content={metadata.description} />
        <title>{metadata.title}</title>
        <Script
          src="https://app.sandbox.midtrans.com/snap/snap.js"
          data-client-key={process.env.NEXT_PUBLIC_MIDTRANS_CLIENT_KEY}
          strategy="afterInteractive"
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased bg-white text-gray-800`}>
        {children}
      </body>
    </html>
  );
}
