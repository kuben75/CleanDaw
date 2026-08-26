import * as z from 'zod';

export const contactSchema = z.object({
    name: z.string().min(2, { message: "Imię musi mieć co najmniej 2 znaki." }),
    phone: z.string().regex(/^[+]?[0-9\s-]{7,15}$/, { message: "Wprowadź poprawny numer telefonu." }),
    message: z.string().min(10, { message: "Wiadomość jest za krótka (min. 10 znaków)." }),
    rodo: z.boolean().refine((v) => v === true, {
        message: "Musisz zaakceptować zgodę RODO."
    })
});

export type TContactFormValues = z.infer<typeof contactSchema>
