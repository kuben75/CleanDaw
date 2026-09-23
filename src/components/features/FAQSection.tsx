"use client";

import { useState } from 'react';
import { FAQ_DATA } from '@/constants/faq';
import { ChevronDown, HelpCircle } from 'lucide-react';

export function FAQSection() {
    const [openItem, setOpenItem] = useState<string | null>(FAQ_DATA[0].id);

    const toggleItem = (id: string) => {
        setOpenItem(openItem === id ? null : id);
    };

    const faqJsonLd = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": FAQ_DATA.map((item) => ({
            "@type": "Question",
            "name": item.title,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": item.description
            }
        }))
    };

    return (
        <section id="faq" className="py-20 md:py-32 bg-zinc-900 border-t border-zinc-800">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
            />
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="text-center mb-16 flex flex-col items-center">
                    <div className="flex items-center gap-2 text-blue-500 font-bold uppercase tracking-widest text-sm mb-4">
                        <HelpCircle size={18} />
                        <span>Najczęstsze pytania</span>
                    </div>

                    <h2
                        className="text-4xl md:text-5xl font-extrabold text-white mb-6 uppercase tracking-tight"
                        style={{ fontFamily: 'var(--font-oswald), sans-serif' }}
                    >
                        Masz <span className="text-blue-500">pytania?</span>
                    </h2>
                </div>

                <div className="space-y-4">
                    {FAQ_DATA.map((item) => {
                        const isOpen = openItem === item.id;

                        return (
                            <div key={item.id} className={`bg-zinc-950 rounded-sm border transition-all duration-300 overflow-hidden ${
                                isOpen ? 'border-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.15)]' : 'border-zinc-800 hover:border-zinc-700'
                            }`}>
                                <button onClick={() => toggleItem(item.id)} className="w-full flex items-center justify-between gap-4 p-5 md:p-6 text-left focus:outline-none group" aria-expanded={isOpen}>
                                    <span className={`font-bold uppercase tracking-wide transition-colors ${
                                        isOpen ? 'text-white' : 'text-zinc-300'
                                    }`}>
                                        {item.title}
                                    </span>

                                    <ChevronDown className={`transition-transform duration-300 flex-shrink-0 ${
                                        isOpen ? 'rotate-180 text-blue-500' : 'text-zinc-600 group-hover:text-blue-500'
                                    }`}/>
                                </button>

                                <div className={`grid transition-all duration-300 ease-in-out ${
                                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                                }`}>
                                    <div className="overflow-hidden">
                                        <p className="px-5 md:px-6 pb-6 pt-2 text-zinc-400 leading-relaxed border-t border-zinc-800/50 mt-2">
                                            {item.description}
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
