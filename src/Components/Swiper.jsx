import { Swiper, SwiperSlide } from 'swiper/react';
import { useEffect, useState } from 'react';
import Welder from "../assets/jobs/welder.jpg";
import CraneOperator from "../assets/jobs/craneOperator.jpg";
import Plumber from "../assets/jobs/plumber.jpg";
import Electrician from "../assets/jobs/electrician.jpg";
import Painter from "../assets/jobs/painter.jpg";
import Worker from "../assets/jobs/constructionWorker.jpg";
import Chef from "../assets/jobs/chef.jpg";
import SafetyOfficer from "../assets/jobs/safetyOfficer.jpg";

import SwiperCard from './SwiperCard';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
// import "./swiper.css";

import { FreeMode, Pagination } from 'swiper/modules';
function JobSwiper() {
  // let width=window.innerWidth;
  const[items,setItems]=useState(5);
  useEffect(()=>{
    if(501<window.innerWidth&&window.innerWidth<=1024)
    {
      setItems(4);
      console.log(window.innerWidth+"1");
    }
    else if( 251<window.innerWidth&&window.innerWidth<=500)
    {
      setItems(3);
      console.log(window.innerWidth+"2");
    }
    else if( window.innerWidth<=250)
    {
      setItems(2);
      console.log(window.innerWidth+"2");
    }
  },[]);
  return (
    <>
      <div className='mx-6 sm:mx-10 lg:mx-20 xl:mx-36 relative flex items-center justify-center'>
        <div className='w-10 sm:w-20 md:w-28 h-full absolute z-[5] bg-gradient-to-r from-[rgba(255,255,255,0.5)] to-[rgba(255,255,255,0.0)] left-0'></div>
        <div className='w-10 sm:w-20 md:w-28 h-full absolute z-[5] bg-gradient-to-r to-[rgba(255,255,255,0.5)] from-[rgba(255,255,255,0.0)] right-0'></div>
        <Swiper
          slidesPerView={items}
          spaceBetween={0}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
          className='w-max -mt-5 sm:mt-0'
        >
          <SwiperSlide>
            <SwiperCard image={Welder} heading="Welder"/>
          </SwiperSlide>
          <SwiperSlide>
            <SwiperCard image={Plumber} heading="Plumber"/>
          </SwiperSlide>
          <SwiperSlide>
            <SwiperCard image={Electrician} heading="Electrician"/>
          </SwiperSlide>
          <SwiperSlide>
            <SwiperCard image={Painter} heading="Painter"/>
          </SwiperSlide>
          <SwiperSlide>
            <SwiperCard image={Worker} heading="Construction Worker"/>
          </SwiperSlide>
          <SwiperSlide>
            <SwiperCard image={CraneOperator} heading="Crane Operator"/>
          </SwiperSlide>
          <SwiperSlide>
            <SwiperCard image={Chef} heading="Chef"/>
          </SwiperSlide>
          <SwiperSlide>
            <SwiperCard image={SafetyOfficer} heading="Safety Officer"/>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}

export default JobSwiper;