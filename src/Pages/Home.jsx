import {useRef, useEffect} from 'react'
import headerImage from "../assets/headerImage.jpg"
import { Link, useLocation } from 'react-router-dom'
import AOS from "aos"
import "aos/dist/aos.css"
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Home() {
  const homeSection=useRef(null);
  const location = useLocation();

  useEffect(()=>{
    if(location.hash==="#home" && homeSection.current)
    {
      homeSection.current.scrollIntoView({behavior:"smooth"});
    }
  },[location]);
  useEffect(() => {
    AOS.init({duration: 1000,});
    AOS.refresh();
  }, []);

  return (
    <div ref={homeSection} className='h-max flex items-center text-white justify-center md:justify-end py-32' style={{background:`linear-gradient(to left,rgb(0,0,0),rgba(0,0,0,0.5)),url(${headerImage})`,backgroundPosition:"center",backgroundSize:"cover"}}>
      <div className='text-center md:text-right md:basis-[70%] lg:basis-[70%] px-7 md:px-10 lg:px-16'>
        <p className='text-3xl md:text-4xl font-extrabold my-10' data-aos="fade-right" data-aos-once={true}>Building Bright Foundations for Brighter Futures!</p>
        <p className='text-base md:text-lg mb-7' data-aos="fade-right" data-aos-once={true}>Explore global education with our Study Abroad programs—guiding you from course selection to admission for academic success! Plus, unlock exciting job opportunities that match your skills and aspirations, ensuring a bright future both academically and professionally!</p>
        <Link to="/jobs" data-aos="fade-up" data-aos-once={true} className="relative inline-flex items-center px-9 py-2 overflow-hidden font-medium text-[#d5a64e] border-2 border-[#d5a64e] rounded-full hover:text-black group hover:bg-black">
          <span className="absolute left-0 block w-full h-0 transition-all bg-[#d5a64e] opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
          <span className="absolute right-0 flex items-center justify-start w-7 h-5 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
          </span>
          <span className="relative">Explore More</span>
        </Link>
      </div>
      <a href='https://api.whatsapp.com/send?phone=9052315354' target='_blank' className='bg-green-500 fixed z-[8] bottom-10 right-10 h-10 w-10 p-1 rounded-full flex items-center justify-center animate-bounce hover:cursor-pointer'>
        <FontAwesomeIcon icon={faWhatsapp} className='text-white text-3xl'/>
      </a>
    </div>
  )
}

export default Home