'use client';

import { useState, useEffect } from 'react';
import { Button } from './Button';

export function CookieBanner() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            const consent = localStorage.getItem('cleandaw_cookie_consent');
            if (!consent) {
                setIsVisible(true);
            }
        }, 0);

        return () => clearTimeout(timer);
    }, []);

    const acceptCookies = () => {
        localStorage.setItem('cleandaw_cookie_consent', 'true');
        setIsVisible(false);
    };

    const declineCookies = () => {
        localStorage.setItem('cleandaw_cookie_consent', 'false');
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-0 left-0 right-0 z-[100] bg-white border-t border-slate-200 shadow-[0_-10px_40px_rgba(0,0,0,0.1)] p-4 md:p-6 animate-in slide-in-from-bottom-full duration-500">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">

                <div className="text-sm text-slate-600 md:pr-10 text-center md:text-left">
                    Nasza strona używa plików cookies w celu prawidłowego działania oraz do celów analitycznych.
                    Korzystając ze strony, wyrażasz zgodę na ich używanie zgodnie z naszą <a href="/polityka-prywatnosci" className="text-blue-600 underline hover:text-blue-700 font-medium">Polityką Prywatności</a>.
                </div>

                <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0 w-full md:w-auto">
                    <Button
                        variant="secondary"
                        onClick={declineCookies}
                        className="w-full sm:w-auto text-slate-600 border-slate-300 hover:bg-slate-100"
                    >
                        Tylko niezbędne
                    </Button>
                    <Button
                        variant="primary"
                        onClick={acceptCookies}
                        className="w-full sm:w-auto"
                    >
                        Rozumiem i akceptuję
                    </Button>
                </div>

            </div>
        </div>
    );
}