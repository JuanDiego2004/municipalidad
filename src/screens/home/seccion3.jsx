"use client"
import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { noticiasMunicipales } from "../../componentes/datos/noticias"

function NoticiaCard({ item, index }) {
  const ref = useRef(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"], 
  })


  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [index % 2 === 0 ? 60 : -60, index % 2 === 0 ? -60 : 60]
  )

  return (
    <motion.div
      ref={ref}
      style={{
        y,
        backgroundImage: `url(${item.imagen})`,
      }}
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      whileHover={{ scale: 1.05 }}
      className="h-[300px] rounded-xl bg-cover bg-center relative overflow-hidden shadow-xl"
    >
      <div className="absolute inset-0 bg-black/40" />
      <div className="absolute bottom-0 p-4 text-white text-sm font-semibold">
        {item.titulo}
      </div>
    </motion.div>
  )
}

export default function Seccion3() {
  return (
    <div className="w-full bg-black py-40">
      <div className="grid grid-cols-4 gap-10 p-10">
        {noticiasMunicipales.map((item, index) => (
          <NoticiaCard key={item.id} item={item} index={index} />
        ))}
      </div>
    </div>
  )
}