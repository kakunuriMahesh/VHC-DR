import { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function HypertensionPage() {
  useEffect(() => { window.scrollTo(0, 0) }, [])
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 pt-[68px] bg-[#fafaf8]">
        <div className="container py-12 md:py-16 lg:py-24 px-5 md:px-8 lg:px-10 max-w-[1120px] mx-auto">
          <a href="#/" className="inline-flex items-center gap-2 text-[#0d6e6e] text-sm font-medium uppercase tracking-widest mb-4 hover:opacity-70">
            <span>←</span> Back
          </a>
          <div className="section-label">Patient Education</div>
          <h1 className="section-title">Hypertension: Understanding<br/>High Blood Pressure</h1>
          <p className="section-sub">The silent disease that affects your heart, kidneys, and more.</p>

          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-10 md:gap-16 lg:gap-20 mt-10 md:mt-13">
<div className="space-y-8">
            <div><h3 className="text-[20px] md:text-[24px] font-bold text-[#1a1a1a]">What is Hypertension?</h3><p className="text-[14px] md:text-[16px] text-[#5a5a5a] leading-[1.8] mt-2">Hypertension, commonly known as high blood pressure, is a condition in which the force of blood against the walls of your arteries is consistently too high. Over time, this increased pressure damages the arterial walls and forces the heart to work harder.</p></div>
            <div><h3 className="text-[20px] md:text-[24px] font-bold text-[#1a1a1a]">Understanding the Readings</h3><ul className="text-[14px] md:text-[16px] text-[#5a5a5a] mt-2 space-y-1"><li><span className="text-[#0d6e6e] font-bold">120/80</span> - Normal</li><li><span className="text-[#b5893a] font-bold">120-129/ below 80</span> - Elevated</li><li><span className="text-orange-600 font-bold">130-139/ 80-89</span> - Stage 1 High</li><li><span className="text-red-700 font-bold">140+/ 90+</span> - Stage 2 High</li></ul></div>
            <div className="bg-[#fff8f0] border border-[#f0d5b0] border-l-4 border-l-[#b5893a] rounded-r p-4 md:p-5 text-[13px] md:text-[15px] text-[#7a5020]">⚠ Important: Hypertension is often called the "silent killer" because it typically has no symptoms until serious damage has already occurred.</div>
            <div><h3 className="text-[20px] md:text-[24px] font-bold text-[#1a1a1a]">Risks of Uncontrolled Hypertension</h3><ul className="text-[14px] md:text-[16px] text-[#5a5a5a] list-disc list-inside mt-2 space-y-1"><li>Heart disease and heart attack</li><li>Stroke</li><li>Kidney damage</li><li>Vision loss</li><li>Heart failure</li></ul></div>
            <div><h3 className="text-[20px] md:text-[24px] font-bold text-[#1a1a1a]">Treatment Approach</h3><ul className="text-[14px] md:text-[16px] text-[#5a5a5a] list-disc list-inside mt-2 space-y-1"><li>Low-sodium diet</li><li>Regular physical activity</li><li>Weight management</li><li>Antihypertensive medications</li><li>Regular monitoring</li></ul></div>
          </div>
            <div>
              <div className="bg-[#094f4f] rounded-lg p-6 md:p-8 mb-4 md:mb-5 text-white">
                <h3 className="text-[18px] md:text-[22px] font-semibold text-white mb-2 md:mb-3">Get Your Blood Pressure Checked</h3>
                <p className="text-[12px] md:text-[14px] text-white/65 mb-4 md:mb-6">Regular check-ups can prevent serious complications.</p>
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