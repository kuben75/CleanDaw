"use client";
import Image from "next/image";
import { useState } from "react";
import { ChevronDown, ChevronUp, Droplets } from "lucide-react";

export function AboutUs() {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <section id="o-nas" className="py-20 md:py-32 bg-zinc-900 border-t border-zinc-800 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="flex flex-col lg:flex-row items-center relative">
                    {/* Wielkie asymetryczne zdjęcie */}
                    <div className="w-full lg:w-7/12 relative aspect-square sm:aspect-video lg:aspect-[4/3] rounded-sm overflow-hidden z-10 border-l-4 border-blue-500 shadow-2xl">
                        <Image
                            src="/img/img1.jpg"
                            alt="Profesjonalny sprzęt do czyszczenia tapicerki w akcji"
                            fill
                            className="object-cover transform transition-transform hover:scale-[1.02] duration-700"
                            sizes="(max-width: 1024px) 100vw, 60vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-tr from-zinc-950/80 via-transparent to-transparent pointer-events-none" />
                    </div>

                    {/* Ciemny panel nachodzący na zdjęcie z prawej strony */}
                    <div className="w-full lg:w-6/12 bg-zinc-950 p-8 md:p-12 z-20 border border-zinc-800 shadow-[0_0_30px_rgba(0,0,0,0.5)] relative mt-[-4rem] lg:mt-0 lg:-ml-16 rounded-sm">

                        <div className="flex items-center gap-2 text-blue-500 font-bold uppercase tracking-widest text-sm mb-4">
                            <Droplets size={18} />
                            <span>Fakty, nie mity</span>
                        </div>

                        <h2
                            className="text-4xl md:text-5xl font-extrabold text-white mb-6 uppercase tracking-tight"
                            style={{ fontFamily: 'var(--font-oswald), sans-serif' }}
                        >
                            Znamy się na <br className="hidden lg:block"/> <span className="text-blue-500">brudnej robocie</span>
                        </h2>

                        <p className="text-lg text-zinc-300 mb-6 leading-relaxed">
                            Nie opowiadamy bajek o magii. Jesteśmy rzemieślnikami, którzy na co dzień mierzą się z najtrudniejszymi zabrudzeniami tapicerki. Zamiast pustych obietnic, dostarczamy konkretne rezultaty.
                        </p>

                        <div className={`grid transition-all duration-500 ease-in-out ${isExpanded ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                            <div className="overflow-hidden">
                                <p className="text-zinc-400 pb-6 leading-relaxed">
                                    Nasza praca wymaga odpowiedniego arsenału. Korzystamy z potężnych odkurzaczy ekstrakcyjnych, które płuczą materiał pod ciśnieniem, fizycznie wyciągając brud, z którym domowe sposoby nie mają szans. Nie maskujemy tanimi zapachami – usuwamy źródło problemu.
                                </p>
                            </div>
                        </div>

                        <button
                            onClick={() => setIsExpanded(!isExpanded)}
                            className="group flex items-center gap-2 text-blue-500 font-bold uppercase tracking-wider text-sm hover:text-blue-400 transition-colors self-start focus:outline-none mt-2"
                        >
                            {isExpanded ? "Zwiń tekst" : "Czytaj dalej"}
                            {isExpanded ? (
                                <ChevronUp size={20} className="group-hover:-translate-y-1 transition-transform" />
                            ) : (
                                <ChevronDown size={20} className="group-hover:translate-y-1 transition-transform" />
                            )}
                        </button>
                    </div>
                </div>

            </div>
        </section>
    );
}