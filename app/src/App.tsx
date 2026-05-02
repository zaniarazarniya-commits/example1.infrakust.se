import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import ContactPage from './pages/ContactPage'

export default function App() {
  return (
    <div className="min-h-screen bg-lysekil-sand">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/kontakt" element={<ContactPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
