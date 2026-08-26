"use client";
import dynamic from 'next/dynamic';
import { Home, Zap, Droplets, Banknote, MapPin } from 'lucide-react';
import { Button } from '../ui/Button';


const MapWidget = dynamic(() => import('./MapWidget'), {
    ssr: false,
    loading: () => <div className="w-full h-[400px] bg-slate-100 animate-pulse rounded-2xl flex items-center justify-center text-slate-400">Ładowanie mapy...</div>
});

export function DriveSection() {
    return (
        <section id="dojazd" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Działamy w całym regionie</h2>
                        <p className="text-lg text-slate-600 mb-8">
                            Docieramy wszędzie tam, gdzie potrzebna jest profesjonalna czystość.
                        </p>

                        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 md:p-8 mb-8 relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-2 h-full bg-amber-500" />
                            <h3 className="text-xl font-bold text-amber-900 mb-3 flex items-center gap-2">
                                <Home className="text-amber-600" />
                                Strefa Mobilna: Poznań i okolice
                            </h3>
                            <p className="text-amber-800 mb-4 leading-relaxed">
                                Dla klientów z aglomeracji poznańskiej przygotowaliśmy usługę z dojazdem! Przyjeżdżamy, czyścimy i zostawiamy pachnące wnętrze bez odstawiania auta do Słopanowa.
                            </p>

                            <p className="font-semibold text-amber-900 mb-3">Wymagania dla tej strefy:</p>
                            <ul className="space-y-3">
                                <li className="flex items-center gap-3 text-amber-800">
                                    <Zap size={18} className="text-amber-600 flex-shrink-0" /> Dostęp do prądu (do podłączenia sprzętu)
                                </li>
                                <li className="flex items-center gap-3 text-amber-800">
                                    <Droplets size={18} className="text-amber-600 flex-shrink-0" /> Dostęp do bieżącej wody
                                </li>
                                <li className="flex items-center gap-3 text-amber-800">
                                    <Banknote size={18} className="text-amber-600 flex-shrink-0" /> Usługa realizowana dla zamówień od 150 zł
                                </li>
                            </ul>
                        </div>

                        <p className="text-slate-600 mb-8 italic">
                            Docieramy do wszystkich, nawet najmniejszych miejscowości w obrębie obszaru zaznaczonego na mapie obok.
                        </p>

                        <a href="#kontakt">
                            <Button className="w-full sm:w-auto gap-2">
                                <MapPin size={18} />
                                Sprawdź, czy do Ciebie dojedziemy
                            </Button>
                        </a>
                    </div>

                    <div className="h-[400px] lg:h-[600px] w-full sticky top-28">
                        <MapWidget />

                        <div className="mt-4 flex flex-wrap gap-4 text-sm font-medium text-slate-600 justify-center">
                            <div className="flex items-center gap-2">
                                <div className="w-4 h-4 rounded bg-blue-500/30 border border-blue-600" /> Obszar standardowy
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-4 h-4 rounded bg-amber-500/40 border border-amber-600" /> Strefa mobilna
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}