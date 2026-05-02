import { useState } from 'react'
import { motion } from 'framer-motion'
import { DoorOpen, Maximize, MapPin, ArrowRight, X, ChevronLeft, ChevronRight, Clock, Banknote } from 'lucide-react'

interface VacantUnit {
  id: number
  title: string
  address: string
  type: string
  area: string
  rooms: string
  rent: string
  available: string
  image: string
  gallery: string[]
  description: string
  features: string[]
}

const vacantUnits: VacantUnit[] = [
  {
    id: 1,
    title: 'Ljus lägenhet med havsutsikt',
    address: 'Storgatan 8, lgh 1203, Fjällbacka',
    type: '2 rok',
    area: '58 m²',
    rooms: '2 rum + kök',
    rent: '12 500 kr/mån',
    available: 'Omgående',
    image: '/vacant-1.jpg',
    gallery: ['/vacant-1.jpg', '/property-4.jpg', '/property-1.jpg'],
    description: 'Välplanerad tvåa på övre plan i Hamnhuset med sjöutsikt från vardagsrummets panoramafönster. Ekparkett, nyrenoverat kök med diskmaskin, badrum med golvvärme. Tillgång till gemensam tvättstuga och cykelförråd.',
    features: ['Havsutsikt', 'Balkong', 'Golvvärme', 'Ekparkett', 'Hiss', 'Cykelrum'],
  },
  {
    id: 2,
    title: 'Butikslokal i hamnkvarteret',
    address: 'Badhusgatan 3, Fjällbacka',
    type: 'Lokal',
    area: '45 m²',
    rooms: 'Öppen yta',
    rent: '8 000 kr/mån',
    available: '1 juni 2025',
    image: '/vacant-2.jpg',
    gallery: ['/vacant-2.jpg', '/property-5.jpg'],
    description: 'Perfekt butikslokal med stora fönster mot kajpromenaden. Här passerar sommarturisterna på väg mot färjeläget. Nyrenoverat golv, spotlights och egen ingång direkt från trottoaren. Passar butik, café eller kontor.',
    features: ['Stora fönster', 'Gatuläge', 'Färdig el', 'Vatten/avlopp', 'Lagringsutrymme'],
  },
]

