'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Button, ButtonProps } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

// Dane projektów
const projects = [
  {
    id: 1,
    title: "TechGear Shop",
    category: "Sklepy Shopify",
    image: "/portfolio/techgear.jpg",
    description: "Nowoczesny sklep Shopify z zaawansowanymi funkcjami filtrowania i personalizacji produktów.",
    link: "#"
  },
  {
    id: 2,
    title: "EcoLife",
    category: "Strony WWW",
    image: "/portfolio/ecolife.jpg",
    description: "Responsywna strona internetowa dla firmy zajmującej się ekologicznymi produktami.",
    link: "#"
  },
  {
    id: 3,
    title: "Fashionista",
    category: "Sklepy Shopify",
    image: "/portfolio/fashionista.jpg",
    description: "Ekskluzywny butik online z zaawansowanym systemem rekomendacji produktów.",
    link: "#"
  },
  {
    id: 4,
    title: "TechCorp",
    category: "Strony WWW",
    image: "/portfolio/techcorp.jpg",
    description: "Korporacyjna strona internetowa z interaktywną prezentacją usług i case studies.",
    link: "#"
  },
  {
    id: 5,
    title: "GourmetMarket",
    category: "Sklepy Shopify",
    image: "/portfolio/gourmetmarket.jpg",
    description: "Sklep Shopify specjalizujący się w produktach spożywczych premium z całego świata.",
    link: "#"
  },
  {
    id: 6,
    title: "FitnessPro",
    category: "Strony WWW",
    image: "/portfolio/fitnesspro.jpg",
    description: "Dynamiczna strona dla studia fitness z systemem rezerwacji online i blogiem.",
    link: "#"
  }
]

const PortfolioButton: React.FC<ButtonProps> = ({ children, ...props }) => (
  <Button
    {...props}
    className={`px-6 py-2 rounded-full transition-all duration-300 ${
      props.variant === 'default'
        ? 'bg-purple-600 hover:bg-purple-700 text-white'
        : 'bg-white hover:bg-purple-100 text-purple-600 hover:text-purple-700 border border-purple-600'
    }`}
  >
    {children}
  </Button>
)

export default function Portfolio() {
  const [filter, setFilter] = useState("Wszystkie")

  const filteredProjects = filter === "Wszystkie" 
    ? projects 
    : projects.filter(project => project.category === filter)

  return (
    <div className="bg-gray-50 min-h-screen py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12 text-purple-800">Nasze Portfolio</h1>
        
        {/* Filtry */}
        <div className="flex justify-center space-x-4 mb-12">
          {["Wszystkie", "Sklepy Shopify", "Strony WWW"].map((category) => (
            <PortfolioButton
              key={category}
              variant={filter === category ? "default" : "outline"}
              onClick={() => setFilter(category)}
            >
              {category}
            </PortfolioButton>
          ))}
        </div>

        {/* Kafelki projektów */}
        <AnimatePresence>
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            layout
          >
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Card className="overflow-hidden">
                  <div className="relative h-64">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <p className="text-sm text-gray-600 mb-4">{project.category}</p>
                    <p className="text-gray-700 mb-4">{project.description}</p>
                    <PortfolioButton variant="outline" asChild>
                      <a href={project.link} target="_blank" rel="noopener noreferrer">Zobacz projekt</a>
                    </PortfolioButton>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}

