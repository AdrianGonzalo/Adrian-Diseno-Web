"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

export default function Contactme() {
    const [form, setForm] = useState({
        name: "",
        business: "",
        message: "",
        email: "",
        website: "",
    });

    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (form.website) return;

        setLoading(true);
        setError(false);
        setSuccess(false);

        try {
            await emailjs.send(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
                {
                    name: form.name,
                    business: form.business,
                    message: form.message,
                    email: form.email,
                },
                process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
            );

            setSuccess(true);

            setForm({
                name: "",
                business: "",
                message: "",
                email: "",
                website: "",
            });
        } catch (err) {
            console.error("Email error:", err);
            setError(true);
        } finally {
            setLoading(false);
        }
    };

    return (
        <section id="contactme" className="px-6 py-28 bg-[var(--bg-soft)]">
            <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true }}
                className="max-w-6xl mx-auto bg-[var(--bgv2)] border border-white/5 rounded-2xl p-10 sm:p-14"
            >
                <span className="text-xs tracking-[0.3em] uppercase text-[var(--texttitlev2)]">
          // Contacto
                </span>

                <h1 className="text-white text-[2rem] sm:text-5xl leading-tight mt-4">
                    Cuéntame tu{" "}
                    <span className="text-[var(--texttitlev1)]">proyecto</span>
                </h1>

                <p className="text-[var(--text)] mt-6 max-w-xl text-sm sm:text-base">
                    Rellena el formulario y te responderé en menos de 24h.
                </p>

                <form onSubmit={handleSubmit} className="mt-10 space-y-6">

                    <input
                        type="text"
                        name="website"
                        value={form.website}
                        onChange={handleChange}
                        className="hidden"
                    />

                    <input
                        type="text"
                        name="name"
                        placeholder="Tu nombre"
                        value={form.name}
                        onChange={handleChange}
                        required
                        minLength={3}
                        maxLength={50}
                        autoComplete="name"
                        className="w-full bg-transparent border border-white/20 px-5 py-4 focus:border-[var(--texttitlev1)] outline-none transition"
                    />

                    <input
                        type="text"
                        name="business"
                        placeholder="Nombre de tu negocio"
                        value={form.business}
                        onChange={handleChange}
                        required
                        minLength={2}
                        maxLength={80}
                        className="w-full bg-transparent border border-white/20 px-5 py-4 focus:border-[var(--texttitlev1)] outline-none transition"
                    />

                    <textarea
                        name="message"
                        placeholder="¿Qué necesitas exactamente?"
                        value={form.message}
                        onChange={handleChange}
                        required
                        minLength={10}
                        maxLength={500}
                        rows="4"
                        className="w-full bg-transparent border border-white/20 px-5 py-4 focus:border-[var(--texttitlev1)] outline-none transition resize-none"
                    />

                    <input
                        type="email"
                        name="email"
                        placeholder="Tu email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        autoComplete="email"
                        className="w-full bg-transparent border border-white/20 px-5 py-4 focus:border-[var(--texttitlev1)] outline-none transition"
                    />

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-[var(--texttitlev1)] text-black py-4 font-semibold hover:opacity-90 transition disabled:opacity-50"
                    >
                        {loading ? "Enviando..." : "Solicitar presupuesto"}
                    </button>

                    {success && (
                        <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-green-400 text-sm text-center mt-4"
                        >
                            ✅ ¡Mensaje enviado correctamente! Te responderé pronto.
                        </motion.p>
                    )}

                    {error && (
                        <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-red-400 text-sm text-center mt-4"
                        >
                            ❌ Hubo un error al enviar el mensaje. Inténtalo de nuevo.
                        </motion.p>
                    )}

                </form>
            </motion.div>
        </section>
    );
}