import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin, ChevronRight } from 'lucide-react';
import { NAV_LINKS } from '@/constants/navbar';

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-zinc-950 text-zinc-400 py-12 md:py-16 border-t border-zinc-900 relative overflow-hidden">

            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-[30rem] h-[30rem] bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-8">

                    <div className="space-y-6">
                        <Link href="/" className="inline-block hover:opacity-80 transition-opacity">
                            <Image
                                src="/img/logo.png"
                                alt="CleanDaw Logo"
                                width={160}
                                height={50}
                                className="object-contain"
                            />
                        </Link>
                        <p className="text-sm leading-relaxed max-w-xs text-zinc-500">
                            Profesjonalne, ekstrakcyjne pranie tapicerki. Bezkompromisowo wyciągamy brud z mebli i samochodów na terenie Wielkopolski.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Na skróty</h3>
                        <ul className="space-y-4">
                            {NAV_LINKS.map((link) => (
                                <li key={link.label}>
                                    <Link href={link.href} className="group flex items-center text-zinc-400 hover:text-blue-500 transition-colors text-sm font-medium">
                                        <ChevronRight size={14} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300 text-blue-500 mr-2" />
                                        <span className="group-hover:translate-x-1 transition-transform duration-300">{link.label}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Baza operacyjna</h3>
                        <ul className="space-y-5">
                            <li className="flex items-start gap-4 text-sm group">
                                <div className="p-2 bg-zinc-900 rounded-sm border border-zinc-800 group-hover:border-blue-500/50 transition-colors mt-0.5">
                                    <MapPin size={16} className="text-blue-500 flex-shrink-0" />
                                </div>
                                <span className="text-zinc-400 mt-1 font-medium">
                                    Słopanowo / Poznań<br/>
                                    <span className="text-zinc-600 text-xs tracking-wide">Dojazd lub usługa u nas</span>
                                </span>
                            </li>
                            <li className="flex items-center gap-4 text-sm group">
                                <div className="p-2 bg-zinc-900 rounded-sm border border-zinc-800 group-hover:border-blue-500/50 transition-colors">
                                    <Phone size={16} className="text-blue-500 flex-shrink-0" />
                                </div>
                                <a href="tel:+48535880525" className="hover:text-blue-500 font-bold tracking-wide transition-colors mt-1">+48 535 880 525</a>
                            </li>
                            <li className="flex items-center gap-4 text-sm group">
                                <div className="p-2 bg-zinc-900 rounded-sm border border-zinc-800 group-hover:border-blue-500/50 transition-colors">
                                    <Mail size={16} className="text-blue-500 flex-shrink-0" />
                                </div>
                                <a href="mailto:kontakt.cleandaw@gmail.com" className="hover:text-blue-500 transition-colors mt-1 font-medium">kontakt.cleandaw@gmail.com</a>
                            </li>
                        </ul>
                    </div>

                </div>

                <div className="mt-16 pt-8 border-t border-zinc-800/50 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-bold uppercase tracking-widest text-zinc-600">
                    <p>&copy; {currentYear} CleanDaw. Wszelkie prawa zastrzeżone.</p>
                    <div className="flex gap-6">
                        <Link href="/polityka-prywatnosci" className="hover:text-blue-500 transition-colors">Polityka prywatności</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}