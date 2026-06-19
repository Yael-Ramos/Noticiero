import Notice from "./Noticia";
import { noticiasDelDia } from "./Informacion";


export default function Body() {
    return (
        /* 1. CONTENEDOR PADRE: Cambiamos a flex-row en pantallas grandes ('lg') y alineamos arriba con items-start */
        <div className="max-w-6xl mx-auto px-4 py-6 flex flex-col lg:flex-row gap-8 items-start w-full">
            
            {/* =========================================================
                COLUMNA IZQUIERDA: TUS NOTICIAS ACTUALES (Ocupa el 70%)
                ========================================================= */}
            <main className="w-full lg:w-2/3 flex flex-col gap-4">
                <div className="border-b-2 border-gray-200 pb-2 mb-2">
                    <h2 className="text-2xl font-bold text-blue-900 border-b-4 border-blue-900 inline-block pb-2 -mb-[10px]">
                        Top Stories
                    </h2>
                </div>

                {/* Tu .map se queda exactamente igual, pero protegido dentro de su columna */}
                {noticiasDelDia.map((noticia) => (
                    <Notice
                        key={noticia.id}
                        titulo={noticia.titulo}
                        texto={noticia.texto}
                        imageUrl={noticia.imageUrl}
                    />
                ))}
            </main>

            {/* =========================================================
                COLUMNA DERECHA: BARRA LATERAL STICKY (Ocupa el 30%)
                ========================================================= */}
            {/* El combo 'sticky top-6' hace que se congele al hacer scroll */}
            <aside className="w-full lg:w-1/3 sticky top-6 flex flex-col gap-6">
                
                {/* Bloque "Trending Now" (Copia fiel de la imagen) */}
                <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
                    <h3 className="text-xl font-bold text-gray-900 mb-4 border-b pb-2 border-gray-100">Trending Now</h3>
                    
                    <div className="flex flex-col gap-4">
                        {/* Noticia Lateral 1 */}
                        <div className="cursor-pointer group">
                            <span className="text-[10px] font-bold text-blue-700 tracking-wider uppercase">Politics</span>
                            <h5 className="text-sm font-bold text-gray-900 group-hover:text-blue-700 transition leading-snug mt-0.5">
                                Senate Passes Controversial Infrastructure Bill After Marathon Session
                            </h5>
                        </div>
                        <hr className="border-gray-100" />

                        {/* Noticia Lateral 2 */}
                        <div className="cursor-pointer group">
                            <span className="text-[10px] font-bold text-blue-700 tracking-wider uppercase">Science</span>
                            <h5 className="text-sm font-bold text-gray-900 group-hover:text-blue-700 transition leading-snug mt-0.5">
                                Astronomers Discover Potentially Habitable Exoplanet in Nearby System
                            </h5>
                        </div>
                        <hr className="border-gray-100" />

                        {/* Noticia Lateral 3 */}
                        <div className="cursor-pointer group">
                            <span className="text-[10px] font-bold text-blue-700 tracking-wider uppercase">World</span>
                            <h5 className="text-sm font-bold text-gray-900 group-hover:text-blue-700 transition leading-snug mt-0.5">
                                Mass Protests Erupt Across European Capitals Over Energy Policies
                            </h5>
                        </div>
                    </div>
                </div>

                {/* Caja del Boletín Diario */}
                <div className="bg-blue-600 rounded-xl p-5 text-white shadow-sm">
                    <h4 className="text-lg font-bold mb-1">Daily Briefing</h4>
                    <p className="text-xs text-blue-100 mb-4 leading-relaxed">
                        Get the day's top stories delivered directly to your inbox.
                    </p>
                    <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-2">
                        <input 
                            type="email" 
                            placeholder="Your email address" 
                            className="w-full px-3 py-2 text-sm rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                        <button className="w-full bg-blue-900 hover:bg-blue-950 text-white font-bold text-xs uppercase py-2.5 rounded-lg tracking-wider transition">
                            Sign Up
                        </button>
                    </form>
                </div>

            </aside>

        </div>
    );
}