export default function VacantObjects() {
  const [selected, setSelected] = useState<VacantUnit | null>(null)
  const [galleryIndex, setGalleryIndex] = useState(0)

  const openModal = (unit: VacantUnit) => {
    setSelected(unit)
    setGalleryIndex(0)
    document.body.style.overflow = 'hidden'
  }

  const closeModal = () => {
    setSelected(null)
    document.body.style.overflow = 'auto'
  }

  const nextImage = () => {
    if (!selected) return
    setGalleryIndex((prev) => (prev + 1) % selected.gallery.length)
  }

  const prevImage = () => {
    if (!selected) return
    setGalleryIndex((prev) => (prev - 1 + selected.gallery.length) % selected.gallery.length)
  }

  return (
    <section id="lediga" className="py-24 md:py-32 bg-lysekil-lightsand">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <DoorOpen className="w-5 h-5 text-lysekil-ocean" />
            <span className="font-sans text-sm tracking-[0.2em] uppercase text-lysekil-granite">
              Just nu
            </span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl text-lysekil-deepblue mb-4">
            Lediga objekt
          </h2>
          <p className="font-sans text-lysekil-granite max-w-2xl mx-auto leading-relaxed">
            Här ser du våra aktuella lediga lägenheter och lokaler. Klicka på ett objekt för
            fler bilder och detaljerad information.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {vacantUnits.map((unit, i) => (
            <motion.div
              key={unit.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              onClick={() => openModal(unit)}
              className="group cursor-pointer bg-white rounded-sm overflow-hidden shadow-xs hover:shadow-coastal transition-all duration-500"
            >
              <div className="relative h-56 overflow-hidden">
                <img src={unit.image} alt={unit.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-lysekil-deepblue/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="font-sans text-xs font-medium px-2.5 py-1 bg-lysekil-ocean/10 text-lysekil-ocean rounded-sm">{unit.type}</span>
                  <span className="font-sans text-xs font-medium px-2.5 py-1 bg-emerald-500/10 text-emerald-600 rounded-sm">Ledig</span>
                </div>
                <h3 className="font-serif text-xl text-lysekil-deepblue mb-2 group-hover:text-lysekil-ocean transition-colors">
                  {unit.title}
                </h3>
                <p className="font-sans text-sm text-lysekil-granite mb-4 flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5" /> {unit.address}</p>
                <div className="flex items-center gap-6 mb-5">
                  <span className="flex items-center gap-1.5 text-lysekil-stone"><Maximize className="w-4 h-4" /><span className="font-sans text-sm">{unit.area}</span></span>
                  <span className="flex items-center gap-1.5"><Banknote className="w-4 h-4" /><span className="font-sans text-sm font-medium text-lysekil-deepblue">{unit.rent}</span></span>
                  <span className="flex items-center gap-1.5 text-lysekil-stone"><Clock className="w-4 h-4" /><span className="font-sans text-sm">{unit.available}</span></span>
                </div>
                <div className="flex items-center gap-2 text-lysekil-ocean font-sans text-sm font-medium group-hover:gap-3 transition-all">
                  Visa detaljer <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {selected && (
        <div className="fixed inset-0 z-[60] bg-lysekil-deepblue/95 backdrop-blur-sm flex items-center justify-center p-4 md:p-8 animate-fade-in" onClick={closeModal}>
          <div className="bg-white w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-sm shadow-coastal-lg" onClick={(e) => e.stopPropagation()}>
            <div className="relative h-[40vh] bg-lysekil-lightsand">
              <img src={selected.gallery[galleryIndex]} alt={selected.title} className="w-full h-full object-cover" />
              {selected.gallery.length > 1 && (
                <>
                  <button onClick={prevImage} className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center"><ChevronLeft className="w-5 h-5 text-lysekil-deepblue" /></button>
                  <button onClick={nextImage} className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center"><ChevronRight className="w-5 h-5 text-lysekil-deepblue" /></button>
                  <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
                    {selected.gallery.map((_, i) => (
                      <button key={i} onClick={() => setGalleryIndex(i)} className={`w-2 h-2 rounded-full ${i === galleryIndex ? 'bg-white' : 'bg-white/50'}`} />
                    ))}
                  </div>
                </>
              )}
              <button onClick={closeModal} className="absolute top-3 right-3 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center"><X className="w-5 h-5 text-lysekil-deepblue" /></button>
            </div>

            <div className="p-8 md:p-10">
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="font-sans text-xs font-medium px-3 py-1.5 bg-lysekil-ocean/10 text-lysekil-ocean rounded-sm">{selected.type}</span>
                <span className="font-sans text-xs font-medium px-3 py-1.5 bg-emerald-500/10 text-emerald-600 rounded-sm">Ledig</span>
              </div>
              <h3 className="font-serif text-2xl md:text-3xl text-lysekil-deepblue mb-2">{selected.title}</h3>
              <p className="font-sans text-sm text-lysekil-granite mb-6 flex items-center gap-1.5"><MapPin className="w-4 h-4" />{selected.address}</p>

              <div className="grid grid-cols-3 gap-4 mb-8 border-t border-b border-lysekil-lightsand py-5">
                <div><p className="font-sans text-xs text-lysekil-stone uppercase mb-1">Storlek</p><p className="font-serif text-lg text-lysekil-deepblue">{selected.area}</p></div>
                <div><p className="font-sans text-xs text-lysekil-stone uppercase mb-1">Hyra</p><p className="font-serif text-lg text-lysekil-deepblue">{selected.rent}</p></div>
                <div><p className="font-sans text-xs text-lysekil-stone uppercase mb-1">Tillgänglig</p><p className="font-serif text-lg text-lysekil-deepblue">{selected.available}</p></div>
              </div>

              <p className="font-sans text-sm text-lysekil-granite leading-relaxed mb-6">{selected.description}</p>
              <div className="mb-6">
                <p className="font-sans text-sm font-medium text-lysekil-deepblue mb-3">Egenskaper</p>
                <div className="flex flex-wrap gap-2">
                  {selected.features.map((f) => <span key={f} className="font-sans text-sm px-3 py-1.5 bg-lysekil-sand text-lysekil-granite rounded-sm">{f}</span>)}
                </div>
              </div>
              <button className="inline-flex items-center gap-2 bg-lysekil-deepblue text-white font-sans text-sm font-medium px-8 py-3.5 rounded-sm hover:bg-lysekil-ocean transition-colors">
                Anmäl intresse <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
