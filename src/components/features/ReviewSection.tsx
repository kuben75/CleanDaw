import { MessageSquareQuote, Star } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { getGoogleReviews } from "@/lib/googleReviews";

export async function ReviewsSection() {

    const placeData = await getGoogleReviews();

    if(!placeData) {
        return (
            <section id="opinie" className="py-20 bg-slate-50">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Co Mówią Nasi Klienci</h2>
                    <p className="text-lg text-slate-600 mb-8">Twoja satysfakcja jest dla nas najważniejsza. Jesteśmy dumni z naszej oceny w Google!</p>
                    <a href="https://g.page/r/CQXLEC9hVRH8EAE/review" target="_blank" rel="noopener noreferrer">
                        <Button variant="primary">Sprawdź nasze opinie w Google</Button>
                    </a>
                </div>
            </section>
        );
    }

    const topReviews = placeData.reviews.filter(r => r.rating > 4 && r.text.length > 5).slice(0, 3);

    return (
        <section id="opinie" className="py-20 md:py-32 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Co Mówią Nasi Klienci</h2>
                    <div className="flex flex-col items-center justify-center gap-2">
                        <div className="flex items-center gap-1 text-amber-500">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} fill="currentColor" size={24}/>
                            ))}
                        </div>
                        <p className="text-lg text-slate-600 font-medium">
                            Ocena <span className="text-slate-900 font-bold">{placeData.rating.toFixed(1) || ""}</span>
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                    {topReviews.map((review, index) => (
                        <div key={index} className="bg-slate-50 rounded-2xl p-8 border border-slate-100 shadow-sm relative flex flex-col justify-between">
                            <MessageSquareQuote size={40} className="absolute top-6 right-6 text-blue-100 -z-0"/>

                            <div className="relative z-10">
                                <div className="flex items-center gap-1 text-amber-500 mb-4">
                                    {[...Array(review.rating)].map((_, i) => (
                                        <Star key={i} fill="currentColor" size={16}/>
                                    ))}
                                </div>
                                <p className="text-slate-700 italic leading-relaxed mb-6">
                                    &#34;{review.text.length > 150 ? review.text.substring(0, 150) + '...' : review.text}&#34;
                                </p>
                            </div>

                            <div className="flex items-center gap-4 relative z-10 mt-auto pt-6 border-t border-slate-200">
                                <img src={review.profile_photo_url.replace('=s128', '=s64')} alt={`Zdjęcie profilowe ${review.author_name}`}
                                     className="w-10 h-10 rounded-full" loading="lazy" referrerPolicy="no-referrer"/>
                                <div>
                                    <p className="font-semibold text-slate-900 text-sm">{review.author_name}</p>
                                    <p className="text-xs text-slate-500">Google Review</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center">
                    <a href="https://g.page/r/CQXLEC9hVRH8EAE/review" target="_blank" rel="noopener noreferrer">
                        <Button variant="primary"> Dodaj opinię lub zobacz więcej na Google</Button>
                    </a>
                </div>
            </div>
        </section>
    );
}