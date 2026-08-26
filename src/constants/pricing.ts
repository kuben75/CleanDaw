import {IPricingCategory} from "@/types/pricing.types";

export const PRICING_DATA: IPricingCategory[] = [
    {
        id: 'meble',
        label: 'Tapicerka Meblowa',
        items: [
            { name: 'Sofa (2-3 osobowa)', price: 'od 150 zł' },
            { name: 'Narożnik (do 4 osób)', price: 'od 180 zł' },
            { name: 'Narożnik (5-6 osób)', price: 'od 200 zł' },
            { name: 'Narożnik (7+ osób)', price: 'od 250 zł' },
            { name: 'Fotel', price: 'od 40 zł' },
            { name: 'Krzesło / Taboret', price: 'od 15 zł' },
            { name: 'Fotel biurowy', price: 'od 15 zł' },
            { name: 'Materac pojedynczy', price: 'od 60 / 120 zł', description: 'Cena za jedną stronę / dwie strony' },
            { name: 'Materac podwójny', price: 'od 120 / 220 zł', description: 'Cena za jedną stronę / dwie strony' },
            { name: 'Wózek dziecięcy / Spacerówka', price: 'od 50 zł' },
            { name: 'Pojedynczy fotel samochodowy', price: 'od 35 zł', description: 'Pranie samego fotela poza głównymi pakietami' },
        ]
    },
    {
        id: 'auto',
        label: 'Car Detailing',
        items: [
            {
                name: 'Oferta Standard',
                price: 'od 250 zł',
                description: 'Mały samochód: od 250 zł | Duży/Kombi/SUV: od 280 zł | TIR (kabina): od 350 zł',
                features: [
                    'Czyszczenie wnętrza i bagażnika',
                    'Doczyszczanie dywaników gumowych i materiałowych',
                    'Czyszczenie i pranie podłogi, foteli oraz bagażnika',
                    'Każdy kolejny element +30 zł'
                ]
            },
            {
                name: 'Oferta Premium',
                price: 'od 380 zł',
                isBestChoice: true,
                description: 'Mały samochód: od 380 zł | Duży/Kombi/SUV: od 480 zł | TIR (kabina): od 700 zł',
                features: [
                    'Wszystko z pakietu Standard',
                    'Pranie ekstrakcyjne dywaników',
                    'Detailing i czyszczenie plastików (kokpit, boczki)',
                    'Pędzelkowanie detali (nawiewy, schowki, cup holdery itp.)',
                    'Zabezpieczenie plastików (dedykowany dressing)'
                ]
            }
        ]
    }
];