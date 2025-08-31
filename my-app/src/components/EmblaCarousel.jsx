import React, { useCallback, useEffect, useState } from "react"
import useEmblaCarousel from "embla-carousel-react"

import image1 from "../assets/image1.jpg"
import image2 from "../assets/image2.jpg"
import image3 from "../assets/image3.jpg"

const EmblaCarousel = ({ options }) => {
  const [emblaRef] = useEmblaCarousel(options)

  const images = [image1, image2, image3]

  return (
    <section className="w-full relative">
      <div className="absolute top-3 md:top-5 left-1/2 -translate-x-[150px] sm:-translate-x-[5px] lg:-translate-x-[150px] md:right-1/2 md:left-auto   z-10 bg-[#b83b05] px-2 md:px-3 py-1 text-white text-xs md:text-sm rounded-2xl shadow">
        นิยายแนะนำประจำสัปดาห์
      </div>

      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {images.map((src, index) => (
            <div 
              className="flex-[0_0_100%] md:flex-[0_0_50%] md:pl-2" 
              key={index}
            >
              <img
                src={src}
                alt={`Slide ${index + 1}`}
                className="w-full h-48 md:h-72 object-cover rounded-sm md:rounded"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default EmblaCarousel