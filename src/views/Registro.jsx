import { Link } from "react-router-dom"


export default function Registro() {
  return (
    <>
    <h1 className="text-4xl font-black">BienestarValpo App</h1>
    <p>Crea tu Cuenta llenando el formulario</p>
    <div className="bg-white shadow-md rounded-md mt-10 px-5 py-10 border">
      <form>
        <div className="mb-4">
          <label 
            className="text-slate-800" 
            htmlFor="name">
              Nombre:
          </label>
          <input 
            type="text" 
            id="name" 
            className="mt-2 w-full p-3 border rounded-lg bg-gray-50" 
            name="name" 
            placeholder="Tu nombre"
          />
        </div>
        <div className="mb-4">
          <label 
            className="text-slate-800" 
            htmlFor="Mail">
              Mail:
          </label>
          <input 
            type="email" 
            id="mail" 
            className="mt-2 w-full p-3 border rounded-lg bg-gray-50" 
            name="mail" 
            placeholder="Tu Email"
          />
        </div>

        <div className="mb-4">
          <label 
            className="text-slate-800" 
            htmlFor="password">
              Password:
          </label>
          <input 
            type="password" 
            id="password" 
            className="mt-2 w-full p-3 border rounded-lg bg-gray-50" 
            name="password" 
            placeholder="Tu contraseña"
          />
        </div>

        <div className="mb-4">
          <label 
            className="text-slate-800" 
            htmlFor="password_confirmation">
              Password:
          </label>
          <input 
            type="password" 
            id="password_confirmation" 
            className="mt-2 w-full p-3 border rounded-lg bg-gray-50" 
            name="password_confirmation" 
            placeholder="Repite tu contraseña"
          />
        </div>
        <input
          type="submit"
          value="Crear Cuenta"
          className="bg-indigo-600 hover:bg-indigo-800 text-white w-full mt-5 p-3 uppercase font-bold cursor-pointer"
          />
      </form>
      <nav className="mt-5">
      <Link to="/auth/login">
        ¿No tienes cuenta? Crea una
      </Link>
    </nav>
    </div>
    </>
  )
}
