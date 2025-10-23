<<<<<<< HEAD
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

=======
import { useState } from 'react'
import Footer from './components/Footer'
import FAQSection from './components/FAQSection'
import ConsultationFormCard from './components/ConsultationFormCard'
import TestimonialsSection from './components/TestimonialsSection'
import PrakrityaBetter from './components/PrakrityaBetter'
import HowToUse from './components/HowToUse'
import WhyChoose from './components/WhyChoose'


function App() {

  return (
    <>
    <div className="main-section">
      <WhyChoose/>
      <HowToUse/>
      <PrakrityaBetter/>
      <TestimonialsSection/>
      <ConsultationFormCard/>
      <FAQSection/>
      <Footer/>
>>>>>>> 9a542f084b5561e2c420d5304a557be747895134
    </div>
    </>
  )
}

export default App
