
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

import {
  X, Landmark, Map, Music, Eye, Shield, Phone,
  FileText, Newspaper, Megaphone, ChevronDown
} from "lucide-react"


const menu = [
  {
    id: 1,
    titulo: "EL TAMBO",
    icon: Landmark,
    url: "/el-tambo",
    submenu: [
      { id: 11, titulo: "Historia", url: "/el-tambo/historia", icon: Map },
      { id: 12, titulo: "Turismo", url: "/el-tambo/turismo", icon: Map },
      { id: 13, titulo: "Himno de El Tambo", url: "/el-tambo/himno", icon: Music },
      { id: 14, titulo: "Visión", url: "/el-tambo/vision", icon: Eye },
    ],
  },
  {
    id: 2,
    titulo: "CODISEC",
    icon: Shield,
    url: "https://munieltambo.gob.pe/seguridad-ciudadana/",
    submenu: [],
  },
  {
    id: 3,
    titulo: "CONTACTO",
    icon: Phone,
    url: "/contacto",
    submenu: [],
  },
  {
    id: 4,
    titulo: "PIDE",
    icon: FileText,
    url: "/pide",
    submenu: [],
  },
  {
    id: 5,
    titulo: "NOTICIAS",
    icon: Newspaper,
    url: "/noticias",
    submenu: [],
  },
  {
    id: 6,
    titulo: "CONVOCATORIAS",
    icon: Megaphone,
    url: "/convocatorias",
    submenu: [],
  },

  {
    id: 7,
    titulo: "PLAN ESPECÍFICO DEL SECTOR AGUA DE LAS VÍRGENES",
    icon: FileText,
    url: "/planes/agua-virgenes",
    submenu: [],
  },
  {
    id: 8,
    titulo: "PLAN DE DESARROLLO METROPOLITANO 2017-2034",
    icon: FileText,
    url: "/planes/desarrollo-metropolitano",
    submenu: [],
  },
  {
    id: 9,
    titulo: "CUADRO MULTIANUAL DE NECESIDADES Y SUS MODIFICACIONES",
    icon: FileText,
    url: "/planes/cuadro-multianual",
    submenu: [],
  },
]


export default function Sidebar({ abrir, cerrar }) {
  const [activo, setActivo] = useState(null)

  return (
    <div
      className={`fixed top-0 left-0 z-50 h-screen w-[300px]
      bg-white/10 backdrop-blur-xl border-r border-white/20
      transform transition-transform duration-300
      ${abrir ? "translate-x-0" : "-translate-x-full"}`}
    >

      <div className="flex justify-end p-4">
        <button onClick={cerrar}>
          <X className="text-white hover:rotate-90 transition" />
        </button>
      </div>

      <div className="px-3 flex flex-col gap-2 text-white overflow-y-auto h-[90%]">

        {menu.map((item) => {
          const Icon = item.icon

          return (
            <div key={item.id}>

              <div
                onClick={() => {
                  if (item.submenu.length > 0) {
                    setActivo(activo === item.id ? null : item.id)
                  } else {
                    window.location.href = item.url 
                  }
                }}
                className="flex items-center justify-between p-3 rounded-xl 
                cursor-pointer group hover:bg-white/10 transition"
              >

                <div className="flex items-center gap-3">
                  <Icon className="w-5 h-5 text-white/80 group-hover:text-white" />
                  <span className="text-sm font-medium">
                    {item.titulo}
                  </span>
                </div>

                {item.submenu.length > 0 && (
                  <ChevronDown
                    className={`w-4 h-4 transition
                    ${activo === item.id ? "rotate-180" : ""}`}
                  />
                )}
              </div>


              <AnimatePresence>
                {item.submenu.length > 0 && activo === item.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="ml-8 mt-1 flex flex-col gap-1 overflow-hidden"
                  >
                    {item.submenu.map((sub) => {
                      const SubIcon = sub.icon
                      return (
                        <div
                          key={sub.id}
                          onClick={() => window.location.href = sub.url}
                          className="flex items-center gap-2 text-sm text-white/70 
                          hover:text-white hover:bg-white/10 px-2 py-1 rounded-md cursor-pointer transition"
                        >
                          <SubIcon className="w-4 h-4" />
                          {sub.titulo}
                        </div>
                      )
                    })}
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          )
        })}

      </div>
    </div>
  )
}