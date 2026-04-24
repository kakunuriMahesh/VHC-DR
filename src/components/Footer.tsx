import { FiMapPin, FiPhone, FiClock } from 'react-icons/fi'

export default function Footer() {
  return (
    <footer className="bg-[#073d3d] py-10 md:py-14 lg:py-16 px-5 md:px-8 lg:px-10">
      <div className="max-w-[1120px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
          <div>
            <img src="/assets/LOGO_footer.png" alt="Vedic Health Clinic" className="w-12 h-12 mb-3" />
            <h3 className="text-[15px] font-semibold text-white mb-2">Vedic Health Clinic</h3>
            <p className="text-[13px] text-white/55">Expert care for diabetes and general health in Visakhapatnam.</p>
          </div>
          <div>
            <h4 className="text-[13px] font-semibold text-white mb-3">Quick Links</h4>
            <ul className="space-y-2 text-[13px] text-white/55">
              <li><a href="#/about" className="hover:text-white">About</a></li>
              <li><a href="#/conditions" className="hover:text-white">Conditions</a></li>
              <li><a href="#/services" className="hover:text-white">Services</a></li>
              <li><a href="#/profile" className="hover:text-white">Profile</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-[13px] font-semibold text-white mb-3">Services</h4>
            <ul className="space-y-2 text-[13px] text-white/55">
              <li>Diabetes Care</li>
              <li>BP Management</li>
              <li>Thyroid Care</li>
              <li>Lab Diagnostics</li>
            </ul>
          </div>
          <div>
            <h4 className="text-[13px] font-semibold text-white mb-3">Contact</h4>
            <ul className="space-y-3 text-[13px] text-white/55">
              <li className="flex items-start gap-2">
                <FiMapPin className="w-4 h-4 mt-1 text-white/40 flex-shrink-0" />
                <span className="text-[13px] md:text-[14px] text-white/60">Vedic Health Clinic<br/>PM Palem, Madhurawada<br/>Visakhapatnam, AP</span>
              </li>
              <li className="flex items-start gap-2">
                <FiPhone className="w-4 h-4 mt-1 text-white/40 flex-shrink-0" />
                <span className="text-[13px] md:text-[14px] text-white/60">
                  <a href="tel:+919948494455" className="hover:text-white">99484 94455</a>, <a href="tel:+919080988450" className="hover:text-white">9080 988450</a>
                </span>
              </li>
              <li className="flex items-start gap-2">
                <FiClock className="w-4 h-4 mt-1 text-white/40 flex-shrink-0" />
                <span className="text-[13px] md:text-[14px] text-white/60">Mon–Sat: 9AM–1PM, 5PM–9PM</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 pt-4 md:pt-6 flex flex-col sm:flex-row justify-between text-[12px] md:text-[13px] text-white/35 gap-2">
          <span>© 2025 Vedic Health Clinic. All rights reserved.</span>
          <span>Dr. Barla Dasaradha Ram, MD (General Medicine)</span>
        </div>
      </div>
    </footer>
  )
}