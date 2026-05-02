import { useState, useRef, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Droplets, Zap, Wrench, Thermometer, Lock, TreePine,
  ChevronRight, ChevronLeft, Check, Upload, X, AlertTriangle, Shield, Phone,
} from 'lucide-react'

const categories = [
  { id: 'vatten', label: 'Vatten & Avlopp', icon: Droplets, desc: 'Läckage, stopp, kran droppar' },
  { id: 'el', label: 'El & Belysning', icon: Zap, desc: 'Strömavbrott, trasiga uttag' },
  { id: 'varme', label: 'Värme & Ventilation', icon: Thermometer, desc: 'Element, fläkt, drag' },
  { id: 'las', label: 'Lås & Säkerhet', icon: Lock, desc: 'Dörr, lås, fönster' },
  { id: 'utomhus', label: 'Utomhus', icon: TreePine, desc: 'Trädgård, fasad, mark' },
  { id: 'ovrigt', label: 'Övrigt', icon: Wrench, desc: 'Golv, väggar, andra fel' },
]

const priorities = [
  { id: 'low', label: 'Låg', desc: 'Mindre störning, kan vänta', color: 'bg-slate-100 text-slate-600 border-slate-300', activeColor: 'bg-slate-600 text-white border-slate-600' },
  { id: 'normal', label: 'Normal', desc: 'Standardärende', color: 'bg-lysekil-ocean/10 text-lysekil-ocean border-lysekil-ocean/30', activeColor: 'bg-lysekil-ocean text-white border-lysekil-ocean' },
  { id: 'high', label: 'Akut', desc: 'Kräver omedelbar åtgärd', color: 'bg-red-50 text-red-600 border-red-300', activeColor: 'bg-red-500 text-white border-red-500' },
]

