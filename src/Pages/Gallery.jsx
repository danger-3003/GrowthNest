import { useRef, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Marquee from 'react-fast-marquee'
import GalleryCard from '../Components/GalleryCard'
import Flag from '../Components/Flag'
import Affordable from "../assets/gallery/Affordable.webp"
import Global from "../assets/gallery/globalOpportunities.png"
import Requirements from "../assets/gallery/Requirements.png"
import Age from "../assets/gallery/noAgeLimit.webp"
import Support from "../assets/gallery/Support.webp"
import SouthAfrica from "../assets/flags/south-africa-flag-large.jpg"
import SaudiArabia from "../assets/flags/saudi-arabia-flag-large.jpg"
import Qatar from "../assets/flags/qatar-flag-large.jpg"
import Oman from "../assets/flags/oman-flag-large.jpg"
import Kuwait from "../assets/flags/kuwait-flag-medium.jpg"
import Hungary from "../assets/flags/hungary-flag-large.jpg"
import AOS from 'aos'
import "aos/dist/aos.css"

function Gallery() {
  const location = useLocation();
  const gallerySection=useRef(null);

  useEffect(()=>{
    if(location.hash==="#gallery" && gallerySection.current)
    {
      gallerySection.current.scrollIntoView({behavior:"smooth"});
    }
  },[location]);
  useEffect(()=>{
    AOS.init({duration:1000});
    AOS.refresh();
  },[]);

  return (
    <div ref={gallerySection} className='bg-zinc-100 py-20 px-5 md:px-10 lg:px-16 -mt-5'>
      <div className='flex items-center justify-center flex-col overflow-hidden'>
        <p className='text-3xl md:text-4xl font-extrabold mb-5' data-aos="fade-right" data-aos-once={true}>Why Choose Us?</p>
        <p className='text-center md:px-10 lg:px-16 mb-5 leading-8' data-aos="fade-left" data-aos-once={true}>At Growth Nest Solutions, we offer affordable solutions for <span className='text-lg font-semibold text-[#d5a64e] uppercase'>international education</span> and <span className='text-lg font-semibold text-[#d5a64e] uppercase'>global job opportunities</span> in top destinations such as <span className='text-lg font-semibold uppercase'>Kuwait, Saudi Arabia, South Africa, Qatar, Oman, Hungary, <span className='font-normal normal-case'>and </span>Abu Dhabi.</span> Whether you're a recent graduate or an experienced professional, we provide tailored opportunities to suit your skills and aspirations.</p>
        <div className='flex flex-wrap items-start justify-center gap-5 md:gap-10'>
          <GalleryCard fade="fade" image={Requirements} heading="Minimal Requirements" content="Opportunities for applicants with minimum requirements"/>
          <GalleryCard fade="fade" image={Affordable} heading="Affordability" content="Affordable international education for all."/>
          <GalleryCard fade="fade" image={Global} heading="Global Opportunities" content="Opening doors to the global opportunities."/>
          <GalleryCard fade="fade" image={Age} heading="No Age Bar" content="Welcoming applicants with age 21 and above."/>
          <GalleryCard fade="fade" image={Support} heading="Comprehensive Support" content="Supporting your journey in every step."/>
        </div>
        <div className='w-[90vw] sm:w-[80vw] lg:w-[70vw] xl:w-[50rem] mt-10'>        
          <p className='text-center font-semibold text-xl md:text-2xl'>Our Featured Clients from the following Cuntries</p>
          <Marquee gradient gradientWidth={70} gradientColor='#f4f4f5' speed={70}>
            <Flag image={SouthAfrica}/>
            <Flag image={SaudiArabia}/>
            <Flag image={Oman}/>
            <Flag image={Kuwait}/>
            <Flag image={Qatar}/>
            <Flag image={Hungary}/>
          </Marquee>
        </div>
      </div>
    </div>
  )
}

export default Gallery