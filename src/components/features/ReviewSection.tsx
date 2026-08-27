import { MessageSquareQuote, Star, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { getGoogleReviews } from "@/lib/googleReviews";

export async function ReviewsSection() {

    const placeData = await getGoogleReviews();

    if(!placeData) {
        return (
            <section id="opinie" className="py-20 bg-zinc-950 border-t border-zinc-900">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2
                        className="text-4xl md:text-5xl font-extrabold text-white mb-6 uppercase tracking-tight"
                        style={{ fontFamily: 'var(--font-oswald), sans-serif' }}
                    >
                        Co Mówią <span className="text-blue-500">Nasi Klienci</span>
                    </h2>
                    <p className="text-lg text-zinc-400 mb-8">Twoja satysfakcja jest dla nas najważniejsza. Jesteśmy dumni z naszej oceny w Google!</p>
                    <a href="https://g.page/r/CQXLEC9hVRH8EAE/review" target="_blank" rel="noopener noreferrer">
                        <Button variant="primary">Sprawdź nasze opinie w Google</Button>
                    </a>
                </div>
            </section>
        );
    }

    const topReviews = placeData.reviews.filter(r => r.rating > 4 && r.text.length > 5).slice(0, 3);

    return (
        <section id="opinie" className="py-20 md:py-32 bg-zinc-950 border-t border-zinc-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="text-center mb-16 flex flex-col items-center">

                    <div className="flex items-center gap-2 text-blue-500 font-bold uppercase tracking-widest text-sm mb-4">
                        <ShieldCheck size={18} />
                        <span>Potwierdzona jakość</span>
                    </div>

                    <h2
                        className="text-4xl md:text-5xl font-extrabold text-white mb-6 uppercase tracking-tight"
                        style={{ fontFamily: 'var(--font-oswald), sans-serif' }}
                    >
                        Co Mówią <span className="text-blue-500">Nasi Klienci</span>
                    </h2>

                    <div className="flex flex-col items-center justify-center gap-2 p-4 bg-zinc-900/50 rounded-sm border border-zinc-800 w-fit">
                        <div className="flex items-center gap-1 text-amber-500 drop-shadow-[0_0_8px_rgba(245,158,11,0.5)]">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} fill="currentColor" size={24}/>
                            ))}
                        </div>
                        <p className="text-lg text-zinc-400 font-medium">
                            Średnia ocen: <span className="text-white font-bold text-xl ml-1">{placeData.rating.toFixed(1) || ""}</span>
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    {topReviews.map((review, index) => (
                        <div
                            key={index}
                            className="group bg-zinc-900 rounded-sm p-8 border border-zinc-800 shadow-2xl hover:border-blue-500/50 transition-all duration-300 relative flex flex-col justify-between"
                        >
                            <MessageSquareQuote size={60} className="absolute top-6 right-6 text-zinc-800/50 group-hover:text-blue-900/20 transition-colors -z-0"/>

                            <div className="relative z-10">
                                <div className="flex items-center gap-1 text-amber-500 mb-6">
                                    {[...Array(review.rating)].map((_, i) => (
                                        <Star key={i} fill="currentColor" size={16}/>
                                    ))}
                                </div>
                                <p className="text-zinc-300 italic leading-relaxed mb-8">
                                    &quot;{review.text.length > 150 ? review.text.substring(0, 150) + '...' : review.text}&quot;
                                </p>
                            </div>

                            <div className="flex items-center gap-4 relative z-10 mt-auto pt-6 border-t border-zinc-800">
                                <img
                                    src={review.profile_photo_url.replace('=s128', '=s64')}
                                    alt={`Zdjęcie profilowe ${review.author_name}`}
                                    className="w-12 h-12 rounded-sm grayscale group-hover:grayscale-0 transition-all duration-300"
                                    loading="lazy"
                                    referrerPolicy="no-referrer"
                                />
                                <div>
                                    <p className="font-bold text-white text-sm uppercase tracking-wide">{review.author_name}</p>
                                    <p className="text-xs text-blue-500 font-medium tracking-wider">Opinia Google</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center">
                    <a href="https://g.page/r/CQXLEC9hVRH8EAE/review" target="_blank" rel="noopener noreferrer">
                        <Button variant="primary">Dodaj opinię lub zobacz więcej</Button>
                    </a>
                </div>
            </div>
        </section>
    );
}