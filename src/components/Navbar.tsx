import { useState, MouseEvent } from 'react'

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const handleNavClick = (e: MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault()
    setMobileMenuOpen(false)
    if (window.location.hash !== '#/') {
      window.location.hash = '/'
      setTimeout(() => {
        const element = document.querySelector(`#${sectionId}`)
        if (element) {
          const offset = 80
          const top = element.getBoundingClientRect().top + window.scrollY - offset
          window.scrollTo({ top, behavior: 'smooth' })
        }
      }, 100)
    } else {
      const element = document.querySelector(`#${sectionId}`)
      if (element) {
        const offset = 80
        const top = element.getBoundingClientRect().top + window.scrollY - offset
        window.scrollTo({ top, behavior: 'smooth' })
      }
    }
  }

  return (
    <>
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#fafaf8]/96 backdrop-blur-xl border-b border-[#e0e8e8] px-5 md:px-8 lg:px-10 h-[60px] md:h-[68px] flex items-center justify-between">
      <div className="flex items-center gap-3">
        <a href="#/">
          <img src="/assets/LOGO_footer.png" alt="Vedic Health Clinic" className="w-10 h-10 md:w-12 md:h-12" />
        </a>
        <div className="flex flex-col leading-tight">
          <a href="#/" className="font-[Cormorant_Garamond] text-lg md:text-xl font-semibold text-[#094f4f] tracking-wide">Vedic Health Clinic</a>
          <span className="text-[10px] md:text-[11px] text-[#8a8a8a] uppercase tracking-widest hidden sm:block">Visakhapatnam</span>
        </div>
      </div>
      <ul className="hidden lg:flex items-center gap-6 xl:gap-8">
        <li><a href="#/about" className="text-sm font-medium text-[#5a5a5a] hover:text-[#0d6e6e] transition-colors">About</a></li>
        <li><a href="#/conditions" className="text-sm font-medium text-[#5a5a5a] hover:text-[#0d6e6e] transition-colors">Conditions</a></li>
        <li><a href="#/services" className="text-sm font-medium text-[#5a5a5a] hover:text-[#0d6e6e] transition-colors">Services</a></li>
        <li><a href="#/profile" className="text-sm font-medium text-[#5a5a5a] hover:text-[#0d6e6e] transition-colors">Profile</a></li>
        <li><a href="#/" onClick={(e) => handleNavClick(e, 'education-tiles')} className="text-sm font-medium text-[#5a5a5a] hover:text-[#0d6e6e] transition-colors">Education</a></li>
        <li><a href="#/blog" className="text-sm font-medium text-[#5a5a5a] hover:text-[#0d6e6e] transition-colors">Blog</a></li>
        <li><a href="#/contact" className="bg-[#0d6e6e] text-white px-4 md:px-5 py-1.5 md:py-2 rounded text-[12px] md:text-[13px] font-semibold tracking-wide hover:bg-[#094f4f] transition-colors">Book Appointment</a></li>
      </ul>
      <button className="lg:hidden p-2 text-[#094f4f]" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">{mobileMenuOpen ? <path d="M18 6L6 18M6 6l12 12"/> : <path d="M3 12h18M3 6h18M3 18h18"/>}</svg>
      </button>
    </nav>
    {mobileMenuOpen && (
      <div className="fixed inset-0 z-40 lg:hidden pt-[68px]">
        <div className="absolute inset-0 bg-black/50" onClick={() => setMobileMenuOpen(false)}></div>
        <div className="absolute top-[68px] left-0 right-0 bg-white shadow-xl p-4">
          <ul className="space-y-4">
            <li><a href="#/about" onClick={() => setMobileMenuOpen(false)} className="block text-base font-medium text-[#5a5a5a] py-2">About</a></li>
            <li><a href="#/conditions" onClick={() => setMobileMenuOpen(false)} className="block text-base font-medium text-[#5a5a5a] py-2">Conditions</a></li>
            <li><a href="#/services" onClick={() => setMobileMenuOpen(false)} className="block text-base font-medium text-[#5a5a5a] py-2">Services</a></li>
            <li><a href="#/profile" onClick={() => setMobileMenuOpen(false)} className="block text-base font-medium text-[#5a5a5a] py-2">Profile</a></li>
            <li><a href="#/" onClick={(e) => { setMobileMenuOpen(false); handleNavClick(e, 'education-tiles') }} className="block text-base font-medium text-[#5a5a5a] py-2">Education</a></li>
            <li><a href="#/blog" onClick={() => setMobileMenuOpen(false)} className="block text-base font-medium text-[#5a5a5a] py-2">Blog</a></li>
            <li><a href="#/contact" onClick={() => setMobileMenuOpen(false)} className="block bg-[#0d6e6e] text-white text-center px-5 py-3 rounded text-sm font-semibold">Book Appointment</a></li>
          </ul>
        </div>
      </div>
    )}
    </>
  )
}