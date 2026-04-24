import { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { FiMapPin, FiPhone, FiClock } from 'react-icons/fi'

const educationData = [
  { title: 'Diabetes', desc: 'Understanding blood sugar, symptoms, and management.', page: '#/diabetes', icon: <img src="/assets/DiabetesMellitus.png" alt="Diabetes" className="w-9 h-9 object-contain" />, bg: 'bg-[#e6f4f4]' },
  { title: 'Hypertension', desc: 'High blood pressure - the silent killer.', page: '#/hypertension', icon: <img src="/assets/Hypertension.png" alt="Hypertension" className="w-9 h-9 object-contain" />, bg: 'bg-[#fef3e2]' },
  { title: 'Fever', desc: 'Understanding fever and when to seek care.', page: '#/fever', icon: <img src="/assets/FeverInfection.png" alt="Fever" className="w-9 h-9 object-contain" />, bg: 'bg-[#e8f4e8]' },
  { title: 'Gastroenterology', desc: 'Digestive health and common GI issues.', page: '#/gastroenterology', icon: <img src="/assets/LifeStyle.png" alt="Gastro" className="w-9 h-9 object-contain" />, bg: 'bg-[#f0e8f0]' },
]

const educationContent = (
  <div className="max-w-[1120px] mx-auto">
    <div className="flex items-center gap-3 text-[#0d6e6e] text-xs font-medium uppercase tracking-widest mb-3">
      <span className="w-6 h-[1px] bg-[#0d6e6e]"></span>
      Patient Education
    </div>
    <h2 className="text-[24px] md:text-[30px] lg:text-[clamp(30px,3.5vw,44px)] font-semibold text-[#1a1a1a] mb-3 md:mb-4">Learn About Your Health</h2>
    <p className="text-[14px] md:text-[17px] text-[#5a5a5a] max-w-[520px] leading-relaxed mb-10 md:mb-13">Click on a topic to learn more about your condition and treatment options.</p>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
      {educationData.map((item, i) => (
        <a key={i} href={item.page} className={`block ${item.bg} rounded-xl p-5 md:p-6 hover:shadow-lg hover:-translate-y-1 transition-all`}>
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center mb-3 md:mb-4 p-1.5">
            {item.icon}
          </div>
          <h3 className="text-[14px] md:text-[16px] font-semibold text-[#094f4f] mb-2">{item.title}</h3>
          <p className="text-[12px] md:text-[14px] text-[#5a5a5a] leading-relaxed">{item.desc}</p>
          <span className="text-[11px] text-[#0d6e6e] font-medium mt-3 block">Learn more →</span>
        </a>
      ))}
    </div>
  </div>
)

export default function EducationPage() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <div className="min-h-screen bg-[#fafaf8]">
      <Navbar />
      <div className="pt-[68px]">
        <section className="py-12 md:py-16 lg:py-24 px-5 md:px-8 lg:px-10 bg-white">
          {educationContent}
        </section>
      </div>
      <Footer />
    </div>
  )
}