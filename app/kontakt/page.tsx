'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { Phone, Mail, MapPin } from 'lucide-react'

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (value: string) => {
    setFormData(prev => ({ ...prev, subject: value }))
  }

  return (
    <div className="bg-gradient-to-br from-purple-50 to-indigo-50 min-h-screen py-16">
      <div className="container mx-auto px-4">
        <motion.h1 
          className="text-4xl font-bold text-center mb-12 text-purple-800"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Skontaktuj się z nami
        </motion.h1>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <form 
              action="https://formspree.io/f/mjkvnrbz"
              method="POST"
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <div className="space-y-4">
                <div>
                  <Label htmlFor="name">Imię i Nazwisko</Label>
                  <Input 
                    id="name" 
                    name="name" 
                    value={formData.name} 
                    onChange={handleChange} 
                    required 
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input 
                    id="email" 
                    name="email" 
                    type="email" 
                    value={formData.email} 
                    onChange={handleChange} 
                    required 
                  />
                </div>
                <div>
                  <Label htmlFor="phone">Numer telefonu (opcjonalnie)</Label>
                  <Input 
                    id="phone" 
                    name="phone" 
                    type="tel" 
                    value={formData.phone} 
                    onChange={handleChange} 
                  />
                </div>
                <div>
                  <Label htmlFor="subject">Czego dotyczy zgłoszenie?</Label>
                  <Select onValueChange={handleSelectChange} name="subject">
                    <SelectTrigger>
                      <SelectValue placeholder="Wybierz temat" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="sklep-shopify">Sklep Shopify</SelectItem>
                      <SelectItem value="strona-www">Strona WWW</SelectItem>
                      <SelectItem value="kampania-reklamowa">Kampania reklamowa</SelectItem>
                      <SelectItem value="e-commerce">E-commerce</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="message">Treść wiadomości</Label>
                  <Textarea 
                    id="message" 
                    name="message" 
                    value={formData.message} 
                    onChange={handleChange} 
                    required 
                    className="h-32"
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full bg-purple-600 hover:bg-purple-700 text-white transition-colors duration-300"
                >
                  Wyślij wiadomość
                </Button>
              </div>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-white p-8 rounded-lg shadow-lg"
          >
            <h2 className="text-2xl font-semibold mb-6 text-purple-800">Dane kontaktowe</h2>
            <div className="space-y-4">
              <div className="flex items-center">
                <Phone className="w-6 h-6 text-purple-600 mr-4" />
                <p>792 828 884</p>
              </div>
              <div className="flex items-center">
                <Mail className="w-6 h-6 text-purple-600 mr-4" />
                <p>creativefront.projects@gmail.com</p>
              </div>
              <div className="flex items-start">
                <MapPin className="w-6 h-6 text-purple-600 mr-4 mt-1" />
                <p>Igor Pieczyński<br />Specjalista ds. rozwiązań webowych</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

