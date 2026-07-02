import { useState } from "react";

export const useAuth = () => {
    const [cargando, setCargando] = useState(false);
    const [error, setError] = useState('');

    const iniciarSesion = async (email: string, password: string) => {
        setError('');
        setCargando(true);
        await new Promise(resolve => setTimeout(resolve, 3000))

        try {
            const response = await fetch('./usuarios.json');
            const usuarios = await response.json();

            const usuarioEncontrado = usuarios.find((u: any) => u.email === email);

            if (usuarioEncontrado && usuarioEncontrado.password === password) {
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

    return { iniciarSesion, cargando, error, setError };
};