import { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const servicesData = [
  { num: '01', title: 'OPD Consultation', desc: 'Thorough evaluation, diagnosis, and treatment planning for acute and chronic medical conditions.', bg: 'bg-[#e6f4f4]' },
  { num: '02', title: 'Diabetes Management Program', desc: 'Individualised diabetes care including medication, insulin therapy, diet guidance, and regular HbA1c monitoring.', bg: 'bg-[#fef3e2]' },
  { num: '03', title: 'Hypertension Care', desc: 'Blood pressure control with targeted treatment, cardiovascular risk reduction, and lifestyle counselling.', bg: 'bg-[#e8f4e8]' },
  { num: '04', title: 'IV Treatment & Day Care', desc: 'Intravenous medications, fluid management, and day care procedures without the need for hospital admission.', bg: 'bg-[#f0e8f0]' },
  { num: '05', title: 'Preventive Health Check-ups', desc: 'Comprehensive health screening to detect conditions early — including sugar, blood pressure, kidney, thyroid, and lipid tests.', bg: 'bg-[#f5e6e8]' },
  { num: '06', title: 'Adult Vaccination', desc: 'Recommended adult vaccines including hepatitis, influenza, pneumococcal, typhoid, and others as clinically indicated.', bg: 'bg-[#e6e8f4]' },
]

const servicesContent = (
  <div className="max-w-[1120px] mx-auto">
    <div className="flex items-center gap-3 text-[#0d6e6e] text-xs font-medium uppercase tracking-widest mb-3"><span className="w-6 h-[1px] bg-[#0d6e6e]"></span>Our Services</div>
    <h2 className="text-[24px] md:text-[30px] lg:text-[clamp(30px,3.5vw,44px)] font-semibold text-[#1a1a1a] mb-3 md:mb-4">What We Offer at Vedic<br/>Health Clinic</h2>
    <p className="text-[14px] md:text-[17px] text-[#5a5a5a] max-w-[520px] leading-relaxed mb-10 md:mb-13">Comprehensive clinical services under one roof.</p>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
      {servicesData.map((item, i) => (
        <div key={i} className={`${item.bg} rounded-xl p-6 md:p-8 hover:shadow-lg hover:-translate-y-1 transition-all`}>
          <div className="text-[38px] md:text-[48px] font-semibold text-[#094f4f] leading-none mb-4">{item.num}</div>
          <h3 className="text-[15px] md:text-[18px] font-semibold text-[#094f4f] mb-2">{item.title}</h3>
          <p className="text-[13px] md:text-[15px] text-[#5a5a5a] leading-relaxed">{item.desc}</p>
        </div>
      ))}
    </div>
  </div>
)

export default function ServicesPage() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <div className="min-h-screen bg-[#fafaf8]">
      <Navbar />
      <div className="pt-[68px]">
        <section className="py-12 md:py-16 lg:py-24 px-5 md:px-8 lg:px-10 bg-white">
          {servicesContent}
        </section>
      </div>
      <Footer />
    </div>
  )
}