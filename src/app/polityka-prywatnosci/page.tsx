import Link from 'next/link';
import { ArrowLeft, Shield } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Polityka Prywatności | CleanDaw',
    description: 'Polityka prywatności i zasady wykorzystywania plików cookies w serwisie CleanDaw.',
    robots: { index: false, follow: true }
};

export default function PrivacyPolicy() {
    return (
        <div className="min-h-screen bg-zinc-950 py-20 md:py-32 pt-28">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="bg-zinc-900 p-8 md:p-12 lg:p-16 rounded-sm shadow-2xl border border-zinc-800 relative overflow-hidden">

                    <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
                    <div className="absolute top-0 left-0 w-1 h-full bg-blue-500 opacity-50" />

                    <div className="relative z-10">
                        <Link href="/" className="inline-flex items-center gap-2 text-zinc-400 hover:text-blue-500 transition-colors mb-10 text-xs font-bold uppercase tracking-widest group">
                            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                            Wróć do strony głównej
                        </Link>

                        <div className="flex items-center gap-2 text-blue-500 font-bold uppercase tracking-widest text-sm mb-4">
                            <Shield size={18} />
                            <span>Dokumenty Prawne</span>
                        </div>

                        <h1
                            className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-12 uppercase tracking-tight"
                            style={{ fontFamily: 'var(--font-oswald), sans-serif' }}
                        >
                            Polityka <span className="text-blue-500">Prywatności</span> <br className="hidden sm:block" />
                            i Plików Cookies
                        </h1>

                        <div className="space-y-10 text-zinc-400 leading-relaxed text-sm md:text-base">

                            <section>
                                <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-3 uppercase tracking-wide">
                                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-sm flex-shrink-0"></span>
                                    1. Administrator Danych
                                </h2>
                                <p>
                                    Administratorem danych osobowych zbieranych za pośrednictwem strony internetowej jest firma <strong className="text-white">CleanDaw</strong> z siedzibą w Słopanowie. Kontakt z administratorem jest możliwy pod adresem e-mail: <strong className="text-white">kontakt.cleandaw@gmail.com</strong> lub telefonicznie pod numerem: <strong className="text-white">+48 535 880 525</strong>.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-3 uppercase tracking-wide">
                                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-sm flex-shrink-0"></span>
                                    2. Cel i zakres zbierania danych
                                </h2>
                                <p>Państwa dane osobowe (imię, numer telefonu, adres e-mail) podane w formularzu kontaktowym są przetwarzane wyłącznie w celu:</p>
                                <ul className="list-disc pl-5 mt-3 space-y-2 marker:text-blue-500">
                                    <li>Udzielenia odpowiedzi na przesłane zapytanie.</li>
                                    <li>Przedstawienia wyceny i oferty usług.</li>
                                    <li>Realizacji zamówionej usługi czyszczenia/detailingu.</li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-3 uppercase tracking-wide">
                                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-sm flex-shrink-0"></span>
                                    3. Podstawa prawna i czas przechowywania
                                </h2>
                                <p>
                                    Dane przetwarzane są na podstawie dobrowolnej zgody użytkownika (art. 6 ust. 1 lit. a RODO) wyrażonej poprzez zaznaczenie odpowiedniego pola przed wysłaniem formularza. Dane przechowywane są przez okres niezbędny do realizacji odpowiedzi na zapytanie lub do momentu wycofania zgody przez użytkownika.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-3 uppercase tracking-wide">
                                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-sm flex-shrink-0"></span>
                                    4. Prawa użytkownika
                                </h2>
                                <p>Każdy użytkownik, którego dane dotyczą, ma prawo do:</p>
                                <ul className="list-disc pl-5 mt-3 space-y-2 marker:text-blue-500">
                                    <li>Dostępu do treści swoich danych oraz ich kopii.</li>
                                    <li>Sprostowania (poprawiania) swoich danych.</li>
                                    <li>Usunięcia danych (tzw. prawo do bycia zapomnianym).</li>
                                    <li>Ograniczenia przetwarzania danych.</li>
                                    <li>Cofnięcia zgody na przetwarzanie w dowolnym momencie.</li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-3 uppercase tracking-wide">
                                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-sm flex-shrink-0"></span>
                                    5. Pliki Cookies (Ciasteczka)
                                </h2>
                                <p>
                                    Nasza strona internetowa wykorzystuje pliki cookies (tzw. ciasteczka). Są to niewielkie pliki tekstowe zapisywane na urządzeniu końcowym użytkownika. Wykorzystujemy je w celach:
                                </p>
                                <ul className="list-disc pl-5 mt-3 space-y-2 marker:text-blue-500">
                                    <li><strong className="text-white">Niezbędnych technicznie:</strong> aby zapewnić prawidłowe działanie strony (np. zapamiętanie, czy użytkownik zamknął pasek z informacją o cookies).</li>
                                </ul>
                                <p className="mt-4">
                                    Użytkownik może w każdej chwili samodzielnie zmienić ustawienia dotyczące plików cookies w swojej przeglądarce internetowej, a nawet całkowicie je zablokować.
                                </p>
                            </section>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}