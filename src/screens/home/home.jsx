"use client"
import { motion } from "framer-motion"
import Header from "../../componentes/header"
import Seccion1 from "./seccion1"
import Seccion2 from "./seccion2"
import Seccion3 from "./seccion3"
import Sidebar from "../../componentes/sidebar"
import { useState } from "react"


export default function Home() {
  const [abrirMenu, setAbrirMenu] = useState(false);

  return (
    <div className="h-screen overflow-y-scroll snap-y snap-mandatory">
       
           <Sidebar cerrar={() => setAbrirMenu(false)} abrir={abrirMenu}/>
       

        <div className="absolute z-30 top-0 left-0 w-full ">
            <Header abrirMenu={() => setAbrirMenu(true)}/>
        </div>

        <section className="h-screen snap-start">
            <Seccion1 />
        </section>

         <section className="h-screen snap-start">
              <Seccion2 />
        </section>

        <section className="h-screen snap-start">
              <Seccion3 />
        </section>

       
    </div>
  )
}