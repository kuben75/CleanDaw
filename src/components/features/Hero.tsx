import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Sparkles, CalendarCheck, CheckCircle2 } from "lucide-react";

export function Hero() {
    return (
        <section id="hero" className="relative pt-12 pb-16 md:pt-20 md:pb-24 overflow-hidden bg-gradient-to-b from-slate-50 to-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

                    <div className="lg:col-span-7 flex flex-col justify-center">

                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 font-medium text-sm mb-6 w-fit">
                            <Sparkles size={16} className="text-blue-600" />
                            <span>Detailing i czyszczenie tapicerek • Wielkopolska</span>
                        </div>

                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.15] mb-6">
                            Przywróć fabryczny blask <br />
                            <span className="text-blue-600">swojej tapicerce.</span>
                        </h1>

                        <p className="text-lg text-slate-600 mb-8 max-w-xl leading-relaxed">
                            Profesjonalny detailing wnętrz samochodowych oraz pranie tapicerki meblowej.
                            Mobilnie z dojazdem oraz stacjonarnie w Słopanowie.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8 text-sm text-slate-700 font-medium">
                            <div className="flex items-center gap-2">
                                <CheckCircle2 size={18} className="text-blue-600 flex-shrink-0" />
                                <span>Bezpieczna, certyfikowana chemia</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle2 size={18} className="text-blue-600 flex-shrink-0" />
                                <span>Szybki czas schnięcia (Dry Pod)</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle2 size={18} className="text-blue-600 flex-shrink-0" />
                                <span>Darmowy dojazd od 100 zł</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle2 size={18} className="text-blue-600 flex-shrink-0" />
                                <span>Ocena 5.0 w Google</span>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <a href="#kontakt">
                                <Button variant="primary" className="w-full sm:w-auto gap-2 text-base">
                                    <CalendarCheck size={18} />
                                    Darmowa wycena online
                                </Button>
                            </a>
                            <a href="#uslugi">
                                <Button variant="secondary" className="w-full sm:w-auto text-base">
                                    Zobacz ofertę i cennik
                                </Button>
                            </a>
                        </div>
                    </div>

                    <div className="lg:col-span-5 relative">
                        <div className="relative mx-auto max-w-md lg:max-w-none">

                            <div className="absolute -inset-2 rounded-2xl bg-gradient-to-tr from-blue-600 to-cyan-400 opacity-20 blur-lg hidden md:block" />

                            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200/60 aspect-[4/3] lg:aspect-[4/5]">
                                <Image
                                    src="/img/car.jpg"
                                    alt="Wyczyszczone, luksusowe wnętrze samochodu BMW po detailingu"
                                    fill
                                    priority
                                    className="object-cover object-center transform hover:scale-105 transition-transform duration-500"
                                    sizes="(max-width: 1024px) 100vw, 40vw"
                                />
                            </div>

                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
}