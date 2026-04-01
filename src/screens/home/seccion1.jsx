import { motion } from "framer-motion"

export default function Seccion1() {
    const imagenes = [
        { id: 1, url: "/imagen1.png" },
        { id: 2, url: "/imagen2.png" },
        { id: 3, url: "/imagen3.png" },
        { id: 4, url: "https://munieltambo.gob.pe/wp-content/uploads/2025/07/limpieza-1024x683.jpg" },
        { id: 5, url: "https://munieltambo.gob.pe/wp-content/uploads/2025/07/taller-1024x543.jpg" },
        { id: 6, url: "https://munieltambo.gob.pe/wp-content/uploads/2025/07/3.IMG-APROBACION-CONCEJO-1024x768.jpg" },
    ]

    const posiciones = [
        { top: "10%", left: "5%" },
        { top: "35%", left: "45%" },
        { top: "60%", left: "10%" },
        { top: "5%", left: "60%" },
        { top: "45%", left: "75%" },
        { top: "70%", left: "55%" },
    ]

    return (
        <div className="bg-[url(/huancayo.jpg)] bg-cover bg-center bg-no-repeat min-h-screen">
            <div className="bg-gradient-to-r from-blue-900/80 via-blue-600/20 to-white/10 w-full min-h-screen relative flex flex-col">

                <motion.h2
                    initial={{ opacity: 0, filter: "blur(10px)", y: -30}}
                    whileInView={{ opacity: 1, filter: "blur(0px)", y: 0}}
                    transition={{ duration: 2}}
                    className="text-2xl md:text-4xl lg:text-[50px] text-center text-white font-montserrat pt-25 px-4"
                >
                    MUNICIPALIDAD DISTRITAL DE EL TAMBO
                </motion.h2>

                <div className="flex flex-1 items-center justify-between px-6 py-8 gap-8">

                    <motion.div
                        initial={{ opacity: 0, filter: "blur(14px)", x: -50 }}
                        whileInView={{ opacity: 1, filter: "blur(0px)", x: 0 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: false }}
                        className="border-l-4 border-white p-5 max-w-sm z-10"
                    >
                        <h2 className="font-oswald text-xl lg:text-[45px] md:text-[35px] font-bold text-white">
                            MEMORIA ANUAL DE GESTION INSTITUCIONAL 2025
                        </h2>
                        <h2 className="font-oswald text-xl md:text-[25px] text-white">
                            GESTION 2023 - 2026
                        </h2>
                        <h2 className="font-oswald text-xl md:text-[25px] text-gray-300">
                            Con Honestidad y Transparencia
                        </h2>

                        <button className="p-2 mt-3 hover:bg-white/30 backdrop-blur-2xl hover:text-white transition ease-in-out duration-150 bg-blue-500 text-white rounded-md font-noto font-bold">
                            Memoria Aquí
                        </button>
                    </motion.div>

                    <div className="hidden md:block relative w-1/2 lg:w-[45%] h-[500px] lg:h-[600px]">
                        {imagenes.map((img, i) => (
                            <motion.img
                                key={img.id}
                                src={img.url}
                                className="absolute w-[180px] h-[220px] lg:w-[220px] lg:h-[260px] object-cover rounded-xl shadow-2xl"

                                style={{
                                    top: posiciones[i].top,
                                    left: posiciones[i].left,
                                }}

                                animate={{
                                    y: [0, -25, 0],
                                    x: [0, i % 2 === 0 ? 20 : -20, 0],
                                    rotate: [0, i % 2 === 0 ? 2 : -2, 0],
                                }}

                                transition={{
                                    duration: 4 + i * 1.5,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                    delay: i * 0.5,
                                }}
                            />
                        ))}
                    </div>

                </div>
            </div>
        </div>
    )
}