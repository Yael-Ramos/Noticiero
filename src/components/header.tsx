import { Link } from 'react-router-dom';
import { useAuth } from '../hook/useAuth'; // Ajusta la ruta si es necesario según tus carpetas
import Logo from '../../../imagenes/Logo.jpg';

// Hacemos que la propiedad sea opcional por si decides manejar 
// la redirección al login directamente con React Router en el futuro
interface HeaderProps {
    onLoginClick?: () => void; 
}

export default function Header({ onLoginClick }: HeaderProps) {
    // 1. Invocamos nuestro hook y extraemos el usuario y la función de salir
    const { usuario, cerrarSesion } = useAuth();

    return (
        <nav className="bg-white border border-gray-100 shadow-xl sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 lg:px-8 h-16 flex justify-between items-center">
                
                <div className="flex-shrink-0">
                    {/* 2. Enlaces con react-router-dom para evitar recargar la página */}
                    <Link to="/App" className="text-xl font-bold text-[#0F172A] transition-colors">
                        <img
                            src={Logo}
                            alt="Noticiero React"
                            className='h-18 w-56 rounded-lg object-contain block mix-blend-multiply'
                        />
                    </Link>
                </div>

                <div className="flex items-center space-x-8">
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

                <div>
                    {/* 3. RENDERIZADO CONDICIONAL: Evaluamos el estado del usuario */}
                    {usuario ? (
                        <div className="flex items-center space-x-4">
                            {/* Si existe el usuario, lo saludamos por su nombre (o su email si no tiene nombre) */}
                            <span className="text-sm font-medium text-gray-700">
                                Hola, <span className="font-bold text-blue-600">{usuario.nombre || usuario.email}</span>
                            </span>
                            {/* Botón para destruir la sesión y limpiar el localStorage */}
                            <button 
                                onClick={cerrarSesion} 
                                className="bg-red-50 hover:bg-red-100 text-red-600 font-semibold py-2 px-4 rounded-md transition-colors duration-200 shadow-sm text-sm"
                            >
                                Salir
                            </button>
                        </div>
                    ) : (
                        /* Si NO existe el usuario, mostramos AMBOS botones (Ingresar y Registrarse) */
                        <div className="flex items-center space-x-3">
                            <button 
                                onClick={onLoginClick}
                                className="text-sm font-semibold text-[#475569] hover:text-blue-600 px-4 py-2 transition-colors" 
                            >
                                Ingresar
                            </button>
                            
                            {/* NUEVO: Botón de Registro que redirige a la ruta que creamos en App.tsx */}
                            <Link 
                                to="/registro" 
                                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-5 rounded-md transition-colors duration-200 shadow-sm text-sm"
                            >
                                Registrarse
                            </Link>
                        </div>
                    )}
                </div>
                
            </div>
        </nav>
    );
}