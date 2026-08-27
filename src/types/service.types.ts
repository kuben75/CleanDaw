import {ReactNode} from "react";

export interface IBaseItem {
    id: string;
    title: string;
    description: string;
}

export interface IServiceItem extends IBaseItem {
    icon: ReactNode;
}

export interface IContactFormData {
    name: string;
    phone: string;
    message: string;
}
