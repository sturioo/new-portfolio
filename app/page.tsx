import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const services = [
  { title: 'Sklepy Shopify', icon: '/icons/shopify.svg', description: 'Zwiększ sprzedaż online dzięki naszym niestandardowym, wysoko konwertującym sklepom Shopify.' },
  { title: 'Responsywne Strony', icon: '/icons/code.svg', description: 'Uzyskaj atrakcyjną, przyjazną dla urządzeń mobilnych stronę internetową, która odzwierciedla Twoją markę i angażuje odbiorców.' },
  { title: 'Marketing Cyfrowy', icon: '/icons/megaphone.svg', description: 'Dotrzyj do swojej grupy docelowej i rozwijaj swój biznes dzięki naszym strategiom marketingowym opartym na danych.' },
  { title: 'Integracje API', icon: '/icons/api.svg', description: 'Usprawnij swoje operacje dzięki bezproblemowej integracji między ulubionymi narzędziami i platformami.' },
  { title: 'Rozwiązania E-commerce', icon: '/icons/payment.svg', description: 'Zmaksymalizuj swój potencjał online dzięki naszym kompleksowym rozwiązaniom e-commerce i bramkom płatniczym.' },
]

const portfolioItems = [
  { title: 'Sklep TechGear', image: '/portfolio/techgear.jpg', category: 'E-commerce' },
  { title: 'Aplikacja FoodieFind', image: '/portfolio/foodiefind.jpg', category: 'Aplikacja Webowa' },
  { title: 'Strona EcoLife', image: '/portfolio/ecolife.jpg', category: 'Strona Korporacyjna' },
]

const testimonials = [
  { name: 'Jan Kowalski', role: 'CEO, TechCorp', content: 'Współpraca z tym zespołem zmieniła naszą obecność online. Nasza nowa strona znacznie zwiększyła zaangażowanie użytkowników i konwersje.' },
  { name: 'Anna Nowak', role: 'Założycielka, EcoStore', content: 'Sklep Shopify, który dla nas zbudowali, przekroczył nasze oczekiwania. Nasza sprzedaż wzrosła o 200% od momentu uruchomienia!' },
  { name: 'Michał Wiśniewski', role: 'Dyrektor Marketingu, FoodCo', content: 'Ich wiedza z zakresu marketingu cyfrowego pomogła nam dotrzeć do nowych odbiorców i rozwinąć naszą markę. Gorąco polecam!' },
]

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <main>
        <HeroSection />
        <ServicesSection />
        <BenefitsSection />
        <PortfolioSection />
        <TestimonialsSection />
        <CtaSection />
      </main>
    </div>
  )
}

