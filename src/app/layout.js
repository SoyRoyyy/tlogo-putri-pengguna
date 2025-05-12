import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata = {
  title: 'Tlogo Putri',
  description: 'Wisata pegunungan Tlogo Putri yang menyenangkan dan alami.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className={`${inter.variable} font-sans antialiased bg-white text-gray-800`}>
        {children}
      </body>
    </html>
  )
}
