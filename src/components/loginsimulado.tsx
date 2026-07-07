import { useEffect } from "react";

interface Props {
    mostrar: boolean;
    alTerminar: () => void;
}

export function NotificacionExito({ mostrar, alTerminar }: Props) {

    useEffect(() => {
        if (mostrar === true) {

            const validacion = setTimeout(() => {
                alTerminar();

            }, 5000);

            return () => clearTimeout(validacion);
        }

    }, [mostrar, alTerminar]);

    if (!mostrar) return null;

    return (
        <div style={{ backgroundColor: 'green', color: 'white', padding: '10px', marginTop: '10px' }}>
            ¡Inicio de sesión exitoso!
        </div>
    );
}