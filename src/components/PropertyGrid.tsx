import { useState } from 'react'
import { motion } from 'framer-motion'
import { Home, Warehouse, Building2, Waves, ArrowRight, X, ChevronLeft, ChevronRight } from 'lucide-react'

interface Property {
  id: number
  name: string
  address: string
  type: 'bostad' | 'lokal' | 'villa'
  description: string
  image: string
  gallery: string[]
  specs: { label: string; value: string }[]
}

const properties: Property[] = [
  {
    id: 1,
    name: 'Hamnhuset',
    address: 'Storgatan 8, 457 40 Fjällbacka',
    type: 'bostad',
    description: 'Vitt sekelskifteshus med granitfundament och havsutsikt över Fjällbackas hamninlopp. Här bor du med båtplats som granne och morgonsol över vattnet.',
    image: '/property-1.jpg',
    gallery: ['/property-1.jpg', '/property-4.jpg', '/vacant-1.jpg'],
    specs: [
      { label: 'Byggår', value: '1923' },
      { label: 'Lägenheter', value: '12 st' },
      { label: 'Område', value: 'Hamnen' },
    ],
  },
  {
    id: 2,
    name: 'Skärgårdshuset',
    address: 'Västersidanvägen 42, 457 40 Fjällbacka',
    type: 'villa',
    description: 'Klassisk röd skärgårdsvilla på naturskön tomt med klippor och badvik. Ett av våra mest unika objekt med karaktär från förra sekelskiftet.',
    image: '/property-2.jpg',
    gallery: ['/property-2.jpg', '/vacant-1.jpg'],
    specs: [
      { label: 'Byggår', value: '1897' },
      { label: 'Boyta', value: '145 m²' },
      { label: 'Område', value: 'Västersidan' },
    ],
  },
  {
    id: 3,
    name: 'Kajkanten',
    address: 'Badhusgatan 3, 457 40 Fjällbacka',
    type: 'bostad',
    description: 'Modern nyproduktion med marina fasadmaterial och panoramafönster mot segelbåtarna i gästhamnen. Hiss, parkering och cykelförråd.',
    image: '/property-3.jpg',
    gallery: ['/property-3.jpg', '/property-4.jpg'],
    specs: [
      { label: 'Byggår', value: '2019' },
      { label: 'Lägenheter', value: '24 st' },
      { label: 'Område', value: 'Centrum' },
    ],
  },
  {
    id: 4,
    name: 'Strandpromenaden 12',
    address: 'Kungsklyftevägen 12, 457 40 Fjällbacka',
    type: 'lokal',
    description: 'Välkänd handelsfastighet i hjärtat av Fjällbackas turistkvarter. Renoverad fasad med granitdetaljer och stora skyltfönster.',
    image: '/property-5.jpg',
    gallery: ['/property-5.jpg', '/property-4.jpg'],
    specs: [
      { label: 'Byggår', value: '1910' },
      { label: 'Lokalyta', value: '320 m²' },
      { label: 'Område', value: 'Hamnen' },
    ],
  },
]

const typeConfig = {
  bostad: { icon: Home, label: 'Bostad', color: 'bg-lysekil-ocean/10 text-lysekil-ocean' },
  lokal: { icon: Warehouse, label: 'Lokal', color: 'bg-amber-500/10 text-amber-600' },
  villa: { icon: Building2, label: 'Villa', color: 'bg-emerald-500/10 text-emerald-600' },
}

