"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation, Autoplay } from "swiper/modules";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Menu from "./menu";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";

const diapositivas = [
  {
    id: 1,
    imagen: "/huancayo.jpg",
    titulo: "GESTIÓN 2023 - 2026",
    subtitulo: "MEMORIA 2025",
    etiqueta: "TRANSPARENCIA",
    boton: "Ver",
  },
  {
    id: 2,
    imagen: "/imagen2.png",
    titulo: "DESARROLLO",
    subtitulo: "PROYECTOS 2024",
    etiqueta: "PROGRESO",
    boton: "Ver",
  },
];

export default function CarruselCurvo() {
  const [indiceActivo, setIndiceActivo] = useState(0);
  const diapositiva = diapositivas[indiceActivo];

  return (
    <section className="min-h-screen relative overflow-hidden bg-slate-900 flex flex-col">

      {/* Fondo */}
      <AnimatePresence mode="wait">
        <motion.div
          key={indiceActivo}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${diapositiva.imagen})` }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          exit={{ opacity: 0 }}
        />
      </AnimatePresence>

      <div className="relative z-10 flex flex-col lg:flex-row items-center gap-10 px-6 md:px-10 py-16 max-w-[1400px] mx-auto">

        {/* TEXTO */}
        <div className="flex-1 text-center lg:text-left">
          <h2 className="text-white text-3xl md:text-5xl font-bold">
            {diapositiva.titulo}
          </h2>
          <p className="text-white/70 mt-2">{diapositiva.subtitulo}</p>
        </div>

        {/* CARRUSEL */}
        <div className="flex-1 min-w-0 w-full">
          <Swiper
            modules={[EffectCoverflow, Navigation, Autoplay]}
            effect="coverflow"
            centeredSlides
            slidesPerView="auto"
            loop:false
            autoplay={{ delay: 3000 }}
            onSlideChange={(swiper) => setIndiceActivo(swiper.realIndex)}
          >
            {diapositivas.map((diap) => (
              <SwiperSlide key={diap.id} style={{ width: 220 }}>
                <div
                  className="h-72 rounded-xl bg-cover bg-center"
                  style={{ backgroundImage: `url(${diap.imagen})` }}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      </div>

      {/* MENU ABAJO */}
      <div className="px-6 md:px-10 pb-10">
        <Menu />
      </div>

    </section>
  );
}