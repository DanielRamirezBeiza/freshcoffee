import React from 'react'
import { categorias } from '../data/categorias'
import Categoria from './Categoria'


export default function Sidebar() {
  return (
    <aside className="md:w-72">
        <div className="p-4">
            <img
                className="w-40"
                src="../img/logo.jpg"
                alt="Imagen logotipo"
            />
        </div>
        <div className="mt-10">
            {categorias.map(categoria => (
              <Categoria
                key={categoria.id}
                categoria={categoria} />
            ))}


        <div className="my-5 py-5">
          <button
            className="text-center bg-red-500 w-full px-3 font-bold text-white truncate cursor-pointer"
            type="button"
              >
              Cancelar Orden
          </button>
        </div>
              
           
        </div>
    </aside>
  )
}
