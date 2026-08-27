import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { FaEye, FaEyeSlash, FaArrowLeft } from 'react-icons/fa'
import { TbSettingsAutomation } from "react-icons/tb";
import { useAuth } from "../hook/useAuth";
export const RegisterForm = () => {
  const navigate = useNavigate();
  const { registrarUsuario } = useAuth();

  const [formData, setFormData] = useState({

    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [errorLocal, setErrorLocal] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setItsLoading] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const manejarRegistro = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorLocal('');

    if (formData.password !== formData.confirmPassword) {
      setErrorLocal('Las contraseñas no coinciden. Verificalas por favor');
      return
    }

    setItsLoading(true);

    setTimeout(() => {
      setItsLoading(false);

      const nuevoUsuario = {

        usuario: Date.now(),
        email: formData.email,
        nombre: `${formData.firstName} ${formData.lastName}`,
        password: formData.password
      };

      registrarUsuario(nuevoUsuario);

      navigate('/')
    }, 2000)
  };

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col font-sans relative">
      <Link
        to="/"
        className="absolute top-6 left-4 md:fixed md:top-8 md:left-8 flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900
       transition-colors font-medium z-10"
      >
        <FaArrowLeft size={16} />
        <span className="hidden md:inline">Regresar</span>
      </Link>

      <header className="w-full pt-16 md:pt-10 pb-4 px-4">
        <div className="max-w-md mx-auto flex justify-center items-center">
          <h1 className="text-3xl font-bold text-gray-900">
            The Chronicle
          </h1>
        </div>
      </header>

      <main className="flex-grow flex items-center justify-center p-4 md:p-8">
        <div className="w-full max-w-md mx-auto">
          <div className="bg-white border border-gray-300 rounded-xl p-6 md:p-10 shadow-lg">

            <div className="mb-8 text-center">
              <h2 className="text-2xl font-semibold text-gray-900 mb-2">Crea tu cuenta</h2>
              <p className="text-gray-600">
                ¿Ya tienes una cuenta?{' '}
                {/* Más adelante le daremos vida a este botón para que regrese al login */}
                <Link to='/Login' className="text-blue-600 hover:underline font-semibold">
                  Inicia sesión
                </Link>.
              </p>
            </div>
            {errorLocal && (

              <div className="bg-red-50 border-l-4 border-red-500 text-red-700 p-4 mb-6 rounded-md text-sm font-medium">
                {errorLocal}
              </div>
            )}

            <form onSubmit={manejarRegistro} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5" htmlFor="firstName">Nombre(s)</label>
                  <input
                    className="w-full border border-gray-300 rounded px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                    id="firstName"
                    type="text"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5" htmlFor="lastName">Apellido(s)</label>
                  <input
                    className="w-full border border-gray-300 rounded px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                    id="lastName"
                    type="text"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5" htmlFor="email">Correo Electrónico</label>
                <input
                  className="w-full border border-gray-300 rounded px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5" htmlFor="password">Contraseña</label>
                <div className="relative">
                  <input
                    className="w-full border border-gray-300 rounded px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none transition-all pr-12"
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Contraseña"
                    value={formData.password}
                    onChange={handleChange}
                    required
                    minLength={6}
                    pattern="^[a-zA-Z0-9]+$"
                    title="La contraseña solo debe contener letras y números (sin espacios ni caracteres especiales)"
                  />
                  <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-blue-500 transition-colors"
                    title={showPassword ? "Ocultar contraseña" : "Mostrar contraseña"}
                  >
                    {showPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}

                  </button>

                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5" htmlFor="confirmPassword">Confirma Contraseña</label>

                {/* 1. FALTABA ESTE CONTENEDOR RELATIVE */}
                <div className="relative">
                  <input
                    className="w-full border border-gray-300 rounded px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none transition-all pr-12"
                    id="confirmPassword"
                    placeholder="Confirmar Contraseña"
                    type={showConfirmPassword ? "text" : "password"}
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    required
                    minLength={6}
                    pattern="^[a-zA-Z0-9]+$"
                    title="La contraseña solo debe contener letras y números (sin espacios ni caracteres especiales)"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)} // Nombre corregido (ver punto 2)
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-blue-500 transition-colors"
                    title={showPassword ? "Ocultar contraseña" : "Mostrar contraseña"}
                  >
                    {showConfirmPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
                  </button>
                </div>
              </div>

              <div className="pt-2">
                <button
                  className={`w-full text-white font-semibold rounded py-3.5 flex justify-center items-center gap-2 transition-colors ${isLoading ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700 cursor-pointer'
                    }`}
                  type="submit"
                  disabled={isLoading} // Deshabilita el botón mientras carga
                >
                  {isLoading ? (
                    <>
                      <TbSettingsAutomation className="animate-spin" size={20} />
                      Creando cuenta...
                    </>
                  ) : (
                    "Crear Cuenta"
                  )}
                </button>
              </div>
            </form>

          </div>
        </div>
      </main>
    </div>
  );
};