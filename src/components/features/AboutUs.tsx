"use client";
import Image from "next/image";
import { useState } from "react";
import { ChevronDown, ChevronUp, Droplets } from "lucide-react";

export function AboutUs() {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        // Zmieniliśmy tło na ciemny, techniczny grafit, oddzielający sekcję od czarnego Hero
        <section id="o-nas" className="py-20 md:py-32 bg-zinc-900 border-t border-zinc-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

                    {/* Zdjęcie: ostre rogi, mocny cień i industrialna, błękitna krawędź z lewej strony */}
                    <div className="relative rounded-sm overflow-hidden shadow-2xl border-l-4 border-blue-500 aspect-square sm:aspect-video lg:aspect-square transform transition-transform hover:scale-[1.02] duration-500">
                        <Image
                            src="/img/img1.jpg"
                            alt="Profesjonalny sprzęt do czyszczenia tapicerki w akcji"
                            fill
                            className="object-cover"
                            sizes="(max-width: 1024px) 100vw, 50vw"
                        />
                        {/* Subtelny mroczny gradient na zdjęciu od dołu */}
                        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/60 to-transparent pointer-events-none" />
                    </div>

                    <div className="flex flex-col justify-center">

                        {/* Techniczny znacznik dodający motoryzacyjnego klimatu */}
                        <div className="flex items-center gap-2 text-blue-500 font-bold uppercase tracking-widest text-sm mb-4">
                            <Droplets size={18} />
                            <span>Bez kompromisów</span>
                        </div>

                        {/* Twardy nagłówek Oswald */}
                        <h2
                            className="text-4xl md:text-5xl font-extrabold text-white mb-6 uppercase tracking-tight"
                            style={{ fontFamily: 'var(--font-oswald), sans-serif' }}
                        >
                            Kilka słów o <span className="text-blue-500">naszej pasji</span>
                        </h2>

                        <p className="text-lg text-zinc-300 mb-6 leading-relaxed">
                            Jesteśmy rodzinną firmą, dla której czystość to nie tylko praca, ale przede wszystkim pasja. Od lat specjalizujemy się w profesjonalnym czyszczeniu tapicerek, przywracając meblom i wnętrzom samochodów ich dawny blask i salonową świeżość.
                        </p>

                        <div className={`grid transition-all duration-500 ease-in-out ${isExpanded ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                            <div className="overflow-hidden">
                                <p className="text-lg text-zinc-400 pb-6 leading-relaxed">
                                    Naszą misją jest dostarczanie usług najwyższej jakości. Dlatego inwestujemy w nowoczesny, potężny sprzęt ekstrakcyjny i używamy wyłącznie sprawdzonej, bezpiecznej chemii czyszczącej. Rozumiemy, jak cenne są dla Ciebie Twoje meble i samochód – dlatego wyciągniemy z nich każdy brud, zachowując maksymalne bezpieczeństwo materiału.
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