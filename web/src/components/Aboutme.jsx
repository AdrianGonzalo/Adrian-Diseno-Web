export default function Aboutme() {
    return (
        <section id="aboutme" className="px-6 py-6 text-center max-w-6xl mx-auto scroll-mt-16">
            <div>
                {/* Titulos */}
                <h1 className="font-serif text-[2.65rem] sm:text-5xl lg:text-6xl mt-4 mb-10">
                    Detrás de cada{" "}
                    <span className="text-[var(--texttitlev1)] italic">web</span>
                </h1>
                <div className=" space-y-6 text-[var(--text)] text-sm sm:text-base leading-relaxed">

                    <p>
                        Ayudo a negocios y marcas personales a tener una presencia digital
                        que realmente marque la diferencia. Diseño y desarrollo sitios web
                        rápidos, elegantes y pensados para convertir visitas en oportunidades
                        reales.
                    </p>

                    <p>
                        Me implico en cada proyecto como si fuera propio, cuidando tanto el
                        diseño como el rendimiento y la experiencia de usuario. Mi objetivo
                        no es solo que tu web se vea bien, sino que funcione, conecte y te
                        ayude a crecer.
                    </p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-1 sm:grid-cols-3 mt-16 
                divide-y sm:divide-y-0 sm:divide-x 
                divide-[var(--texttitlev1)]">

                    <div className="px-8 py-4">
                        <h3 className="font-serif text-2xl sm:text-3xl">Clean Code</h3>
                        <p className="text-[var(--text)] mt-3 text-sm sm:text-base">
                            Desarrollo estructurado, mantenible y escalable.
                        </p>
                    </div>

                    <div className="px-8 py-4">
                        <h3 className="font-serif text-2xl sm:text-3xl">Performance</h3>
                        <p className="text-[var(--text)] mt-3 text-sm sm:text-base">
                            Web rápida, optimizada y pensada para posicionar.
                        </p>
                    </div>

                    <div className="px-8 py-4">
                        <h3 className="font-serif text-2xl sm:text-3xl">UX First</h3>
                        <p className="text-[var(--text)] mt-3 text-sm sm:text-base">
                            Experiencia clara, intuitiva y enfocada en conversión.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    )
}