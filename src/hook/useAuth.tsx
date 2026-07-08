
import { createContext, useContext, useState, type ReactNode } from "react";

export interface Usuario {
    usuario: number;
    email: string;
    nombre: string;
    password?: string;
}

interface AuthContextType {
    usuario: Usuario | null;
    cargando: boolean;
    error: string;
    iniciarSesion: (email: string, password: string) => Promise<{ exito: boolean, usuario?: Usuario }>;
    cerrarSesion: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {

    const [usuario, setUsuario] = useState<Usuario | null>(() => {
        const usuarioGuardado = localStorage.getItem('usuario_noticiero');
        return usuarioGuardado ? JSON.parse(usuarioGuardado) : null;
    });

    const [cargando, setCargando] = useState(false);
    const [error, setError] = useState('');

    const iniciarSesion = async (email: string, password: string) => {
        setError('');
        setCargando(true);
        await new Promise(resolve => setTimeout(resolve, 3000));

        try {
            const response = await fetch('./usuarios.json');
            const usuarios = await response.json();

            const usuarioEncontrado = usuarios.find((u: Usuario) => u.email === email);

            if (usuarioEncontrado && usuarioEncontrado.password === password) {
                setUsuario(usuarioEncontrado);
                localStorage.setItem('usuario_noticiero', JSON.stringify(usuarioEncontrado));
                return { exito: true, usuario: usuarioEncontrado };
            } else {
                setError("Correo o contraseña incorrectos.");
                return { exito: false };
            }
        } catch (err) {
            setError("Error al conectar con el servidor");
            return { exito: false };
        } finally {
            setCargando(false);
        }
    };

    const cerrarSesion = () => {
        setUsuario(null); // Borramos el estado de React
        localStorage.removeItem('usuario_noticiero'); // Borramos la memoria del navegador
    };

    return (

        <AuthContext.Provider value={{usuario, cargando, error, iniciarSesion, cerrarSesion}}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if(!context) {
        throw new Error("useAuth debe usarse dentro de un AuthProvider");
    }
    return context;
};