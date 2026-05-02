import HeroSection from '../components/HeroSection'
import PropertyGrid from '../components/PropertyGrid'
import VacantObjects from '../components/VacantObjects'
import { motion } from 'framer-motion'
import { ArrowRight, Heart, Shield, TreePine } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function HomePage() {
  return (
    <div>
      <HeroSection />
      <PropertyGrid />
      <VacantObjects />

      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="font-sans text-sm tracking-[0.2em] uppercase text-lysekil-granite mb-4 block">
              Våra värderingar
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-lysekil-deepblue mb-4">
              Pålitlig förvaltning sedan 1987
            </h2>
            <p className="font-sans text-lysekil-granite max-w-2xl mx-auto leading-relaxed">
              Vi tror på långsiktiga relationer, transparent kommunikation och att våra
              fastigheter ska vara lika välskötta som vackra.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Heart, title: 'Lokal förankring', desc: 'Vi är födda och uppvuxna i Fjällbacka. Det här är inte bara vårt yrke - det är vårt hem.' },
              { icon: Shield, title: 'Trygghet i fokus', desc: 'Från akut jour till regelbundet underhåll. Ditt boende ska kännas säkert, alltid.' },
              { icon: TreePine, title: 'Hållbar utveckling', desc: 'Vi renoverar med respekt för historien och blickar mot framtiden. Hållbart, långsiktigt.' },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="text-center p-8"
              >
                <div className="w-14 h-14 bg-lysekil-sand rounded-full flex items-center justify-center mx-auto mb-5">
                  <item.icon className="w-6 h-6 text-lysekil-ocean" />
                </div>
                <h3 className="font-serif text-xl text-lysekil-deepblue mb-3">{item.title}</h3>
                <p className="font-sans text-sm text-lysekil-granite leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-lysekil-deepblue">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-serif text-3xl md:text-4xl text-white mb-4">
              Behöver du göra en felanmälan?
            </h2>
            <p className="font-sans text-white/70 mb-8 max-w-xl mx-auto">
              Vårt digitala formulär tar bara några minuter att fylla i.
              Vid akuta ärenden finns journumret alltid tillgängligt.
            </p>
            <Link
              to="/kontakt"
              className="inline-flex items-center gap-2 bg-white text-lysekil-deepblue font-sans text-sm font-medium px-8 py-4 rounded-sm hover:bg-lysekil-sand transition-colors"
            >
              Gå till felanmälan <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
