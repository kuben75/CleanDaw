"use client";
import { useState } from 'react';
import dynamic from 'next/dynamic';
import { Home, Zap, Droplets, Banknote, MapPin, Map as MapIcon, Route } from 'lucide-react';
import { Button } from '../ui/Button';

const MapWidget = dynamic(() => import('./MapWidget'), {
    ssr: false,
    loading: () => <div className="w-full h-full bg-zinc-900 animate-pulse flex items-center justify-center text-zinc-500 uppercase tracking-widest text-sm font-bold">Ładowanie mapy...</div>
});

export function DriveSection() {
    const [isMapActive, setIsMapActive] = useState(false);

    return (
        <section id="dojazd" className="py-20 md:py-32 bg-zinc-950 border-t border-zinc-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    <div>
                        <div className="flex items-center gap-2 text-blue-500 font-bold uppercase tracking-widest text-sm mb-4">
                            <Route size={18} />
                            <span>Zasięg działania</span>
                        </div>

                        <h2
                            className="text-4xl md:text-5xl font-extrabold text-white uppercase tracking-tight mb-6"
                            style={{ fontFamily: 'var(--font-oswald), sans-serif' }}
                        >
                            Działamy w <span className="text-blue-500">całym regionie</span>
                        </h2>

                        <p className="text-lg text-zinc-400 mb-10">
                            Docieramy wszędzie tam, gdzie potrzebna jest bezkompromisowa czystość.
                        </p>

                        <div className="bg-zinc-900 border border-zinc-800 rounded-sm p-6 md:p-8 mb-10 relative overflow-hidden group hover:border-blue-500/50 transition-colors duration-300">
                            <div className="absolute top-0 left-0 w-1 h-full bg-blue-500" />

                            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-3 uppercase tracking-wide">
                                <Home className="text-blue-500" />
                                Strefa Mobilna: Poznań i okolice
                            </h3>
                            <p className="text-zinc-400 mb-6 leading-relaxed">
                                Dla klientów z aglomeracji poznańskiej przygotowaliśmy usługę z dojazdem. Przyjeżdżamy, wyciągamy brud i zostawiamy pachnące wnętrze bez odstawiania auta do Słopanowa.
                            </p>

                            <p className="font-bold text-white mb-4 uppercase tracking-wider text-sm">Wymagania dla tej strefy:</p>
                            <ul className="space-y-4">
                                <li className="flex items-center gap-3 text-zinc-300">
                                    <Zap size={18} className="text-blue-500 flex-shrink-0" /> Dostęp do prądu
                                </li>
                                <li className="flex items-center gap-3 text-zinc-300">
                                    <Droplets size={18} className="text-blue-500 flex-shrink-0" /> Dostęp do bieżącej wody
                                </li>
                                <li className="flex items-center gap-3 text-zinc-300">
                                    <Banknote size={18} className="text-blue-500 flex-shrink-0" /> Minimalna kwota zamówienia: 100 zł
                                </li>
                            </ul>
                        </div>

                        <p className="text-zinc-500 mb-8 italic text-sm">
                            Docieramy do wszystkich, nawet najmniejszych miejscowości w obrębie obszaru zaznaczonego na mapie obok.
                        </p>

                        <a href="#kontakt">
                            <Button variant="primary" className="w-full sm:w-auto gap-3 group">
                                <MapPin size={20} className="group-hover:animate-bounce" />
                                Sprawdź, czy do Ciebie dojedziemy
                            </Button>
                        </a>
                    </div>

                    <div className="h-[450px] lg:h-[650px] w-full sticky top-28 rounded-sm overflow-hidden border border-zinc-800 bg-zinc-900 relative shadow-2xl bg-zinc-900">
                        {!isMapActive ? (
                            <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center z-10 bg-zinc-900 backdrop-blur-sm">

                                <div className="w-16 h-16 bg-blue-500/10 border border-blue-500/20 text-blue-500 rounded-sm flex items-center justify-center mb-6 shadow-[0_0_15px_rgba(59,130,246,0.15)]">
                                    <MapIcon size={32} />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-3 uppercase tracking-wide">
                                    Interaktywna mapa dojazdu
                                </h3>
                                <p className="text-zinc-400 mb-8 max-w-sm">
                                    Kliknij poniżej, aby załadować mapę i sprawdzić nasz dokładny obszar działania.
                                </p>
                                <Button variant="primary" onClick={() => setIsMapActive(true)} className="px-8">
                                    Załaduj mapę
                                </Button>
                            </div>
                        ) : (
                            <MapWidget />
                        )}

                        <div className="absolute bottom-4 left-0 right-0 z-20 flex flex-wrap gap-6 text-xs font-bold uppercase tracking-wider text-zinc-300 bg-zinc-950/90 backdrop-blur-md py-3 px-6 mx-4 rounded-sm shadow-xl justify-center border border-zinc-800">
                            <div className="flex items-center gap-2">
                                <div className="w-4 h-4 rounded-sm bg-blue-500/30 border border-blue-500" /> Obszar standardowy
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-4 h-4 rounded-sm bg-zinc-500/30 border border-zinc-500" /> Strefa mobilna
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}