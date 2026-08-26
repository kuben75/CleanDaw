'use client';

import { useState } from 'react';
import { SERVICES_DATA } from '@/constants/services';
import { ChevronDown } from 'lucide-react';

export function Services() {
    const [openItem, setOpenItem] = useState<string | null>(SERVICES_DATA[0].id);

    const toggleItem = (id: string) => {
        setOpenItem(openItem === id ? null : id);
    };

    return (
        <section id="uslugi" className="py-20 bg-slate-50">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Czym się zajmujemy?</h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        Specjalizujemy się w kompleksowym czyszczeniu, które odmieni wygląd Twoich mebli i wnętrza samochodu.
                    </p>
                </div>

                <div className="space-y-4">
                    {SERVICES_DATA.map((service) => {
                        const isOpen = openItem === service.id;

                        return (
                            <div key={service.id} className={`bg-white rounded-xl border transition-all duration-300 overflow-hidden ${
                                    isOpen ? 'border-blue-500 shadow-md' : 'border-slate-200 hover:border-slate-300'
                                }`}>
                                <button onClick={() => toggleItem(service.id)} className="w-full flex items-center justify-between p-5 md:p-6 focus:outline-none" aria-expanded={isOpen}>
                                    <div className="flex items-center gap-4 text-left">
                                        <div className={`p-3 rounded-lg transition-colors ${
                                            isOpen ? 'bg-blue-100 text-blue-700' : 'bg-slate-100 text-slate-500'
                                        }`}>
                                            {service.icon}
                                        </div>
                                        <span className="font-semibold text-lg text-slate-900">{service.title}</span>
                                    </div>

                                    <ChevronDown className={`text-slate-400 transition-transform duration-300 flex-shrink-0 ${
                                            isOpen ? 'rotate-180 text-blue-600' : ''
                                        }`}/>
                                </button>

                                <div className={`grid transition-all duration-300 ease-in-out ${
                                        isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                                    }`}>
                                    <div className="overflow-hidden">
                                        <p className="px-5 md:px-6 pb-6 pt-2 text-slate-600 leading-relaxed pl-[4.5rem] md:pl-20">
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