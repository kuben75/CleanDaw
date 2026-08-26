import {EQUIPMENT_DATA} from "@/constants/equipment";
import Image from "next/image";

export function Equipment() {
    return (
        <section id="wyposazenie" className="py-20 md:py-32 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                        Profesjonalny Sprzęt - Gwarancja Jakości
                    </h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        Pracujemy wyłącznie na certyfikowanych urządzeniach i środkach renomowanych marek, co zapewnia skuteczność i bezpieczeństwo dla Twojej tapicerki.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {EQUIPMENT_DATA.map((item) => (
                        <div key={item.id} className="group flex flex-col items-center text-center p-6 rounded-2xl border border-slate-100 bg-slate-50 hover:bg-white hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                            <div className="relative w-40 h-40 mb-6 drop-shadow-md group-hover:drop-shadow-xl transition-all duration-300 gruop-hover:scale-110">
                                <Image src={item.image} alt={`Zdjęcie sprzętu: ${item.title}`} fill className="object-contain" sizes="(max-width: 768px) 160px, 160px"/>
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                                {item.title}
                            </h3>
                            <p className="text-slate-600 text-sm leading-relaxed">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>

        </section>
    )
}