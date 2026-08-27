"use client";
import { useState } from 'react';
import dynamic from 'next/dynamic';
import { Home, Zap, Droplets, Banknote, MapPin, Map as MapIcon } from 'lucide-react';
import { Button } from '../ui/Button';

const MapWidget = dynamic(() => import('./MapWidget'), {
    ssr: false,
    loading: () => <div className="w-full h-full bg-slate-100 animate-pulse flex items-center justify-center text-slate-400">Ładowanie mapy...</div>
});

export function DriveSection() {
    const [isMapActive, setIsMapActive] = useState(false);

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
                                    <Banknote size={18} className="text-amber-600 flex-shrink-0" /> Usługa realizowana dla zamówień od 100 zł
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

                    <div className="h-[400px] lg:h-[600px] w-full sticky top-28 rounded-2xl overflow-hidden border border-slate-200 bg-slate-50 relative">
                        {!isMapActive ? (
                            <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center z-10">
                                <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-6 shadow-sm">
                                    <MapIcon size={32} />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2">Interaktywna mapa dojazdu</h3>
                                <p className="text-slate-600 mb-8 max-w-sm">
                                    Kliknij poniżej, aby załadować mapę i sprawdzić nasz dokładny obszar działania.
                                </p>
                                <Button variant="primary" onClick={() => setIsMapActive(true)}>
                                    Załaduj mapę
                                </Button>
                            </div>
                        ) : (
                            <MapWidget />
                        )}

                        <div className="absolute bottom-4 left-0 right-0 z-20 flex flex-wrap gap-4 text-sm font-medium text-slate-700 bg-white/90 backdrop-blur-sm py-2 px-4 mx-4 rounded-xl shadow-sm justify-center border border-slate-200">
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