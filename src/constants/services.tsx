import {Car, SprayCan, Sofa, ShieldHalf, Truck, Armchair, SquareDashed} from 'lucide-react';
import {IServiceItem} from "@/types/service.types";

export const SERVICES_DATA: IServiceItem[]= [
    {
        id: "detailing",
        title: "Kompleksowy detailing wnętrza",
        description: "Nasz flagowy proces obejmujący odkurzanie, aplikację Pre Spray, pranie ekstrakcyjne oraz czyszczenie kokpitu, plastików i boczków drzwi przy użyciu tornadora. Całość wieńczy bonetowanie dla uzyskania idealnego wykończenia.",
        icon: <Car size={24} />
    },
    {
        id: "plamy",
        title: "Usuwanie plam i neutralizacja zapachów",
        description: "Dzięki dedykowanym odplamiaczom skutecznie radzimy sobie z najtrudniejszymi zabrudzeniami (plamy z tłuszczu, kawy). Przywracamy wnętrzu neutralny, świeży zapach.",
        icon: <SprayCan size={24} />
    },
    {
        id: "skora",
        title: "Czyszczenie tapicerki skórzanej",
        description: "Używamy specjalistycznych, bezpiecznych środków oraz miękkich szczotek, aby dokładnie oczyścić skórę. Proces kończymy aplikacją odżywki przywracającej jej elastyczność.",
        icon: <Armchair size={24} />
    },
    {
        id: "impregnacja",
        title: "Odnowa i impregnacja tapicerki",
        description: "Po dogłębnym czyszczeniu nakładamy warstwę impregnatu, która zabezpiecza tapicerkę przed szybkim wchłanianiem brudu i wilgoci.",
        icon: <ShieldHalf size={24} />
    },
    {
        id: "meble",
        title: "Pranie tapicerek meblowych",
        description: "Pierzemy sofy, narożniki, materace, fotele oraz krzesła z dojazdem do klienta. Pozbywamy się roztoczy, kurzu i plam domowych.",
        icon: <Sofa size={24} />
    },
    {
        id: "dywaniki",
        title: "Pranie dywaników samochodowych",
        description: "Niezależnie czy są materiałowe czy gumowe, przywrócimy im czystość.",
        icon: <SquareDashed size={24} />
    },
    {
        id: "ciezarowki",
        title: "Detailing kabiny w ciężarówce",
        description: "Dokładne odkurzanie, pranie ekstrakcyjne, czyszczenie plastików (APC) oraz aplikacja dressingów z zabezpieczeniem UV.",
        icon: <Truck size={24} />
    }
]