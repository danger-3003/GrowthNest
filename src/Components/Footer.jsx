import React from "react";
import { Link } from "react-router-dom";
import { faMapLocation, faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Logo from "../assets/logo.jpg";
import FooterImage from "../assets/footerImage.jpg";

function Footer() {
    return (
        <div className="bg-black text-[#d5a64e] font-light" style={{background:`linear-gradient(to right,rgba(0, 0, 0), rgba(0, 0, 0, 0.7)), url(${FooterImage})`,backgroundSize:'cover',backgroundPosition:'center'}}>
          <div>
            <ul className="flex flex-wrap sm:flex-row items-center justify-center gap-5 px-5 md:gap-10 pt-10 font-semibold">
              <li className="hover:text-white"><Link to="/#home">Home</Link></li>
              <li className="hover:text-white"><Link to="/jobs">Jobs</Link></li>
              <li className="hover:text-white"><Link to="/visa&immigration">Visa & Immigration</Link></li>
              <li className="hover:text-white"><Link to="/#gallery">Gallery</Link></li>
              <li className="hover:text-white"><Link to="/#about">About</Link></li>
              <li className="hover:text-white"><Link to="/#contact">Contact</Link></li>
            </ul>
          </div>
          <div className="flex items-center justify-center flex-wrap gap-[10vw] md:gap-[25vw] lg:gap-[40vw] p-5 md:p-10">
            <div className="flex items-center justify-center flex-col">
              <img src={Logo} alt="Logo" className="h-40 w-40"/>
              <div className="flex flex-row gap-2 my-3">
                <a href="https://www.instagram.com/growthnestsolutions/profilecard/?igsh=MTI1cmxkYnZxdmhkOQ==" target="_blank"><FontAwesomeIcon icon={faInstagram} className="mr-3 mt-1 text-base md:text-lg hover:text-white"/></a>
                <a href="https://www.facebook.com/share/18g5XuTGCx/?mibextid=LQQJ4d" target="_blank"><FontAwesomeIcon icon={faFacebook} className="mr-3 mt-1 text-base md:text-lg hover:text-white"/></a>
                <a href="mailto:growthnestsolutions@gmail.com" target="_blank"><FontAwesomeIcon icon={faEnvelope} className="mr-3 mt-1 text-base md:text-lg hover:text-white"/></a>
              </div>
            </div>
            <div className="w-full sm:w-60 mx-5 sm:mx-10 pb-5 sm:pb-0 flex text-sm md:text-base flex-col items-start justify-center">
              <p className="font-bold text-lg">Contact Us</p>
              <a
                href="https://maps.app.goo.gl/cxw4Z7DHW1FcycUg8"
                target="_blank"
                className="flex flex-row justify-center items-start"
              >
                <FontAwesomeIcon icon={faMapLocation} className="mr-3 mt-1"/>
                <p className="hover:text-white">
                    D.No. 26-17-5, Sri Venkateswara Complex, Chinagantyada,
                    Gajuwaka, Visakhapatnam-26.
                </p>
              </a>
              <div className="flex flex-row justify-center">
                <FontAwesomeIcon icon={faPhone} className="mr-3 mt-1"/>
                <div className="flex flex-col items-center">
                  <a href="tel:6304975454" className="hover:text-white">6304975454</a>
                  <a href="tel:9052315354" className="hover:text-white">9052315354</a>
                </div>
              </div>
              <a href="mailto:growthnestsolutions@gmail.com" target="_blank" className="flex flex-row items-center justify-center hover:text-white"><FontAwesomeIcon icon={faEnvelope} className="mr-3 mt-1"/><p>growthnestsolutions@gmail.com</p></a>
            </div>
          </div>
        </div>
    );
}

export default Footer;
