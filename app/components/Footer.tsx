import Link from 'next/link'
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">O nas</h3>
            <p className="text-gray-400">
              Jesteśmy zespołem ekspertów tworzących innowacyjne rozwiązania cyfrowe dla Twojego biznesu.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Szybkie linki</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-400 hover:text-white transition-colors">Strona główna</Link></li>
              <li><Link href="/uslugi" className="text-gray-400 hover:text-white transition-colors">Usługi</Link></li>
              <li><Link href="/portfolio" className="text-gray-400 hover:text-white transition-colors">Portfolio</Link></li>
              <li><Link href="/o-nas" className="text-gray-400 hover:text-white transition-colors">O nas</Link></li>
              <li><Link href="/kontakt" className="text-gray-400 hover:text-white transition-colors">Kontakt</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Kontakt</h3>
            <p className="text-gray-400">Email: kontakt@twojafirma.pl</p>
            <p className="text-gray-400">Tel: +48 123 456 789</p>
            <p className="text-gray-400">Adres: ul. Przykładowa 1, 00-000 Warszawa</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Śledź nas</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={24} />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Twoja Firma. Wszelkie prawa zastrzeżone.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

