export default function Header() {
    return (
        <div className="w-full h-[70px] flex justify-center">
          <div className="flex items-center justify-between w-[95%]">
            <img className="w-[140px] h-[70px]"  src="/logo.png" />

            <div className="w-[55%] flex items-center gap-2 justify-between font-noto text-white">
              <a>Agenda Municipal</a>
              <a>Correo Municipal</a>
              <a>Portal Transpariencia</a>
            </div>
          </div>
        </div>
    )
}