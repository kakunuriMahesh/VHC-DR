import { useEffect, useState } from 'react'
import { createHashRouter, RouterProvider } from 'react-router-dom'
import { saveToSheet } from './services/sheetService'

const DiabetesPage = () => (
  <div className="min-h-screen bg-[#fafaf8] pt-[68px]">
    <div className="container py-12 md:py-16 lg:py-24 px-5 md:px-8 lg:px-10 max-w-[1120px] mx-auto">
      <a href="#education-tiles" className="inline-flex items-center gap-2 text-[#0d6e6e] text-sm font-medium uppercase tracking-widest mb-4 hover:opacity-70">
        <span>←</span> Back to Education
      </a>
      <div className="section-label">Patient Education</div>
      <h1 className="section-title">Diabetes: Understanding<br/>Your Condition</h1>
      <p className="section-sub">Know the facts. Control your sugar. Prevent complications.</p>
      
      <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-10 md:gap-16 lg:gap-20 mt-10 md:mt-13">
        <div className="space-y-6">
          <div><h3 className="text-[18px] md:text-[22px] font-semibold text-[#1a1a1a]">What is Diabetes?</h3><p className="text-[13px] md:text-[15px] text-[#5a5a5a] leading-[1.8] mt-2">Diabetes is a chronic condition in which the blood sugar (glucose) level remains persistently high. This happens either because the pancreas does not produce enough insulin, or because the body's cells do not respond to insulin effectively. Left unmanaged, high blood sugar causes damage to blood vessels and nerves throughout the body — affecting the kidneys, eyes, heart, and feet.</p></div>
          <div><h3 className="text-[18px] md:text-[22px] font-semibold text-[#1a1a1a]">Common Symptoms</h3><ul className="text-[13px] md:text-[15px] text-[#5a5a5a] list-disc list-inside mt-2 space-y-1"><li>Frequent urination, especially at night</li><li>Excessive thirst and dry mouth</li><li>Unexplained fatigue or weakness</li><li>Blurred vision</li><li>Slow-healing wounds or cuts</li><li>Unexplained weight loss (Type 1)</li><li>Tingling or numbness in hands and feet</li></ul></div>
          <div className="bg-[#fff8f0] border border-[#f0d5b0] border-l-4 border-l-[#b5893a] rounded-r p-3 md:p-4 text-[12px] md:text-[14px] text-[#7a5020] leading-[1.65]">⚠ Important: Many patients with Type 2 diabetes have no symptoms in the early stages. Regular screening is the only way to detect it early.</div>
          <div><h3 className="text-[18px] md:text-[22px] font-semibold text-[#1a1a1a]">Why Controlling Diabetes Matters</h3><ul className="text-[13px] md:text-[15px] text-[#5a5a5a] list-disc list-inside mt-2 space-y-1"><li>Kidney damage — can lead to dialysis</li><li>Eye damage — can cause blindness</li><li>Nerve damage — numbness, pain, weakness</li><li>Heart disease and stroke</li><li>Foot ulcers and amputations</li></ul></div>
          <div><h3 className="text-[18px] md:text-[22px] font-semibold text-[#1a1a1a]">How We Treat Diabetes</h3><ul className="text-[13px] md:text-[15px] text-[#5a5a5a] list-disc list-inside mt-2 space-y-1"><li>Accurate diagnosis and classification</li><li>Individualised medication plan</li><li>Dietary guidance tailored to your lifestyle</li><li>HbA1c and regular blood sugar monitoring</li><li>Screening and prevention of complications</li><li>Long-term follow-up with treatment adjustments</li></ul></div>
          <div><h3 className="text-[18px] md:text-[22px] font-semibold text-[#1a1a1a]">Treatment Approach</h3><ul className="text-[13px] md:text-[15px] text-[#5a5a5a] list-disc list-inside mt-2 space-y-1"><li>Lifestyle modifications</li><li>Oral anti-diabetic medications</li><li>Insulin therapy</li><li>Regular self-monitoring of blood glucose</li></ul></div>
        </div>
        <div>
          <div className="bg-[#094f4f] rounded-lg p-6 md:p-8 mb-4 md:mb-5 text-white">
            <h3 className="text-[18px] md:text-[22px] font-semibold text-white mb-2 md:mb-3">Get Your Diabetes Evaluated</h3>
            <p className="text-[12px] md:text-[14px] text-white/65 leading-[1.7] mb-4 md:mb-6">Early detection and proper management can prevent all major complications. Book a consultation today.</p>
            <a href="#contact" className="block w-full bg-[#b5893a] text-white text-center px-5 md:px-7 py-3 md:py-3.5 rounded text-sm font-semibold tracking-wide hover:bg-[#a07530] transition-all mb-2">Book Appointment</a>
            <a href="tel:+919948494455" className="block w-full border border-white/30 text-white text-center px-5 md:px-7 py-3 md:py-3.5 rounded text-sm font-medium tracking-wide">Call Clinic</a>
          </div>
          <div className="bg-white border border-[#e0e8e8] rounded-lg p-5 md:p-6">
            <h4 className="text-[12px] md:text-[14px] font-semibold uppercase tracking-widest text-[#094f4f] mb-3 md:mb-4">Who Should Get Tested?</h4>
            <ul className="space-y-2 text-[12px] md:text-[14px] text-[#5a5a5a]">{['Age above 35 years', 'Family history of diabetes', 'Overweight or obese', 'High blood pressure', 'Known prediabetes', 'Symptoms of high blood sugar', 'Gestational diabetes in pregnancy'].map((i, idx) => <li key={idx} className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#0d6e6e] rounded-full"></span>{i}</li>)}</ul>
          </div>
        </div>
      </div>
    </div>
  </div>
)

const HypertensionPage = () => (
  <div className="min-h-screen bg-[#fafaf8] pt-[68px]">
    <div className="container py-12 md:py-16 lg:py-24 px-5 md:px-8 lg:px-10 max-w-[1120px] mx-auto">
      <a href="#education-tiles" className="inline-flex items-center gap-2 text-[#0d6e6e] text-sm font-medium uppercase tracking-widest mb-4 hover:opacity-70"><span>←</span> Back to Education</a>
      <div className="section-label">Patient Education</div>
      <h1 className="section-title">Hypertension: Understanding<br/>High Blood Pressure</h1>
      <p className="section-sub">The silent disease that affects your heart, kidneys, and more.</p>
      <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-10 md:gap-16 lg:gap-20 mt-10 md:mt-13">
        <div className="space-y-6">
          <div><h3 className="text-[18px] md:text-[22px] font-semibold text-[#1a1a1a]">What is Hypertension?</h3><p className="text-[13px] md:text-[15px] text-[#5a5a5a] leading-[1.8] mt-2">Hypertension, commonly known as high blood pressure, is a condition in which the force of blood against the walls of your arteries is consistently too high. Over time, this increased pressure damages the arterial walls and forces the heart to work harder.</p></div>
          <div><h3 className="text-[18px] md:text-[22px] font-semibold text-[#1a1a1a]">Understanding the Readings</h3><ul className="text-[13px] md:text-[15px] text-[#5a5a5a] mt-2 space-y-1"><li><span className="text-[#0d6e6e] font-bold">120/80</span> - Normal</li><li><span className="text-[#b5893a] font-bold">120-129/ below 80</span> - Elevated</li><li><span className="text-orange-600 font-bold">130-139/ 80-89</span> - Stage 1 High</li><li><span className="text-red-700 font-bold">140+/ 90+</span> - Stage 2 High</li></ul></div>
          <div className="bg-[#fff8f0] border border-[#f0d5b0] border-l-4 border-l-[#b5893a] rounded-r p-3 md:p-4 text-[12px] md:text-[14px] text-[#7a5020]">⚠ Important: Hypertension is often called the "silent killer" because it typically has no symptoms until serious damage has already occurred.</div>
          <div><h3 className="text-[18px] md:text-[22px] font-semibold text-[#1a1a1a]">Risks of Uncontrolled Hypertension</h3><ul className="text-[13px] md:text-[15px] text-[#5a5a5a] list-disc list-inside mt-2 space-y-1"><li>Heart disease and heart attack</li><li>Stroke</li><li>Kidney damage</li><li>Vision loss</li><li>Heart failure</li></ul></div>
          <div><h3 className="text-[18px] md:text-[22px] font-semibold text-[#1a1a1a]">Treatment Approach</h3><ul className="text-[13px] md:text-[15px] text-[#5a5a5a] list-disc list-inside mt-2 space-y-1"><li>Low-sodium diet</li><li>Regular physical activity</li><li>Weight management</li><li>Antihypertensive medications</li><li>Regular monitoring</li></ul></div>
        </div>
        <div>
          <div className="bg-[#094f4f] rounded-lg p-6 md:p-8 mb-4 md:mb-5 text-white">
            <h3 className="text-[18px] md:text-[22px] font-semibold text-white mb-2 md:mb-3">Get Your Blood Pressure Checked</h3>
            <p className="text-[12px] md:text-[14px] text-white/65 mb-4 md:mb-6">Regular check-ups can prevent serious complications.</p>
            <a href="#contact" className="block w-full bg-[#b5893a] text-white text-center px-5 py-3 rounded text-sm font-semibold tracking-wide hover:bg-[#a07530] mb-2">Book Appointment</a>
            <a href="tel:+919948494455" className="block w-full border border-white/30 text-white text-center px-5 py-3 rounded text-sm font-medium">Call Clinic</a>
          </div>
        </div>
      </div>
    </div>
  </div>
)

const FeverPage = () => (
  <div className="min-h-screen bg-[#fafaf8] pt-[68px]">
    <div className="container py-12 md:py-16 lg:py-24 px-5 md:px-8 lg:px-10 max-w-[1120px] mx-auto">
      <a href="#education-tiles" className="inline-flex items-center gap-2 text-[#0d6e6e] text-sm font-medium uppercase tracking-widest mb-4 hover:opacity-70"><span>←</span> Back to Education</a>
      <div className="section-label">Patient Education</div>
      <h1 className="section-title">Fever: Understanding<br/>Your Symptoms</h1>
      <p className="section-sub">When your body fights infection, knowing what to do matters.</p>
      <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-10 md:gap-16 lg:gap-20 mt-10 md:mt-13">
        <div className="space-y-6">
          <div><h3 className="text-[18px] md:text-[22px] font-semibold text-[#1a1a1a]">What is Fever?</h3><p className="text-[13px] md:text-[15px] text-[#5a5a5a] leading-[1.8] mt-2">Fever is not an illness but a symptom — your body's natural response to infection. When harmful bacteria or viruses enter your system, the hypothalamus raises your body temperature to create an unfavorable environment for pathogens.</p></div>
          <div><h3 className="text-[18px] md:text-[22px] font-semibold text-[#1a1a1a]">Common Causes</h3><ul className="text-[13px] md:text-[15px] text-[#5a5a5a] list-disc list-inside mt-2 space-y-1"><li>Viral infections (cold, flu, COVID-19)</li><li>Bacterial infections</li><li>Heat exhaustion</li><li>Inflammatory conditions</li></ul></div>
          <div className="bg-[#fff8f0] border border-[#f0d5b0] border-l-4 border-l-[#b5893a] rounded-r p-3 md:p-4 text-[12px] md:text-[14px] text-[#7a5020]">⚠ Seek immediate medical attention if fever is accompanied by severe symptoms.</div>
          <div><h3 className="text-[18px] md:text-[22px] font-semibold text-[#1a1a1a]">When to Seek Medical Help</h3><ul className="text-[13px] md:text-[15px] text-[#5a5a5a] list-disc list-inside mt-2 space-y-1"><li>Temperature above 103°F (39.4°C)</li><li>Severe headache or stiff neck</li><li>Difficulty breathing</li><li>Persistent vomiting</li><li>Confusion</li></ul></div>
          <div><h3 className="text-[18px] md:text-[22px] font-semibold text-[#1a1a1a]">Home Care</h3><ul className="text-[13px] md:text-[15px] text-[#5a5a5a] list-disc list-inside mt-2 space-y-1"><li>Rest and stay hydrated</li><li>Take fever-reducing medications (paracetamol)</li><li>Use cool compresses</li><li>Wear lightweight clothing</li></ul></div>
        </div>
        <div>
          <div className="bg-[#094f4f] rounded-lg p-6 md:p-8 mb-4 md:mb-5 text-white">
            <h3 className="text-[18px] md:text-[22px] font-semibold text-white mb-2 md:mb-3">Get Evaluated for Persistent Fever</h3>
            <p className="text-[12px] md:text-[14px] text-white/65 mb-4 md:mb-6">If fever persists for more than 3 days, get evaluated.</p>
            <a href="#contact" className="block w-full bg-[#b5893a] text-white text-center px-5 py-3 rounded text-sm font-semibold tracking-wide hover:bg-[#a07530] mb-2">Book Appointment</a>
            <a href="tel:+919948494455" className="block w-full border border-white/30 text-white text-center px-5 py-3 rounded text-sm font-medium">Call Clinic</a>
          </div>
        </div>
      </div>
    </div>
  </div>
)

const GastroenterologyPage = () => (
  <div className="min-h-screen bg-[#fafaf8] pt-[68px]">
    <div className="container py-12 md:py-16 lg:py-24 px-5 md:px-8 lg:px-10 max-w-[1120px] mx-auto">
      <a href="#education-tiles" className="inline-flex items-center gap-2 text-[#0d6e6e] text-sm font-medium uppercase tracking-widest mb-4 hover:opacity-70"><span>←</span> Back to Education</a>
      <div className="section-label">Patient Education</div>
      <h1 className="section-title">Gastroenterology:<br/>Digestive Health Guide</h1>
      <p className="section-sub">Understanding common digestive issues and their management.</p>
      <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-10 md:gap-16 lg:gap-20 mt-10 md:mt-13">
        <div className="space-y-6">
          <div><h3 className="text-[18px] md:text-[22px] font-semibold text-[#1a1a1a]">What is Gastroenterology?</h3><p className="text-[13px] md:text-[15px] text-[#5a5a5a] leading-[1.8] mt-2">Gastroenterology focuses on the digestive system (GI tract) including esophagus, stomach, intestines, liver, gallbladder, and pancreas.</p></div>
          <div><h3 className="text-[18px] md:text-[22px] font-semibold text-[#1a1a1a]">Common Conditions</h3><ul className="text-[13px] md:text-[15px] text-[#5a5a5a] list-disc list-inside mt-2 space-y-1"><li>Acid reflux (GERD)</li><li>Peptic ulcers</li><li>Irritable Bowel Syndrome (IBS)</li><li>Constipation / Diarrhea</li><li>Gallstones</li></ul></div>
          <div className="bg-[#fff8f0] border border-[#f0d5b0] border-l-4 border-l-[#b5893a] rounded-r p-3 md:p-4 text-[12px] md:text-[14px] text-[#7a5020]">⚠ Persistent digestive symptoms should not be ignored. Early evaluation can prevent complications.</div>
          <div><h3 className="text-[18px] md:text-[22px] font-semibold text-[#1a1a1a]">Warning Signs</h3><ul className="text-[13px] md:text-[15px] text-[#5a5a5a] list-disc list-inside mt-2 space-y-1"><li>Blood in stool</li><li>Persistent abdominal pain</li><li>Unexplained weight loss</li><li>Chronic heartburn</li></ul></div>
          <div><h3 className="text-[18px] md:text-[22px] font-semibold text-[#1a1a1a]">Prevention Tips</h3><ul className="text-[13px] md:text-[15px] text-[#5a5a5a] list-disc list-inside mt-2 space-y-1"><li>Eat balanced meals</li><li>Stay hydrated</li><li>Fiber-rich diet</li><li>Regular exercise</li></ul></div>
        </div>
        <div>
          <div className="bg-[#094f4f] rounded-lg p-6 md:p-8 mb-4 md:mb-5 text-white">
            <h3 className="text-[18px] md:text-[22px] font-semibold text-white mb-2 md:mb-3">Get Your Digestive Health Evaluated</h3>
            <p className="text-[12px] md:text-[14px] text-white/65 mb-4 md:mb-6">Don't ignore digestive symptoms.</p>
            <a href="#contact" className="block w-full bg-[#b5893a] text-white text-center px-5 py-3 rounded text-sm font-semibold tracking-wide hover:bg-[#a07530] mb-2">Book Appointment</a>
            <a href="tel:+919948494455" className="block w-full border border-white/30 text-white text-center px-5 py-3 rounded text-sm font-medium">Call Clinic</a>
          </div>
        </div>
      </div>
    </div>
  </div>
)

function MainApp() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [formData, setFormData] = useState({ name: '', phone: '', ReasonForVisit: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(el => {
        if (el.isIntersecting) {
          el.target.classList.add('opacity-100', 'translate-y-0')
          el.target.classList.remove('opacity-0', 'translate-y-7')
        }
      })
    }, { threshold: 0.1 })
    document.querySelectorAll('.fade-up').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    setMobileMenuOpen(false)
    const element = document.querySelector(href)
    if (element) {
      const offset = 80
      const top = element.getBoundingClientRect().top + window.scrollY - offset
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')
    try {
      await saveToSheet(e.currentTarget)
      setSubmitStatus('success')
      setFormData({ name: '', phone: '', ReasonForVisit: '', message: '' })
      setTimeout(() => setSubmitStatus('idle'), 3000)
    } catch (error) {
      console.error(error)
      setSubmitStatus('error')
      setTimeout(() => setSubmitStatus('idle'), 3000)
    } finally {
      setIsSubmitting(false)
    }
  }

  const services = [
    { num: '01', title: 'OPD Consultation', desc: 'Thorough evaluation, diagnosis, and treatment planning for acute and chronic medical conditions.' },
    { num: '02', title: 'Diabetes Management Program', desc: 'Individualised diabetes care including medication, insulin therapy, diet guidance, and regular HbA1c monitoring.' },
    { num: '03', title: 'Hypertension Care', desc: 'Blood pressure control with targeted treatment, cardiovascular risk reduction, and lifestyle counselling.' },
    { num: '04', title: 'IV Treatment & Day Care', desc: 'Intravenous medications, fluid management, and day care procedures without the need for hospital admission.' },
    { num: '05', title: 'Preventive Health Check-ups', desc: 'Comprehensive health screening to detect conditions early — including sugar, blood pressure, kidney, thyroid, and lipid tests.' },
    { num: '06', title: 'Adult Vaccination', desc: 'Recommended adult vaccines including hepatitis, influenza, pneumococcal, typhoid, and others as clinically indicated.' },
  ]

  const conditions = [
    { title: 'Diabetes Mellitus', desc: 'Type 1 & Type 2 diabetes, insulin therapy initiation, long-term sugar control, complication prevention.', icon: <img src="/assets/DiabetesMellitus.png" alt="Diabetes" className="w-11 h-11 object-contain" /> },
    { title: 'Hypertension', desc: 'Blood pressure management, cardiovascular risk assessment, lifestyle modification and medication planning.', icon: <img src="/assets/Hypertension.png" alt="Hypertension" className="w-11 h-11 object-contain" /> },
    { title: 'Thyroid Disorders', desc: 'Hypothyroidism, hyperthyroidism, thyroid nodules, and hormonal imbalances with accurate monitoring.', icon: <img src="/assets/ThyroidDisorders.png" alt="Thyroid" className="w-11 h-11 object-contain" /> },
    { title: 'Kidney Disease', desc: 'Chronic kidney disease management, monitoring of kidney function parameters, and slowing disease progression.', icon: <img src="/assets/KidneyDisease.png" alt="Kidney" className="w-11 h-11 object-contain" /> },
    { title: 'Fever & Infections', desc: 'Acute febrile illness, viral infections, respiratory tract infections, and tropical diseases like typhoid and dengue.', icon: <img src="/assets/FeverInfection.png" alt="Fever" className="w-11 h-11 object-contain" /> },
    { title: 'Lifestyle Diseases', desc: 'Obesity, metabolic syndrome, high cholesterol, fatty liver, and preventive health management.', icon: <img src="/assets/LifeStyle.png" alt="Lifestyle" className="w-11 h-11 object-contain" /> },
  ]

  return (
    <div className="min-h-screen">
      {/* NAV - matching html structure */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#fafaf8]/96 backdrop-blur-xl border-b border-[#e0e8e8] px-5 md:px-8 lg:px-10 h-[60px] md:h-[68px] flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src="/assets/LOGO_footer.png" alt="Vedic Health Clinic" className="w-10 h-10 md:w-12 md:h-12" />
          <div className="flex flex-col leading-tight">
            <span className="font-[Cormorant_Garamond] text-lg md:text-xl font-semibold text-[#094f4f] tracking-wide">Vedic Health Clinic</span>
            <span className="text-[10px] md:text-[11px] text-[#8a8a8a] uppercase tracking-widest hidden sm:block">Visakhapatnam</span>
          </div>
        </div>
        <ul className="hidden lg:flex items-center gap-6 xl:gap-8">
          <li><a href="#about" onClick={(e) => handleNavClick(e, '#about')} className="text-sm font-medium text-[#5a5a5a] hover:text-[#0d6e6e] transition-colors">About</a></li>
          <li><a href="#conditions" onClick={(e) => handleNavClick(e, '#conditions')} className="text-sm font-medium text-[#5a5a5a] hover:text-[#0d6e6e] transition-colors">Conditions</a></li>
          <li><a href="#services" onClick={(e) => handleNavClick(e, '#services')} className="text-sm font-medium text-[#5a5a5a] hover:text-[#0d6e6e] transition-colors">Services</a></li>
          <li><a href="#profile" onClick={(e) => handleNavClick(e, '#profile')} className="text-sm font-medium text-[#5a5a5a] hover:text-[#0d6e6e] transition-colors">Profile</a></li>
          <li><a href="#education-tiles" onClick={(e) => handleNavClick(e, '#education-tiles')} className="text-sm font-medium text-[#5a5a5a] hover:text-[#0d6e6e] transition-colors">Education</a></li>
          <li><a href="#contact" onClick={(e) => handleNavClick(e, '#contact')} className="bg-[#0d6e6e] text-white px-4 md:px-5 py-1.5 md:py-2 rounded text-[12px] md:text-[13px] font-semibold tracking-wide hover:bg-[#094f4f] transition-colors">Book Appointment</a></li>
        </ul>
        <button className="lg:hidden p-2 text-[#094f4f]" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">{mobileMenuOpen ? <path d="M18 6L6 18M6 6l12 12"/> : <path d="M3 12h18M3 6h18M3 18h18"/>}</svg>
        </button>
      </nav>
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div className="absolute inset-0 bg-black/50" onClick={() => setMobileMenuOpen(false)}></div>
          <div className="absolute top-[60px] left-0 right-0 bg-white shadow-xl p-4">
            <ul className="space-y-4">
              <li><a href="#about" onClick={(e) => handleNavClick(e, '#about')} className="block text-base font-medium text-[#5a5a5a] py-2">About</a></li>
              <li><a href="#conditions" onClick={(e) => handleNavClick(e, '#conditions')} className="block text-base font-medium text-[#5a5a5a] py-2">Conditions</a></li>
              <li><a href="#services" onClick={(e) => handleNavClick(e, '#services')} className="block text-base font-medium text-[#5a5a5a] py-2">Services</a></li>
              <li><a href="#profile" onClick={(e) => handleNavClick(e, '#profile')} className="block text-base font-medium text-[#5a5a5a] py-2">Profile</a></li>
              <li><a href="#education-tiles" onClick={(e) => handleNavClick(e, '#education-tiles')} className="block text-base font-medium text-[#5a5a5a] py-2">Education</a></li>
              <li><a href="#contact" onClick={(e) => handleNavClick(e, '#contact')} className="block bg-[#0d6e6e] text-white text-center px-5 py-3 rounded text-sm font-semibold">Book Appointment</a></li>
            </ul>
          </div>
        </div>
      )}

      {/* HERO - matching left (text) + right (image) layout from HTML */}
      <section id="home" className="min-h-screen pt-[56px] md:pt-[68px] overflow-hidden grid grid-cols-1 lg:grid-cols-2">
        <div className="bg-[#094f4f] px-5 md:px-8 lg:px-10 xl:px-20 py-10 md:py-16 lg:py-20 flex flex-col justify-center relative overflow-hidden">
          <div className="hidden md:block absolute w-[250px] h-[250px] md:w-[300px] md:h-[300px] lg:w-[400px] lg:h-[400px] rounded-full bg-white/[0.03] -top-[80px] -left-[80px]"></div>
          <div className="hidden md:block absolute w-[200px] h-[200px] md:w-[250px] md:h-[250px] lg:w-[300px] lg:h-[300px] rounded-full bg-[#b5893a]/[0.08] bottom-[40px] -right-[60px]"></div>
          <div className="flex items-center gap-3 text-[#b5893a] text-xs font-medium uppercase tracking-widest mb-5">
            <span className="w-8 h-[1px] bg-[#b5893a]"></span>
            Consultant Physician & Diabetologist
          </div>
          <h1 className="text-[32px] md:text-[38px] lg:text-[48px] font-semibold text-white mb-2">Dr. Barla<br/>Dasaradha Ram</h1>
          <p className="text-[14px] md:text-[15px] text-[#c2e0e0] font-normal mb-5 md:mb-7">MD (General Medicine) · Vedic Health Clinic, Visakhapatnam</p>
          <p className="text-[14px] md:text-[17px] text-white/70 leading-relaxed mb-6 md:mb-8 max-w-[420px]">Expert care for diabetes, hypertension, thyroid disorders, and chronic medical conditions — with evidence-based treatment and a focus on long-term health.</p>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
            <a href="#contact" onClick={(e) => handleNavClick(e, '#contact')} className="bg-[#b5893a] text-white px-5 md:px-6 py-3 md:py-3.5 rounded text-[13px] md:text-[14px] font-semibold tracking-wide hover:bg-[#a07530] transition-all text-center">Book Appointment</a>
            <a href="tel:+919948494455" className="border border-white/40 text-white px-5 md:px-6 py-3 md:py-3.5 rounded text-[13px] md:text-[14px] font-medium tracking-wide hover:bg-white/10 transition-all text-center">Call Clinic</a>
          </div>
        </div>
        <div className="hidden lg:flex bg-[#e6f4f4] items-stretch relative">
          <img src="/assets/HeroImg.jpeg" alt="Vedic Health Clinic" className="w-full h-full object-cover" />
          <div className="absolute bottom-4 right-4 flex flex-col gap-3">
            <div className="bg-white rounded-lg px-4 py-2.5 shadow-lg text-right">
              <div className="font-[Cormorant_Garamond] font-bold text-xl text-[#094f4f] leading-none">5+</div>
              <div className="text-xs text-[#8a8a8a] uppercase tracking-widest">Years Experience</div>
            </div>
            <div className="bg-white rounded-lg px-4 py-2.5 shadow-lg text-right">
              <h2 className="font-[Cormorant_Garamond] font-bold text-xl text-[#094f4f] leading-none">MD</h2>
              <div className="text-xs text-[#8a8a8a] uppercase tracking-widest">General Medicine</div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <div className="bg-white border-b border-[#e0e8e8] px-5 md:px-8 lg:px-10 py-4 md:py-5 flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-10">
        <div className="flex items-center gap-2.5 text-sm text-[#5a5a5a]">
          <div className="w-8 h-8 bg-[#e6f4f4] rounded-full flex items-center justify-center flex-shrink-0">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0d6e6e" strokeWidth="2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
          </div>
          <span>MD – General Medicine, AIIMS-affiliated</span>
        </div>
        <div className="flex items-center gap-2.5 text-sm text-[#5a5a5a]">
          <div className="w-8 h-8 bg-[#e6f4f4] rounded-full flex items-center justify-center flex-shrink-0">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0d6e6e" strokeWidth="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
          </div>
          <span>Certified Diabetes & Kidney Specialist</span>
        </div>
        <div className="flex items-center gap-2.5 text-sm text-[#5a5a5a]">
          <div className="w-8 h-8 bg-[#e6f4f4] rounded-full flex items-center justify-center flex-shrink-0">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0d6e6e" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
          </div>
          <span>5+ Years Clinical Experience</span>
        </div>
        <div className="flex items-center gap-2.5 text-sm text-[#5a5a5a]">
          <div className="w-8 h-8 bg-[#e6f4f4] rounded-full flex items-center justify-center flex-shrink-0">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0d6e6e" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg>
          </div>
          <span>Academic & Clinical Expertise</span>
        </div>
      </div>

      {/* ABOUT */}
      <section id="about" className="py-12 md:py-16 lg:py-24 px-5 md:px-8 lg:px-10 bg-white">
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
      </section>

      {/* CONDITIONS */}
      <section id="conditions" className="py-12 md:py-16 lg:py-24 px-5 md:px-8 lg:px-10 bg-[#fafaf8]">
        <div className="max-w-[1120px] mx-auto">
          <div className="flex items-center gap-3 text-[#0d6e6e] text-xs font-medium uppercase tracking-widest mb-3"><span className="w-6 h-[1px] bg-[#0d6e6e]"></span>Conditions Treated</div>
          <h2 className="text-[24px] md:text-[30px] lg:text-[clamp(30px,3.5vw,44px)] font-semibold text-[#1a1a1a] mb-3 md:mb-4">Areas of Expertise</h2>
          <p className="text-[14px] md:text-[17px] text-[#5a5a5a] max-w-[520px] leading-relaxed mb-10 md:mb-13">Comprehensive care for chronic and acute medical conditions.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 mt-10 md:mt-13">
            {conditions.map((item, i) => (
              <div key={i} className="fade-up opacity-0 translate-y-7 transition-all duration-700 border border-[#e0e8e8] rounded-lg p-5 md:p-7 hover:border-[#0d6e6e] hover:shadow-lg hover:-translate-y-0.5">
                <div className="w-10 md:w-12 h-10 md:h-12 mb-3 md:mb-4">{item.icon}</div>
                <h3 className="text-[14px] md:text-[16px] font-semibold text-[#1a1a1a] mb-2">{item.title}</h3>
                <p className="text-[12px] md:text-[14px] text-[#8a8a8a] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-12 md:py-16 lg:py-24 px-5 md:px-8 lg:px-10 bg-white">
        <div className="max-w-[1120px] mx-auto">
          <div className="flex items-center gap-3 text-[#0d6e6e] text-xs font-medium uppercase tracking-widest mb-3"><span className="w-6 h-[1px] bg-[#0d6e6e]"></span>Our Services</div>
          <h2 className="text-[24px] md:text-[30px] lg:text-[clamp(30px,3.5vw,44px)] font-semibold text-[#1a1a1a] mb-3 md:mb-4">What We Offer at Vedic<br/>Health Clinic</h2>
          <p className="text-[14px] md:text-[17px] text-[#5a5a5a] max-w-[520px] leading-relaxed mb-10 md:mb-13">Comprehensive clinical services under one roof.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 mt-10 md:mt-13">
            {services.map((item, i) => (
              <div key={i} className="fade-up opacity-0 translate-y-7 transition-all duration-700 bg-white border border-[#e0e8e8] rounded-lg p-5 md:p-7">
                <div className="text-[32px] md:text-[42px] font-semibold text-[#c2e0e0] leading-none mb-3">{item.num}</div>
                <h3 className="text-[14px] md:text-[16px] font-semibold text-[#1a1a1a] mb-2">{item.title}</h3>
                <p className="text-[12px] md:text-[14px] text-[#8a8a8a] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROFILE */}
      <section id="profile" className="py-12 md:py-16 lg:py-24 px-5 md:px-8 lg:px-10 bg-white">
        <div className="max-w-[1120px] mx-auto">
          <div className="flex items-center gap-3 text-[#0d6e6e] text-xs font-medium uppercase tracking-widest mb-3"><span className="w-6 h-[1px] bg-[#0d6e6e]"></span>Qualifications & Career</div>
          <h2 className="text-[24px] md:text-[30px] lg:text-[clamp(30px,3.5vw,44px)] font-semibold text-[#1a1a1a] mb-3 md:mb-4">Education & Professional<br/>Experience</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 lg:gap-20 mt-10 md:mt-13">
            {/* EDUCATION */}
            <div>
              <h3 className="text-[18px] md:text-[22px] font-semibold text-[#1a1a1a] mb-6 md:mb-8 pb-4 border-b-2 border-[#e6f4f4] flex items-center gap-2.5">
                <span className="w-7 h-7 bg-[#0d6e6e] rounded-full flex-shrink-0"></span>
                Education
              </h3>
              
              <div className="relative pl-6 pb-7 border-l-2 border-[#e6f4f4]">
                <div className="absolute w-2 h-2 bg-[#0d6e6e] rounded-full -left-[5px] top-1.5"></div>
                <div className="text-[14px] md:text-[15px] font-semibold text-[#1a1a1a] mb-1">MD – General Medicine</div>
                <div className="text-[13px] md:text-[14px] text-[#5a5a5a] mb-1">Dr. D. Y. Patil Medical College, Hospital & Research Centre, Pune</div>
              </div>
              
              <div className="relative pl-6 pb-7 border-l-2 border-[#e6f4f4]">
                <div className="absolute w-2 h-2 bg-[#0d6e6e] rounded-full -left-[5px] top-1.5"></div>
                <div className="text-[14px] md:text-[15px] font-semibold text-[#1a1a1a] mb-1">MBBS</div>
                <div className="text-[13px] md:text-[14px] text-[#5a5a5a]">Guntur Medical College & Government General Hospital (GGH), Guntur</div>
              </div>
              
              <div className="mt-7 mb-2">
                <div className="text-[14px] md:text-[15px] font-semibold text-[#094f4f]">Certifications</div>
              </div>
              
              <div className="relative pl-6 pb-7 border-l-2 border-[#e6f4f4]">
                <div className="absolute w-2 h-2 bg-[#0d6e6e] rounded-full -left-[5px] top-1.5"></div>
                <div className="text-[14px] md:text-[15px] font-semibold text-[#1a1a1a] mb-1">CCEBDM</div>
                <div className="text-[13px] md:text-[14px] text-[#5a5a5a] mb-2">Certificate Course in Evidence-Based Diabetes Management</div>
                <span className="inline-block text-[10px] md:text-[11px] font-semibold uppercase tracking-widest bg-[#f7f0e3] text-[#b5893a] border border-[#e8d5aa] px-2 py-1 rounded">Certification</span>
              </div>
              
              <div className="relative pl-6 border-l-2 border-transparent">
                <div className="absolute w-2 h-2 bg-[#0d6e6e] rounded-full -left-[5px] top-1.5"></div>
                <div className="text-[14px] md:text-[15px] font-semibold text-[#1a1a1a] mb-1">CCCKD</div>
                <div className="text-[13px] md:text-[14px] text-[#5a5a5a] mb-2">Certificate Course in Chronic Kidney Disease Management</div>
                <span className="inline-block text-[10px] md:text-[11px] font-semibold uppercase tracking-widest bg-[#f7f0e3] text-[#b5893a] border border-[#e8d5aa] px-2 py-1 rounded">Certification</span>
              </div>
            </div>
            
            {/* EXPERIENCE */}
            <div>
              <h3 className="text-[18px] md:text-[22px] font-semibold text-[#1a1a1a] mb-6 md:mb-8 pb-4 border-b-2 border-[#f7f0e3] flex items-center gap-2.5">
                <span className="w-7 h-7 bg-[#b5893a] rounded-full flex-shrink-0"></span>
                Experience
              </h3>
              
              <div className="relative pl-6 pb-7 border-l-2 border-[#e6f4f4]">
                <div className="absolute w-2 h-2 bg-[#b5893a] rounded-full -left-[5px] top-1.5"></div>
                <div className="text-[14px] md:text-[15px] font-semibold text-[#1a1a1a] mb-1">Consultant Physician</div>
                <div className="text-[13px] md:text-[14px] text-[#5a5a5a]">Vedic Health Clinic, Visakhapatnam</div>
              </div>
              
              <div className="relative pl-6 pb-7 border-l-2 border-[#e6f4f4]">
                <div className="absolute w-2 h-2 bg-[#b5893a] rounded-full -left-[5px] top-1.5"></div>
                <div className="text-[14px] md:text-[15px] font-semibold text-[#1a1a1a] mb-1">Assistant Professor – General Medicine</div>
                <div className="text-[13px] md:text-[14px] text-[#5a5a5a]">GITAM Institute of Medical Sciences, Rushikonda, Visakhapatnam</div>
              </div>
              
              <div className="relative pl-6 pb-7 border-l-2 border-[#e6f4f4]">
                <div className="absolute w-2 h-2 bg-[#b5893a] rounded-full -left-[5px] top-1.5"></div>
                <div className="text-[14px] md:text-[15px] font-semibold text-[#1a1a1a] mb-1">Senior Resident – General Medicine</div>
                <div className="text-[13px] md:text-[14px] text-[#5a5a5a]">GITAM Institute of Medical Sciences, Rushikonda, Visakhapatnam</div>
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
      </section>

      {/* PATIENT EDUCATION TILES - NEW SECTION - replaces old diabetes section */}
      <section id="education-tiles" className="py-12 md:py-16 lg:py-24 px-5 md:px-8 lg:px-10 bg-white">
        <div className="max-w-[1120px] mx-auto">
          <div className="flex items-center gap-3 text-[#0d6e6e] text-xs font-medium uppercase tracking-widest mb-3">
            <span className="w-6 h-[1px] bg-[#0d6e6e]"></span>
            Patient Education
          </div>
          <h2 className="text-[24px] md:text-[30px] lg:text-[clamp(30px,3.5vw,44px)] font-semibold text-[#1a1a1a] mb-3 md:mb-4">Learn About Your Health</h2>
          <p className="text-[14px] md:text-[17px] text-[#5a5a5a] max-w-[520px] leading-relaxed mb-10 md:mb-13">Click on a topic to learn more about your condition and treatment options.</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
            {[
              { title: 'Diabetes', desc: 'Understanding blood sugar, symptoms, and management.', page: '#/diabetes', icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg> },
              { title: 'Hypertension', desc: 'High blood pressure - the silent killer.', page: '#/hypertension', icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg> },
              { title: 'Fever', desc: 'Understanding fever and when to seek care.', page: '#/fever', icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg> },
              { title: 'Gastroenterology', desc: 'Digestive health and common GI issues.', page: '#/gastroenterology', icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1M12 12v5m0 5v1m-3-5h.01M4 12H3m1 0V7m0 5v.01M7 7v.01" /></svg> },
            ].map((item, i) => (
              <a key={i} href={item.page} className="fade-up opacity-0 translate-y-7 transition-all duration-700 block bg-[#fafaf8] border border-[#e0e8e8] rounded-lg p-5 md:p-6 hover:border-[#0d6e6e] hover:shadow-lg hover:-translate-y-0.5">
                <div className="w-10 h-10 bg-[#e6f4f4] rounded-full flex items-center justify-center mb-3 md:mb-4 text-[#0d6e6e]">{item.icon}</div>
                <h3 className="text-[14px] md:text-[16px] font-semibold text-[#1a1a1a] mb-2">{item.title}</h3>
                <p className="text-[12px] md:text-[14px] text-[#8a8a8a] leading-relaxed">{item.desc}</p>
                <span className="text-[11px] text-[#0d6e6e] font-medium mt-3 block">Learn more</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BAND */}
      <div className="bg-[#b5893a] py-10 md:py-12 lg:py-15 text-center px-5">
        <div className="max-w-[1120px] mx-auto">
          <h2 className="text-[22px] md:text-[26px] lg:text-[clamp(26px,3vw,38px)] font-semibold text-white mb-2 md:mb-3">Diabetes can be controlled.<br/>Early treatment prevents complications.</h2>
          <p className="text-[14px] md:text-[17px] text-white/85 mb-6 md:mb-8">Don't wait for symptoms to worsen. A single consultation can change your health trajectory.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 md:gap-4">
            <a href="#contact" onClick={(e) => handleNavClick(e, '#contact')} className="bg-white text-[#b5893a] px-6 md:px-7 py-3 md:py-3.5 rounded text-sm font-bold tracking-wide hover:bg-gray-100 transition-all">Book Appointment</a>
            <a href="tel:+919948494455" className="border border-white/60 text-white px-6 md:px-7 py-3 md:py-3.5 rounded text-sm font-semibold tracking-wide hover:border-white">Call Clinic</a>
          </div>
        </div>
      </div>

      {/* CONTACT */}
      <section id="contact" className="py-12 md:py-16 lg:py-24 px-5 md:px-8 lg:px-10 bg-white">
        <div className="max-w-[1120px] mx-auto">
          <div className="flex items-center gap-3 text-[#0d6e6e] text-xs font-medium uppercase tracking-widest mb-3"><span className="w-6 h-[1px] bg-[#0d6e6e]"></span>Get In Touch</div>
          <h2 className="text-[24px] md:text-[30px] lg:text-[clamp(30px,3.5vw,44px)] font-semibold text-[#1a1a1a] mb-3 md:mb-4">Book an Appointment</h2>
          <p className="text-[14px] md:text-[17px] text-[#5a5a5a] max-w-[520px] leading-relaxed mb-10 md:mb-13">Reach us by phone, walk in, or submit a request below and we will call you back.</p>
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-10 md:gap-16">
            <div className="fade-up opacity-0 translate-y-7 transition-all duration-700">
              <h3 className="text-[16px] md:text-[18px] font-semibold text-[#1a1a1a] mb-5 md:mb-6">Clinic Details</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3"><div className="w-8 h-8 bg-[#e6f4f4] rounded-full flex items-center justify-center text-[#0d6e6e] flex-shrink-0">📍</div><div><h4 className="text-[13px] font-semibold text-[#1a1a1a]">Address</h4><p className="text-[13px] text-[#5a5a5a]">Vedic Health Clinic<br/>PM Palem, Madhurawada<br/>Visakhapatnam, AP</p></div></div>
                <div className="flex items-start gap-3"><div className="w-8 h-8 bg-[#e6f4f4] rounded-full flex items-center justify-center text-[#0d6e6e] flex-shrink-0">📞</div><div><h4 className="text-[13px] font-semibold text-[#1a1a1a]">Phone</h4><p className="text-[13px] text-[#5a5a5a]"><a href="tel:+919948494455" className="hover:text-[#0d6e6e]">99484 94455</a>, <a href="tel:+919080988450" className="hover:text-[#0d6e6e]">9080 988450</a></p></div></div>
                <div className="flex items-start gap-3"><div className="w-8 h-8 bg-[#e6f4f4] rounded-full flex items-center justify-center text-[#0d6e6e] flex-shrink-0">🕐</div><div><h4 className="text-[13px] font-semibold text-[#1a1a1a]">Timings</h4><p className="text-[13px] text-[#5a5a5a]">Mon–Sat: 9AM–1PM, 5PM–9PM</p></div></div>
              </div>
              <div className="bg-[#e6f4f4] rounded-lg h-[180px] md:h-[220px] lg:h-[250px] mt-4 md:mt-6 border border-[#c2e0e0] overflow-hidden">
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d949.6868846690519!2d83.3482547!3d17.8035584!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f6669f88970ab9%3A0x278beeccdf51d7aa!2sVedic%20Health%20Clinic%20%26%20Diabetes%20Centre!5e0!3m2!1sen!2sin!4v1777006284228!5m2!1sen!2sin" width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Clinic Location"></iframe>
              </div>
            </div>
            <form onSubmit={handleSubmit} className="fade-up opacity-0 translate-y-7 transition-all duration-700">
              <h3 className="text-[16px] md:text-[18px] font-semibold text-[#1a1a1a] mb-5 md:mb-6">Request a Callback</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 mb-4 md:mb-5">
                <div><label className="text-[12px] md:text-[13px] font-medium text-[#5a5a5a] mb-1.5 block">Full Name</label><input type="text" name="name" value={formData.name} onChange={handleInputChange} placeholder="Your name" className="w-full px-3 md:px-4 py-2.5 md:py-3 border border-[#e0e8e8] rounded bg-white text-[14px] md:text-[15px] outline-none focus:border-[#0d6e6e]" required /></div>
                <div><label className="text-[12px] md:text-[13px] font-medium text-[#5a5a5a] mb-1.5 block">Phone Number</label><input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} placeholder="+91 XXXXX XXXXX" className="w-full px-3 md:px-4 py-2.5 md:py-3 border border-[#e0e8e8] rounded bg-white text-[14px] md:text-[15px] outline-none focus:border-[#0d6e6e]" required /></div>
              </div>
              <div className="mb-4 md:mb-5"><label className="text-[12px] md:text-[13px] font-medium text-[#5a5a5a] mb-1.5 block">Reason for Visit</label><select name="ReasonForVisit" value={formData.ReasonForVisit} onChange={handleInputChange} className="w-full px-3 md:px-4 py-2.5 md:py-3 border border-[#e0e8e8] rounded bg-white text-[14px] md:text-[15px] outline-none focus:border-[#0d6e6e]"><option value="">Select a concern</option><option>Diabetes / Blood Sugar</option><option>Blood Pressure / Hypertension</option><option>Thyroid / Hormonal Issues</option><option>Kidney-related Concern</option><option>Fever / Infection</option><option>General Health Checkup</option><option>Other</option></select></div>
              <div className="mb-4 md:mb-5"><label className="text-[12px] md:text-[13px] font-medium text-[#5a5a5a] mb-1.5 block">Message (Optional)</label><textarea name="message" value={formData.message} onChange={handleInputChange} placeholder="Brief description of your concern..." rows={3} className="w-full px-3 md:px-4 py-2.5 md:py-3 border border-[#e0e8e8] rounded bg-white text-[14px] md:text-[15px] outline-none focus:border-[#0d6e6e] resize-none"></textarea></div>
              <button type="submit" disabled={isSubmitting} className="w-full py-2.5 md:py-3.5 bg-[#094f4f] text-white rounded text-[14px] md:text-[15px] font-semibold tracking-wide hover:bg-[#0d6e6e] transition-colors disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2">
                {isSubmitting ? <><svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path></svg>Submitting...</> : 'Request Appointment'}
              </button>
              <p className="text-[11px] md:text-[12px] text-[#8a8a8a] text-center mt-2 md:mt-3">We will call you back within 2–4 hours during clinic hours.</p>
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#073d3d] py-10 md:py-14 lg:py-16 px-5 md:px-8 lg:px-10">
        <div className="max-w-[1120px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
            <div><img src="/assets/LOGO_footer.png" alt="Vedic Health Clinic" className="w-12 h-12 mb-3" /><h3 className="text-[15px] font-semibold text-white mb-2">Vedic Health Clinic</h3><p className="text-[13px] text-white/55">Expert care for diabetes and general health in Visakhapatnam.</p></div>
            <div><h4 className="text-[13px] font-semibold text-white mb-3">Quick Links</h4><ul className="space-y-2 text-[13px] text-white/55"><li><a href="#about" className="hover:text-white">About</a></li><li><a href="#conditions" className="hover:text-white">Conditions</a></li><li><a href="#services" className="hover:text-white">Services</a></li><li><a href="#profile" className="hover:text-white">Profile</a></li></ul></div>
            <div><h4 className="text-[13px] font-semibold text-white mb-3">Services</h4><ul className="space-y-2 text-[13px] text-white/55"><li>Diabetes Care</li><li>BP Management</li><li>Thyroid Care</li><li>Lab Diagnostics</li></ul></div>
            <div><h4 className="text-[13px] font-semibold text-white mb-3">Contact</h4><ul className="space-y-3 text-[13px] text-white/55"><li className="flex items-start gap-2"><svg className="w-4 h-4 mt-0.5 text-white/40 flex-shrink-0" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg><span className="text-[13px] md:text-[14px] text-white/60">Vedic Health Clinic<br/>PM Palem, Madhurawada<br/>Visakhapatnam, AP</span></li><li className="flex items-start gap-2"><svg className="w-4 h-4 mt-0.5 text-white/40 flex-shrink-0" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg><span className="text-[13px] md:text-[14px] text-white/60"><a href="tel:+919948494455" className="hover:text-white">99484 94455</a>, <a href="tel:+919080988450" className="hover:text-white">9080 988450</a></span></li><li className="flex items-start gap-2"><svg className="w-4 h-4 mt-0.5 text-white/40 flex-shrink-0" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg><span className="text-[13px] md:text-[14px] text-white/60">Mon–Sat: 9AM–1PM, 5PM–9PM</span></li></ul></div>
          </div>
          <div className="border-t border-white/10 pt-4 md:pt-6 flex flex-col sm:flex-row justify-between text-[12px] md:text-[13px] text-white/35 gap-2"><span>© 2025 Vedic Health Clinic. All rights reserved.</span><span>Dr. Barla Dasaradha Ram, MD (General Medicine)</span></div>
        </div>
      </footer>
    </div>
  )
}

const router = createHashRouter([
  { path: '/', element: <MainApp /> },
  { path: '/diabetes', element: <DiabetesPage /> },
  { path: '/hypertension', element: <HypertensionPage /> },
  { path: '/fever', element: <FeverPage /> },
  { path: '/gastroenterology', element: <GastroenterologyPage /> },
])

export default function App() {
  return <RouterProvider router={router} />
}