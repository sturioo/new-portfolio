'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function AboutUs() {
  return (
    <div className="bg-gray-50">
      {/* Kim jesteśmy section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-purple-100 to-indigo-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <motion.div 
              className="w-full md:w-1/2 mb-8 md:mb-0"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-purple-800">Kim jesteśmy?</h2>
              <p className="text-base md:text-lg text-gray-700 mb-6">
                Jesteśmy zespołem pasjonatów technologii i innowacji, którzy od 2015 roku tworzą wyjątkowe rozwiązania cyfrowe. 
                Nasza misja to przekształcanie wizji naszych klientów w rzeczywistość poprzez tworzenie nowoczesnych stron internetowych 
                i sklepów e-commerce.
              </p>
              <p className="text-base md:text-lg text-gray-700">
                Z naszym doświadczeniem i zaangażowaniem, pomagamy firmom każdej wielkości rozwijać się w świecie cyfrowym.
              </p>
            </motion.div>
            <motion.div 
              className="w-full md:w-1/2 mt-8 md:mt-0"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden shadow-2xl">
                <Image
                  src="/team-photo.jpg"
                  alt="Nasz zespół"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Co nas wyróżnia section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 md:mb-16 text-purple-800">Co nas wyróżnia?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {[
              { title: "Doświadczenie", icon: "/experience-icon.svg", description: "Ponad 8 lat doświadczenia w tworzeniu rozwiązań cyfrowych i setki zadowolonych klientów." },
              { title: "Innowacyjność", icon: "/innovation-icon.svg", description: "Własna platforma CMS i najnowsze technologie w służbie Twojego biznesu." },
              { title: "Wsparcie", icon: "/support-icon.svg", description: "Kompleksowa obsługa i wsparcie techniczne na każdym etapie współpracy." }
            ].map((item, index) => (
              <motion.div 
                key={index}
                className="bg-gradient-to-br from-purple-50 to-indigo-50 p-6 md:p-8 rounded-xl shadow-lg"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="h-24 md:h-32 relative mb-4 md:mb-6">
                  <Image
                    src={item.icon}
                    alt={`Ikona ${item.title}`}
                    fill
                    className="object-contain"
                  />
                </div>
                <h3 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4 text-purple-700">{item.title}</h3>
                <p className="text-sm md:text-base text-gray-600">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline section */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 md:mb-16 text-purple-800">
            Jak zmienialiśmy się na przestrzeni lat?
          </h2>
          <div className="max-w-4xl mx-auto">
            {[
              { year: "2015", title: "Zakładamy firmę", description: "i dołączamy do grona budowniczych wirtualnego świata. Był to początek trwającej do dziś przygody z projektowaniem bardziej funkcjonalnych sklepów i stron internetowych." },
              { year: "2018", title: "Startujemy z autorską platformą CMS: tak rodzi się Weblight", description: "rozwiązanie dzięki, któremu możemy tworzyć strony szybciej a także dające możliwość łatwej edycji treści naszym Klientom." },
              { year: "2020", title: "Trafiamy do TOP 3 największych agencji tworzących sklepy na Shoper", description: "i wprowadzamy rozbudowaną ofertę Weblight. Od tamtej pory stale zbieramy wiedzę i doświadczenie by realizować coraz lepiej nasze usługi." }
            ].map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative mb-12 md:mb-16"
              >
                <div className="flex flex-col md:flex-row items-start md:items-center">
                  <div className="md:w-1/4 mb-4 md:mb-0">
                    <span className="text-4xl md:text-6xl font-bold text-purple-600">{item.year}</span>
                  </div>
                  <div className="md:w-3/4 bg-white rounded-lg shadow-lg p-6">
                    <h3 className="text-lg md:text-xl font-semibold mb-2 text-purple-700">
                      {item.title}
                    </h3>
                    <p className="text-sm md:text-base text-gray-600">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Need help section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-purple-600 via-purple-700 to-indigo-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Potrzebujesz pomocy?</h2>
            <p className="text-lg md:text-xl mb-8">
              Skontaktuj się z nami, aby omówić Twój projekt. Pierwsze konsultacje są zawsze bezpłatne.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link 
                href="/kontakt"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent 
                         text-base md:text-lg font-medium rounded-md text-purple-600 bg-white hover:bg-purple-50 
                         transition duration-300"
              >
                Skontaktuj się z nami
                <ArrowRight className="ml-2 -mr-1 w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

