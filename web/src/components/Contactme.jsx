export default function Contactme() {
    return (
        <section className="px-6 sm:px-10 lg:px-20 py-24">

            <div className="max-w-4xl mx-auto bg-[var(--bgv2)] border border-white/5 rounded-2xl p-10 sm:p-14 relative overflow-hidden">

                {/* Header */}
                <span className="text-xs tracking-[0.3em] uppercase text-[var(--texttitlev2)]">
          // Contacto
                </span>

                <h1 className="text-white text-[2rem] sm:text-5xl leading-tight mt-4">
                    Hablemos de tu{"  "}
                    <span className="text-[var(--texttitlev1)]">proyecto</span>
                </h1>

                <p className="text-[var(--text)] mt-6 max-w-xl text-sm sm:text-base">
                    ¿Tienes una idea o necesitas renovar tu presencia digital?
                    Escríbeme y vemos cómo puedo ayudarte.
                </p>

                {/* Email CTA */}
                <div className="mt-10">
                    <a
                        href="mailto:adriangonzalodev@gmail.com"
                        className="inline-flex items-center gap-3 
             border border-white/20 
             px-8 py-4 
             text-white 
             hover:border-blue-500 
             hover:text-blue-400 
             transition-all duration-300"
                    >
                        adriangonzalodev@gmail.com
                    </a>



                </div>

            </div>

        </section>
    );
}
