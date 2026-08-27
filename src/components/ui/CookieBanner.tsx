'use client';

import { useState, useEffect } from 'react';
import { Button } from './Button';
import { ShieldAlert } from 'lucide-react';

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
        <div className="fixed bottom-0 left-0 right-0 z-[100] bg-zinc-950 border-t border-zinc-800 shadow-[0_-10px_40px_rgba(0,0,0,0.5)] p-4 md:p-6 animate-in slide-in-from-bottom-full duration-500">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">

                <div className="text-sm text-zinc-400 md:pr-10 text-center md:text-left flex items-start gap-4">
                    <div className="hidden sm:flex p-2 bg-zinc-900 border border-zinc-800 rounded-sm text-blue-500 flex-shrink-0">
                        <ShieldAlert size={20} />
                    </div>
                    <p className="mt-0.5 leading-relaxed">
                        Nasza strona używa plików cookies w celu prawidłowego działania oraz do celów analitycznych.
                        Korzystając ze strony, wyrażasz zgodę na ich używanie zgodnie z naszą <a href="/polityka-prywatnosci" className="text-blue-500 hover:text-blue-400 font-bold tracking-wide transition-colors">Polityką Prywatności</a>.
                    </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0 w-full md:w-auto">
                    <Button
                        variant="secondary"
                        onClick={declineCookies}
                        className="w-full sm:w-auto bg-zinc-900 text-zinc-400 border-zinc-800 hover:bg-zinc-800 hover:text-white rounded-sm text-xs uppercase tracking-widest font-bold transition-colors"
                    >
                        Tylko niezbędne
                    </Button>
                    <Button
                        variant="primary"
                        onClick={acceptCookies}
                        className="w-full sm:w-auto rounded-sm text-xs uppercase tracking-widest font-bold shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] transition-shadow"
                    >
                        Rozumiem i akceptuję
                    </Button>
                </div>

            </div>
        </div>
    );
}