import {useEffect} from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function ServicesCard({image,heading,content,fade}) {
  useEffect(() => {
    AOS.init({duration: 1000,});
    AOS.refresh();
  }, []);
  return(
    <>
      <div data-aos={fade} data-aos-once={true} className="flex items-center justify-center flex-col w-[80vw] sm:w-80 m-5 px-5 py-3 shadow-xl shadow-[#0000001c] hover:shadow-lg hover:shadow-[#0000004f] rounded-2xl border-2 border-b-8 bg-white border-[#d5a64e] transition-all duration-500">
        <div className="relative group w-[70vw] h-[40vw] sm:h-40 sm:w-60 shadow-xl shadow-[#0000001c]">
          <div className="absolute group-hover:bg-gradient-to-b group-hover:from-[#00000000] group-hover:to-[#ffffff80] w-[70vw] h-[40vw] sm:h-40 sm:w-60 rounded-md transition-all duration-500"></div>
          <img src={image} alt="Education" className="w-[70vw] h-[40vw] sm:h-40 sm:w-60 object-cover rounded-md"/>
        </div>
        <p className="font-semibold text-base sm:text-xl my-2 text-center">{heading}</p>
        <p className="text-center font-light text-sm  sm:text-base">{content}</p>
      </div>
    </>
  );
}

export default ServicesCard;
