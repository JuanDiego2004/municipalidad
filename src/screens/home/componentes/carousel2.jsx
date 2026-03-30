"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import { FreeMode, Navigation, Thumbs } from "swiper/modules";

export default function CarouselRegisores() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <section className="h-screen relative z-10 flex flex-col lg:flex-row items-center gap-10 px-6 md:px-10 py-16 max-w-[1400px] mx-auto overflow-hidden"> {/* ← también ayuda aquí */}

      {/* Texto */}
      <div className="flex-1 text-center lg:text-left min-w-0">
        <h2 className="text-white text-3xl md:text-5xl font-bold">
          jsjsjs
        </h2>
        <p className="text-white/70 mt-2">kkkk</p>
      </div>


      <div className="flex-1 w-full min-w-0 overflow-hidden"> 

        {/* Slider Principal */}
        <Swiper
          style={{
            "--swiper-navigation-color": "#fff",
          }}
          loop={false}
          spaceBetween={10}
          navigation
          thumbs={{ swiper: thumbsSwiper }}
          modules={[FreeMode, Navigation, Thumbs]}
          className="w-full h-[300px] rounded-xl overflow-hidden" 
        >
          {[...Array(10)].map((_, i) => (
            <SwiperSlide key={i}>
              <img
                src={`https://swiperjs.com/demos/images/nature-${i + 1}.jpg`}
                className="w-full h-full object-cover rounded-xl"
                alt=""
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Thumbnails */}
        <Swiper
          onSwiper={setThumbsSwiper}
          loop={false}
          spaceBetween={10}
          slidesPerView={3}
          breakpoints={{
            640: { slidesPerView: 4 },
            700: { slidesPerView: 6 },
          }}
          freeMode
          watchSlidesProgress
          modules={[FreeMode, Navigation, Thumbs]}
          className="w-full h-[80px] md:h-[100px] mt-4 overflow-hidden"   
        >
          {[...Array(10)].map((_, i) => (
            <SwiperSlide key={i}>
              <img
                src={`https://swiperjs.com/demos/images/nature-${i + 1}.jpg`}
                className="w-full h-full object-cover rounded-md cursor-pointer opacity-70 hover:opacity-100 transition"
                alt=""
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}