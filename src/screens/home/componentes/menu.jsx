
export default function Menu() {
    const menu = [
    {
        id: 1,
        titulo: "SISTEMA DE CONTROL INTERNO 2024",
    },
    {
        id: 2,
        titulo: "TUPA O.M 020-2020-MDT/CM/SE",
    },
    {
        id: 3,
        titulo: "ROF",
    },
    {
        id: 4,
        titulo: "CAP",
    },
    {
        id: 1,
        titulo: "SISTEMA DE CONTROL INTERNO 2024",
    },
    {
        id: 2,
        titulo: "TUPA O.M 020-2020-MDT/CM/SE",
    },
    {
        id: 3,
        titulo: "ROF",
    },
    {
        id: 4,
        titulo: "CAP",
    }
]



    return (
  <div className="w-full h-auto backdrop-blur-sm rounded-md bg-black/30 p-4">
    
    {/* 👇 GRID GLOBAL */}
    <div className="grid grid-cols-2 gap-4">
      {menu.map((item) => (
        <button
          key={item.id}
          className="w-full p-2 hover:bg-white text-white rounded-md bg-black/20 backdrop-blur-lg"
        >
          {item.titulo}
        </button>
      ))}
    </div>

  </div>
);
}