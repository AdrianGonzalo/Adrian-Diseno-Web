export default function Works() {
    const projects = [
        {
            category: "Industria audiovisual",
            title: "Helí Suárez",
            problem:
                "Necesitaba posicionarse como colorista profesional a nivel internacional.",
            solution:
                "Diseñé una web estratégica con portfolio audiovisual y blog profesional.",
            impact:
                "Hoy cuenta con una presencia online alineada con su nivel profesional.",
            result: "Posicionamiento internacional",
            tags: ["Portfolio", "Videos", "Blog", "Branding"],
            image: "/heli-suarez.png",
            url: "https://helisuarezcolor.com/",
        },
        {
            category: "Galería digital",
            title: "Hecho a Mano",
            problem:
                "Necesitaba mostrar sus trabajos de forma profesional sin depender de terceros.",
            solution:
                "Diseñé una galería clara con gestión sencilla y autónoma.",
            impact:
                "Ahora actualiza su contenido cuando quiere, manteniendo una imagen sólida.",
            result: "Gestión 100% autónoma",
            tags: ["Galería", "Panel admin", "Gestión dinámica"],
            image: "/hecho-a-mano.png",
            url: "https://www.artesaniadecorazon.com/",
        }
    ];

    return (
        <section id="works" className="scroll-mt-12 px-6 py-28 bg-[var(--bg-soft)]">
            <div className="max-w-6xl mx-auto">

                {/* Header */}
                <div className="text-center mb-16">
                    <p className="text-sm text-[var(--texttitlev2)] uppercase tracking-widest mb-4">
                        Resultados reales
                    </p>

                    <h1 className="text-3xl md:text-5xl font-semibold leading-tight">
                        Esto es lo que consigo para mis clientes
                    </h1>

                    <p className="text-[var(--text)] mt-4 max-w-2xl mx-auto text-sm md:text-base">
                        No se trata solo de diseño. Cada web está pensada para posicionar tu negocio y generar oportunidades reales.
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="bg-[var(--bgv2)] border border-gray-800 hover:border-[var(--texttitlev1)] transition-all duration-300 hover:-translate-y-1"
                        >
                            {/* Imagen */}
                            <div className="relative overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-70 object-cover"
                                />

                                <span className="absolute top-4 right-4 bg-black/60 text-gray-200 text-xs px-3 py-1 rounded backdrop-blur-sm">
                                    {project.result}
                                </span>
                            </div>

                            {/* Contenido */}
                            <div className="p-10">
                                <p className="text-[var(--texttitlev2)] text-xs uppercase mb-4 tracking-wide">
                                    {project.category}
                                </p>

                                <h3 className="text-2xl font-semibold mb-6">
                                    {project.title}
                                </h3>

                                <p className="text-sm text-gray-400 mb-4 leading-relaxed">
                                    {project.problem}
                                </p>

                                <p className="text-sm text-gray-300 mb-4 leading-relaxed">
                                    {project.solution}
                                </p>

                                <p className="text-sm italic text-gray-500 mb-8 leading-relaxed">
                                    {project.impact}
                                </p>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-2 mb-8">
                                    {project.tags.map((tag, i) => (
                                        <span
                                            key={i}
                                            className="text-xs bg-gray-800 px-3 py-1 text-gray-300"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* Link */}
                                <a
                                    href={project.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 text-[var(--texttitlev2)] text-sm font-medium hover:text-white transition"
                                >
                                    Ver proyecto →
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA Final */}
                <div className="text-center mt-24">
                    <p className="text-[var(--text)] mb-6 text-lg">
                        ¿Tu web está generando clientes o solo existe?
                    </p>

                    <a
                        href="#contactme"
                        className="inline-block bg-[var(--texttitlev1)] text-black px-8 py-3 font-semibold hover:opacity-90 transition"
                    >
                        Quiero una web que venda
                    </a>
                </div>

            </div>
        </section>
    );
}