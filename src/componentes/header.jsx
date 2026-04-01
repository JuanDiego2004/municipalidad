import { motion } from "framer-motion"
import { TriangleAlert, Bell, Menu } from 'lucide-react';
import { useState } from "react";

export default function Header({abrirMenu}) {
  const [abrir, setAbrir] = useState(false);

  return (
    <div className="w-full h-[70px] flex justify-center backdrop-blur-md bg-black/20">
      <motion.div
        className="flex items-center justify-between w-[95%]"
        initial={{ y: -50, opacity: 0, filter: "blur(10px)" }}
        whileInView={{ y: 0, opacity: 1, filter: "blur(0px)" }}
        transition={{ duration: 3 }}
      >
        <div className="flex items-center justify-between">
          <Menu onClick={abrirMenu} color="white"  />
          <img className="w-[140px] h-[70px]" src="/logo.png" />
        </div>

        <div className="flex justify-between items-center">
          <div className="w-auto text-[21px] flex items-center gap-2 justify-between font-iceland text-white">
            <a className=" hover:text-gray-400">Agenda Municipal</a>
            <a className=" hover:text-gray-400">Correo Municipal</a>
            <a className=" hover:text-gray-400">Portal Transpariencia</a>
          </div>

          <div className="w-[30px] h-[30px] rounded-md border border-red-600 bg-red-600/30 backdrop-blur-md ml-6 flex justify-center items-center">
            <Bell onClick={() => setAbrir(!abrir)} color="red" className="w-[20px] h-[20px]" />
          </div>

          {abrir && (
            <motion.div
              initial={{ opacity: 0, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, filter: "blur(0px)" }}
              duration={{ duration: 2 }}
              className="relative mt-[50px]"
            >
              <div className="w-[200px] h-auto bg-red-800/30 backdrop-blur-md rounded-md p-3 absolute right-0 flex items-center justify-center gap-2">
                <TriangleAlert size={20} className="w-[30px] h-[30px] text-red-700" />
                <a href="https://munieltambo.gob.pe/senamhiMDT/" className="text-white font-mono">ALERTA SENAMHI </a>
              </div>
            </motion.div>
          )}
        </div>
      </motion.div>


    </div>
  )
}