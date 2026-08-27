import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Sparkles, CalendarCheck, CheckCircle2 } from "lucide-react";

export function Hero() {
    return (
        <section id="hero" className="relative w-full h-[100svh] min-h-[600px] max-h-[900px] flex items-center overflow-hidden bg-zinc-950">
            <div className="absolute inset-0 z-0">
                <Image
                    src="/img/car.jpg"
                    alt="Wyczyszczone, luksusowe wnętrze samochodu BMW po detailingu"
                    fill
                    priority
                    className="object-cover object-center"
                    sizes="100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-zinc-950/95 via-zinc-950/80 to-zinc-900/30" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="max-w-3xl flex flex-col justify-center">

                    <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-500/10 border-l-2 border-blue-500 text-blue-400 font-bold tracking-wider uppercase text-xs mb-8 w-fit">
                        <Sparkles size={16} />
                        <span>Detailing i pranie tapicerek • Wielkopolska</span>
                    </div>

                    <h1
                        className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.1] mb-6 uppercase"
                        style={{ fontFamily: 'var(--font-oswald), sans-serif' }}
                    >
                        Przywróć fabryczny blask <br />
                        <span className="text-blue-500">swojej tapicerce.</span>
                    </h1>

                    <p className="text-lg sm:text-xl text-zinc-300 mb-10 max-w-xl leading-relaxed">
                        Zabójczo skuteczny detailing wnętrz oraz pranie tapicerki.
                        Wciągamy brud, usuwamy plamy i przywracamy świeżość. Mobilnie lub stacjonarnie.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10 text-sm text-zinc-200 font-medium">
                        <div className="flex items-center gap-3">
                            <CheckCircle2 size={20} className="text-blue-500 flex-shrink-0" />
                            <span className="uppercase tracking-wide">Certyfikowana chemia</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <CheckCircle2 size={20} className="text-blue-500 flex-shrink-0" />
                            <span className="uppercase tracking-wide">Szybkie schnięcie (Dry Pod)</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <CheckCircle2 size={20} className="text-blue-500 flex-shrink-0" />
                            <span className="uppercase tracking-wide">Dojazd od 100 zł</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <CheckCircle2 size={20} className="text-blue-500 flex-shrink-0" />
                            <span className="uppercase tracking-wide">Ocena 5.0 w Google</span>
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <a href="#galeria">
                            <Button variant="primary" className="w-full sm:w-auto gap-2">
                                <CalendarCheck size={18} />
                                Zobacz nasze realizacje
                            </Button>
                        </a>
                        <a href="#uslugi">
                            <Button variant="secondary" className="w-full sm:w-auto">
                                Cennik usług
                            </Button>
                        </a>
                    </div>

                </div>
            </div>
        </section>
    );
}