import { Link } from "react-router-dom";
import React, { useState } from "react";
export const RegisterForm = () => {

  const [formData, setFormData] = useState({

    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [errorLocal, setErrorLocal] = useState('');


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    setErrorLocal('');

    if (formData.password !== formData.confirmPassword) {
      setErrorLocal('Las contraseñas no coinciden. Verificalas por favor');
      return;
    }

    console.log("¡Todo válido! Listo para guardar a:", formData);
  };

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col font-sans">
      <header className="w-full py-8 px-8 text-center border-b border-gray-200">
        <h1 className="inline-block text-3xl font-bold text-gray-900">The Chronicle</h1>
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

              <div className="bg-red-60 border-l-4 border-red-500 text-red-500 text-red-700 p-4 mb-6 rounded-md text.sm font.medium">
                {errorLocal}
              </div>
            )}

            <form  onSubmit={handleSubmit} className="space-y-5">
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
                <label className="block text-sm font-medium text-gray-700 mb-1.5" htmlFor="email">Correo Electronico</label>
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
                <input
                  className="w-full border border-gray-300 rounded px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                  id="password"
                  type="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  minLength={6}
                  pattern="^[a-zA-Z0-9]+$"
                  title="La contraseña solo debe contener letras y números (sin espacios ni caracteres especiales)"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5" htmlFor="confirmPassword">Confirma Contraseña</label>
                <input
                  className="w-full border border-gray-300 rounded px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                  id="confirmPassword"
                  type="password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                  minLength={6}
                  pattern="^[a-zA-Z0-9]+$"
                  title="La contraseña solo debe contener letras y números (sin espacios ni caracteres especiales)"
                />
              </div>

              <div className="pt-2">
                <button
                  className="w-full text-white font-semibold rounded py-3.5 flex justify-center items-center gap-2 bg-blue-600 hover:bg-blue-700 transition-colors cursor-pointer"
                  type="submit"
                >
                  Crear Cuenta
                </button>
              </div>
            </form>

          </div>
        </div>
      </main>
    </div>
  );
};