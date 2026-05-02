import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock, AlertTriangle, Anchor } from 'lucide-react'
import FaultReportForm from '../components/FaultReportForm'

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-lysekil-sand">
      <div className="bg-lysekil-deepblue pt-28 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="flex items-center gap-3 mb-4">
              <Anchor className="w-5 h-5 text-lysekil-ocean" />
              <span className="font-sans text-sm tracking-[0.2em] uppercase text-white/60">Kontakt</span>
            </div>
            <h1 className="font-serif text-4xl md:text-5xl text-white mb-4">Kontakt & Felanmälan</h1>
            <p className="font-sans text-white/70 max-w-xl leading-relaxed">
              Vi finns här för dig. Oavsett om du har en fråga, vill anmäla intresse för en lägenhet eller behöver göra en felanmälan.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="bg-red-50 border-b border-red-100">
        <div className="max-w-7xl mx-auto px-6 py-5">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center shrink-0">
              <AlertTriangle className="w-5 h-5 text-red-500" />
            </div>
            <div>
              <p className="font-sans text-sm font-semibold text-red-700">Akuta ärenden - Journummer</p>
              <p className="font-sans text-sm text-red-600">
                Vid akuta fel som läckage, elavbrott eller låsproblem: ring <span className="font-semibold">0523-XX XX XX</span> (dygnet runt).
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
          <div className="lg:col-span-2 space-y-10">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}>
              <h2 className="font-serif text-2xl text-lysekil-deepblue mb-6">Kontaktuppgifter</h2>
              <div className="space-y-4">
                {[
                  { icon: MapPin, label: 'Besöksadress', value: 'Storgatan 15, 457 40 Fjällbacka' },
                  { icon: Phone, label: 'Telefon', value: '0523-XX XX XX' },
                  { icon: Mail, label: 'E-post', value: 'info@fjallbacka-fastigheter.se' },
                  { icon: Clock, label: 'Öppettider', value: 'Måndag - Fredag: 08:00 - 16:00' },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-4 bg-white rounded-sm p-5 shadow-xs">
                    <div className="w-10 h-10 bg-lysekil-sand rounded-full flex items-center justify-center shrink-0">
                      <item.icon className="w-4 h-4 text-lysekil-ocean" />
                    </div>
                    <div>
                      <p className="font-sans text-sm font-medium text-lysekil-deepblue">{item.label}</p>
                      <p className="font-sans text-sm text-lysekil-granite">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
              <h2 className="font-serif text-2xl text-lysekil-deepblue mb-6">Hitta hit</h2>
              <div className="rounded-sm overflow-hidden shadow-xs border border-lysekil-lightsand">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2116.5!2d11.43!3d58.27!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46456e3c1d0b2b0b%3A0x7c8f8f8f8f8f8f8f!2sFjällbacka!5e0!3m2!1ssv!2sse!4v1234567890"
                  width="100%" height="300" style={{ border: 0 }} allowFullScreen loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade" title="Karta över Fjällbacka" className="grayscale-[20%]"
                />
              </div>
              <p className="font-sans text-xs text-lysekil-stone mt-3">
                Vårt kontor ligger på Hamnvägen 15, ett stenkast från hamnen i centrala Fjällbacka.
              </p>
            </motion.div>
          </div>

          <motion.div className="lg:col-span-3" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}>
            <div className="mb-6">
              <h2 className="font-serif text-2xl text-lysekil-deepblue mb-2">Felanmälan</h2>
              <p className="font-sans text-sm text-lysekil-granite">Fyll i formuläret steg för steg. Vi återkommer så snart som möjligt.</p>
            </div>
            <FaultReportForm />
          </motion.div>
        </div>
      </div>
    </div>
  )
}
