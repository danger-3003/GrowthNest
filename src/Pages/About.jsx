import {useEffect, useRef} from 'react'
import { useLocation } from 'react-router-dom'
import ServicesCard from '../Components/ServicesCard';
import EducationImage from "../assets/Services/Education.svg";
import Visa from "../assets/Services/Visa.svg";
import Jobs from "../assets/Services/Jobs.svg";
import AboutImage from "../assets/jobs/reference1.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

function About() {
  const aboutSection = useRef(null);
  const location = useLocation();

  useEffect(() =>{
    if(location.hash==="#about" && aboutSection.current)
    {
      aboutSection.current.scrollIntoView({behavior: 'smooth'});
    }
  },[location])
  useEffect(() => {
    AOS.init({duration: 1000,});
    AOS.refresh();
  }, []);

  return (
    <div ref={aboutSection} className='pt-20 relative'>
      <div className='bg-zinc-100 h-[50%] md:h-[27rem] w-[50vw] absolute left-0 top-[40%]'></div>
      <div className='flex items-center justify-center flex-col'>
        <div className='flex items-center justify-center flex-col sm:flex-row'>
          <div className='sm:basis-[70%] mx-[5vw] mb-10 sm:mr-0 md:mx-10 flex items-center sm:items-start flex-col'>
            <div className='text-center sm:text-left text-2xl sm:text-3xl md:text-4xl font-extrabold mb-5' data-aos="fade-up" data-aos-once={true}>Welcome to GrowthNEST&nbsp;Solutions</div>
            <div className='flex items-start flex-row'>
              <div className='h-0.5 w-40 sm:w-60 bg-[#d5a64e] mb-3' data-aos="fade-up" data-aos-once={true}></div>
              <div className='h-0.5 w-10 bg-[#d5a64e] mx-2 mb-3' data-aos="fade-up" data-aos-once={true}></div>
              <div className='h-0.5 w-5 bg-[#d5a64e]  mb-3' data-aos="fade-up" data-aos-once={true}></div>
            </div>
            <p className='text-base md:text-lg text-center sm:text-left font-normal md:leading-8 mt-4' data-aos="fade-up" data-aos-once={true}>Welcome to GrowthNEST Solutions, your trusted partner in pursuing education and
              employment opportunities abroad. Our mission is to provide comprehensive consultancy services,
              guiding students and professionals towards achieving their academic and career aspirations on a
              global stage. 
            </p>
          </div>
          <div className='sm:basis-[40%] mx-5 md:mx-10'>
            <img src={AboutImage} alt="about-us" className='h-60 md:h-96 object-cover rounded-tl-3xl rounded-br-3xl border-l-8 border-[#d5a64e]'/>
          </div>
        </div>
        <div className='flex items-center justify-center flex-col my-10 relative'>
          <p className='text-[#d5a64e] font-bold text-3xl mb-5' data-aos="fade-up" data-aos-once={true}>Our Services</p>
          <div className='flex items-center justify-center flex-row flex-wrap'>
            <ServicesCard 
              image={EducationImage}
              heading="Educational Consultancy"
              content="We guide you in choosing courses and institutions worldwide, ensuring pathways for education and career advancement in diverse fields."
              fade="fade"
            />
            <ServicesCard 
              image={Jobs}
              heading="Job Placements"
              content="We connect skilled workers, including welders, electricians, and safety officers, with reputable employers abroad for safe, rewarding jobs."
              fade="fade"
            />
            <ServicesCard 
              image={Visa}
              heading="Visa Processing"
              content="Navigating visas is daunting; our expert team simplifies the process, ensuring a smooth, efficient application for your journey abroad."
              fade="fade"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default About