'use client'

import { motion } from 'framer-motion'

const pricingPlans = [
  {
    name: 'Basic Package',
    price: '$999',
    features: [
      'Single page website',
      'Basic SEO optimization',
      'Mobile responsive design',
      '1 round of revisions',
      'Basic support (email only)',
    ],
    recommended: false,
  },
  {
    name: 'Standard Package',
    price: '$2,499',
    features: [
      'Up to 5 pages website',
      'Advanced SEO optimization',
      'Mobile responsive design',
      '3 rounds of revisions',
      'Priority support (email & phone)',
      'Basic e-commerce functionality',
    ],
    recommended: true,
  },
  {
    name: 'Premium Package',
    price: '$4,999',
    features: [
      'Up to 10 pages website',
      'Comprehensive SEO strategy',
      'Mobile responsive design',
      'Unlimited revisions',
      '24/7 priority support',
      'Advanced e-commerce functionality',
      'Custom animations and interactivity',
    ],
    recommended: false,
  },
]

export default function Pricing() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-16">
      <div className="container mx-auto px-4">
        <motion.h1 
          className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-[#872CAF] to-[#9f33cc] text-transparent bg-clip-text"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Our Pricing Plans
        </motion.h1>
        <div className="grid md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              className={`bg-white dark:bg-gray-700 rounded-lg shadow-md p-8 ${
                plan.recommended ? 'border-4 border-[#872CAF] scale-105' : ''
              }`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {plan.recommended && (
                <div className="bg-[#872CAF] text-white text-center py-1 px-4 rounded-full text-sm mb-4">
                  Recommended
                </div>
              )}
              <h2 className="text-2xl font-bold mb-4">{plan.name}</h2>
              <p className="text-4xl font-bold mb-6 bg-gradient-to-r from-[#872CAF] to-[#9f33cc] text-transparent bg-clip-text">
                {plan.price}
              </p>
              <ul className="mb-8 space-y-2">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center">
                    <svg
                      className="w-5 h-5 mr-2 text-green-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <motion.button
                className="w-full bg-[#872CAF] text-white py-2 rounded-full hover:bg-[#9f33cc] transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Select Plan
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

