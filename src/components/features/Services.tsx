"use client";
import { useState } from 'react';
import { SERVICES_DATA } from '@/constants/services';
import { ChevronDown, Wrench } from 'lucide-react';

export function Services() {
    const [openItem, setOpenItem] = useState<string | null>(SERVICES_DATA[0].id);

    const toggleItem = (id: string) => {
        setOpenItem(openItem === id ? null : id);
    };

    return (
        <section id="uslugi" className="py-20 md:py-32 bg-zinc-950 border-t border-zinc-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

                    {/* Lewa kolumna: Przyklejony nagłówek (Sticky) */}
                    <div className="lg:col-span-5 lg:sticky lg:top-32">
                        <div className="flex items-center gap-2 text-blue-500 font-bold uppercase tracking-widest text-sm mb-4">
                            <Wrench size={18} />
                            <span>Zakres działań</span>
                        </div>

                        <h2
                            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 uppercase tracking-tight"
                            style={{ fontFamily: 'var(--font-oswald), sans-serif' }}
                        >
                            Czym się <br/> <span className="text-blue-500">zajmujemy?</span>
                        </h2>

                        <p className="text-lg text-zinc-400">
                            Specjalizujemy się w gruntownej ekstrakcji. Nie pierzemy powierzchownie – fizycznie wyciągamy brud, osady i plamy z najgłębszych warstw materiału.
                        </p>
                    </div>

                    {/* Prawa kolumna: Akordeony usług */}
                    <div className="lg:col-span-7 space-y-4">
                        {SERVICES_DATA.map((service) => {
                            const isOpen = openItem === service.id;

                            return (
                                <div key={service.id} className={`bg-zinc-900 rounded-sm border transition-all duration-300 overflow-hidden ${
                                    isOpen ? 'border-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.15)]' : 'border-zinc-800 hover:border-zinc-700'
                                }`}>
                                    <button onClick={() => toggleItem(service.id)} className="w-full flex items-center justify-between p-6 md:p-8 focus:outline-none group" aria-expanded={isOpen}>
                                        <div className="flex items-center gap-4 md:gap-6 text-left">
                                            <div className={`p-3 md:p-4 rounded-sm transition-colors duration-300 ${
                                                isOpen ? 'bg-blue-500 text-white' : 'bg-zinc-950 text-blue-500 border border-zinc-800 group-hover:bg-zinc-800'
                                            }`}>
                                                {service.icon}
                                            </div>
                                            <span className={`font-bold text-lg md:text-xl uppercase tracking-wide transition-colors ${
                                                isOpen ? 'text-white' : 'text-zinc-300'
                                            }`}>
                                                {service.title}
                                            </span>
                                        </div>
                                        <ChevronDown className={`transition-transform duration-300 flex-shrink-0 ${
                                            isOpen ? 'rotate-180 text-blue-500' : 'text-zinc-600 group-hover:text-blue-500'
                                        }`}/>
                                    </button>

                                    <div className={`grid transition-all duration-300 ease-in-out ${
                                        isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                                    }`}>
                                        <div className="overflow-hidden">
                                            <p className="px-6 md:px-8 pb-8 pt-2 text-zinc-400 leading-relaxed md:pl-[6.5rem] border-t border-zinc-800/50 mt-2">
                                                {service.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

            </div>
        </section>
    );
}