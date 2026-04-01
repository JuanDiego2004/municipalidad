import Header from "./componentes/header"
import { Outlet } from "react-router-dom"
import Sidebar from "./componentes/sidebar"

export default function Layout({children}) {

  return (
    <div className=" bg-no-repeat bg-cover bg-center
     h-screen">
      <div className=" h-screen flex">
         
        <div className="flex-1 ">
     
            <div>
              {children}

              <Outlet />
            </div>
        </div>
        </div>
    </div>
  )
}