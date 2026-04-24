import { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function BlogPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const blogs = [
    {
      title: "Understanding Diabetes: A Complete Guide",
      excerpt: "Learn about diabetes management, blood sugar control, and lifestyle changes that make a difference.",
      date: "December 2024",
      category: "Diabetes",
      link: "https://pubmed.ncbi.nlm.nih.gov/?term=diabetes+management"
    },
    {
      title: "Hypertension: The Silent Killer",
      excerpt: "Why high blood pressure is dangerous and how to keep it under control.",
      date: "November 2024",
      category: "Heart Health",
      link: "https://pubmed.ncbi.nlm.nih.gov/?term=hypertension+treatment"
    },
    {
      title: "Managing Fever at Home",
      excerpt: "When to treat fever at home and when to seek medical attention.",
      date: "October 2024",
      category: "General Health",
      link: "https://pubmed.ncbi.nlm.nih.gov/?term=fever+management"
    },
    {
      title: "Diet Tips for Diabetes Patients",
      excerpt: "Healthy eating habits that help control blood sugar levels effectively.",
      date: "September 2024",
      category: "Nutrition",
      link: "https://pubmed.ncbi.nlm.nih.gov/?term=diabetes+diet"
    },
    {
      title: "Thyroid Disorders: What You Should Know",
      excerpt: "Understanding thyroid function, symptoms, and treatment options.",
      date: "August 2024",
      category: "Endocrinology",
      link: "https://pubmed.ncbi.nlm.nih.gov/?term=thyroid+disorders"
    },
    {
      title: "Heart Health and Blood Pressure",
      excerpt: "Connection between cardiovascular health and blood pressure management.",
      date: "July 2024",
      category: "Heart Health",
      link: "https://pubmed.ncbi.nlm.nih.gov/?term=cardiovascular+health"
    }
  ]

  const publications = [
    {
      title: "Pulmonary Dysfunction in Patients with Cirrhosis of the Liver: A Study of Pulmonary Function Tests and Arterial Blood Gases",
      source: "International Journal of Advanced Biomedicine",
      link: "https://journals.lww.com/ijab/fulltext/2024/14010/pulmonary_dysfunction_in_patients_with_cirrhosis.9.aspx"
    },
    {
      title: "Upper and Lower Gastrointestinal Endoscopic Lesions in Patients with Unexplained Iron Deficiency Anaemia",
      source: "International Journal of Current Research",
      link: "https://openurl.ebsco.com/EPDB%3Agcd%3A3%3A19450259/detailv2?sid=ebsco%3Aplink%3Ascholar&id=ebsco%3Agcd%3A152436354&crl=c"
    },
    {
      title: "Study of High sensitivity C Reactive Protein Levels in Patients with Chronic Dyspepsia and Its Correlation with Helicobacter Pylori Infection",
      source: "International Journal of Biomedical and Advanced Research",
      link: "https://www.ijbamr.com/assets/images/issues/pdf/FVM15s_gB3oW9_O2Qx5k_17FoV3_191186.pdf"
    },
    {
      title: "National Diabetes Prevention Program Guidelines",
      source: "CDC",
      link: "https://www.cdc.gov/diabetes/prevention/index.html"
    },
    {
      title: "WHO Diabetes Management Guidelines",
      source: "World Health Organization",
      link: "https://www.who.int/news-room/fact-sheets/detail/diabetes"
    },
    {
      title: "American Diabetes Association Standards",
      source: "ADA",
      link: "https://diabetes.org/science-and-research"
    },
    {
      title: "ISH Hypertension Guidelines",
      source: "International Society of Hypertension",
      link: "https://www.ish-world.com/"
    }
  ]

  return (
    <div className="min-h-screen bg-[#fafaf8]">
      <Navbar />
      <div className="pt-[68px]">
        <section className="bg-[#094f4f] py-12 md:py-16 px-5 md:px-8 lg:px-10">
          <div className="max-w-[1120px] mx-auto">
            <span className="text-[12px] md:text-[13px] text-white/60 uppercase tracking-widest">Health Resources</span>
            <h1 className="text-[28px] md:text-[36px] lg:text-[42px] text-white font-bold mt-2">Health Blog</h1>
            <p className="text-[15px] md:text-[17px] text-white/70 mt-3 max-w-[640px]">Expert articles, medical insights, and health tips to help you stay informed and healthy.</p>
          </div>
        </section>

        <section className="py-10 md:py-14 px-5 md:px-8 lg:px-10">
          <div className="max-w-[1120px] mx-auto">
            <h2 className="text-[20px] md:text-[24px] font-bold text-[#1a1a1a] mb-6">Latest Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
              {blogs.map((blog, idx) => (
                <a key={idx} href={blog.link} target="_blank" rel="noopener noreferrer" className="block bg-white rounded-lg p-5 md:p-6 border border-[#e8e8e8] hover:border-[#0d6e6e]/30 hover:shadow-lg transition-all">
                  <span className="text-[11px] font-semibold text-[#0d6e6e] uppercase tracking-wide">{blog.category}</span>
                  <h3 className="text-[17px] md:text-[18px] font-bold text-[#1a1a1a] mt-2 leading-tight">{blog.title}</h3>
                  <p className="text-[13px] md:text-[14px] text-[#6a6a6a] mt-2 leading-relaxed">{blog.excerpt}</p>
                  <span className="text-[12px] text-[#9a9a9a] mt-4 block">{blog.date}</span>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="py-10 md:py-14 px-5 md:px-8 lg:px-10 bg-[#f0f7f7]">
          <div className="max-w-[1120px] mx-auto">
            <h2 className="text-[20px] md:text-[24px] font-bold text-[#1a1a1a] mb-6">Trusted Publications</h2>
            <p className="text-[14px] md:text-[16px] text-[#5a5a5a] mb-6">Authoritative medical resources and guidelines from recognized health organizations.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {publications.map((pub, idx) => (
                <a key={idx} href={pub.link} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between bg-white rounded-lg p-4 md:p-5 border border-[#e0e8e8] hover:border-[#0d6e6e]/40 hover:shadow-md transition-all">
                  <div>
                    <h3 className="text-[15px] md:text-[16px] font-semibold text-[#1a1a1a]">{pub.title}</h3>
                    <span className="text-[12px] text-[#8a8a8a]">{pub.source}</span>
                  </div>
                  <svg className="w-5 h-5 text-[#0d6e6e]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="py-10 md:py-14 px-5 md:px-8 lg:px-10">
          <div className="max-w-[1120px] mx-auto">
            <h2 className="text-[20px] md:text-[24px] font-bold text-[#1a1a1a] mb-4">PubMed Research</h2>
            <p className="text-[14px] md:text-[16px] text-[#5a5a5a] mb-5">Search peer-reviewed medical research on PubMed.</p>
            <a href="https://pubmed.ncbi.nlm.nih.gov/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#0d6e6e] text-white px-5 py-2.5 rounded font-medium text-[14px] hover:bg-[#094f4f] transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
              Search PubMed
            </a>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  )
}