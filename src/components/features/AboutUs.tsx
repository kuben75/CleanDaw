"use client";
import Image from "next/image";
import {useState} from "react";
import {ChevronDown, ChevronUp} from "lucide-react";

export function AboutUs() {
    const [isExpanded, setIsExpanded] = useState(false);
    return (
        <section id="o-nas" className="py-20 md:py-32 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg-px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-square sm:aspect-video lg:aspect-square">
                        <Image src="/img/img1.jpg" alt="Profesjonalny sprzęt do czyszczenia tapicerki w akcji" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw"/>
                    </div>

                    <div className="flex flex-col justify-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                            Kilka słów o naszej pasji
                        </h2>

                        <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                            Jesteśmy rodzinną firmą, dla której czystość to nie tylko praca, ale przede wszystkim pasja. Od lat specjalizujemy się w profesjonalnym czyszczeniu tapicerek, przywracając meblom i wnętrzom samochodów ich dawny blask i świeżość.
                        </p>

                        <div className={`grid transition-all duration-300 ease-in-out ${isExpanded ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                            <div className="overflow-hidden">
                                <p className="text-lg text-slate-600 pb-6 leading-relaxed">
                                    Naszą misją jest dostarczanie usług najwyższej jakości. Dlatego inwestujemy w nowoczesny, certyfikowany sprzęt i używamy wyłącznie sprawdzonych, bezpiecznych dla ludzi i zwierząt środków czyszczących. Rozumiemy, jak cenne są dla Ciebie Twoje meble i samochód, dlatego do każdego zlecenia podchodzimy z pełnym zaangażowaniem i dbałością o najmniejszy detal.
                                </p>
                            </div>
                        </div>
                        <button onClick={() => setIsExpanded(!isExpanded)} className="group flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors self-start focus:outline-none">
                            {isExpanded ? "Zwiń" : "Czytaj dalej"}
                            {isExpanded ? (
                                <ChevronUp size={20} className="group-hover:-translate-y-1 transition-transform" />
                            ) : (
                                <ChevronDown size={20} className="group-hover:-translate-y-1 transition-transform" />
                            )}
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}