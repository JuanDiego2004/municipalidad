"use client"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import ReactSpinCarousel3D from "@carousel-ui/react-spin-carousel-3d"

const regidores = [
  { id: 1, nombre: "IVAN JHOEL MEDINA ESQUIVEL", imagen: "/regidores/IVAN.jpg" },
  { id: 2, nombre: "JENNY MARISOL ANDRES LIVIA", imagen: "/regidores/JENNY.jpg" },
  { id: 3, nombre: "GREGORIA ESTELA AURIS ROJAS", imagen: "/regidores/GREGORIA.jpg" },
  { id: 4, nombre: "BELMIR EMILIO FLORES POMA", imagen: "/regidores/BELMIR.jpg" },
  { id: 5, nombre: "ALEJANDRA NICOLE ESPEJO MENDOZA", imagen: "/regidores/ALEJANDRA.jpg" },
  { id: 6, nombre: "JOSE LUIS GARCIA TERRAZOS", imagen: "/regidores/JOS.jpg" },
  { id: 7, nombre: "DANIEL GUILLERMO CAMPOS ACOSTA", imagen: "/regidores/DANIE.jpg" },
  { id: 8, nombre: "PERCY GERARDO NUÑEZ SIGUEL", imagen: "/regidores/PERCY.jpg" },
  { id: 9, nombre: "LUIS RICARDO LOPEZ BASTIDAS", imagen: "/regidores/LUIS.jpg" },
  { id: 10, nombre: "MARCO ANTONIO COZ HERQUINIO", imagen: "/regidores/MARCO.jpeg" },
  { id: 11, nombre: "ANAISA SOFIA VENTURA PAITAN", imagen: "/regidores/ANAISA.jpeg" },
]

export default function Seccion2() {
  const [ancho, setAncho] = useState(0)

  useEffect(() => {
    setAncho(window.innerWidth)
    const handleResize = () => setAncho(window.innerWidth)
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const cardHeight = ancho < 1024 ? 370 : 420

  return (
    <div className="relative w-full min-h-screen overflow-hidden flex flex-col pt-20">

      <div className="absolute inset-0 z-0">
        <img src="/background1.jpg" className="w-full h-full object-cover" alt="" />
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
      </div>

      <div className="relative z-10 flex flex-col h-full">

        <div className="flex-1 flex items-center justify-center px-6 py-10">
          <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-7xl gap-10">

            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9 }}
              className="w-full lg:max-w-[580px] rounded-2xl p-6"
            >
              <span className="inline-block text-xs font-bold tracking-[0.3em] text-amber-400 uppercase mb-2">
                Municipalidad Distrital de El Tambo
              </span>

              <h1 className="text-white text-4xl md:text-5xl font-black uppercase leading-tight">
                Alcalde
              </h1>

              <h2 className="text-amber-300 text-lg md:text-xl mt-3 font-semibold">
                Dr. Ing. Julio César Llallico Colca
              </h2>

              <p className="text-gray-300 mt-4 text-sm leading-relaxed border-l-2 border-amber-400 pl-4">
                «Es para mí un honor dirigirme a ustedes como su alcalde de la Municipalidad Distrital de El Tambo. En esta nueva gestión, tengo el firme compromiso de trabajar en beneficio de todos los habitantes del distrito.»
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9 }}
              className="w-[220px] md:w-[260px] lg:w-[300px] shrink-0"
            >
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl border-2 border-amber-400/40 ring-4 ring-white/10">
                <img src="/alcalde.jpg" alt="Alcalde" className="w-full h-full object-contain bg-black" />
              </div>
            </motion.div>

          </div>
        </div>

        <div className="pb-12 px-6">
          <div className="w-full max-w-7xl mx-auto">
            <h2 className="text-white text-[45px] font-montserrat">REGIDORES</h2>

            <ReactSpinCarousel3D
              data={regidores}

              renderItem={(item) => (
                <div className="rounded-xl overflow-hidden shadow-xl bg-black/70 flex flex-col justify-between">
                  
                  <div className="w-full flex items-center justify-center bg-white" style={{ height: cardHeight - 80 }}>
                    <img
                      src={item.imagen}
                      alt={item.nombre}
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>

                  <div className="py-2 text-center px-2">
                    <p className="text-white text-xs font-semibold">
                      {item.nombre}
                    </p>
                  </div>

                </div>
              )}

              width="100%"
              height={cardHeight}
              itemWidth={290}
              backgroundColor="transparent"
              accentColor="#f97316"
              displayMode="card"
              isAutoPlay={true}
              autoPlayInterval={4000}
              showRadioButtons={true}
              containerStyle={{ touchAction: "pan-y" }}
            />

          </div>
        </div>

      </div>
    </div>
  )
}