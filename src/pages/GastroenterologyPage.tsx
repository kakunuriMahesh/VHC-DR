import { useEffect } from 'react'

export default function GastroenterologyPage() {
  useEffect(() => { window.scrollTo(0, 0) }, [])
  return (
    <div className="min-h-screen bg-[#fafaf8]">
      <div className="container py-12 md:py-16 lg:py-24 px-5 md:px-8 lg:px-10 max-w-[1120px] mx-auto">
        <a href="#education-tiles" className="inline-flex items-center gap-2 text-[#0d6e6e] text-sm font-medium uppercase tracking-widest mb-4 hover:opacity-70">
          <span>←</span> Back to Education
        </a>
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
}