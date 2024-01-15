import { formatearDinero } from "../helpers"
import useQuiosco from "../hooks/useQuiosco"

export default function Producto({producto}){
  
  const {nombre, imagen, reembolso, tope} = producto
  const {handleClickModal, handleSetProducto} = useQuiosco()


  return (
    <div className="border-4 p-3 border-slate-700 bg-gray-300">
      <div className="p-5">
        <h3 className="text-xl font-bold">{nombre}</h3>
        <p className="mt-5 black text-xl text-gray-700 ">{reembolso}</p>
        <button
          type="button"
          className="bg-indigo-600 hover:bg-indigo-800 text-white w-full mt-5 p-3 uppercase font-bold"
          onClick={()=>{
            handleClickModal()
            handleSetProducto(producto)
          }}
        >
        Abrir
        </button>
      </div>
    </div>
  )
}
