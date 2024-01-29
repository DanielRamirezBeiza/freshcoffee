import { formatearDinero } from "../helpers"
import useQuiosco from "../hooks/useQuiosco"

export default function Producto({producto}){
  
  const {nombre, imagen, beneficio, informacion_complementaria, causante} = producto
  const {handleClickModal, handleSetProducto} = useQuiosco()


  return (
    <button className="border-4 p-3 border-slate-700 bg-gray-300"
    onClick={()=>{
            handleClickModal()
            handleSetProducto(producto)
    }}
    >
    
      <div className="p-5">
        <h3 className="text-xl font-bold">{nombre}</h3>
        <p className="mt-5 black text-xl text-orange-600 ">Reembolso: {beneficio}</p>
        <p className="mt-5 black text-lg text-orange-600 ">{informacion_complementaria}</p>
        
      
      
      </div>
      <p className="text-center leading-loose underline underline-offset-1">Causante: {causante} </p>
    </button>
  )
}
