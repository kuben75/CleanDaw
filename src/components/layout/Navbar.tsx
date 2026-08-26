"use client";
import Link from "next/link";
import {Button} from "@/components/ui/Button";
import {Menu, Phone, X} from "lucide-react";
import {useState} from "react";
import {NAV_LINKS} from "@/constants/navbar";


export function Navbar() {
const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

const toggleMenu = () => setIsMobileMenuOpen((prevState) => !prevState);
const closeMenu = () => setIsMobileMenuOpen(false);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200 transition-all duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">

                    <Link href="/" className="flex-shrink-0 flex items-center" onClick={closeMenu}>
                        <span className="text-2xl font-bold text-blue-600">Clean<span className="text-slate-800">Daw</span></span>
                    </Link>

                    <nav className="hidden md:flex space-x-8 items-center">
                        {NAV_LINKS.map((link) => (
                            <Link
                                key={link.label}
                                href={link.href}
                                className="text-slate-600 hover:text-blue-600 font-medium transition-colors"
                            >
                                {link.label}
                            </Link>
                        ))}

                        <a href="tel:+48535880525">
                            <Button variant="primary" className="gap-2">
                                <Phone size={18} />
                                535 880 525
                            </Button>
                        </a>
                    </nav>

                    <div className="flex md:hidden items-center">
                        <button
                            onClick={toggleMenu}
                            className="text-slate-600 hover:text-blue-600 focus:outline-none p-2"
                            aria-label="Toggle menu"
                        >
                            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </div>

            {isMobileMenuOpen && (
                <div className="md:hidden bg-white border-t border-slate-100">
                    <div className="px-4 pt-2 pb-6 space-y-1 shadow-lg">
                        {NAV_LINKS.map((link) => (
                            <Link
                                key={link.label}
                                href={link.href}
                                onClick={closeMenu}
                                className="block px-3 py-4 text-base font-medium text-slate-700 hover:text-blue-600 hover:bg-slate-50 rounded-md"
                            >
                                {link.label}
                            </Link>
                        ))}
                        <div className="pt-4 px-3">
                            <a href="tel:+48535880525" className="w-full block">
                                <Button variant="primary" className="w-full gap-2 justify-center">
                                    <Phone size={18} />
                                    535 880 525
                                </Button>
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}