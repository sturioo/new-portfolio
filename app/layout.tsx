import './globals.css'
import { Inter } from 'next/font/google'
import Header from './components/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Twoja Firma - Innowacyjne Rozwiązania Cyfrowe',
  description: 'Tworzymy nowoczesne strony internetowe i rozwiązania e-commerce dla Twojego biznesu.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pl">
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <Header />
        <main className="flex-grow pt-28"> {/* Adjusted padding-top to be smaller and consistent */}
          {children}
        </main>
      </body>
    </html>
  )
}

