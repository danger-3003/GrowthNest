import {useEffect, useRef, useState} from 'react'
import { useLocation } from 'react-router-dom'
import axios from 'axios';

function Contact() {
  const location = useLocation();
  const contactSection = useRef(null);
  const [disable, setDisable]=useState(false);
  const [details,setDetails]=useState({name:"",email:"",number:"",visitCountry:"",visaType:"VisitingVisa"});

  useEffect(()=>{
    if(location.hash==="#contact" && contactSection.current)
    {
      contactSection.current.scrollIntoView({behavior: 'smooth'});
    }
  },[location])

  const handleSubmit=(e)=>{
    e.preventDefault();
    setDisable(true);
    const data = {
      name: details.name,
      email: details.email,
      toMail: "naremsumanth@gmail.com",
      toName: "Growth Nest Solutions",
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
    <div ref={contactSection} className='flex items-center justify-center flex-col md:flex-row gap-10 py-20 mx-5'>
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
  )
}

export default Contact