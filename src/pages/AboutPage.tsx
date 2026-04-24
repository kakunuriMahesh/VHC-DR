import { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const aboutContent = (
  <div className="max-w-[1120px] mx-auto">
    <div className="flex items-center gap-3 text-[#0d6e6e] text-xs font-medium uppercase tracking-widest mb-3"><span className="w-6 h-[1px] bg-[#0d6e6e]"></span>About the Doctor</div>
    <h2 className="text-[24px] md:text-[30px] lg:text-[clamp(30px,3.5vw,44px)] font-semibold text-[#1a1a1a] mb-3 md:mb-4">Experienced. Evidence-Based.<br/>Patient-Focused.</h2>
    <p className="text-[14px] md:text-[17px] text-[#5a5a5a] max-w-[520px] leading-relaxed mb-10 md:mb-13">A physician who combines clinical precision with genuine patient care.</p>
    
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-10 md:gap-16 lg:gap-20">
      <div className="space-y-4 text-[14px] md:text-[16px] text-[#5a5a5a] leading-[1.85]">
        <p className="text-[15px] md:text-[17px] text-[#1a1a1a] font-semibold">Dr. Barla Dasaradha Ram, MD (General Medicine)<br/><span className="font-normal text-[#5a5a5a]">Consultant Physician | Special Interest in Diabetes & Metabolic Medicine</span></p>
        <p>Dr. Barla Dasaradha Ram is a Consultant Physician at Vedic Health Clinic, PM Palem, Visakhapatnam, with focused expertise in diabetes, hypertension, thyroid disorders, and metabolic disease management.</p>
        <p>He completed his MD in General Medicine from Dr. D.Y. Patil Medical College, Hospital & Research Centre, Pune, and holds advanced certifications in Evidence-Based Diabetes Management (CCEBDM) and Chronic Kidney Disease Management (CCCKD). He has also served as Assistant Professor in the Department of General Medicine at GITAM Institute of Medical Sciences, Visakhapatnam.</p>
        <p>His practice at Vedic Health Clinic is built around structured, protocol-driven care — precise diagnosis, rational prescribing, and sustained follow-up — with a strong emphasis on preventing long-term complications of diabetes, hypertension, and metabolic disease.</p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-9">
          <div className="bg-[#e6f4f4] border-l-[3px] border-[#0d6e6e] p-4 rounded-r">
            <h4 className="text-[12px] md:text-[13px] font-semibold uppercase tracking-widest text-[#094f4f] mb-1">Specialisation</h4>
            <p className="text-[13px] md:text-[14px] text-[#5a5a5a]">Diabetes, Hypertension, Thyroid & Metabolic Disorders</p>
          </div>
          <div className="bg-[#e6f4f4] border-l-[3px] border-[#0d6e6e] p-4 rounded-r">
            <h4 className="text-[12px] md:text-[13px] font-semibold uppercase tracking-widest text-[#094f4f] mb-1">Certifications</h4>
            <p className="text-[13px] md:text-[14px] text-[#5a5a5a]">CCEBDM <br/> CCCKD</p>
          </div>
          <div className="bg-[#e6f4f4] border-l-[3px] border-[#0d6e6e] p-4 rounded-r">
            <h4 className="text-[12px] md:text-[13px] font-semibold uppercase tracking-widest text-[#094f4f] mb-1">Academic Role</h4>
            <p className="text-[13px] md:text-[14px] text-[#5a5a5a]">Assistant Professor – General Medicine, GIMSR</p>
          </div>
          <div className="bg-[#e6f4f4] border-l-[3px] border-[#0d6e6e] p-4 rounded-r">
            <h4 className="text-[12px] md:text-[13px] font-semibold uppercase tracking-widest text-[#094f4f] mb-1">Clinic</h4>
            <p className="text-[13px] md:text-[14px] text-[#5a5a5a]">Vedic Health Clinic, PM Palem, Visakhapatnam</p>
          </div>
        </div>
      </div>
      <div className="hidden lg:block bg-[#e6f4f4] rounded-lg overflow-hidden">
        <img src="/assets/HeroImg.jpeg" alt="Dr. Barla Dasaradha Ram" className="w-full h-full object-cover" />
      </div>
    </div>
  </div>
)

export default function AboutPage() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <div className="min-h-screen bg-[#fafaf8]">
      <Navbar />
      <div className="pt-[68px]">
        <section className="py-12 md:py-16 lg:py-24 px-5 md:px-8 lg:px-10 bg-white">
          {aboutContent}
        </section>
      </div>
      <Footer />
    </div>
  )
}