import React, { useState } from 'react';
import { useAuth } from '../hook/useAuth';

export const LoginForm = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { iniciarSesion, cargando, error } = useAuth();


  const manejarEnvio = async (e: React.FormEvent) => {
    e.preventDefault();
    const resultado = await iniciarSesion(email, password);
    if (resultado.exito) {
      console.log("Bienvenido, " + resultado.usuario.nombre + "!")
    }


  };

  return (

    <div className='flex flex-col justify-center items-center min-h-[calc(100vh-80px)] w-full p-4 bg-gray-50'>
      <main className="flex flex-col lg:flex-row w-full max-w-5xl bg-white rounded-2xl shadow-xl overflow-hidden font-body">

        {/* Panel Izquierdo (Ahora tematizado para tu Noticiero) */}
        <section className="hidden lg:flex lg:w-1/2 bg-blue-900 p-16 flex-col justify-between relative overflow-hidden">
          <div className="relative z-10">
            <a className="text-white font-headline text-4xl mb-12 block font-bold" href="#">
              Noticiero React
            </a>
            <div className="max-w-md">
              <h2 className="text-white font-headline text-5xl leading-tight mb-6 font-bold">
                Mantente informado.
              </h2>
              <p className="text-blue-100/80 text-xl">
                Accede a tu cuenta para guardar tus noticias favoritas, comentar en artículos y personalizar tu feed.
              </p>
            </div>
          </div>

          <div className="relative z-10 mt-auto">
            <blockquote className="border-l-4 border-blue-400 pl-6 py-2">
              <p className="text-white italic text-lg mb-2">
                "La información oportuna es la clave para entender el mundo de hoy."
              </p>
              <cite className="text-blue-200/60 text-sm not-italic uppercase tracking-widest font-medium">
                — Equipo Editorial
              </cite>
            </blockquote>
          </div>
        </section>

        {/* Panel Derecho (Formulario de Login) */}
        <section className="w-full lg:w-1/2 flex items-center justify-center p-8 lg:p-16 bg-white">
          <div className="w-full max-w-[440px]">

            <div className="lg:hidden flex flex-col items-center mb-12">
              <span className="font-headline text-3xl font-bold text-gray-900 mb-8">
                Noticiero React
              </span>
            </div>

            <div className="mb-10 text-center lg:text-left">
              <h1 className="font-headline text-4xl font-bold text-gray-900 mb-3">
                Bienvenido de nuevo
              </h1>
              <p className="text-gray-500">
                Ingresa tus credenciales para continuar.
              </p>
            </div>

            <form onSubmit={manejarEnvio} className="space-y-6">

              {/* Campo: Correo electrónico */}
              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700">
                  Correo electrónico
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="lector@ejemplo.com"
                  required
                  className="w-full px-4 py-3.5 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all outline-none text-gray-900"
                />
              </div>

              {/* Campo: Contraseña */}
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <label htmlFor="password" className="block text-sm font-semibold text-gray-700">
                    Contraseña
                  </label>
                  <a href="#" className="text-xs font-medium text-blue-600 hover:underline">
                    ¿Olvidaste tu contraseña?
                  </a>
                </div>
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  required
                  className="w-full px-4 py-3.5 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all outline-none text-gray-900"
                />
                {error && (
                  <p className='text-sm font-medium text-red-600 animate-pulse'>
                    {error}

                  </p>
                )}

              </div>

              {/* Botón de Submit */}
              {/* Botón de Submit */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={cargando}
                  className={`w-full py-3.5 rounded-lg text-white font-bold transition-all flex items-center justify-center gap-3 ${cargando ? "bg-gray-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"
                    }`}
                >
                  {/* El Spinner giratorio */}
                  {cargando && (
                    <svg
                      className="animate-spin h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                  )}

                  {/* El texto del botón envuelto en un span para mejor alineación */}
                  <span>{cargando ? "Validando..." : "Iniciar Sesión"}</span>
                </button>
              </div>

              {/* Separador */}
              <div className="relative flex py-4 items-center">
                <div className="flex-grow border-t border-gray-200"></div>
                <span className="flex-shrink mx-4 text-xs text-gray-400 font-medium">
                  o iniciar con
                </span>
                <div className="flex-grow border-t border-gray-200"></div>
              </div>

              {/* Botón Google */}
              <div className="flex flex-col gap-3">
                <button
                  type="button"
                  className="flex items-center justify-center gap-3 w-full py-3.5 border border-gray-300 rounded-lg bg-white hover:bg-gray-50 transition-colors shadow-sm font-semibold text-gray-700"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05" />
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                  </svg>
                  Google
                </button>
              </div>
            </form>

          </div>
        </section >
      </main >
    </div >
  );
}