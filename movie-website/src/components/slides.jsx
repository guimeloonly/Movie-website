import React from 'react'
import { useState, useEffect } from 'react'
import img1 from '../assets/batmanPoster.jpg'
import img2 from '../assets/oppenheimer.jpeg'
import img3 from '../assets/spidermanimg.png'
import img4 from '../assets/dune.jpg'


export default function Slides() {
    const [CurrentSlide, setCurrentSlide] = useState(0)

    const SlideImg =[img1, img2, img3, img4];

    {/* 5 second slide interval */}

    useEffect(()=>{
      const slideInterval = setInterval(()=>{
       setCurrentSlide((prevSlide)=> (prevSlide + 1) % SlideImg.length);
      }, 5000);
       
      return () => clearInterval(slideInterval)
    }, [SlideImg.length]); 

{/* slide container */}

  return (
     <div className='flex justify-end items-center mr-5 '>
  <div className="relative w-full h-56 md:h-80 lg:h-[600px] md:max-w-4xl lg:max-w-[1200px] overflow-hidden rounded-lg">
        {SlideImg.map((SlideImg, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === CurrentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={SlideImg}
              alt={`Slide ${index + 1}`}
              className=" w-full h-full"
            />
          </div>
        ))}
     </div>
     </div> 
  )
}
