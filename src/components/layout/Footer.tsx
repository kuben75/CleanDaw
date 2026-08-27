import Link from 'next/link';
import { Phone, Mail, MapPin } from 'lucide-react';
import { NAV_LINKS } from '@/constants/navbar';

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-slate-900 text-slate-300 py-12 md:py-16 border-t border-slate-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-8">

                    <div className="space-y-4">
                        <Link href="/" className="inline-block">
                            <span className="text-2xl font-bold text-white">Clean<span className="text-blue-500">Daw</span></span>
                        </Link>
                        <p className="text-sm leading-relaxed max-w-xs text-slate-200">
                            Profesjonalne pranie tapicerki meblowej i samochodowej. Przywracamy blask Twoim wnętrzom na terenie Poznania, Szamotuł i całego województwa wielkopolskiego.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">Na skróty</h3>
                        <ul className="space-y-3">
                            {NAV_LINKS.map((link) => (
                                <li key={link.label}>
                                    <Link href={link.href} className="hover:text-blue-400 transition-colors text-sm">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">Kontakt</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-sm">
                                <MapPin size={18} className="text-blue-500 flex-shrink-0 mt-0.5" />
                                <span>Firma: Słopanowo<br/>(Dojazd do klienta lub usługi w firmie)</span>
                            </li>
                            <li className="flex items-center gap-3 text-sm">
                                <Phone size={18} className="text-blue-500 flex-shrink-0" />
                                <a href="tel:+48535880525" className="hover:text-white transition-colors">+48 535 880 525</a>
                            </li>
                            <li className="flex items-center gap-3 text-sm">
                                <Mail size={18} className="text-blue-500 flex-shrink-0" />
                                <a href="mailto:kontakt.cleandaw@gmail.com" className="hover:text-white transition-colors">kontakt.cleandaw@gmail.com</a>
                            </li>
                        </ul>
                    </div>

                </div>

                <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-300">
                    <p>&copy; {currentYear} CleanDaw. Wszelkie prawa zastrzeżone.</p>
                    <div className="flex gap-4">
                        <Link href="/polityka-prywatnosci" className="hover:text-white transition-colors">Polityka prywatności</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}