'use client';

import { useState } from 'react';
import { PRICING_DATA } from '@/constants/pricing';
import { Tag, Check } from 'lucide-react';

export function Pricing() {
    const [activeTab, setActiveTab] = useState<string>(PRICING_DATA[0].id);

    const activeCategory = PRICING_DATA.find(category => category.id === activeTab);


    const isTwoItems = activeCategory?.items.length === 2;
    const gridLayoutClass = isTwoItems
        ? "lg:grid-cols-2 lg:max-w-4xl lg:mx-auto"
        : "lg:grid-cols-3";

    return (
        <section id="cennik" className="py-20 md:py-32 bg-zinc-950 border-t border-zinc-900">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="text-center mb-12 flex flex-col items-center">
                    <div className="flex items-center gap-2 text-blue-500 font-bold uppercase tracking-widest text-sm mb-4">
                        <Tag size={18} />
                        <span>Przejrzysta oferta</span>
                    </div>

                    <h2
                        className="text-4xl md:text-5xl font-extrabold text-white mb-6 uppercase tracking-tight"
                        style={{ fontFamily: 'var(--font-oswald), sans-serif' }}
                    >
                        Nasz <span className="text-blue-500">Cennik</span>
                    </h2>
                    <p className="text-lg text-zinc-400 max-w-2xl">
                        Wybierz kategorię, aby sprawdzić koszty. Ostateczna wycena zawsze zależy od stopnia zabrudzenia i wielkości zlecenia.
                    </p>
                </div>

                <div className="flex flex-wrap justify-center gap-3 mb-12">
                    {PRICING_DATA.map((category) => (
                        <button
                            key={category.id}
                            onClick={() => setActiveTab(category.id)}
                            className={`px-6 py-3 rounded-sm text-sm font-bold uppercase tracking-wider transition-all duration-300 border ${
                                activeTab === category.id
                                    ? 'bg-blue-600 border-blue-500 text-white shadow-[0_0_15px_rgba(59,130,246,0.3)]'
                                    : 'bg-zinc-900/50 border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-600'
                            }`}
                        >
                            {category.label}
                        </button>
                    ))}
                </div>

                <div key={activeTab} className={`grid grid-cols-1 md:grid-cols-2 gap-6 animate-in fade-in duration-500 ${gridLayoutClass}`}>
                    {activeCategory?.items.map((item, index) => (
                        <div
                            key={index}
                            className={`flex flex-col bg-zinc-900 border ${
                                item.isBestChoice ? 'border-blue-500' : 'border-zinc-800 hover:border-zinc-700'
                            } rounded-sm p-6 sm:p-8 transition-all duration-300 relative overflow-hidden`}
                        >
                            {item.isBestChoice && (
                                <div className="absolute top-0 right-0 bg-blue-600 text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-bl-sm">
                                    Polecany pakiet
                                </div>
                            )}

                            <div className="mb-4">
                                <h3 className="text-white font-bold tracking-wide uppercase text-xl sm:text-2xl mb-2 pr-12">
                                    {item.name}
                                </h3>
                                <div
                                    className="text-3xl text-blue-500 font-bold tracking-tight"
                                    style={{ fontFamily: 'var(--font-oswald)' }}
                                >
                                    {item.price}
                                </div>
                            </div>

                            {item.description && (
                                <p className="text-zinc-400 text-sm leading-relaxed mb-6 flex-grow">
                                    {item.description}
                                </p>
                            )}

                            {item.features && item.features.length > 0 && (
                                <ul className="space-y-3 border-t border-zinc-800/50 pt-6 mt-auto">
                                    {item.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-start gap-3">
                                            <Check size={16} className="text-blue-500 flex-shrink-0 mt-0.5" />
                                            <span className="text-zinc-300 text-sm">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    ))}
                </div>

                <div className="mt-12 text-center text-xs text-zinc-600 font-medium tracking-wide uppercase">
                    * Powyższe ceny mają charakter poglądowy. Dojazd od 100 zł (Strefa Słopanowo/Poznań).
                </div>

            </div>
        </section>
    );
}