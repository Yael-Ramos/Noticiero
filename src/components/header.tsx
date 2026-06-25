import Logo from '../../../imagenes/Logo.jpg'

interface HeaderProps {
    onLoginClick: () => void;
}

export default function Header({onLoginClick }: HeaderProps) {


    return (
        <nav className="bg-white border border-gray-100 shadow-xl sticky">

            <div className="max-w-7xl mx-auto px-4 lg:px-8 h-16 flex justify-between items-center">

                <div className="flex-shrink-0">
                    <a
                        href="#"
                        className="text-xl font-bold text-[#0F172A] transition-colors">
                        <img
                            src={Logo}
                            alt="MIDOMINIO"
                            className='h-18 w-56 rounded-lg object-contain block mix-blend-multiply'
                            />
                    </a>
                </div>

                <div className="flex items-center space-x-8">
                    <a href="#" className="text-sm font-semibold text-(#475569) transition-colors">
                        Inicio
                    </a>
                    <a href="#" className="text-sm font-semibold text-(#475569) transition-colors">
                        Noticias
                    </a>
                    <a href="#" className="text-sm font-semibold text-(#475569) transition-colors">
                        Partidos
                    </a>
                </div>

                <div>
                    <button 
                    onClick={onLoginClick}
                    className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-md transition-colors duration-200 shadow-sm" >
                        Ingresar
                    </button>
                </div>
            </div>
        </nav>
    );
}


