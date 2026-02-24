import Link from "next/link";

export default function Privacidad() {
    return (
        <main className="min-h-screen bg-[var(--bg)] text-[var(--text)] px-5 sm:px-8 lg:px-16 py-16 sm:py-20 mt-10">

            <div className="max-w-4xl mx-auto">

                {/* Título */}
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-12 bg-gradient-to-r from-[var(--texttitlev1)] to-[var(--texttitlev2)] bg-clip-text text-transparent">
                    Política de Privacidad
                </h1>

                <section className="space-y-10">

                    <div>
                        <h2 className="text-lg sm:text-xl font-semibold text-white mb-3">
                            1. Responsable del tratamiento
                        </h2>
                        <p className="leading-relaxed">
                            Adrián Martín Gonzalo<br />
                            Email: adriangonzalodev@gmail.com<br />
                            País: España
                        </p>
                    </div>

                    <div>
                        <h2 className="text-lg sm:text-xl font-semibold text-white mb-3">
                            2. Datos recogidos
                        </h2>
                        <ul className="list-disc list-inside space-y-2 leading-relaxed">
                            <li>Nombre</li>
                            <li>Empresa</li>
                            <li>Correo electrónico</li>
                            <li>Mensaje</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-lg sm:text-xl font-semibold text-white mb-3">
                            3. Finalidad
                        </h2>
                        <p className="leading-relaxed">
                            Los datos se utilizan exclusivamente para responder consultas
                            y establecer contacto profesional.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-lg sm:text-xl font-semibold text-white mb-3">
                            4. Base legal
                        </h2>
                        <p className="leading-relaxed">
                            El tratamiento se basa en el consentimiento del usuario al enviar el formulario.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-lg sm:text-xl font-semibold text-white mb-3">
                            5. Conservación
                        </h2>
                        <p className="leading-relaxed">
                            Los datos se conservarán únicamente el tiempo necesario para responder la consulta.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-lg sm:text-xl font-semibold text-white mb-3">
                            6. Destinatarios
                        </h2>
                        <p className="leading-relaxed">
                            El envío de datos se realiza mediante EmailJS como proveedor de envío de correos electrónicos.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-lg sm:text-xl font-semibold text-white mb-3">
                            7. Derechos
                        </h2>
                        <p className="leading-relaxed">
                            Puedes ejercer tus derechos enviando un correo a adriangonzalodev@gmail.com.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-lg sm:text-xl font-semibold text-white mb-3">
                            8. Cookies
                        </h2>
                        <p className="leading-relaxed">
                            Este sitio web no utiliza cookies propias ni de terceros.
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