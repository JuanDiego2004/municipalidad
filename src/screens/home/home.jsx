"use client"
import { motion } from "framer-motion"
import Header from "../../componentes/header"
import CurvedCarousel from "./componentes/carousel"
import CarouselRegisores from "./componentes/carousel2"

const hexStyle = {
  clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)"
}

const images = [
  { src: "/imagen1.png", offset: "0px" },
  { src: "/imagen2.png", offset: "40px" },
  { src: "/imagen2.png", offset: "0px" },
]

export default function Home() {
  return (
    <div className="relative overflow-x-hidden">

      {/* HEADER */}
      <div className="fixed top-0 left-0 w-full z-50">
        <Header />
      </div>

      <div className="h-screen overflow-y-scroll snap-y snap-mandatory">

        {/* ===================== SECCIÓN 1 ===================== */}
        <section className="min-h-screen snap-start relative overflow-hidden">

          {/* Fondo */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url(/municipalidad.avif)" }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />

          {/* CONTENIDO */}
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10 px-6 md:px-10 max-w-[1400px] mx-auto h-full">

            {/* HEXÁGONOS */}
            <div className="flex flex-col gap-3">
              {images.map(({ src, offset }, i) => (
                <motion.div
                  key={i}
                  initial={{ x: -80, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                  style={{ transform: `translateX(${offset})` }}
                >
                  <div
                    className="w-[120px] h-[120px] md:w-[180px] md:h-[180px] overflow-hidden"
                    style={hexStyle}
                  >
                    <img src={src} className="w-full h-full object-cover" />
                  </div>
                </motion.div>
              ))}
            </div>

            {/* TEXTO */}
            <motion.div
              initial={{ y: -50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              className="flex-1 text-center"
            >
              <p className="text-[#f5d78e] uppercase tracking-widest text-xs md:text-sm mb-2">
                Municipalidad Distrital
              </p>

              <h2 className="text-white font-black leading-none text-[clamp(40px,8vw,100px)]">
                INVERSIÓN
              </h2>

              <div className="mx-auto my-4 h-[2px] w-32 bg-gradient-to-r from-transparent via-yellow-400 to-transparent" />

              <p className="text-[clamp(30px,6vw,80px)] font-black bg-gradient-to-r from-yellow-400 to-yellow-200 bg-clip-text text-transparent">
                S/ 848,474
              </p>

              <p className="text-white/80 text-sm md:text-xl mt-2 uppercase">
                Millones ejecutados
              </p>
            </motion.div>

            {/* IMAGEN DERECHA */}
            <motion.div
              initial={{ x: 80, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              className="flex justify-center"
            >
              <div className="w-[180px] h-[180px] md:w-[260px] md:h-[260px] rounded-full overflow-hidden border-4 border-yellow-400/50">
                <img src="/imagen1.png" className="w-full h-full object-cover" />
              </div>
            </motion.div>

          </div>
        </section>

        {/* ===================== SECCIÓN 2 ===================== */}
        <section className="snap-start">
          <CurvedCarousel />
        </section>

        {/* ===================== SECCIÓN 3 ===================== */}
        <section className="snap-start">
          <CarouselRegisores />
        </section>

      </div>
    </div>
  )
}