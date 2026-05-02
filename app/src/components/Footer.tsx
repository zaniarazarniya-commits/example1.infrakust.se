import { Link } from 'react-router-dom'
import { Anchor, Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-lysekil-deepblue text-lysekil-sand/80">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Anchor className="w-6 h-6 text-lysekil-ocean" />
              <span className="font-serif text-xl font-semibold text-lysekil-sand">Fjällbacka Fastigheter</span>
            </div>
            <p className="font-sans text-sm leading-relaxed text-lysekil-sand/60 max-w-xs">
              Din lokala fastighetsägare med fokus på långsiktig förvaltning och trivsel i hjärtat av Fjällbacka.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="font-serif text-lg text-lysekil-sand">Snabblänkar</h4>
            <div className="flex flex-col gap-2">
              <Link to="/" className="font-sans text-sm text-lysekil-sand/60 hover:text-lysekil-sand transition-colors flex items-center gap-1 group">
                Hem <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
              <Link to="/kontakt" className="font-sans text-sm text-lysekil-sand/60 hover:text-lysekil-sand transition-colors flex items-center gap-1 group">
                Kontakt & Felanmälan <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-serif text-lg text-lysekil-sand">Kontakt</h4>
            <div className="flex flex-col gap-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 text-lysekil-ocean shrink-0" />
                <span className="font-sans text-sm text-lysekil-sand/60">Storgatan 15, 457 40 Fjällbacka</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-lysekil-ocean shrink-0" />
                <span className="font-sans text-sm text-lysekil-sand/60">0523-XX XX XX</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-lysekil-ocean shrink-0" />
                <span className="font-sans text-sm text-lysekil-sand/60">info@lysekil-fastigheter.se</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="font-sans text-xs text-lysekil-sand/40">© 2025 Fjällbacka Fastigheter. Alla rättigheter reserverade.</p>
          <p className="font-sans text-xs text-lysekil-sand/40">Integritetspolicy</p>
        </div>
      </div>
    </footer>
  )
}
