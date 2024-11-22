import {useEffect} from 'react'
import { Helmet } from 'react-helmet';
import Marquee from 'react-fast-marquee';
import Bg from "../assets/visa/VisaBG.jpg"
import SouthAfrica from "../assets/flags/south-africa-flag-large.jpg"
import SaudiArabia from "../assets/flags/saudi-arabia-flag-large.jpg"
import Qatar from "../assets/flags/qatar-flag-large.jpg"
import Oman from "../assets/flags/oman-flag-large.jpg"
import Kuwait from "../assets/flags/kuwait-flag-medium.jpg"
import Hungary from "../assets/flags/hungary-flag-large.jpg"
import Flag from '../Components/Flag';
import SideImage from "../assets/visa/visa1.jpg"
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react';
import axios from 'axios';

function Visa(){
  const [disable, setDisable]=useState(false);
  const [details,setDetails]=useState({name:"",email:"",number:"",visitCountry:"",visaType:"VisitingVisa"});

  const handleSubmit=(e)=>{
    e.preventDefault();
    setDisable(true);
    const data = {
      name: details.name,
      email: details.email,
      toMail: "growthnestsolutions@gmail.com",
      toName: "GrowthNEST Solutions",
      phone: details.mobile,
      subject: `Inquiry about your Services on ${details.visaType}`, // Include inquiryType in subject
      message: `I seek guidance regarding your services for visiting ${details.visitCountry} on ${details.visaType}.`,
    };
    axios.post("https://api.qrdcard.com/api/url/sendmail",data)
    .then((res)=>{
      if(res)
      {
        setDisable(false);
        alert("Form Submitted Successfully");
        setDetails({details,name:"",email:"",number:"",visitCountry:"",visaType:"VisitingVisa"});
      }
    })
    .catch((err)=>{console.log(err)});
    console.log(details);
  }

  return (
    <div className='flex items-center justify-center flex-col w-full'>
      <Helmet>
        <title>Visa & Immigration</title>
      </Helmet>
      <a href='https://api.whatsapp.com/send?phone=9052315354' target='_blank' className='bg-green-500 fixed bottom-10 right-10 h-10 w-10 p-1 rounded-full flex items-center justify-center animate-bounce hover:cursor-pointer'>
        <FontAwesomeIcon icon={faWhatsapp} className='text-white text-3xl'/>
      </a>
      <div className='pt-32 sm:pt-40 pb-20 sm:py-40 text-[#fff] flex items-center justify-center flex-col gap-5 w-full' style={{background:`linear-gradient(rgba(0,0,0,0.8),rgba(0,0,0,0.8)),url(${Bg})`,backgroundPosition:"center",backgroundSize:"cover"}}>
        <p className='font-extrabold text-center text-2xl sm:text-3xl md:text-4xl'>Visa & Immigration</p>
        <p className='text-sm md:text-lg font-light sm:font-semibold w-[80vw] md:w-[65vw] text-center -mb-5'>We assure reliable process and help to send you to your dream destination to chase your aspirations of going overseas for whatever reason.</p>
      </div>
      <div className='flex items-center justify-center flex-col mt-10'>
        <div className='flex items-center justify-center flex-col sm:flex-row gap-5 md:gap-10 px-5 lg:px-20'>
          <div className='p-5 w-[15rem] sm:w-[17rem] sm:h-[17rem] md:p-0 md:w-72 md:h-72 lg:h-96 lg:w-96 relative'>
            <p className='text-center text-sm text-white absolute scale-75 w-40 bg-black p-2 rounded-e-3xl rounded-tl-3xl -right-10 top-0'>Seamless visa and immigration assistance at your fingertips!</p>
            <img src={SideImage} alt="SideImage" className='rounded-tl-[2rem] rounded-br-[2rem] md:rounded-tl-[5rem] md:rounded-br-[5rem] border-r-8 border-[#d5a64e]'/>
          </div>
          <p className='sm:text-sm md:text-base text-center sm:w-72 md:w-80 lg:w-96 xl:w-[30rem] px-5 sm:px-0'>Every individual dreams of a bright future, whether building a career locally or exploring opportunities abroad. 
            At Ffortiwn Visas, we simplify the complex visa process and stay updated on immigration rules, ensuring a smooth journey for our clients. 
            Let us help you achieve your international aspirations effortlessly!
          </p>
        </div>
      </div>
      <div className='w-[90vw] sm:w-[80vw] lg:w-[70vw] xl:w-[50rem] my-5 sm:my-10'>
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
      <div className='flex items-center bg-zinc-200 w-full justify-center flex-col md:flex-row gap-10 py-20 mx-5'>
        <div className='flex items-center justify-center flex-col'>
          <p className='text-2xl font-bold text-center md:text- w-full'>Contact Us - </p>
          <div>
            <form action="" onSubmit={handleSubmit}>  
              <div className={`${window.innerWidth <350 ?"w-[80vw]":"w-72"} sm:w-72 md:w-80 my-2`}>
                <p className='font-semibold text-lg'>Name <span className='text-red-600'>*</span></p>
                <input type="text" placeholder='Your Name' value={details.name} required name="name" onChange={(e)=>{setDetails({...details,name:e.target.value})}} className='border-b-2 border-[#d5a64e] outline-none bg-white shadow-md shadow-slate-400 rounded-sm w-full px-2 py-1 text-slate-900'/>
              </div>
              <div className={`${window.innerWidth <350 ?"w-[80vw]":"w-72"} sm:w-72 md:w-80 my-2`}>
                <p className='font-semibold text-lg'>Email <span className='text-red-600'>*</span></p>
                <input type="email"  placeholder='Your Email' value={details.email} required name="email" onChange={(e)=>{setDetails({...details,email:e.target.value})}} className='border-b-2 border-[#d5a64e] outline-none bg-white shadow-md shadow-slate-400 rounded-sm w-full px-2 py-1 text-slate-900'/>
              </div>
              <div className={`${window.innerWidth <350 ?"w-[80vw]":"w-72"} sm:w-72 md:w-80 my-2`}>
                <p className='font-semibold text-lg'>Mobile Number <span className='text-red-600'>*</span></p>
                <input type="number" placeholder='Your mobile number' value={details.number} required name="mobile" onChange={(e)=>{setDetails({...details,number:e.target.value})}} className='border-b-2 border-[#d5a64e] outline-none bg-white shadow-md shadow-slate-400 rounded-sm w-full px-2 py-1 text-slate-900'/>
              </div>
              <div className={`${window.innerWidth <350 ?"w-[80vw]":"w-72"} sm:w-72 md:w-80 my-2`}>
                <p className='font-semibold text-lg'>Country to Visit <span className='text-red-600'>*</span></p>
                <input type="text" placeholder='Desired Country' required value={details.visitCountry} name="country" onChange={(e)=>{setDetails({...details,visitCountry:e.target.value})}} className='border-b-2 border-[#d5a64e] outline-none bg-white shadow-md shadow-slate-400 rounded-sm w-full px-2 py-1 text-slate-900'/>
              </div>
              <div className={`${window.innerWidth <350 ?"w-[80vw]":"w-72"} sm:w-72 md:w-80 my-2`}>
                <p className='font-semibold text-lg'>Visa <span className='text-red-600'>*</span></p>
                <select placeholder="Visa type" name="visa" value={details.visaType} onChange={(e)=>{setDetails({...details,visaType:e.target.value})}} className='border-b-2 border-[#d5a64e] outline-none bg-white shadow-md shadow-slate-400 rounded-sm w-full px-2 py-1 text-slate-900'>
                  <option value="VisitingVisa" className='w-full'>Visiting VISA</option>
                  <option value="WorkingVisa" className='w-full'>Working VISA</option>
                  <option value="StudentVisa" className='w-full'>Student VISA</option>
                  <option value="OtherVisa" className='w-full'>Other</option>
                </select>
              </div >
              <div className='flex justify-center mt-5'>
                <button type="submit" disabled={disable} className='bg-[#000] hover:bg-zinc-900 rounded-sm px-6 py-1 text-[#fff] font-semibold shadow-md shadow-slate-400 transition-all duration-300'>Submit</button>
              </div>
            </form>
          </div>
        </div>
        <div className=''>
          <iframe className='w-[90vw] h-60 sm:w-[80vw] sm:h-56 md:h-72 md:w-[26rem] lg:h-80 lg:w-[35rem]' src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3801.300690919482!2d83.19375!3d17.683249999999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTfCsDQwJzU5LjciTiA4M8KwMTEnMzcuNSJF!5e0!3m2!1sen!2sin!4v1732095987029!5m2!1sen!2sin" style={{border:0}} loading="lazy" ></iframe>
        </div>
      </div>
    </div>
  )
}

export default Visa