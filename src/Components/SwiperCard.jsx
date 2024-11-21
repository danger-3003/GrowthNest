import React from 'react'

function SwiperCard({image, heading}) {
  return (
    <div className='my-10 mx-1.5 sm:mx-3 lg:mx-5 flex items-center justify-center flex-col'>
        <img src={image} alt="jobs" className='rounded-xl border-b-4 lg:border-b-8 border-[#d5a64e] xl:h-auto xl:w-auto'/>
        <p className='mt-3 font-medium text-sm md:text-base sm:font-semibold lg:font-bold text-center'>{heading}</p>
    </div>
  )
}

export default SwiperCard