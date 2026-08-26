import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Polityka Prywatności | CleanDaw',
    description: 'Polityka prywatności i zasady wykorzystywania plików cookies w serwisie CleanDaw.',
    robots: { index: false, follow: true }
};

export default function PrivacyPolicy() {
    return (
        <div className="min-h-screen bg-slate-50 py-20">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="bg-white p-8 md:p-12 lg:p-16 rounded-3xl shadow-sm border border-slate-100">

                    <Link href="/" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors mb-10 font-medium">
                        <ArrowLeft size={20} />
                        Wróć do strony głównej
                    </Link>

                    <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">Polityka Prywatności i Plików Cookies</h1>

                    <div className="space-y-8 text-slate-700 leading-relaxed">

                        <section>
                            <h2 className="text-xl font-bold text-slate-900 mb-3">1. Administrator Danych</h2>
                            <p>
                                Administratorem danych osobowych zbieranych za pośrednictwem strony internetowej jest firma <strong>CleanDaw</strong> z siedzibą w Słopanowie. Kontakt z administratorem jest możliwy pod adresem e-mail: <strong>kontakt.cleandaw@gmail.com</strong> lub telefonicznie pod numerem: <strong>+48 535 880 525</strong>.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-slate-900 mb-3">2. Cel i zakres zbierania danych</h2>
                            <p>Państwa dane osobowe (imię, numer telefonu, adres e-mail) podane w formularzu kontaktowym są przetwarzane wyłącznie w celu:</p>
                            <ul className="list-disc pl-5 mt-2 space-y-1">
                                <li>Udzielenia odpowiedzi na przesłane zapytanie.</li>
                                <li>Przedstawienia wyceny i oferty usług.</li>
                                <li>Realizacji zamówionej usługi czyszczenia/detailingu.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-slate-900 mb-3">3. Podstawa prawna i czas przechowywania</h2>
                            <p>
                                Dane przetwarzane są na podstawie dobrowolnej zgody użytkownika (art. 6 ust. 1 lit. a RODO) wyrażonej poprzez zaznaczenie odpowiedniego pola przed wysłaniem formularza. Dane przechowywane są przez okres niezbędny do realizacji odpowiedzi na zapytanie lub do momentu wycofania zgody przez użytkownika.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-slate-900 mb-3">4. Prawa użytkownika</h2>
                            <p>Każdy użytkownik, którego dane dotyczą, ma prawo do:</p>
                            <ul className="list-disc pl-5 mt-2 space-y-1">
                                <li>Dostępu do treści swoich danych oraz ich kopii.</li>
                                <li>Sprostowania (poprawiania) swoich danych.</li>
                                <li>Usunięcia danych (tzw. prawo do bycia zapomnianym).</li>
                                <li>Ograniczenia przetwarzania danych.</li>
                                <li>Cofnięcia zgody na przetwarzanie w dowolnym momencie.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-slate-900 mb-3">5. Pliki Cookies (Ciasteczka)</h2>
                            <p>
                                Nasza strona internetowa wykorzystuje pliki cookies (tzw. ciasteczka). Są to niewielkie pliki tekstowe zapisywane na urządzeniu końcowym użytkownika. Wykorzystujemy je w celach:
                            </p>
                            <ul className="list-disc pl-5 mt-2 space-y-1">
                                <li><strong>Niezbędnych technicznie:</strong> aby zapewnić prawidłowe działanie strony (np. zapamiętanie, czy użytkownik zamknął pasek z informacją o cookies).</li>
                            </ul>
                            <p className="mt-2">
                                Użytkownik może w każdej chwili samodzielnie zmienić ustawienia dotyczące plików cookies w swojej przeglądarce internetowej, a nawet całkowicie je zablokować.
                            </p>
                        </section>

                    </div>
                </div>
            </div>
        </div>
    );
}