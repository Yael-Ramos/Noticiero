
interface NoticiaProps {
    titulo: string;
    texto: string;
    imageUrl?: string | null;
}


export default function Notice({ titulo, texto, imageUrl }: NoticiaProps) {
    return (
        <div
            className="flex flex-col bg-(#FFFFFF) rounded-lg shadow-xl p-6 gap-4 w-full max-w-xl gap-4">
            <h2
                className='text-2xl font-bold text-(#0F172A)'
            >
                {titulo}
            </h2>
            <p
                className='text-slate-800'
            >
                {texto}
            </p>

            {imageUrl && (

                <img
                    src={imageUrl}
                    alt={`Ilustración para: ${titulo}`}
                    className='w-full h-48 rounded-md object-cover mt-2'
                />

            )}
        </div>

    );
}

