import { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { FiMapPin, FiPhone, FiClock, FiCheck, FiX } from 'react-icons/fi'
import { saveToSheet } from '../services/sheetService'

export default function ContactPage() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  const [formData, setFormData] = useState({ name: '', phone: '', ReasonForVisit: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [toast, setToast] = useState<{ show: boolean; type: 'success' | 'error'; message: string }>({ show: false, type: 'success', message: '' })

  const showToast = (type: 'success' | 'error', message: string) => {
    setToast({ show: true, type, message })
    setTimeout(() => setToast({ show: false, type: 'success', message: '' }), 4000)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    try {
      await saveToSheet(e.currentTarget)
      showToast('success', 'Appointment request submitted! We will call you soon.')
      setFormData({ name: '', phone: '', ReasonForVisit: '', message: '' })
    } catch (error) {
      console.error(error)
      showToast('error', 'Failed to submit. Please try again or call us directly.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-[#fafaf8]">
      <Navbar />
      {toast.show && (
        <div className={`fixed top-20 left-1/2 -translate-x-1/2 z-50 px-5 py-3 rounded-lg shadow-xl flex items-center gap-3 ${
          toast.type === 'success' ? 'bg-green-600' : 'bg-red-600'
        }`}>
          {toast.type === 'success' ? <FiCheck className="w-5 h-5 text-white" /> : <FiX className="w-5 h-5 text-white" />}
          <span className="text-white text-sm font-medium">{toast.message}</span>
        </div>
      )}
      <div className="pt-[68px]">
        <section className="py-12 md:py-16 lg:py-24 px-5 md:px-8 lg:px-10 bg-white">
          <div className="max-w-[1120px] mx-auto">
            <div className="flex items-center gap-3 text-[#0d6e6e] text-xs font-medium uppercase tracking-widest mb-3"><span className="w-6 h-[1px] bg-[#0d6e6e]"></span>Get In Touch</div>
            <h2 className="text-[24px] md:text-[30px] lg:text-[clamp(30px,3.5vw,44px)] font-semibold text-[#1a1a1a] mb-3 md:mb-4">Book an Appointment</h2>
            <p className="text-[14px] md:text-[17px] text-[#5a5a5a] max-w-[520px] leading-relaxed mb-10 md:mb-13">Reach us by phone, walk in, or submit a request below and we will call you back.</p>
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-10 md:gap-16">
              <div>
                <h3 className="text-[16px] md:text-[18px] font-semibold text-[#1a1a1a] mb-5 md:mb-6">Clinic Details</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-[#e6f4f4] rounded-full flex items-center justify-center flex-shrink-0">
                      <FiMapPin className="w-4 h-4 text-[#0d6e6e]" />
                    </div>
                    <div><h4 className="text-[13px] font-semibold text-[#1a1a1a]">Address</h4><p className="text-[13px] text-[#5a5a5a]">Vedic Health Clinic<br/>PM Palem, Madhurawada<br/>Visakhapatnam, AP</p></div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-[#e6f4f4] rounded-full flex items-center justify-center flex-shrink-0">
                      <FiPhone className="w-4 h-4 text-[#0d6e6e]" />
                    </div>
                    <div><h4 className="text-[13px] font-semibold text-[#1a1a1a]">Phone</h4><p className="text-[13px] text-[#5a5a5a]"><span className="font-medium">Reception</span> - <a href="tel:+919948494455" className="hover:text-[#0d6e6e]">99484 94455</a><br/><span className="font-medium">Dr. Ram</span> - <a href="tel:+919080988450" className="hover:text-[#0d6e6e]">9080 988450</a></p></div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-[#e6f4f4] rounded-full flex items-center justify-center flex-shrink-0">
                      <FiClock className="w-4 h-4 text-[#0d6e6e]" />
                    </div>
                    <div><h4 className="text-[13px] font-semibold text-[#1a1a1a]">Timings</h4><p className="text-[13px] text-[#5a5a5a]">Mon–Sat: 9AM–1PM, 5PM–9PM</p></div>
                  </div>
                </div>
                <div className="bg-[#e6f4f4] rounded-lg h-[180px] md:h-[220px] lg:h-[250px] mt-4 md:mt-6 border border-[#c2e0e0] overflow-hidden">
                  <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d949.6868846690519!2d83.3482547!3d17.8035584!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f6669f88970ab9%3A0x278beeccdf51d7aa!2sVedic%20Health%20Clinic%20%26%20Diabetes%20Centre!5e0!3m2!1sen!2sin!4v1777006284228!5m2!1sen!2sin" width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Clinic Location"></iframe>
                </div>
              </div>
              <form onSubmit={handleSubmit}>
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
      </div>
      <Footer />
    </div>
  )
}