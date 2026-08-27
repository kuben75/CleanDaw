"use client";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Menu, Phone, X } from "lucide-react";
import { useState } from "react";
import { NAV_LINKS } from "@/constants/navbar";

export function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMenu = () => setIsMobileMenuOpen((prevState) => !prevState);
    const closeMenu = () => setIsMobileMenuOpen(false);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-zinc-950/60 backdrop-blur-md border-b border-zinc-800 transition-all duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20 md:h-24">

                    <Link href="/" className="flex-shrink-0 flex items-center" onClick={closeMenu}>
                        <Image
                            src="/img/logo.png"
                            alt="CleanDaw Logo"
                            width={180}
                            height={180}
                            className="h-14 md:h-16 w-auto drop-shadow-md"
                            priority
                        />
                    </Link>

                    <nav className="hidden md:flex space-x-8 items-center">
                        {NAV_LINKS.map((link) => (
                            <Link
                                key={link.label}
                                href={link.href}
                                className="text-zinc-300 hover:text-blue-500 font-semibold tracking-wide uppercase text-sm transition-colors"
                            >
                                {link.label}
                            </Link>
                        ))}

                        <a href="tel:+48535880525">
                            <Button variant="primary" className="gap-2 px-6 py-2.5">
                                <Phone size={18} />
                                535 880 525
                            </Button>
                        </a>
                    </nav>

                    <div className="flex md:hidden items-center">
                        <button
                            onClick={toggleMenu}
                            className="text-zinc-300 hover:text-blue-500 focus:outline-none p-2 transition-transform active:scale-95"
                            aria-label="Toggle menu"
                        >
                            {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* ZOPTYMALIZOWANA ANIMACJA GPU */}
            {/* Element jest zawsze w DOM, ale ukrywamy go za pomocą opacity i pointer-events, co pozwala na sprzętową akcelerację animacji */}
            <div
                className={`md:hidden absolute w-full min-h-[100svh] bg-zinc-950 border-t border-zinc-800 transition-all duration-300 ease-in-out origin-top ${
                    isMobileMenuOpen
                        ? "opacity-100 translate-y-0 pointer-events-auto"
                        : "opacity-0 -translate-y-4 pointer-events-none"
                }`}
            >
                <div className="px-4 pt-4 pb-6 space-y-2 shadow-2xl">
                    {NAV_LINKS.map((link) => (
                        <Link
                            key={link.label}
                            href={link.href}
                            onClick={closeMenu}
                            className="block px-4 py-4 text-base font-bold tracking-wide uppercase text-zinc-300 hover:text-blue-500 hover:bg-zinc-900 rounded-md transition-colors"
                        >
                            {link.label}
                        </Link>
                    ))}
                    <div className="pt-6 px-2">
                        <a href="tel:+48535880525" className="w-full block" onClick={closeMenu}>
                            <Button variant="primary" className="w-full gap-2 justify-center py-4">
                                <Phone size={20} />
                                Zadzwoń: 535 880 525
                            </Button>
                        </a>
                    </div>
                </div>
            </div>
        </header>
    );
}