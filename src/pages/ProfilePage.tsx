import { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const profileContent = (
  <div className="max-w-[1120px] mx-auto">
    <div className="flex items-center gap-3 text-[#0d6e6e] text-xs font-medium uppercase tracking-widest mb-3"><span className="w-6 h-[1px] bg-[#0d6e6e]"></span>Qualifications & Career</div>
    <h2 className="text-[24px] md:text-[30px] lg:text-[clamp(30px,3.5vw,44px)] font-semibold text-[#1a1a1a] mb-3 md:mb-4">Education & Professional<br/>Experience</h2>
    
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 lg:gap-20 mt-10 md:mt-13">
      <div>
        <h3 className="text-[18px] md:text-[22px] font-semibold text-[#1a1a1a] mb-6 md:mb-8 pb-4 border-b-2 border-[#e6f4f4] flex items-center gap-2.5">
          <span className="w-7 h-7 bg-[#0d6e6e] rounded-full flex-shrink-0"></span>
          Education
        </h3>
        
        <div className="relative pl-6 pb-7 border-l-2 border-[#e6f4f4]">
          <div className="absolute w-2 h-2 bg-[#0d6e6e] rounded-full -left-[5px] top-1.5"></div>
          <div className="text-[14px] md:text-[15px] font-semibold text-[#1a1a1a] mb-1">MD – General Medicine <span className="text-[#b5893a] font-semibold ml-1">2021</span></div>
          <div className="text-[13px] md:text-[14px] text-[#5a5a5a] mb-2">Dr. D. Y. Patil Medical College, Hospital & Research Centre, Pune</div>
          <span className="inline-block text-[10px] md:text-[11px] font-semibold uppercase tracking-widest bg-[#f7f0e3] text-[#b5893a] border border-[#e8d5aa] px-2 py-1 rounded">Degree</span>
        </div>
        
        <div className="relative pl-6 border-l-2 border-transparent">
          <div className="absolute w-2 h-2 bg-[#0d6e6e] rounded-full -left-[5px] top-1.5"></div>
          <div className="text-[14px] md:text-[15px] font-semibold text-[#1a1a1a] mb-1">MBBS <span className="text-[#b5893a] font-semibold ml-1">2013</span></div>
          <div className="text-[13px] md:text-[14px] text-[#5a5a5a] mb-2">Guntur Medical College & Government General Hospital (GGH), Guntur</div>
          <span className="inline-block text-[10px] md:text-[11px] font-semibold uppercase tracking-widest bg-[#f7f0e3] text-[#b5893a] border border-[#e8d5aa] px-2 py-1 rounded">Degree</span>
        </div>
        
        <div className="mt-8 mb-2">
          <div className="text-[14px] md:text-[15px] font-semibold text-[#094f4f]">Certifications</div>
        </div>
        
        <div className="relative pl-6 pb-7 border-l-2 border-[#e6f4f4]">
          <div className="absolute w-2 h-2 bg-[#0d6e6e] rounded-full -left-[5px] top-1.5"></div>
          <div className="text-[14px] md:text-[15px] font-semibold text-[#1a1a1a] mb-1">CCCKD <span className="text-[#b5893a] font-semibold ml-1">2025</span></div>
          <div className="text-[13px] md:text-[14px] text-[#5a5a5a] mb-2">Certificate Course in Chronic Kidney Disease Management</div>
          <span className="inline-block text-[10px] md:text-[11px] font-semibold uppercase tracking-widest bg-[#f7f0e3] text-[#b5893a] border border-[#e8d5aa] px-2 py-1 rounded">Certification</span>
        </div>
        
        <div className="relative pl-6 border-l-2 border-transparent">
          <div className="absolute w-2 h-2 bg-[#0d6e6e] rounded-full -left-[5px] top-1.5"></div>
          <div className="text-[14px] md:text-[15px] font-semibold text-[#1a1a1a] mb-1">CCEBDM <span className="text-[#b5893a] font-semibold ml-1">2023</span></div>
          <div className="text-[13px] md:text-[14px] text-[#5a5a5a] mb-2">Certificate Course in Evidence-Based Diabetes Management</div>
          <span className="inline-block text-[10px] md:text-[11px] font-semibold uppercase tracking-widest bg-[#f7f0e3] text-[#b5893a] border border-[#e8d5aa] px-2 py-1 rounded">Certification</span>
        </div>
      </div>
      
      <div>
        <h3 className="text-[18px] md:text-[22px] font-semibold text-[#1a1a1a] mb-6 md:mb-8 pb-4 border-b-2 border-[#f7f0e3] flex items-center gap-2.5">
          <span className="w-7 h-7 bg-[#b5893a] rounded-full flex-shrink-0"></span>
          Experience
        </h3>
        
        <div className="relative pl-6 pb-7 border-l-2 border-[#e6f4f4]">
          <div className="absolute w-2 h-2 bg-[#b5893a] rounded-full -left-[5px] top-1.5"></div>
          <div className="text-[14px] md:text-[15px] font-semibold text-[#1a1a1a] mb-1">Consultant Physician <span className="text-[#b5893a] font-semibold ml-1">Since 2021</span></div>
          <div className="text-[13px] md:text-[14px] text-[#5a5a5a] mb-2">Vedic Health Clinic, PM Palem, Visakhapatnam</div>
          <span className="inline-block text-[10px] md:text-[11px] font-semibold uppercase tracking-widest bg-[#f7f0e3] text-[#b5893a] border border-[#e8d5aa] px-2 py-1 rounded">Current</span>
        </div>
        
        <div className="relative pl-6 pb-7 border-l-2 border-[#e6f4f4]">
          <div className="absolute w-2 h-2 bg-[#b5893a] rounded-full -left-[5px] top-1.5"></div>
          <div className="text-[14px] md:text-[15px] font-semibold text-[#1a1a1a] mb-1">Assistant Professor – General Medicine</div>
          <div className="text-[13px] md:text-[14px] text-[#5a5a5a]">GITAM Institute of Medical Sciences and Research (GIMSR), Rushikonda Visakhapatnam</div>
        </div>
        
        <div className="relative pl-6 pb-7 border-l-2 border-[#e6f4f4]">
          <div className="absolute w-2 h-2 bg-[#b5893a] rounded-full -left-[5px] top-1.5"></div>
          <div className="text-[14px] md:text-[15px] font-semibold text-[#1a1a1a] mb-1">Senior Resident – General Medicine</div>
          <div className="text-[13px] md:text-[14px] text-[#5a5a5a]">GITAM Institute of Medical Sciences and Research (GIMSR), Rushikonda Visakhapatnam</div>
        </div>
        
        <div className="relative pl-6 pb-7 border-l-2 border-[#e6f4f4]">
          <div className="absolute w-2 h-2 bg-[#b5893a] rounded-full -left-[5px] top-1.5"></div>
          <div className="text-[14px] md:text-[15px] font-semibold text-[#1a1a1a] mb-1">Junior Resident – General Medicine</div>
          <div className="text-[13px] md:text-[14px] text-[#5a5a5a]">Padmashree Dr. D. Y. Patil Medical College, Hospital & Research Centre, Pimpri, Pune</div>
        </div>
        
        <div className="relative pl-6 border-l-2 border-transparent">
          <div className="absolute w-2 h-2 bg-[#b5893a] rounded-full -left-[5px] top-1.5"></div>
          <div className="text-[14px] md:text-[15px] font-semibold text-[#1a1a1a] mb-1">Internship</div>
          <div className="text-[13px] md:text-[14px] text-[#5a5a5a]">Government General Hospital (GGH), Guntur</div>
        </div>
      </div>
    </div>
  </div>
)

export default function ProfilePage() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <div className="min-h-screen bg-[#fafaf8]">
      <Navbar />
      <div className="pt-[68px]">
        <section className="py-12 md:py-16 lg:py-24 px-5 md:px-8 lg:px-10 bg-white">
          {profileContent}
        </section>
      </div>
      <Footer />
    </div>
  )
}