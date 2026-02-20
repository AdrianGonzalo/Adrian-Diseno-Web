export default function SkillSection() {
    const steps = [
        {
            number: "01",
            title: "Hablamos de tu negocio",
            description:
                "Me cuentas tu idea. Yo me encargo de convertirla en una web que venda.",
        },
        {
            number: "02",
            title: "Diseño y creo tu web",
            description:
                "Diseño y desarrollo tu web con un enfoque claro: atraer clientes.",
        },
        {
            number: "03",
            title: "Tu web lista y funcionando",
            description:
                "Publicamos tu web y empiezas a recibir visitas desde el primer día.",
        },
    ];

    return (
        <section className="px-6 py-10">
            <div className="max-w-6xl mx-auto text-center">
                <p className="text-sm text-[var(--texttitlev2)] tracking-widest uppercase mb-4">
                    Así de fácil
                </p>

                <h1 className="text-4xl md:text-5xl font-semibold mb-16 leading-tight">
                    3 pasos para tener la web <br className="hidden md:block" />
                    que tu negocio necesita
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {steps.map((step) => (
                        <div key={step.number} className="relative">
                            {/* Número */}
                            <div className="flex items-center justify-center mb-6">
                                <div className="w-12 h-12 flex items-center justify-center rounded-lg  border border-[var(--texttitlev2)] text-[var(--texttitlev2)] font-semibold">
                                    {step.number}
                                </div>
                            </div>

                            {/* Contenido */}
                            <h3 className="text-xl font-semibold mb-4">
                                {step.title}
                            </h3>

                            <p className="text-[var(--text)] text-sm leading-relaxed">
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
