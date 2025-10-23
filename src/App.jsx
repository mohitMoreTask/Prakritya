import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import ProductSection from './components/ProductSection'
import AyurvedicIngredientsSection from './components/AyurvedicIngredientsSection'
import ComboPackSection from './components/ComboPackSection'
import TrustAyurvedaSection from './components/TrustAyurvedaSection'
import RealResultsSection from './components/RealResultsSection'

function App() {
  return (
    <div className="min-h-screen bg-gray-100 overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <ProductSection />
      <ComboPackSection />
      <TrustAyurvedaSection />
      <AyurvedicIngredientsSection />
      <RealResultsSection />

    </div>
  )
}

export default App
