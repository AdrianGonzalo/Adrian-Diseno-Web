import Link from "next/link";

export default function AvisoLegal() {
    return (
        <main className="min-h-screen bg-[var(--bg)] text-[var(--text)] px-5 sm:px-8 lg:px-16 py-16 sm:py-20 mt-10">

            <div className="max-w-4xl mx-auto">

                {/* Título */}
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-12 bg-gradient-to-r from-[var(--texttitlev1)] to-[var(--texttitlev2)] bg-clip-text text-transparent">
                    Aviso Legal
                </h1>

                <section className="space-y-10">

                    <div>
                        <h2 className="text-lg sm:text-xl font-semibold text-white mb-3">
                            1. Datos identificativos
                        </h2>
                        <p className="leading-relaxed">
                            Titular: Adrián Martín Gonzalo<br />
                            País de residencia: España<br />
                            Email: adriangonzalodev@gmail.com
                        </p>
                        <p className="mt-4 leading-relaxed">
                            Este sitio web tiene como finalidad mostrar información profesional
                            y permitir el contacto mediante formulario.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-lg sm:text-xl font-semibold text-white mb-3">
                            2. Condiciones de uso
                        </h2>
                        <p className="leading-relaxed">
                            El acceso y uso del sitio web implica la aceptación de estas condiciones.
                            El usuario se compromete a hacer un uso adecuado del contenido.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-lg sm:text-xl font-semibold text-white mb-3">
                            3. Propiedad intelectual
                        </h2>
                        <p className="leading-relaxed">
                            Todos los contenidos (textos, código, diseño y proyectos) son propiedad
                            de Adrián Martín Gonzalo, salvo indicación contraria.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-lg sm:text-xl font-semibold text-white mb-3">
                            4. Responsabilidad
                        </h2>
                        <p className="leading-relaxed">
                            El titular no se hace responsable del uso indebido del contenido
                            ni del contenido de terceros enlazados.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-lg sm:text-xl font-semibold text-white mb-3">
                            5. Legislación aplicable
                        </h2>
                        <p className="leading-relaxed">
                            La relación entre el titular y el usuario se regirá por la normativa vigente en España.
                        </p>
                    </div>

                    <Link
                        href="/"
                        className="px-6 py-4 bg-[var(--texttitlev1)] text-white font-semibold">
                        ← Volver al inicio
                    </Link>

                </section>
            </div>
        </main>
    );
}