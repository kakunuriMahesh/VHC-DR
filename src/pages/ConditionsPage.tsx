import { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const conditionsContent = (
  <div className="max-w-[1120px] mx-auto">
    <div className="flex items-center gap-3 text-[#0d6e6e] text-xs font-medium uppercase tracking-widest mb-3"><span className="w-6 h-[1px] bg-[#0d6e6e]"></span>Conditions Treated</div>
    <h2 className="text-[24px] md:text-[30px] lg:text-[clamp(30px,3.5vw,44px)] font-semibold text-[#1a1a1a] mb-3 md:mb-4">Areas of Expertise</h2>
    <p className="text-[14px] md:text-[17px] text-[#5a5a5a] max-w-[520px] leading-relaxed mb-10 md:mb-13">Comprehensive care for chronic and acute medical conditions.</p>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
      <div className="bg-[#e6f4f4] rounded-xl p-6 md:p-8 hover:shadow-lg hover:-translate-y-1 transition-all">
        <img src="/assets/DiabetesMellitus.png" alt="Diabetes" className="w-11 h-11 object-contain rounded-full bg-white p-1 mb-4" />
        <h3 className="text-[15px] md:text-[18px] font-semibold text-[#094f4f] mb-2">Diabetes Mellitus</h3>
        <p className="text-[13px] md:text-[15px] text-[#5a5a5a] leading-relaxed">Type 1 & Type 2 diabetes, insulin therapy, long-term sugar control.</p>
      </div>
      <div className="bg-[#f0f7f7] rounded-xl p-6 md:p-8 hover:shadow-lg hover:-translate-y-1 transition-all">
        <img src="/assets/Hypertension.png" alt="Hypertension" className="w-11 h-11 object-contain rounded-full bg-white p-1 mb-4" />
        <h3 className="text-[15px] md:text-[18px] font-semibold text-[#094f4f] mb-2">Hypertension</h3>
        <p className="text-[13px] md:text-[15px] text-[#5a5a5a] leading-relaxed">Blood pressure management and cardiovascular risk reduction.</p>
      </div>
      <div className="bg-[#f5f0e6] rounded-xl p-6 md:p-8 hover:shadow-lg hover:-translate-y-1 transition-all">
        <img src="/assets/ThyroidDisorders.png" alt="Thyroid" className="w-11 h-11 object-contain rounded-full bg-white p-1 mb-4" />
        <h3 className="text-[15px] md:text-[18px] font-semibold text-[#094f4f] mb-2">Thyroid Disorders</h3>
        <p className="text-[13px] md:text-[15px] text-[#5a5a5a] leading-relaxed">Hypothyroidism, hyperthyroidism, thyroid nodules.</p>
      </div>
      <div className="bg-[#fef3e2] rounded-xl p-6 md:p-8 hover:shadow-lg hover:-translate-y-1 transition-all">
        <img src="/assets/KidneyDisease.png" alt="Kidney" className="w-11 h-11 object-contain rounded-full bg-white p-1 mb-4" />
        <h3 className="text-[15px] md:text-[18px] font-semibold text-[#094f4f] mb-2">Kidney Disease</h3>
        <p className="text-[13px] md:text-[15px] text-[#5a5a5a] leading-relaxed">Chronic kidney disease management and monitoring.</p>
      </div>
      <div className="bg-[#e8f4e8] rounded-xl p-6 md:p-8 hover:shadow-lg hover:-translate-y-1 transition-all">
        <img src="/assets/FeverInfection.png" alt="Fever" className="w-11 h-11 object-contain rounded-full bg-white p-1 mb-4" />
        <h3 className="text-[15px] md:text-[18px] font-semibold text-[#094f4f] mb-2">Fever & Infections</h3>
        <p className="text-[13px] md:text-[15px] text-[#5a5a5a] leading-relaxed">Acute febrile illness, viral infections, typhoid, dengue.</p>
      </div>
      <div className="bg-[#f0e8f0] rounded-xl p-6 md:p-8 hover:shadow-lg hover:-translate-y-1 transition-all">
        <img src="/assets/LifeStyle.png" alt="Lifestyle" className="w-11 h-11 object-contain rounded-full bg-white p-1 mb-4" />
        <h3 className="text-[15px] md:text-[18px] font-semibold text-[#094f4f] mb-2">Lifestyle Diseases</h3>
        <p className="text-[13px] md:text-[15px] text-[#5a5a5a] leading-relaxed">Obesity, metabolic syndrome, high cholesterol, fatty liver.</p>
      </div>
    </div>
  </div>
)

export default function ConditionsPage() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <div className="min-h-screen bg-[#fafaf8]">
      <Navbar />
      <div className="pt-[68px]">
        <section className="py-12 md:py-16 lg:py-24 px-5 md:px-8 lg:px-10 bg-[#fafaf8]">
          {conditionsContent}
        </section>
      </div>
      <Footer />
    </div>
  )
}