import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import Logo from "../assets/logo.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars,faTimes } from '@fortawesome/free-solid-svg-icons'

function NavBar() {
  const[menu,setMenu]=useState(false);
  const handleMenu = ()=>{
    setMenu(!menu);
  } 

  return (
    <>
      <div className='flex items-center justify-between fixed top-0 z-10 w-full md:px-10 lg:px-20 bg-black shadow-md shadow-[#00000054]'>
        <div className='block md:hidden mx-5 sm:ml-10' onClick={handleMenu}>
          <FontAwesomeIcon icon={menu?faTimes:faBars} className='text-[#d5a64e] hover:text-[#fff]'/>
        </div>
        <ul className={`flex items-center flex-col absolute w-full ${menu?"top-16":"-top-80"} bg-black py-5 md:top-0 md:flex-row md:relative font-semibold lg:text-lg gap-7 text-[#d5a64e] transition-all duration-300 z-[5] md:z-10`}>
          <li className='hover:text-white w-full text-center md:w-auto' onClick={handleMenu}><Link to="/#home">Home</Link></li>
          <li className='hover:text-white w-full text-center md:w-auto' onClick={handleMenu}><Link to="/jobs">Jobs</Link></li>
          <li className='hover:text-white w-full text-center md:w-auto' onClick={handleMenu}><Link to="/visa&immigration">Visa & Immigration</Link></li>
          <li className='hover:text-white w-full text-center md:w-auto' onClick={handleMenu}><Link to="/#about">About</Link></li>
          <li className='hover:text-white w-full text-center md:w-auto' onClick={handleMenu}><Link to="/#gallery">Gallery</Link></li>
          <li className='hover:text-white w-full text-center md:w-auto' onClick={handleMenu}><Link to="/#contact">Contact</Link></li>
        </ul>
        <div>
          <img src={Logo} alt="Logo" className='w-16 h-16 p-2 md:p-0 mr-5 md:mr-0'/>
        </div>
      </div>
    </>
  )
}

export default NavBar