"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <header className="fixed top-0 left-0 w-full z-50 bg-[var(--bg)] border-b border-white/15 backdrop-blur-md">

            <div className="max-w-6xl mx-auto px-6 py-4 md:py-6 flex items-center justify-between">

                {/* Logo */}
                <Link href="/" className="flex items-center cursor-pointer">
                    <Image
                        src="/logoBlanco.svg"
                        alt="Mi Logo"
                        width={200}
                        height={100}
                        priority
                        className="h-6 w-auto md:h-10 transition-all duration-300"
                    />
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-10 text-sm text-gray-400 uppercase tracking-wider">
                    <a href="#inicio" className="hover:text-white transition duration-300">
                        Inicio
                    </a>
                    <a href="#sobre-mi" className="hover:text-white transition duration-300">
                        Sobre mí
                    </a>
                    <a href="#trabajos" className="hover:text-white transition duration-300">
                        Trabajos
                    </a>
                    <a href="#contacto" className="hover:text-white transition duration-300">
                        Contacto
                    </a>
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
                    <a href="#inicio" className="block hover:text-white transition">
                        Inicio
                    </a>
                    <a href="#sobre-mi" className="block hover:text-white transition">
                        Sobre mí
                    </a>
                    <a href="#trabajos" className="block hover:text-white transition">
                        Trabajos
                    </a>
                    <a href="#contacto" className="block hover:text-white transition">
                        Contacto
                    </a>
                </div>
            </div>

        </header>
    )
}