export default function FaultReportForm() {
  const [step, setStep] = useState(1)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [form, setForm] = useState({
    category: '', name: '', address: '', phone: '', email: '',
    description: '', images: [] as File[], priority: 'normal', consent: false,
  })
  const [dragActive, setDragActive] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)
  const totalSteps = 4

  const updateField = (field: string, value: any) => setForm((prev) => ({ ...prev, [field]: value }))

  const canProceed = () => {
    switch (step) {
      case 1: return !!form.category
      case 2: return form.name.trim() && form.address.trim() && form.phone.trim()
      case 3: return form.description.trim().length > 10
      case 4: return form.consent
      default: return false
    }
  }

  const handleDrag = useCallback((e: React.DragEvent) => {
    e.preventDefault(); e.stopPropagation()
    if (e.type === 'dragenter' || e.type === 'dragover') setDragActive(true)
    if (e.type === 'dragleave') setDragActive(false)
  }, [])

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault(); e.stopPropagation()
    setDragActive(false)
    const files = e.dataTransfer.files
    if (files?.length) {
      const newFiles = Array.from(files).slice(0, 5 - form.images.length)
      setForm((prev) => ({ ...prev, images: [...prev.images, ...newFiles].slice(0, 5) }))
    }
  }, [form.images.length])

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (files?.length) {
      const newFiles = Array.from(files).slice(0, 5 - form.images.length)
      setForm((prev) => ({ ...prev, images: [...prev.images, ...newFiles].slice(0, 5) }))
    }
  }

  const removeImage = (index: number) => setForm((prev) => ({ ...prev, images: prev.images.filter((_, i) => i !== index) }))

  const handleSubmit = () => setIsSubmitted(true)

  if (isSubmitted) {
    return (
      <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}
        className="bg-white rounded-sm shadow-coastal p-8 md:p-12 text-center">
        <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-6">
          <Check className="w-8 h-8 text-emerald-500" />
        </div>
        <h3 className="font-serif text-2xl text-lysekil-deepblue mb-3">Felanmälan mottagen</h3>
        <p className="font-sans text-lysekil-granite mb-2">Tack {form.name}. Din anmälan är registrerad med ärendenummer:</p>
        <p className="font-serif text-3xl text-lysekil-ocean mb-6">#FM-2025-0847</p>
        <p className="font-sans text-sm text-lysekil-stone mb-8 max-w-md mx-auto">Vi återkommer inom 24 timmar på {form.phone}. Vid akuta ärenden ringer vi omgående.</p>
        <div className="bg-lysekil-sand rounded-sm p-4 max-w-sm mx-auto text-left">
          <p className="font-sans text-xs text-lysekil-stone uppercase mb-1">Kategori</p>
          <p className="font-sans text-sm font-medium text-lysekil-deepblue mb-3">{categories.find((c) => c.id === form.category)?.label}</p>
          <p className="font-sans text-xs text-lysekil-stone uppercase mb-1">Prioritet</p>
          <p className="font-sans text-sm font-medium text-lysekil-deepblue">{priorities.find((p) => p.id === form.priority)?.label}</p>
        </div>
      </motion.div>
    )
  }

  return (
    <div className="bg-white rounded-sm shadow-coastal overflow-hidden">
      <div className="px-8 pt-8">
        <div className="flex items-center justify-between mb-3">
          <span className="font-sans text-xs text-lysekil-stone uppercase tracking-wider">Steg {step} av {totalSteps}</span>
          <span className="font-sans text-xs text-lysekil-stone">{Math.round((step / totalSteps) * 100)}%</span>
        </div>
        <div className="h-1 bg-lysekil-lightsand rounded-full overflow-hidden">
          <motion.div className="h-full bg-lysekil-ocean" initial={{ width: 0 }} animate={{ width: `${(step / totalSteps) * 100}%` }} transition={{ duration: 0.4, ease: 'easeOut' }} />
        </div>
      </div>

      <div className="px-8 md:px-10 py-8 min-h-[400px]">
        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div key="step1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.3 }}>
              <h3 className="font-serif text-2xl text-lysekil-deepblue mb-2">Vad gäller felet?</h3>
              <p className="font-sans text-sm text-lysekil-granite mb-8">Välj den kategori som bäst beskriver ditt ärende.</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {categories.map((cat) => {
                  const Icon = cat.icon
                  const isActive = form.category === cat.id
                  return (
                    <button key={cat.id} onClick={() => updateField('category', cat.id)}
                      className={`flex items-start gap-4 p-5 rounded-sm border-2 text-left transition-all ${isActive ? 'border-lysekil-ocean bg-lysekil-ocean/5 shadow-xs' : 'border-lysekil-lightsand hover:border-lysekil-ocean/30'}`}>
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-colors ${isActive ? 'bg-lysekil-ocean text-white' : 'bg-lysekil-sand text-lysekil-granite'}`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <p className={`font-sans text-sm font-medium ${isActive ? 'text-lysekil-ocean' : 'text-lysekil-deepblue'}`}>{cat.label}</p>
                        <p className="font-sans text-xs text-lysekil-stone">{cat.desc}</p>
                      </div>
                    </button>
                  )
                })}
              </div>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div key="step2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.3 }}>
              <h3 className="font-serif text-2xl text-lysekil-deepblue mb-2">Dina uppgifter</h3>
              <p className="font-sans text-sm text-lysekil-granite mb-8">Fyll i dina kontaktuppgifter så vi kan nå dig.</p>
              <div className="space-y-5 max-w-lg">
                <div>
                  <label className="font-sans text-sm font-medium text-lysekil-deepblue mb-1.5 block">Namn <span className="text-red-500">*</span></label>
                  <input type="text" value={form.name} onChange={(e) => updateField('name', e.target.value)} placeholder="Ditt för- och efternamn"
                    className="w-full px-4 py-3 bg-lysekil-sand border border-lysekil-lightsand rounded-sm font-sans text-sm placeholder:text-lysekil-stone focus:outline-none focus:border-lysekil-ocean focus:ring-1 focus:ring-lysekil-ocean" />
                </div>
                <div>
                  <label className="font-sans text-sm font-medium text-lysekil-deepblue mb-1.5 block">Adress / Lägenhetsnummer <span className="text-red-500">*</span></label>
                  <input type="text" value={form.address} onChange={(e) => updateField('address', e.target.value)} placeholder="Ex: Storgatan 12, lgh 1102"
                    className="w-full px-4 py-3 bg-lysekil-sand border border-lysekil-lightsand rounded-sm font-sans text-sm placeholder:text-lysekil-stone focus:outline-none focus:border-lysekil-ocean" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="font-sans text-sm font-medium text-lysekil-deepblue mb-1.5 block">Telefon <span className="text-red-500">*</span></label>
                    <input type="tel" value={form.phone} onChange={(e) => updateField('phone', e.target.value)} placeholder="07X-XXX XX XX"
                      className="w-full px-4 py-3 bg-lysekil-sand border border-lysekil-lightsand rounded-sm font-sans text-sm placeholder:text-lysekil-stone focus:outline-none focus:border-lysekil-ocean" />
                  </div>
                  <div>
                    <label className="font-sans text-sm font-medium text-lysekil-deepblue mb-1.5 block">E-post</label>
                    <input type="email" value={form.email} onChange={(e) => updateField('email', e.target.value)} placeholder="namn@exempel.se"
                      className="w-full px-4 py-3 bg-lysekil-sand border border-lysekil-lightsand rounded-sm font-sans text-sm placeholder:text-lysekil-stone focus:outline-none focus:border-lysekil-ocean" />
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div key="step3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.3 }}>
              <h3 className="font-serif text-2xl text-lysekil-deepblue mb-2">Beskriv felet</h3>
              <p className="font-sans text-sm text-lysekil-granite mb-8">Beskriv vad som hänt och ladda gärna upp bilder.</p>
              <div className="space-y-6">
                <div>
                  <label className="font-sans text-sm font-medium text-lysekil-deepblue mb-1.5 block">Beskrivning <span className="text-red-500">*</span></label>
                  <textarea value={form.description} onChange={(e) => updateField('description', e.target.value)} rows={5}
                    placeholder="Beskriv felet så detaljerat som möjligt - när upptäckte du det, var sitter det?"
                    className="w-full px-4 py-3 bg-lysekil-sand border border-lysekil-lightsand rounded-sm font-sans text-sm placeholder:text-lysekil-stone focus:outline-none focus:border-lysekil-ocean resize-none" />
                  <p className="font-sans text-xs text-lysekil-stone mt-1.5">Minst 10 tecken.</p>
                </div>

                <div>
                  <label className="font-sans text-sm font-medium text-lysekil-deepblue mb-1.5 block">Bilder (valfritt)</label>
                  <div onDragEnter={handleDrag} onDragLeave={handleDrag} onDragOver={handleDrag} onDrop={handleDrop} onClick={() => inputRef.current?.click()}
                    className={`border-2 border-dashed rounded-sm p-8 text-center cursor-pointer transition-all ${dragActive ? 'border-lysekil-ocean bg-lysekil-ocean/5' : 'border-lysekil-lightsand bg-lysekil-sand hover:border-lysekil-ocean/40'}`}>
                    <Upload className="w-8 h-8 text-lysekil-stone mx-auto mb-3" />
                    <p className="font-sans text-sm text-lysekil-granite">Dra bilder hit eller <span className="text-lysekil-ocean font-medium">klicka för att välja</span></p>
                    <p className="font-sans text-xs text-lysekil-stone mt-1">Max 5 bilder (JPG, PNG) • Max 5 MB per bild</p>
                    <input ref={inputRef} type="file" multiple accept="image/*" onChange={handleFileSelect} className="hidden" />
                  </div>
                  {form.images.length > 0 && (
                    <div className="flex flex-wrap gap-3 mt-4">
                      {form.images.map((file, i) => (
                        <div key={i} className="relative w-20 h-20 rounded-sm overflow-hidden group">
                          <img src={URL.createObjectURL(file)} alt={`Bild ${i + 1}`} className="w-full h-full object-cover" />
                          <button onClick={(e) => { e.stopPropagation(); removeImage(i); }} className="absolute top-1 right-1 w-5 h-5 bg-lysekil-deepblue/80 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100">
                            <X className="w-3 h-3 text-white" />
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          )}

          {step === 4 && (
            <motion.div key="step4" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.3 }}>
              <h3 className="font-serif text-2xl text-lysekil-deepblue mb-2">Prioritet</h3>
              <p className="font-sans text-sm text-lysekil-granite mb-8">Välj hur brådskande ärendet är.</p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-10">
                {priorities.map((p) => {
                  const isActive = form.priority === p.id
                  return (
                    <button key={p.id} onClick={() => updateField('priority', p.id)}
                      className={`p-5 rounded-sm border-2 text-left transition-all ${isActive ? p.activeColor : `${p.color} hover:shadow-xs`}`}>
                      <p className="font-sans text-sm font-semibold mb-1">{p.label}</p>
                      <p className="font-sans text-xs opacity-80">{p.desc}</p>
                    </button>
                  )
                })}
              </div>

              {form.priority === 'high' && (
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="bg-red-50 border border-red-200 rounded-sm p-5 mb-8">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-sans text-sm font-medium text-red-700 mb-1">Vid akuta fel - ring journumret direkt</p>
                      <p className="font-sans text-sm text-red-600 mb-2">Vid läckage, elavbrott eller säkerhetsproblem: ring 0523-XX XX XX (jour dygnet runt)</p>
                      <div className="flex items-center gap-2 text-red-700 font-sans text-sm font-medium"><Phone className="w-4 h-4" /> 0523-XX XX XX</div>
                    </div>
                  </div>
                </motion.div>
              )}

              <div className="bg-lysekil-sand rounded-sm p-5 mb-8">
                <p className="font-sans text-xs text-lysekil-stone uppercase tracking-wider mb-3">Sammanfattning</p>
                <div className="grid grid-cols-2 gap-3">
                  <div><p className="font-sans text-xs text-lysekil-stone">Kategori</p><p className="font-sans text-sm font-medium text-lysekil-deepblue">{categories.find((c) => c.id === form.category)?.label}</p></div>
                  <div><p className="font-sans text-xs text-lysekil-stone">Namn</p><p className="font-sans text-sm font-medium text-lysekil-deepblue">{form.name}</p></div>
                  <div><p className="font-sans text-xs text-lysekil-stone">Adress</p><p className="font-sans text-sm font-medium text-lysekil-deepblue">{form.address}</p></div>
                  <div><p className="font-sans text-xs text-lysekil-stone">Telefon</p><p className="font-sans text-sm font-medium text-lysekil-deepblue">{form.phone}</p></div>
                </div>
              </div>

              <label className="flex items-start gap-3 cursor-pointer mb-8">
                <input type="checkbox" checked={form.consent} onChange={(e) => updateField('consent', e.target.checked)} className="mt-0.5 w-4 h-4 accent-lysekil-ocean" />
                <span className="font-sans text-sm text-lysekil-granite">Jag godkänner att mina uppgifter sparas för att hantera detta ärende. <span className="text-red-500">*</span></span>
              </label>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="px-8 md:px-10 pb-8 md:pb-10 flex items-center justify-between border-t border-lysekil-lightsand pt-6">
        <button onClick={() => setStep((s) => s - 1)} disabled={step === 1}
          className={`inline-flex items-center gap-2 font-sans text-sm px-5 py-2.5 rounded-sm border transition-all ${step === 1 ? 'border-lysekil-lightsand text-lysekil-stone cursor-not-allowed' : 'border-lysekil-deepblue text-lysekil-deepblue hover:bg-lysekil-deepblue hover:text-white'}`}>
          <ChevronLeft className="w-4 h-4" /> Tillbaka
        </button>
        {step < totalSteps ? (
          <button onClick={() => setStep((s) => s + 1)} disabled={!canProceed()}
            className={`inline-flex items-center gap-2 font-sans text-sm font-medium px-6 py-2.5 rounded-sm transition-all ${canProceed() ? 'bg-lysekil-deepblue text-white hover:bg-lysekil-ocean' : 'bg-lysekil-lightsand text-lysekil-stone cursor-not-allowed'}`}>
            Nästa steg <ChevronRight className="w-4 h-4" />
          </button>
        ) : (
          <button onClick={handleSubmit} disabled={!canProceed()}
            className={`inline-flex items-center gap-2 font-sans text-sm font-medium px-6 py-2.5 rounded-sm transition-all ${canProceed() ? 'bg-lysekil-deepblue text-white hover:bg-lysekil-ocean' : 'bg-lysekil-lightsand text-lysekil-stone cursor-not-allowed'}`}>
            <Shield className="w-4 h-4" /> Skicka felanmälan
          </button>
        )}
      </div>
    </div>
  )
}
