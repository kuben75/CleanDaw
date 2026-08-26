export interface IPricingItem {
    name: string;
    price: string;
    description?: string;
    features?: string[];
    isBestChoice?: boolean;
}

export interface IPricingCategory {
    id: string;
    label: string;
    items: IPricingItem[]
}