function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 text-white min-h-screen flex items-center">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-white rounded-full opacity-10"
            style={{
              width: Math.random() * 300 + 50,
              height: Math.random() * 300 + 50,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, Math.random() * 100 - 50],
              scale: [1, Math.random() + 0.5],
              opacity: [0.1, Math.random() * 0.5],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Left column - Text content */}
          <div className="w-full md:w-1/2 space-y-8">
            <motion.h1
              className="text-3xl md:text-4xl lg:text-6xl font-bold leading-tight"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Przekształć Swoją <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                Cyfrową Obecność
              </span>
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl text-gray-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Tworzymy imponujące strony internetowe i rozwiązania e-commerce, które przynoszą rezultaty i rozwijają Twój biznes.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Link href="/portfolio" className="group relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-medium text-indigo-600 rounded-lg shadow-2xl bg-white w-full sm:w-auto">
                <span className="absolute inset-0 w-full h-full transition duration-300 ease-out opacity-0 bg-gradient-to-br from-pink-600 via-purple-700 to-blue-400 group-hover:opacity-100"></span>
                <span className="absolute top-0 left-0 w-full bg-gradient-to-b from-white to-transparent opacity-5 h-1/3"></span>
                <span className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-white to-transparent opacity-5"></span>
                <span className="absolute bottom-0 left-0 w-4 h-full bg-gradient-to-r from-white to-transparent opacity-5"></span>
                <span className="absolute bottom-0 right-0 w-4 h-full bg-gradient-to-l from-white to-transparent opacity-5"></span>
                <span className="absolute inset-0 w-full h-full border border-white rounded-lg opacity-10"></span>
                <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-5"></span>
                <span className="relative group-hover:text-white">Zobacz Nasze Prace</span>
              </Link>
              <Link href="/kontakt" className="group relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-medium text-white border-2 border-white rounded-lg hover:text-indigo-600 w-full sm:w-auto">
                <span className="absolute inset-0 w-full h-full transition duration-300 ease-out opacity-0 bg-white group-hover:opacity-100"></span>
                <span className="relative">Darmowa Konsultacja</span>
                <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </div>

          {/* Right column - Animated illustration */}
          <motion.div
            className="w-full md:w-1/2 h-[300px] md:h-[500px] relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Image
              src="/hero-illustration.svg"
              alt="Digital Transformation Illustration"
              fill
              className="object-contain"
            />
            {/* Floating elements */}
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-8 md:w-12 h-8 md:h-12 bg-white rounded-full opacity-20"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, Math.random() * 50 - 25],
                  scale: [1, Math.random() + 0.5],
                  opacity: [0.2, Math.random() * 0.5],
                }}
                transition={{
                  duration: Math.random() * 5 + 5,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function ServicesSection() {
  return (
    <section className="py-16 md:py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12 text-gray-800 dark:text-white">Nasze Usługi</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-100 dark:bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <Image src={service.icon} alt={service.title} width={48} height={48} className="mb-4" />
              <h3 className="text-lg md:text-xl font-semibold mb-2 text-gray-800 dark:text-white">{service.title}</h3>
              <p className="text-sm md:text-base text-gray-600 dark:text-gray-300">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function PortfolioSection() {
  return (
    <section className="py-16 md:py-20 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12 text-gray-800 dark:text-white">Nasze Ostatnie Prace</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {portfolioItems.map((item, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
              <Image src={item.image} alt={item.title} width={400} height={300} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-lg md:text-xl font-semibold mb-2 text-gray-800 dark:text-white">{item.title}</h3>
                <p className="text-sm md:text-base text-gray-600 dark:text-gray-300">{item.category}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-8 md:mt-12">
          <Link href="/portfolio" className="bg-purple-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-purple-500 transition duration-300 inline-block text-sm md:text-base">
            Zobacz Wszystkie Projekty
          </Link>
        </div>
      </div>
    </section>
  )
}

function TestimonialsSection() {
  return (
    <section className="py-16 md:py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12 text-gray-800 dark:text-white">Co Mówią Nasi Klienci</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-100 dark:bg-gray-700 p-6 rounded-lg shadow-md">
              <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 mb-4">"{testimonial.content}"</p>
              <div className="font-semibold text-gray-800 dark:text-white">{testimonial.name}</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">{testimonial.role}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function CtaSection() {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-br from-purple-600 via-purple-700 to-indigo-800 text-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-2xl md:text-4xl font-bold mb-4">Gotowy na Rozwój Swojego Biznesu?</h2>
            <p className="text-base md:text-xl mb-6 md:mb-8 text-purple-200">Stwórzmy razem strategię cyfrową, która przyniesie rezultaty.</p>
          </div>
          <div className="md:w-1/2 text-center md:text-right">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link href="/kontakt" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-purple-600 bg-white hover:bg-purple-50 transition duration-300">
                Zacznij Już Dziś
                <ArrowRight className="ml-2 -mr-1 w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

function BenefitsSection() {
  return (
    <section className="py-16 md:py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
          {/* Left side - Image composition */}
          <div className="w-full md:w-1/2">
            <div className="relative w-full h-[300px] md:h-[500px]">
              <Image
                src="/placeholder.svg"
                alt="Website mockups"
                fill
                className="object-contain"
                style={{ transform: 'perspective(1000px) rotateY(-15deg)' }}
              />
            </div>
          </div>

          {/* Right side - Content */}
          <div className="w-full md:w-1/2 space-y-6">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 dark:text-white">
              Co możesz zyskać?
            </h2>
            <h3 className="text-xl text-gray-600 dark:text-gray-300">
              Doświadczony zespół Ecommerce
            </h3>
            <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              Programiści, graficy, specjaliści od marketingu i e-commerce to właśnie my, Ecommerce. Jeśli wkraczasz w internetową dżunglę, to warto za przewodnika mieć kogoś, kto zna internet jak własną kieszeń! Oprócz know-how oferujemy najnowocześniejsze technologie, które pozwalają nam tworzyć{' '}
              <span className="font-semibold">
                jeszcze lepsze realizacje, szybciej i taniej
              </span>
              .
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/portfolio"
                  className="inline-flex px-6 py-3 rounded-full bg-[#872CAF] hover:bg-[#9f33cc] text-white font-medium transition-colors duration-200 w-full sm:w-auto justify-center"
                >
                  Nasze portfolio
                </Link>
              </motion.div>
              <Link
                href="/o-nas"
                className="inline-flex px-6 py-3 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium transition-colors duration-200 w-full sm:w-auto justify-center"
              >
                Więcej o nas
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

