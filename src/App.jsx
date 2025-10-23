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
    </div>
    </>
  )
}

export default App
