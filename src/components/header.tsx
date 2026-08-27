import { Link } from 'react-router-dom';
import { useAuth } from '../hook/useAuth'; // Ajusta la ruta si es necesario según tus carpetas
import  Logo  from '..//../../imagenes/Logo sin fondo.png'
import { useState } from 'react';

interface HeaderProps {
    onLoginClick?: () => void;
}

export default function Header({ onLoginClick }: HeaderProps) {
  
    const { usuario, cerrarSesion } = useAuth();
    const [menuAbierto, setMenuAbierto] = useState(false);

    return (
        <nav className="bg-white border border-gray-100 shadow-xl sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 lg:px-8 flex justify-between items-center relative py-5">
                <div className='w-8 md:hidden'></div>

                   <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 md:relative md:transform-none md:flex-shrink-0
                   md:left-auto md:top-auto md:translate-x-0 md:translate-y-0">
                        {/* 2. Enlaces con react-router-dom para evitar recargar la página */}
                        <Link to="/" className="text-xl font-bold text-[#0F172A] transition-colors">
                            <img
                                src={Logo}
                                alt="Noticiero React"
                                className='h-20 w-auto rounded-lg object-contain block mix-blend-multiply md:h-20 md:w-auto'
                            />
                        </Link>
                    </div>

                <div className="hidden md:flex items-center space-x-4">
                    <Link to="/App" className="text-sm font-semibold text-[#475569] hover:text-blue-600 transition-colors">
                        Inicio
                    </Link>
                    <Link to="/noticias" className="text-sm font-semibold text-[#475569] hover:text-blue-600 transition-colors">
                        Noticias
                    </Link>
                    <Link to="/partidos" className="text-sm font-semibold text-[#475569] hover:text-blue-600 transition-colors">
                        Partidos
                    </Link>
                </div>

                <div className='hidden md:block'>
                    {usuario ? (
                        <div className="flex items-center space-x-4">
                            <span className="text-sm font-medium text-gray-700">
                                Hola, <span className="font-bold text-blue-600">{usuario.nombre || usuario.email}</span>
                            </span>

                            <button
                                onClick={cerrarSesion}
                                className="bg-red-50 hover:bg-red-100 text-red-600 font-semibold py-2 px-4 rounded-md transition-colors duration-200 shadow-sm text-sm"
                            >
                                Salir
                            </button>
                        </div>
                    ) : (

                        <div className="flex items-center space-x-3">
                            <button
                                onClick={onLoginClick}
                                className="text-sm font-semibold text-[#475569] hover:text-blue-600 px-4 py-2 transition-colors"
                            >
                                Ingresar
                            </button>

                            <Link
                                to="/registro"
                                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-5 rounded-md transition-colors duration-200 shadow-sm text-sm"
                            >
                                Registrarse
                            </Link>
                        </div>
                    )}
                </div>

                <div className='md:hidden flex items-center'>
                    <button
                        onClick={() => setMenuAbierto(!menuAbierto)}
                        className='text-gray-600 hover:text-gray-900 focus:outline-none'>

                        <svg
                            className='h-6 w-6' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                            {menuAbierto ? (
                                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6L18 18' />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>

                    </button>
                </div>
            </div>

            {menuAbierto && (
                <div className='md:hidden bg-white px-4 py-4 shadow-xl space-y-4 absolute w-full left-0'>
                    <div className='flex flex-col space-y-4'> {/* <--- Corrección: era flex-col */}
                        <Link to="/App" onClick={() => setMenuAbierto(false)} className='block text-center font-semibold w-full py-2 text-[#475569] hover:text-blue-600'>
                            Inicio
                        </Link>
                        <Link to="/noticias" onClick={() => setMenuAbierto(false)} className="block text-center font-semibold w-full py-2 text-[#475569] hover:text-blue-600">
                            Noticias
                        </Link>
                        <Link to="/partidos" onClick={() => setMenuAbierto(false)} className="block text-center font-semibold w-full py-2 text-[#475569] hover:text-blue-600">
                            Partidos
                        </Link>
                    </div>

                    <div className="">
                        {usuario ? (
                            <div className="flex flex-col space-y-3">
                                <span className="text-sm font-medium text-gray-700">
                                    Hola, <span className="font-bold text-blue-600">{usuario.nombre || usuario.email}</span>
                                </span>
                                <button
                                    onClick={() => { cerrarSesion(); setMenuAbierto(false); }}
                                    className="bg-red-50 hover:bg-red-100 text-red-600 font-semibold py-2 w-full text-center rounded-md text-sm border"
                                >
                                    Salir
                                </button>
                            </div>
                        ) : (
                            <div className="flex flex-col space-y-3">
                                <button
                                    onClick={() => { onLoginClick && onLoginClick(); setMenuAbierto(false); }}
                                    className="text-md font-semibold text-[#475569] hover:text-blue-600 py-2 w-full text-center"
                                >
                                    Ingresar
                                </button>
                                <Link
                                    to="/registro"
                                    onClick={() => setMenuAbierto(false)}
                                    className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 w-full text-center rounded-md text-sm"
                                >
                                    Registrarse
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </nav>
    );
}