export default function Hero() {
    return (
        <section className="relative min-h-svh flex items-center justify-center px-4">

            <div className="max-w-4xl text-center">

                <h2 className="text-xs tracking-[0.3em] uppercase text-[var(--texttitlev2)] mb-4 sm:text-xl leading-[1.1]">
                    Desarrollo web profesional
                </h2>
                <div className="font-serif py-2
                       text-[2.65rem]
                       sm:text-5xl
                       md:text-6xl
                       lg:text-7xl
                       xl:text-8xl
                       leading-[1.1]
                       mb-8">
                    <h1>
                        Creamos experiencias
                    </h1>
                    <h1>digitales{" "}
                        <span className="text-[var(--texttitlev1)]">excepcionales</span>
                    </h1>
                </div>

                <p className="text-[var(--text)] max-w-2xl mx-auto mb-10 text-sm sm:text-lg leading-[1.1]">
                    Transformo ideas en sitios web elegantes, funcionales y optimizados para convertir visitantes en clientes.
                </p>


                <div className="flex flex-col items-center gap-4">
                    <button className="bg-[var(--texttitlev1)] hover:bg-blue-600 transition px-4 py-3 w-[160px] font-semibold">
                        Ver proyectos
                    </button>

                    <button className="border border-gray-700 hover:border-gray-500 transition px-4 py-3 w-[130px]">
                        Contactar
                    </button>
                </div>
            </div>

            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-300 animate-bounce text-xl">
                ↓
            </div>

        </section >
    );
}