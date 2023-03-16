import { createRef, useState } from 'react'
import { Link } from "react-router-dom"
import { useAuth } from '../hooks/useAuth';
import Alerta from '../components/Alerta';

const Login = () => {

  const emailRef = createRef();
  const passwordRef = createRef();

  const [ errores, setErrores ] = useState([]);
  const { login } = useAuth({
    middleware: 'guest',
    url: '/'
  })

  const handleSubmit = async e => {
    e.preventDefault();

    const datos = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    }

    login(datos, setErrores)
   
  }

  return (
    <>
      <h1 className="text-4xl font-black">Iniciar Sesión</h1>
      <p>Para crear un pedido debes iniciar sesión</p>

      <div className="bg-white shadow-md rounded-md mt-10 px-5 py-10">
        <form
          onSubmit={handleSubmit}
          noValidate
        >
          {errores ? errores.map((error, i) => <Alerta key={i}>{error}</Alerta>) : null}
          <div className="mb-4">
            <label
              className="text-slate-800"
              htmlFor="email"
            >
              Email:
            </label>
            <input 
              type="email" 
              id="email"
              className="mt-2 w-full p-3 bg-gray-50"
              name="email"
              placeholder="Tu Email"
              ref={emailRef}
            />
          </div>

          <div className="mb-4">
            <label
              className="text-slate-800"
              htmlFor="password"
            >
              Contraseña:
            </label>
            <input 
              type="password" 
              id="password"
              className="mt-2 w-full p-3 bg-gray-50"
              name="password"
              placeholder="Tu Contraseña"
              ref={passwordRef}
            />
          </div>

          <input 
            type="submit"
            value="Iniciar Sesión"
            className="bg-indigo-600 hover:bg-indigo-800 text-white w-full mt-5 p-3 uppercase font-bold cursor-pointer rounded transition ease-in-out delay-150 hover:shadow-lg"
          />
        </form>
      </div>

      <nav className="mt-5 text-center">
        ¿No tienes cuenta?
        <Link to="/auth/register" className="ml-1 text-indigo-600 hover:text-indigo-800 cursor-pointer transition ease-in-out delay-150">
           Crear una
        </Link>
      </nav>
    </>
  )
}

export default Login
