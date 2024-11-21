import {useEffect} from 'react'
import AOS from "aos";
import "aos/dist/aos.css"

function GalleryCard({image,heading,content,fade}) {
    useEffect(()=>{
        AOS.init({duration:1000});
        AOS.refresh();
    },[]);
  return (
    <div className='flex items-center justify-center flex-col w-40' data-aos={fade} data-aos-once={true}>
        <img src={image} alt="key features" className='h-32 w-32 my-5 rounded-full object-cover' style={{boxShadow:"0px 0px 15px #0000002f "}}/>
        <p className='text-center text-lg font-bold'>{heading}</p>
        <p className='text-sm text-center mt-3'>{content}</p>
    </div>
  )
}

export default GalleryCard