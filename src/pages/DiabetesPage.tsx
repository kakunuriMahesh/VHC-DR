import { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function DiabetesPage() {
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
          <h1 className="section-title">Diabetes: Understanding<br/>Your Condition</h1>
          <p className="section-sub">Know the facts. Control your sugar. Prevent complications.</p>
          
          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-10 md:gap-16 lg:gap-20 mt-10 md:mt-13">
            <div className="space-y-8">
              <div><h3 className="text-[20px] md:text-[24px] font-bold text-[#1a1a1a]">What is Diabetes?</h3><p className="text-[14px] md:text-[16px] text-[#5a5a5a] leading-[1.8] mt-2">Diabetes is a chronic condition in which the blood sugar (glucose) level remains persistently high. This happens either because the pancreas does not produce enough insulin, or because the body's cells do not respond to insulin effectively. Left unmanaged, high blood sugar causes damage to blood vessels and nerves throughout the body — affecting the kidneys, eyes, heart, and feet.</p></div>
              <div><h3 className="text-[20px] md:text-[24px] font-bold text-[#1a1a1a]">Common Symptoms</h3><ul className="text-[14px] md:text-[16px] text-[#5a5a5a] list-disc list-inside mt-2 space-y-1"><li>Frequent urination, especially at night</li><li>Excessive thirst and dry mouth</li><li>Unexplained fatigue or weakness</li><li>Blurred vision</li><li>Slow-healing wounds or cuts</li><li>Unexplained weight loss (Type 1)</li><li>Tingling or numbness in hands and feet</li></ul></div>
              <div className="bg-[#fff8f0] border border-[#f0d5b0] border-l-4 border-l-[#b5893a] rounded-r p-4 md:p-5 text-[13px] md:text-[15px] text-[#7a5020] leading-[1.65]">⚠ Important: Many patients with Type 2 diabetes have no symptoms in the early stages. Regular screening is the only way to detect it early.</div>
              <div><h3 className="text-[20px] md:text-[24px] font-bold text-[#1a1a1a]">Why Controlling Diabetes Matters</h3><ul className="text-[14px] md:text-[16px] text-[#5a5a5a] list-disc list-inside mt-2 space-y-1"><li>Kidney damage — can lead to dialysis</li><li>Eye damage — can cause blindness</li><li>Nerve damage — numbness, pain, weakness</li><li>Heart disease and stroke</li><li>Foot ulcers and amputations</li></ul></div>
              <div><h3 className="text-[20px] md:text-[24px] font-bold text-[#1a1a1a]">How We Treat Diabetes</h3><ul className="text-[14px] md:text-[16px] text-[#5a5a5a] list-disc list-inside mt-2 space-y-1"><li>Accurate diagnosis and classification</li><li>Individualised medication plan</li><li>Dietary guidance tailored to your lifestyle</li><li>HbA1c and regular blood sugar monitoring</li><li>Screening and prevention of complications</li><li>Long-term follow-up with treatment adjustments</li></ul></div>
              <div><h3 className="text-[20px] md:text-[24px] font-bold text-[#1a1a1a]">Treatment Approach</h3><ul className="text-[14px] md:text-[16px] text-[#5a5a5a] list-disc list-inside mt-2 space-y-1"><li>Lifestyle modifications</li><li>Oral anti-diabetic medications</li><li>Insulin therapy</li><li>Regular self-monitoring of blood glucose</li></ul></div>
            </div>
            <div>
              <div className="bg-[#094f4f] rounded-lg p-6 md:p-8 mb-4 md:mb-5 text-white">
                <h3 className="text-[18px] md:text-[22px] font-semibold text-white mb-2 md:mb-3">Get Your Diabetes Evaluated</h3>
                <p className="text-[12px] md:text-[14px] text-white/65 leading-[1.7] mb-4 md:mb-6">Early detection and proper management can prevent all major complications. Book a consultation today.</p>
                <a href="#/contact" className="block w-full bg-[#b5893a] text-white text-center px-5 md:px-7 py-3 md:py-3.5 rounded text-sm font-semibold tracking-wide hover:bg-[#a07530] transition-all mb-2">Book Appointment</a>
                <a href="tel:+919948494455" className="block w-full border border-white/30 text-white text-center px-5 md:px-7 py-3 md:py-3.5 rounded text-sm font-medium tracking-wide">Call Clinic</a>
              </div>
              <div className="bg-white border border-[#e0e8e8] rounded-lg p-5 md:p-6">
                <h4 className="text-[12px] md:text-[14px] font-semibold uppercase tracking-widest text-[#094f4f] mb-3 md:mb-4">Who Should Get Tested?</h4>
                <ul className="space-y-2 text-[12px] md:text-[14px] text-[#5a5a5a]">
                  {['Age above 35 years', 'Family history of diabetes', 'Overweight or obese', 'High blood pressure', 'Known prediabetes', 'Symptoms of high blood sugar', 'Gestational diabetes in pregnancy'].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#0d6e6e] rounded-full"></span>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}