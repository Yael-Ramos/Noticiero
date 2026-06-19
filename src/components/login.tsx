import React from 'react';

export default function Login() {
  // Solo evitamos que la página parpadee al darle clic al botón, nada más.
  const manejarEnvio = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <main className="min-h-screen flex flex-col lg:flex-row bg-background font-body">
      
      {/* Panel Izquierdo (Marca y Propuesta de Valor) */}
      <section className="hidden lg:flex lg:w-1/2 bg-brand-dark p-16 flex-col justify-between relative overflow-hidden">
        <div className="relative z-10">
          <a className="text-white font-headline text-4xl mb-12 block font-bold" href="#">
            Portal de Asesores
          </a>
          <div className="max-w-md">
            <h2 className="text-white font-headline text-5xl leading-tight mb-6 font-bold">
              Impulsa el futuro de tus alumnos hoy.
            </h2>
            <p className="text-blue-100/80 text-xl">
              Accede a tu panel para gestionar prospectos, revisar el catálogo de cursos y cerrar tus próximas ventas.
            </p>
          </div>
        </div>
        
        <div className="relative z-10 mt-auto">
          <blockquote className="border-l-4 border-primary pl-6 py-2">
            <p className="text-white italic text-lg mb-2">
              "El mejor cierre de ventas comienza con la asesoría correcta y la herramienta adecuada."
            </p>
            <cite className="text-blue-200/60 text-sm not-italic uppercase tracking-widest font-medium">
              — Dirección Comercial
            </cite>
          </blockquote>
        </div>
        
        <div className="absolute inset-0 opacity-10 pointer-events-none mix-blend-overlay bg-black"></div>
      </section>

      {/* Panel Derecho (Formulario de Login) */}
      <section className="w-full lg:w-1/2 flex items-center justify-center p-8 lg:p-16 bg-background">
        <div className="w-full max-w-[440px]">
          
          <div className="lg:hidden flex flex-col items-center mb-12">
            <span className="font-headline text-3xl font-bold text-on-surface mb-8">
              Portal de Asesores
            </span>
          </div>
          
          <div className="mb-10 text-center lg:text-left">
            <h1 className="font-headline text-4xl font-bold text-on-surface mb-3">
              Bienvenido de nuevo
            </h1>
            <p className="text-on-surface-variant">
              Ingresa tus credenciales de asesor para continuar.
            </p>
          </div>

          <form onSubmit={manejarEnvio} className="space-y-6">
            
            {/* Campo: Correo electrónico */}
            <div className="space-y-2 group transition-transform duration-200 focus-within:scale-[1.01]">
              <label htmlFor="email" className="block text-sm font-semibold text-on-surface">
                Correo electrónico
              </label>
              <input 
                id="email" 
                type="email" 
                placeholder="asesor@ejemplo.com" 
                required 
                className="w-full px-4 py-3.5 bg-white border border-outline-variant rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 outline-none text-on-surface"
              />
            </div>

            {/* Campo: Contraseña */}
            <div className="space-y-2 group transition-transform duration-200 focus-within:scale-[1.01]">
              <div className="flex justify-between items-center">
                <label htmlFor="password" className="block text-sm font-semibold text-on-surface">
                  Contraseña
                </label>
                <a href="#" className="text-xs font-medium text-primary hover:underline">
                  ¿Olvidaste tu contraseña?
                </a>
              </div>
              <input 
                id="password" 
                type="password" 
                placeholder="••••••••" 
                required 
                className="w-full px-4 py-3.5 bg-white border border-outline-variant rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 outline-none text-on-surface"
              />
            </div>

            {/* Botón de Submit */}
            <div className="pt-2">
              <button 
                type="submit" 
                className="w-full bg-brand-dark text-white py-4 rounded-lg font-semibold transition-all duration-300 hover:bg-slate-800 active:scale-[0.98] shadow-md"
              >
                Iniciar Sesión
              </button>
            </div>

            <div className="relative flex py-4 items-center">
              <div className="flex-grow border-t border-outline-variant"></div>
              <span className="flex-shrink mx-4 text-xs text-on-surface-variant font-medium">
                o iniciar con
              </span>
              <div className="flex-grow border-t border-outline-variant"></div>
            </div>

            <div className="flex flex-col gap-3">
              <button 
                type="button" 
                className="flex items-center justify-center gap-3 w-full py-3.5 border border-outline-variant rounded-lg bg-white hover:bg-surface-container transition-colors duration-200 shadow-sm font-semibold text-on-surface"
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

          <div className="mt-20 pt-8 border-t border-outline-variant flex flex-wrap gap-4 justify-center lg:justify-start">
            <a href="#" className="text-sm text-on-surface-variant hover:text-primary transition-colors">Privacidad</a>
            <a href="#" className="text-sm text-on-surface-variant hover:text-primary transition-colors">Términos</a>
            <a href="#" className="text-sm text-on-surface-variant hover:text-primary transition-colors">Soporte Técnico</a>
          </div>
          
        </div>
      </section>
    </main>
  );
}