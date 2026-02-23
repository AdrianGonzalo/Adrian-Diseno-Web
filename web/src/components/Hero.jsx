export default function Hero() {
    return (
        <section className="relative min-h-svh flex items-center justify-center px-6 overflow-hidden">

            <div className="max-w-4xl text-center">

                <h2 className="text-xs tracking-[0.3em] uppercase text-[var(--text)] mb-4 sm:text-xl leading-[1.1]">
                    Presencia online profesional
                </h2>
                <div className="font-serif py-2
                       text-[3.3rem]
                       sm:text-5xl
                       md:text-6xl
                       lg:text-7xl
                       xl:text-8xl
                       leading-[1.1]
                       mb-8">
                    <h1>
                        Diseño web para
                    </h1>
                    <h1>
                        <span className="text-[var(--texttitlev2)]">negocios locales</span>
                    </h1>
                </div>

                <p className="text-[var(--text)] max-w-2xl mx-auto mb-10 text-sm sm:text-lg leading-[1.1]">
                    Diseño páginas claras y profesionales para conseguir más clientes.
                </p>


                <div className="flex flex-col items-center gap-4">
                    <a href="#contactme" className="bg-[var(--texttitlev1)]  transition px-4 py-3 w-[210px] font-semibold">
                        Cuéntame tu idea
                    </a>
                    <a href="#works" className="border border-[var(--texttitlev2)] text-[var(--texttitlev2)] hover:bg-[var(--texttitlev1)] hover:text-black transition-all duration-300 px-4 py-3 w-[210px] ">
                        Ver proyectos
                    </a>

                </div>
            </div>

            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-300 animate-bounce text-xl">
                ↓
            </div>


        </section >
    );
}