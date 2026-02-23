export default function Aboutme() {
    return (
        <section
            id="aboutme"
            className="px-6 py-28 scroll-mt-16 bg-[var(--bg-soft2)]"
        >
            <div className="max-w-6xl mx-auto text-center">
                {/* Titulos */}
                <h1 className="font-serif text-[2.65rem] sm:text-5xl lg:text-6xl mt-4 mb-10">
                    Detrás de cada{" "}
                    <span className="text-[var(--texttitlev1)] italic">web</span>
                </h1>
                <div className=" space-y-6 text-[var(--text)] text-sm sm:text-base leading-relaxed">

                    <p>
                        Trabajo con negocios que quieren una web clara, profesional y que les ayude a conseguir más clientes.
                        Me encargo de todo el proceso para que tú no tengas que preocuparte por nada técnico.
                    </p>

                    <p>
                        Diseño y desarrollo cada proyecto pensando en lo más importante: que tu web sea fácil de usar,
                        rápida y que transmita confianza desde el primer momento.
                    </p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-1 sm:grid-cols-3 mt-16 
divide-y sm:divide-y-0 sm:divide-x 
divide-[var(--texttitlev1)]">

                    <div className="px-8 py-6 text-center">
                        <h3 className="font-serif text-2xl sm:text-3xl">
                            Más clientes
                        </h3>
                        <p className="text-[var(--text)] mt-3 text-sm sm:text-base">
                            Web pensada para atraer visitas y convertirlas en oportunidades reales.
                        </p>
                    </div>

                    <div className="px-8 py-6 text-center">
                        <h3 className="font-serif text-2xl sm:text-3xl">
                            Rápida y optimizada
                        </h3>
                        <p className="text-[var(--text)] mt-3 text-sm sm:text-base">
                            Velocidad y rendimiento que transmiten profesionalidad y no hacen perder clientes.
                        </p>
                    </div>

                    <div className="px-8 py-6 text-center">
                        <h3 className="font-serif text-2xl sm:text-3xl">
                            Sin complicaciones
                        </h3>
                        <p className="text-[var(--text)] mt-3 text-sm sm:text-base">
                            Me encargo de todo el proceso para que tú solo te centres en tu negocio.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    )
}