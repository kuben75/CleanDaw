"use client";
import { Phone, Mail, MessageSquare, Send, CheckCircle2, AlertCircle } from "lucide-react";
import {useState} from "react";
import {contactSchema, TContactFormValues} from "@/types/contact.schema";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {Button} from "@/components/ui/Button";
import {sendContactEmail} from "@/actions/sendEmail";
import Link from "next/link";


export function ContactSection() {
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
    const {register, handleSubmit, reset, formState: {errors, isSubmitting}} = useForm<TContactFormValues>({
        resolver: zodResolver(contactSchema),
        defaultValues: {
            name: "",
            phone: "",
            rodo: false
        }
    });

    const onSubmit = async (data: TContactFormValues) => {
        try {
           const res = await sendContactEmail({
               name: data.name,
               phone: data.phone,
               message: data.message
           });

           if (res.success) {
               setSubmitStatus('success');
               reset();
           }else {
               setSubmitStatus('error');
           }

           setTimeout(() => setSubmitStatus('idle'), 5000)
        } catch {
            setSubmitStatus('error');
        }
    };

    return (
        <section id="kontakt" className="py-20 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Skontaktuj się z nami</h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">Masz pytania lub chcesz umówić termin?
                        Chętnie pomożemy! Wybierz najwygodniejszą dla siebie formę kontaktu.</p>
                </div>

                <div
                    className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100">
                    <div className="lg:col-span-5 bg-blue-800 p-8 md:p-12 text-white flex flex-col justify-between relative overflow-hidden">
                        <div className="absolute top-0 right-0 -translate-y-8 translate-x-8 w-48 h-48 bg-blue-500 rounded-full blur-2xl opacity-50"/>
                        <div className="absolute bottom-0 left-0 translate-y-8 -translate-x-8 w-48 h-48 bg-blue-700 rounded-full blur-2xl opacity-50"/>

                        <div className="relative z-10">
                            <h3 className="text-2xl font-bold mb-8">Dane kontaktowe</h3>
                            <div className="space-y-12">
                                <a href="tel:+48535880525"
                                   className="flex items-center gap-4 hover:translate-x-2 transition-transform">
                                    <div
                                        className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                                        <Phone size={24}/>
                                    </div>
                                    <div>
                                        <p className="text-blue-200 text-sm">Zadzwoń do nas</p>
                                        <p className="text-xl font-semibold">535 880 525</p>
                                    </div>
                                </a>
                                <a href="https://wa.me/48535880525" target="_blank" rel="noopener noreferrer"
                                   className="flex items-center gap-4 hover:translate-x-2 transition-transform">
                                    <div
                                        className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                                        <MessageSquare size={24}/>
                                    </div>
                                    <div>
                                        <p className="text-blue-200 text-sm">Napisz na WhatsApp</p>
                                        <p className="text-xl font-semibold">Szybki kontakt</p>
                                    </div>
                                </a>
                                <a href="mailto:kontakt.cleandaw@gmail.com"
                                   className="flex items-center gap-4 hover:translate-x-2 transition-transform">
                                    <div
                                        className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                                        <Mail size={24}/>
                                    </div>
                                    <div>
                                        <p className="text-blue-200 text-sm">Wyślij e-mail</p>
                                        <p className="text-lg font-semibold break-all">kontakt.cleandaw@gmail.com</p>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="lg:col-span-7 p-8 md:p-12">
                        <h3 className="text-2xl font-bold text-slate-900 mb-6">Wyślij zapytanie</h3>
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>

                            <div>
                                <label htmlFor="name"
                                       className="block text-sm font-medium text-slate-700 mb-2">Imię</label>
                                <input id="name" type="text"
                                       className={`w-full px-4 py-3 rounded-lg border bg-slate-50 focus:bg-white transition-colors outline-none focus:ring-2 ${
                                           errors.name ? 'border-red-500 focus:ring-red-200' : 'border-slate-200 focus:border-blue-500 focus:ring-blue-100'}`}
                                       {...register("name")}
                                />
                                {errors.name &&
                                    <p className="mt-2 text-sm text-red-600 flex items-center gap-1"><AlertCircle
                                        size={16}/> {errors.name.message}</p>}
                            </div>

                            <div>
                                <label htmlFor="phone"
                                       className="block text-sm font-medium text-slate-700 mb-2">Telefon</label>
                                <input id="phone" type="tel"
                                       className={`w-full px-4 py-3 rounded-lg border bg-slate-50 focus:bg-white transition-colors outline-none focus:ring-2 ${errors.phone ? 'border-red-500 focus:ring-red-200' : 'border-slate-200 focus:border-blue-500 focus:ring-blue-100'}`}
                                       {...register("phone")}
                                />
                                {errors.phone &&
                                    <p className="mt-2 text-sm text-red-600 flex items-center gap-1"><AlertCircle
                                        size={16}/> {errors.phone.message}</p>}
                            </div>

                            <div>
                                <label htmlFor="message"
                                       className="block text-sm font-medium text-slate-700 mb-2">Wiadomość</label>
                                <textarea id="message" rows={4}
                                          className={`w-full px-4 py-3 rounded-lg border bg-slate-50 focus:bg-white transition-colors outline-none focus:ring-2 resize-none ${
                                              errors.message ? 'border-red-500 focus:ring-red-200' : 'border-slate-200 focus:border-blue-500 focus:ring-blue-100'}`}
                                          {...register("message")}
                                />
                                {errors.message &&
                                    <p className="mt-2 text-sm text-red-600 flex items-center gap-1"><AlertCircle
                                        size={16}/> {errors.message.message}</p>}
                            </div>

                            <div className="flex items-start gap-3">
                                <div className="flex items-center h-6">
                                    <input id="rodo" type="checkbox"
                                           className="w-5 h-5 rounded border-slate-300 text-blue-600 focus:ring-blue-500 cursor-pointer"{...register("rodo")}/>
                                </div>
                                <div className="text-sm">
                                    <label htmlFor="rodo" className="font-medium text-slate-700 cursor-pointer">
                                        Zgoda na przetwarzanie danych
                                    </label>
                                    <p className="text-slate-500 mt-1">
                                        Wyrażam zgodę na przetwarzanie moich danych osobowych w celu odpowiedzi na
                                        zapytanie.
                                        Szczegóły w <Link href="/polityka-prywatnosci"
                                                          className="text-blue-600 underline hover:text-blue-700">Polityce
                                        Prywatności</Link>.
                                    </p>
                                    {errors.rodo &&
                                        <p className="mt-1 text-red-600 flex items-center gap-1"><AlertCircle
                                            size={16}/> {errors.rodo.message}</p>}
                                </div>
                            </div>

                            <div className="pt-2">
                                <Button type="submit" variant="primary" className="w-full sm:w-auto min-w-[200px]"
                                        disabled={isSubmitting}>
                                    {isSubmitting ? (
                                        <span className="flex items-center gap-2">
                                            <div
                                                className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"/>Wysyłanie...</span>
                                    ) : (
                                        <span className="flex items-center gap-2"><Send
                                            size={18}/>Wyślij zapytanie</span>
                                    )}
                                </Button>

                                {submitStatus === 'success' && (
                                    <div
                                        className="mt-4 p-4 rounded-lg bg-green-50 border border-green-200 text-green-800 flex items-center gap-3 animate-in fade-in slide-in-from-bottom-2">
                                        <CheckCircle2 className="text-green-600"/>
                                        Wiadomość wysłana pomyślnie! Odpowiemy wkrótce.
                                    </div>
                                )}

                                {submitStatus === 'error' && (
                                    <div
                                        className="mt-4 p-4 rounded-lg bg-red-50 border border-red-200 text-red-800 flex items-center gap-3 animate-in fade-in slide-in-from-bottom-2">
                                        <AlertCircle className="text-red-600"/>
                                        Wystąpił błąd. Spróbuj ponownie lub zadzwoń do nas.
                                    </div>
                                )}
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </section>
    );
}