export default function PropertyGrid() {
  const [selected, setSelected] = useState<Property | null>(null)
  const [galleryIndex, setGalleryIndex] = useState(0)

  const openModal = (property: Property) => {
    setSelected(property)
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
    <section id="fastigheter" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Waves className="w-5 h-5 text-lysekil-ocean" />
            <span className="font-sans text-sm tracking-[0.2em] uppercase text-lysekil-granite">
              Vårt bestånd
            </span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl text-lysekil-deepblue mb-4">
            Fastighetsportföljen
          </h2>
          <p className="font-sans text-lysekil-granite max-w-2xl mx-auto leading-relaxed">
            Varje fastighet har sin egen karaktär, från sekelskifteshus vid hamnen till moderna
            lägenheter med havsutsikt. Här är några av våra fastigheter i Fjällbacka.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {properties.map((property, i) => {
            const TypeIcon = typeConfig[property.type].icon
            const typeStyle = typeConfig[property.type].color
            return (
              <motion.div
                key={property.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                onClick={() => openModal(property)}
                className="group cursor-pointer bg-lysekil-sand rounded-sm overflow-hidden shadow-xs hover:shadow-coastal transition-all duration-500"
              >
                <div className="relative h-72 overflow-hidden">
                  <img
                    src={property.image}
                    alt={property.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-lysekil-deepblue/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute top-4 left-4">
                    <span className={`inline-flex items-center gap-1.5 font-sans text-xs font-medium px-3 py-1.5 rounded-full ${typeStyle}`}>
                      <TypeIcon className="w-3.5 h-3.5" />
                      {typeConfig[property.type].label}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-2xl text-lysekil-deepblue mb-1 group-hover:text-lysekil-ocean transition-colors">
                    {property.name}
                  </h3>
                  <p className="font-sans text-sm text-lysekil-granite mb-4">{property.address}</p>
                  <p className="font-sans text-sm text-lysekil-stone leading-relaxed line-clamp-2 mb-4">
                    {property.description}
                  </p>
                  <div className="flex items-center gap-2 text-lysekil-ocean font-sans text-sm font-medium group-hover:gap-3 transition-all">
                    Läs mer <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>

      {selected && (
        <div
          className="fixed inset-0 z-[60] bg-lysekil-deepblue/95 backdrop-blur-sm flex items-center justify-center p-4 md:p-8 animate-fade-in"
          onClick={closeModal}
        >
          <div
            className="bg-white w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-sm shadow-coastal-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-[45vh] md:h-[50vh] bg-lysekil-lightsand">
              <img src={selected.gallery[galleryIndex]} alt={selected.name} className="w-full h-full object-cover" />
              {selected.gallery.length > 1 && (
                <>
                  <button onClick={prevImage} className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center hover:bg-white"><ChevronLeft className="w-5 h-5 text-lysekil-deepblue" /></button>
                  <button onClick={nextImage} className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center hover:bg-white"><ChevronRight className="w-5 h-5 text-lysekil-deepblue" /></button>
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                    {selected.gallery.map((_, i) => (
                      <button key={i} onClick={() => setGalleryIndex(i)} className={`w-2 h-2 rounded-full ${i === galleryIndex ? 'bg-white' : 'bg-white/40'}`} />
                    ))}
                  </div>
                </>
              )}
              <button onClick={closeModal} className="absolute top-4 right-4 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center hover:bg-white"><X className="w-5 h-5 text-lysekil-deepblue" /></button>
            </div>

            <div className="p-8 md:p-12">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-8">
                <div>
                  <h3 className="font-serif text-3xl md:text-4xl text-lysekil-deepblue">{selected.name}</h3>
                  <p className="font-sans text-sm text-lysekil-granite">{selected.address}</p>
                </div>
                <span className={`inline-flex items-center gap-1.5 font-sans text-xs font-medium px-4 py-2 rounded-full ${typeConfig[selected.type].color}`}>
                  {(() => { const Icon = typeConfig[selected.type].icon; return <Icon className="w-3.5 h-3.5" /> })()}
                  {typeConfig[selected.type].label}
                </span>
              </div>
              <p className="font-sans text-sm text-lysekil-granite leading-relaxed mb-8 max-w-2xl">{selected.description}</p>
              <div className="grid grid-cols-3 gap-6 border-t border-lysekil-lightsand pt-8">
                {selected.specs.map((spec) => (
                  <div key={spec.label}>
                    <p className="font-sans text-xs text-lysekil-stone uppercase tracking-wider mb-1">{spec.label}</p>
                    <p className="font-serif text-lg text-lysekil-deepblue">{spec.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
