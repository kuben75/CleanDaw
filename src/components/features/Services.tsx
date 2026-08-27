'use client';

import { useState } from 'react';
import { SERVICES_DATA } from '@/constants/services';
import { ChevronDown, Wrench } from 'lucide-react';

export function Services() {
    const [openItem, setOpenItem] = useState<string | null>(SERVICES_DATA[0].id);

    const toggleItem = (id: string) => {
        setOpenItem(openItem === id ? null : id);
    };

    return (
        <section id="uslugi" className="py-20 md:py-32 bg-zinc-900 border-t border-zinc-800">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="text-center mb-16 flex flex-col items-center">
                    <div className="flex items-center gap-2 text-blue-500 font-bold uppercase tracking-widest text-sm mb-4">
                        <Wrench size={18} />
                        <span>Zakres działań</span>
                    </div>

                    <h2
                        className="text-4xl md:text-5xl font-extrabold text-white mb-6 uppercase tracking-tight"
                        style={{ fontFamily: 'var(--font-oswald), sans-serif' }}
                    >
                        Czym się <span className="text-blue-500">zajmujemy?</span>
                    </h2>
                    <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
                        Specjalizujemy się w radykalnym czyszczeniu ekstrakcyjnym. Wyciągamy brud, usuwamy plamy i odmieniamy wygląd Twoich mebli oraz wnętrza samochodu.
                    </p>
                </div>

                <div className="space-y-4">
                    {SERVICES_DATA.map((service) => {
                        const isOpen = openItem === service.id;

                        return (
                            <div key={service.id} className={`bg-zinc-950 rounded-sm border transition-all duration-300 overflow-hidden ${
                                isOpen ? 'border-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.15)]' : 'border-zinc-800 hover:border-zinc-700'
                            }`}>
                                <button onClick={() => toggleItem(service.id)} className="w-full flex items-center justify-between p-5 md:p-6 focus:outline-none group" aria-expanded={isOpen}>
                                    <div className="flex items-center gap-4 text-left">

                                        <div className={`p-3 rounded-sm transition-colors duration-300 ${
                                            isOpen ? 'bg-blue-500 text-white' : 'bg-zinc-900 text-blue-500 group-hover:bg-zinc-800'
                                        }`}>
                                            {service.icon}
                                        </div>

                                        <span className={`font-bold text-lg uppercase tracking-wide transition-colors ${
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
                                        <p className="px-5 md:px-6 pb-6 pt-2 text-zinc-400 leading-relaxed pl-[4.5rem] md:pl-20 border-t border-zinc-800/50 mt-2">
                                            {service.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
}