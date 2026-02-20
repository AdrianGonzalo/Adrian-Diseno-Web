export default function Footer() {
    return (
        <footer className="bg-[#0B1120] border-t border-[var(--texttitlev1)]/20">
            <div className="max-w-6xl mx-auto px-6 py-12">

                {/* Top */}
                <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8">

                    {/* Marca */}
                    <div className="text-center md:text-left">
                        <h3 className="font-serif text-2xl text-white">
                            Adrian Diseño Web
                        </h3>
                        <p className="text-[var(--text)] mt-3 text-sm max-w-sm">
                            Diseño y desarrollo webs estratégicas, rápidas y pensadas para convertir.
                        </p>
                    </div>

                    {/* Navegación */}
                    <div className="flex flex-col sm:flex-row gap-6 text-sm text-[var(--text)]">
                        <a href="#about" className="hover:text-[var(--texttitlev1)] transition">
                            Privacidad
                        </a>
                        <a href="#works" className="hover:text-[var(--texttitlev1)] transition">
                            Aviso legal
                        </a>
                    </div>
                </div>

                {/* Bottom */}
                <div className="mt-12 pt-6 border-t border-[var(--texttitlev1)]/10 text-center text-xs text-[var(--text)]">
                    © {new Date().getFullYear()} Adrian Diseño Web. Todos los derechos reservados.
                </div>

            </div>
        </footer>
    );
}
