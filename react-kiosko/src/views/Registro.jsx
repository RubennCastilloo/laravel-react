import { createRef, useState } from 'react'
import { Link } from "react-router-dom"
import Alerta from '../components/Alerta';
import { useAuth } from '../hooks/useAuth';

const Registro = () => {

  const nameRef = createRef();
  const emailRef = createRef();
  const passwordRef = createRef();
  const passwordConfirmationRef = createRef();

  const [ errores, setErrores ] = useState([]);
  const { registro } = useAuth({middleware: 'guest', url: '/'})

  const handleSubmit = async e => {
    e.preventDefault();

    const datos = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
      password_confirmation: passwordConfirmationRef.current.value
    }

    registro(datos, setErrores)
  }


  return (
    <>
      <h1 className="text-4xl font-black">Crea tu cuenta</h1>
      <p>Crea tu cuenta llenando el formulario</p>

      <div className="bg-white shadow-md rounded-md mt-10 px-5 py-10">
        <form
          onSubmit={handleSubmit}
          noValidate
        >
          {errores ? errores.map((error, i) => <Alerta key={i}>{error}</Alerta>) : null}
          <div className="mb-4">
            <label
              className="text-slate-800"
              htmlFor="name"
            >
              Nombre:
            </label>
            <input 
              type="text" 
              id="name"
              className="mt-2 w-full p-3 bg-gray-50"
              name="name"
              placeholder="Tu Nombre"
              ref={nameRef}
            />
          </div>

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

          <div className="mb-4">
            <label
              className="text-slate-800"
              htmlFor="password_confirmation"
            >
              Repetir Contraseña:
            </label>
            <input 
              type="password" 
              id="password_confirmation"
              className="mt-2 w-full p-3 bg-gray-50"
              name="password_confirmation"
              placeholder="Repetir Contraseña"
              ref={passwordConfirmationRef}
            />
          </div>

          <input 
            type="submit"
            value="Crear Cuenta"
            className="bg-indigo-600 hover:bg-indigo-800 text-white w-full mt-5 p-3 uppercase font-bold cursor-pointer rounded transition ease-in-out delay-150 hover:shadow-lg"
          />
        </form>
      </div>

      <nav className="mt-5 text-center">
        ¿Ya tienes cuenta?
        <Link to="/auth/login" className="ml-1 text-indigo-600 hover:text-indigo-800 cursor-pointer transition ease-in-out delay-150">
           Inicia sesión
        </Link>
      </nav>
    </>
  )
}

export default Registro
