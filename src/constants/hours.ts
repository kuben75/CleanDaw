export interface IOpeningHours {
    day: string;
    hours: string;
}


export const OPENING_HOURS: IOpeningHours[] = [
    { day: "Poniedziałek - Piątek", hours: "9:00 - 22:00" },
    { day: "Sobota", hours: "9:00 - 22:00" },
    { day: "Niedziela", hours: "9:00 - 22:00" },
];
