import { motion } from 'framer-motion'
import { ChevronDown, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function HeroSection() {
  return (
    <section className="relative h-screen min-h-[700px] overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/hero-fjallbacka.jpg"
          alt="Fjällbacka hamn från ovan"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-lysekil-deepblue/60 via-lysekil-deepblue/30 to-lysekil-deepblue/70" />
      </div>

      <div className="relative z-10 h-full flex flex-col items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-3xl"
        >
          <p className="font-sans text-sm tracking-[0.3em] uppercase text-white/70 mb-6">
            Västkusten möter modern minimalism
          </p>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-medium text-white leading-[1.1] mb-6">
            Fjällbacka
            <br />
            <span className="italic font-normal">Fastigheter</span>
          </h1>
          <p className="font-sans text-lg md:text-xl text-white/80 max-w-xl mx-auto mb-10 leading-relaxed">
            Din lokala fastighetsägare sedan 1987. Vi förvaltar och utvecklar
            bostäder och lokaler med kusten som närmaste granne.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/#fastigheter"
              className="inline-flex items-center justify-center gap-2 bg-white text-lysekil-deepblue font-sans text-sm font-medium px-8 py-4 rounded-sm hover:bg-lysekil-sand transition-colors duration-300"
            >
              Se våra fastigheter
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/kontakt"
              className="inline-flex items-center justify-center gap-2 border border-white/40 text-white font-sans text-sm font-medium px-8 py-4 rounded-sm hover:bg-white/10 transition-colors duration-300"
            >
              Kontakt & felanmälan
            </Link>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <div className="flex flex-col items-center gap-2 text-white/50">
          <span className="font-sans text-xs tracking-widest uppercase">Scrolla</span>
          <ChevronDown className="w-5 h-5 animate-bounce" />
        </div>
      </motion.div>
    </section>
  )
}
