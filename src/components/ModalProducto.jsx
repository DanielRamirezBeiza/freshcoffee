import {useState} from 'react'
import useQuiosco from "../hooks/useQuiosco"
import {formatearDinero} from "../helpers/index";



export default function ModalProducto() {

    const {producto, handleClickModal} = useQuiosco();
    const [cantidad, setCantidad] = useState(1)

    console.log(producto);

  return (
  <>
    <div className="md:flex gap-10">
        <div className="md:w-1/5">
            <img
                alt={`Imagen producto ${producto.nombre}`}
                src={`/img/logo.jpg`}
            />

        </div>
        <div className="md:w-4/5">
            <div className="flex justify-end">
                <button
                    onClick={handleClickModal}
                    >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                </button>
            </div>
            <p className="font-bold mt-5">{producto.tipo}: {producto.id}</p>
            <h1 className="text-3xl font-bold mt-2">
               {producto.nombre}
            </h1>
            <span className="m-10">{producto.descripcion}</span>
            <p className="mt-5 font-black text-xl text-orange-600">
               {producto.beneficio}
            </p>
            <p className="mt-1 font-black text-xl text-orange-600">
               {producto.informacion_complementaria}
            </p>
            <br/>
            <p className="text-wrap whitespace-pre-line">
                Requisitos:
                {producto.requisitos}
            </p>

            
           {/*Condicionante para beneficios con reglamento propio*/
            producto.reglamento_propio ? 
                <div className="mt-5">
                    <p> Beneficio cuenta con reglamento propio</p>
                    <p>Reglamento <a className="font-medium text-blue-600 dark:text-blue-500 hover:underline" href={producto.link_reglamento}>Reglamento Subsidio por Estudios de Capacitación Servicio Bienestar I. Municipalidad Valparaíso</a></p>
                </div>
           : 
                ''
           } 

            {
                producto.coberturas ? 
                
                    <div className="mt-5">
                       
                        <p className="text-wrap whitespace-pre-line">Coberturas:
                        {producto.coberturas}</p>
                    </div>
                : 
                ''
                
            }

      

            <button
                type="button"
                onClick={handleClickModal}
                className="bg-red-600 hover:bg-red-800 px-5 py-2 mt-5 text-white font-bold uppercase rounded"
                >Salir
            </button>
            <p className="whitespace-pre-line">{producto.reembolso}
            </p>

        </div>
    </div>
    
  </>
  )
}
