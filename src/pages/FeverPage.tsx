import { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function FeverPage() {
  useEffect(() => { window.scrollTo(0, 0) }, [])
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 pt-[68px] bg-[#fafaf8]">
        <div className="container py-12 md:py-16 lg:py-24 px-5 md:px-8 lg:px-10 max-w-[1120px] mx-auto">
          <a href="#/education-tiles" className="inline-flex items-center gap-2 text-[#0d6e6e] text-sm font-medium uppercase tracking-widest mb-4 hover:opacity-70">
            <span>←</span> Back to Education
          </a>
          <div className="section-label">Patient Education</div>
          <h1 className="section-title">Fever: Understanding<br/>Your Symptoms</h1>
          <p className="section-sub">When your body fights infection, knowing what to do matters.</p>

          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-10 md:gap-16 lg:gap-20 mt-10 md:mt-13">
<div className="space-y-8">
            <div><h3 className="text-[20px] md:text-[24px] font-bold text-[#1a1a1a]">What is Fever?</h3><p className="text-[14px] md:text-[16px] text-[#5a5a5a] leading-[1.8] mt-2">Fever is not an illness but a symptom — your body's natural response to infection. When harmful bacteria or viruses enter your system, the hypothalamus raises your body temperature to create an unfavorable environment for pathogens.</p></div>
            <div><h3 className="text-[20px] md:text-[24px] font-bold text-[#1a1a1a]">Common Causes</h3><ul className="text-[14px] md:text-[16px] text-[#5a5a5a] list-disc list-inside mt-2 space-y-1"><li>Viral infections (cold, flu, COVID-19)</li><li>Bacterial infections</li><li>Heat exhaustion</li><li>Inflammatory conditions</li></ul></div>
            <div className="bg-[#fff8f0] border border-[#f0d5b0] border-l-4 border-l-[#b5893a] rounded-r p-4 md:p-5 text-[13px] md:text-[15px] text-[#7a5020]">⚠ Seek immediate medical attention if fever is accompanied by severe symptoms.</div>
            <div><h3 className="text-[20px] md:text-[24px] font-bold text-[#1a1a1a]">When to Seek Medical Help</h3><ul className="text-[14px] md:text-[16px] text-[#5a5a5a] list-disc list-inside mt-2 space-y-1"><li>Temperature above 103°F (39.4°C)</li><li>Severe headache or stiff neck</li><li>Difficulty breathing</li><li>Persistent vomiting</li><li>Confusion</li></ul></div>
            <div><h3 className="text-[20px] md:text-[24px] font-bold text-[#1a1a1a]">Home Care</h3><ul className="text-[14px] md:text-[16px] text-[#5a5a5a] list-disc list-inside mt-2 space-y-1"><li>Rest and stay hydrated</li><li>Take fever-reducing medications (paracetamol)</li><li>Use cool compresses</li><li>Wear lightweight clothing</li></ul></div>
          </div>
            <div>
              <div className="bg-[#094f4f] rounded-lg p-6 md:p-8 mb-4 md:mb-5 text-white">
                <h3 className="text-[18px] md:text-[22px] font-semibold text-white mb-2 md:mb-3">Get Evaluated for Persistent Fever</h3>
                <p className="text-[12px] md:text-[14px] text-white/65 mb-4 md:mb-6">If fever persists for more than 3 days, get evaluated.</p>
                <a href="#/contact" className="block w-full bg-[#b5893a] text-white text-center px-5 py-3 rounded text-sm font-semibold tracking-wide hover:bg-[#a07530] mb-2">Book Appointment</a>
                <a href="tel:+919948494455" className="block w-full border border-white/30 text-white text-center px-5 py-3 rounded text-sm font-medium">Call Clinic</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}