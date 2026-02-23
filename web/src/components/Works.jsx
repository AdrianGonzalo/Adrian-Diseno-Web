export default function Works() {
    const projects = [
        {
            category: "Industria audiovisual",
            title: "Helí Suárez",
            description:
                "Web estratégica para posicionar su marca como colorista a nivel internacional, con portfolio audiovisual, blog profesional y presencia sólida online.",
            result: "Proyección internacional",
            tags: ["Portfolio", "Video", "Blog", "Branding"],
            image: "/heli-suarez.png",
            url: "https://helisuarezcolor.com/",
        },
        {
            category: "Galería digital",
            title: "Hecho a Mano",
            description:
                "Galería dinámica desarrollada con sistema de filtrado por categorías y gestión de contenido, optimizada para mostrar trabajos visuales de forma organizada.",
            result: "Gestión sencilla de contenido",
            tags: ["Galería", "Filtros", "Panel admin", "Gestión dinámica"],
            image: "/hecho-a-mano.png",
            url: "https://tu-web-aqui.com",
        }

    ];

    return (
        <section id="works" className="scroll-mt-12 py-14 px-6">
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
                        No son solo webs bonitas. Son herramientas estratégicas diseñadas
                        para posicionar marcas y generar oportunidades reales.
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="bg-[var(--bgv2)] rounded-2xl overflow-hidden border border-gray-800 transition-all duration-300"
                        >
                            {/* Imagen */}
                            <div className="relative">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-64 object-cover"
                                />

                                <span className="absolute top-3 right-3 bg-[var(--texttitlev1)] text-sm px-4 py-1 rounded-full font-medium">
                                    {project.result}
                                </span>
                            </div>

                            {/* Contenido */}
                            <div className="p-6">
                                <p className="text-[var(--texttitlev2)] text-xs uppercase mb-2 tracking-wide">
                                    {project.category}
                                </p>

                                <h3 className="text-xl font-semibold mb-3">
                                    {project.title}
                                </h3>

                                <p className="text-[var(--text)] text-sm mb-4 leading-relaxed">
                                    {project.description}
                                </p>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tags.map((tag, i) => (
                                        <span
                                            key={i}
                                            className="text-xs bg-gray-800 px-3 py-1 rounded-full text-gray-300"
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
                                    className="inline-flex items-center gap-2 text-[var(--texttitlev2)] text-sm font-medium transition"
                                >
                                    Ver proyecto →
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
