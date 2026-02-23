"use client"

import { useState } from "react"
import Image from "next/image"

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)

    const handleClick = (id) => {
        setIsOpen(false)

        if (id === "home") {
            window.scrollTo({ top: 0, behavior: "smooth" })
            return
        }

        const section = document.getElementById(id)
        if (section) {
            section.scrollIntoView({ behavior: "smooth" })
        }
    }

    return (
        <header className="fixed top-0 left-0 w-full z-50 bg-[var(--bg)] border-b border-white/15 backdrop-blur-md">

            <div className="max-w-6xl mx-auto px-6 py-4 md:py-6 flex items-center justify-between">

                {/* Logo */}
                <button
                    onClick={() => handleClick("home")}
                    className="flex items-center cursor-pointer"
                >
                    <Image
                        src="/logoBlanco.svg"
                        alt="Mi Logo"
                        width={200}
                        height={100}
                        priority
                        className="h-6 w-auto md:h-10 transition-all duration-300"
                    />
                </button>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-10 text-sm text-gray-400 uppercase tracking-wider">
                    <button onClick={() => handleClick("home")} className="hover:text-white transition">
                        Inicio
                    </button>

                    <button onClick={() => handleClick("works")} className="hover:text-white transition">
                        Trabajos
                    </button>

                    <button onClick={() => handleClick("aboutme")} className="hover:text-white transition">
                        Sobre mí
                    </button>

                    <button onClick={() => handleClick("contactme")} className="hover:text-white transition">
                        Contacto
                    </button>
                </nav>

                {/* Mobile Button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden text-gray-300 text-2xl transition"
                >
                    {isOpen ? "✕" : "☰"}
                </button>
            </div>

            {/* Mobile Menu */}
            <div
                className={`md:hidden bg-[var(--bg)] border-t border-white/5 px-6 overflow-hidden transition-all duration-300 ${isOpen ? "max-h-96 py-6" : "max-h-0"
                    }`}
            >
                <div className="space-y-6 text-gray-400 uppercase tracking-wider text-sm">

                    <button onClick={() => handleClick("home")} className="block hover:text-white transition">
                        Inicio
                    </button>

                    <button onClick={() => handleClick("works")} className="block hover:text-white transition">
                        Trabajos
                    </button>

                    <button onClick={() => handleClick("aboutme")} className="block hover:text-white transition">
                        Sobre mí
                    </button>

                    <button onClick={() => handleClick("contactme")} className="block hover:text-white transition">
                        Contacto
                    </button>

                </div>
            </div>

        </header>
    )
}