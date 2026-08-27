'use client';

import { useState } from 'react';
import { PRICING_DATA } from '@/constants/pricing';
import { CheckCircle2 } from 'lucide-react';

export function Pricing() {
    const [activeTab, setActiveTab] = useState<string>(PRICING_DATA[0].id);

    const activeCategory = PRICING_DATA.find(category => category.id === activeTab);

    return (
        <section id="cennik" className="py-20 md:py-32 bg-slate-50">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Cennik</h2>
                    <p className="text-lg text-slate-600">
                        Wybierz kategorię, aby sprawdzić orientacyjne koszty. Ostateczna wycena zależy od stopnia zabrudzenia.
                    </p>
                </div>

                <div className="flex justify-center mb-10">
                    <div className="inline-flex bg-slate-200/60 p-1 rounded-xl">
                        {PRICING_DATA.map((category) => (
                            <button
                                key={category.id}
                                onClick={() => setActiveTab(category.id)}
                                className={`px-6 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 ${
                                    activeTab === category.id
                                        ? 'bg-white text-blue-600 shadow-sm'
                                        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/50'
                                }`}
                            >
                                {category.label}
                            </button>
                        ))}
                    </div>
                </div>

                <div
                    className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-500">
                    <ul className="divide-y divide-slate-100">
                        {activeCategory?.items.map((item, index) => (
                            <li
                                key={index}
                                className={`p-6 sm:px-8 hover:bg-slate-50 transition-colors flex flex-col sm:flex-row sm:items-start justify-between gap-4 ${
                                    item.isBestChoice ? 'bg-blue-50/30' : ''
                                }`}
                            >
                                <div className="flex items-start gap-3 w-full">
                                    <CheckCircle2
                                        className={`flex-shrink-0 mt-0.5 ${item.isBestChoice ? 'text-amber-500' : 'text-blue-500'}`}
                                        size={20}/>
                                    <div className="w-full">

                                        <div className="flex flex-wrap items-center gap-3 mb-1">
                                            <h3 className="text-slate-900 font-semibold text-lg">{item.name}</h3>
                                            {item.isBestChoice && (
                                                <span
                                                    className="bg-amber-100 text-amber-700 text-xs font-bold px-2 py-1 rounded-full uppercase tracking-wider">
                          Najlepszy Wybór
                        </span>
                                            )}
                                        </div>

                                        {item.description && (
                                            <p className="text-slate-600 text-sm font-medium mb-3">{item.description}</p>
                                        )}

                                        {item.features && (
                                            <ul className="mt-3 space-y-2">
                                                {item.features.map((feature, idx) => (
                                                    <li key={idx}
                                                        className="flex items-center gap-2 text-slate-600 text-sm">
                                                        <div
                                                            className="w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0"/>
                                                        {feature}
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </div>
                                </div>

                                <div className="sm:text-right flex-shrink-0 mt-4 sm:mt-0">
                  <span className={`inline-block px-4 py-2 font-bold rounded-lg border ${
                      item.isBestChoice
                          ? 'bg-amber-50 text-amber-700 border-amber-200 shadow-sm'
                          : 'bg-blue-50 text-blue-700 border-blue-100'
                  }`}>
                    {item.price}
                  </span>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="mt-8 text-center text-sm text-slate-500">
                    * Powyższe ceny mają charakter poglądowy i nie stanowią oferty handlowej w rozumieniu kodeksu
                    cywilnego.
                    Dojazd do klienta od 100 zł jest wliczony w cenę (Strefa Słopanowo/Poznań).
                </div>

            </div>
        </section>
    );
}