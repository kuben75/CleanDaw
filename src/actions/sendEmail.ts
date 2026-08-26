"use server";
import nodemailer from "nodemailer";
import {IContactFormData} from "@/types/service.types";

export async function sendContactEmail(data: IContactFormData) {
    try {
        const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465,
            secure: true,
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        });

        const mailOptions = {
            from: `"Formularz CleanDaw" <${process.env.SMTP_USER}>`,
            to: 'kontakt.cleandaw@gmail.com',
            bcc: 'jakup.lawniczak@gmail.com',
            subject: `Nowe zapytanie ze strony CleanDaw od: ${data.name}`,
            html: `
        <div style="font-family: Arial, sans-serif; max-w-2xl mx-auto; padding: 20px; border: 1px solid #e2e8f0; border-radius: 10px;">
          <h2 style="color: #2563eb; border-bottom: 2px solid #bfdbfe; padding-bottom: 10px;">Nowe zapytanie z formularza</h2>
          
          <div style="margin-top: 20px;">
            <p><strong>Od:</strong> ${data.name}</p>
            <p><strong>Telefon:</strong> <a href="tel:${data.phone}" style="color: #2563eb; font-weight: bold;">${data.phone}</a></p>
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e2e8f0;">
            <p style="color: #64748b; font-size: 14px; margin-bottom: 5px;">Treść wiadomości:</p>
            <p style="background-color: #f8fafc; padding: 15px; border-radius: 8px; white-space: pre-wrap;">${data.message}</p>
          </div>
        </div>
      `,
        };

        await transporter.sendMail(mailOptions);
        return {success: true};
    }catch {
        return { success: false, error: 'Nie udało się wysłać wiadomości.' };
    }
}