import { MessageSquareQuote, Star, ShieldCheck, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { getGoogleReviews } from "@/lib/googleReviews";

export async function ReviewsSection() {
    const placeData = await getGoogleReviews();

    if (!placeData) {
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
        <section id="opinie" className="py-20 md:py-32 bg-zinc-950 border-t border-zinc-900 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

                    <div className="lg:col-span-5 lg:sticky lg:top-32 flex flex-col items-start text-left">
                        <div className="flex items-center gap-2 text-blue-500 font-bold uppercase tracking-widest text-sm mb-4">
                            <ShieldCheck size={18} />
                            <span>Potwierdzona jakość</span>
                        </div>

                        <h2
                            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-8 uppercase tracking-tight leading-[1.1]"
                            style={{ fontFamily: 'var(--font-oswald), sans-serif' }}
                        >
                            Oceniają nas <br/> <span className="text-blue-500">bezlitośnie.</span>
                        </h2>

                        <div className="bg-zinc-900 border border-zinc-800 p-6 md:p-8 rounded-sm mb-8 w-full max-w-sm relative">
                            <div className="absolute top-0 right-0 w-16 h-16 bg-blue-500/5 blur-2xl rounded-full" />
                            <p className="text-zinc-400 text-sm font-bold uppercase tracking-widest mb-2">Średnia w Google</p>
                            <div className="flex items-baseline gap-4 mb-2">
                                <span className="text-6xl font-extrabold text-white" style={{ fontFamily: 'var(--font-oswald), sans-serif' }}>
                                    {placeData.rating.toFixed(1)}
                                </span>
                                <div className="flex items-center gap-1 text-amber-500 drop-shadow-[0_0_8px_rgba(245,158,11,0.5)]">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} fill="currentColor" size={20} />
                                    ))}
                                </div>
                            </div>
                            <p className="text-zinc-500 text-sm">Na podstawie prawdziwych opinii klientów po wykonanej usłudze.</p>
                        </div>

                        <a href="https://g.page/r/CQXLEC9hVRH8EAE/review" target="_blank" rel="noopener noreferrer">
                            <Button variant="primary" className="gap-3 group">
                                Zobacz wszystkie opinie
                                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </a>
                    </div>

                    <div className="lg:col-span-7 flex flex-col gap-6 md:gap-8 lg:py-12">
                        {topReviews.map((review, index) => {
                            const offsetClass = index === 1 ? 'md:ml-12' : index === 2 ? 'md:ml-24' : '';

                            return (
                                <div
                                    key={index}
                                    className={`group bg-zinc-900 rounded-sm p-6 md:p-8 border border-zinc-800 shadow-2xl hover:border-blue-500/50 transition-all duration-300 relative flex flex-col justify-between ${offsetClass}`}
                                >
                                    <MessageSquareQuote size={50} className="absolute top-6 right-6 text-zinc-800/30 group-hover:text-blue-900/20 transition-colors -z-0" />

                                    <div className="relative z-10">
                                        <div className="flex items-center gap-1 text-amber-500 mb-6">
                                            {[...Array(review.rating)].map((_, i) => (
                                                <Star key={i} fill="currentColor" size={16} />
                                            ))}
                                        </div>
                                        <p className="text-zinc-300 italic leading-relaxed mb-8">
                                            &quot;{review.text.length > 180 ? review.text.substring(0, 180) + '...' : review.text}&quot;
                                        </p>
                                    </div>

                                    <div className="flex items-center gap-4 relative z-10 mt-auto pt-6 border-t border-zinc-800">
                                        <img
                                            src={review.profile_photo_url.replace('=s128', '=s64')}
                                            alt={`Zdjęcie profilowe ${review.author_name}`}
                                            className="w-10 h-10 rounded-sm grayscale group-hover:grayscale-0 transition-all duration-300"
                                            loading="lazy"
                                            referrerPolicy="no-referrer"
                                        />
                                        <div>
                                            <p className="font-bold text-white text-sm uppercase tracking-wide">{review.author_name}</p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                </div>
            </div>
        </section>
    );
}