import { useState } from "react";

export const useAuth = () => {
    // 1. Agregamos el estado del usuario. 
    // Al iniciar, revisamos si ya había alguien guardado en la memoria del navegador.
    const [usuario, setUsuario] = useState(() => {
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

            const usuarioEncontrado = usuarios.find((u: any) => u.email === email);

            if (usuarioEncontrado && usuarioEncontrado.password === password) {
                // 2. ¡Éxito! Guardamos al usuario en el estado de React...
                setUsuario(usuarioEncontrado);
                // ... y también en la memoria del navegador para que sobreviva al cambio de página
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

    // 3. Creamos la función para salir
    const cerrarSesion = () => {
        setUsuario(null); // Borramos el estado de React
        localStorage.removeItem('usuario_noticiero'); // Borramos la memoria del navegador
    };

    // 4. Exportamos las nuevas herramientas para que el Header las pueda usar
    return { iniciarSesion, cargando, error, setError, usuario, cerrarSesion };
};