"use client";
import { Phone, Mail, MessageSquare, Send, CheckCircle2, AlertCircle, Terminal } from "lucide-react";
import { useState } from "react";
import { contactSchema, TContactFormValues } from "@/types/contact.schema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/Button";
import { sendContactEmail } from "@/actions/sendEmail";
import Link from "next/link";

export function ContactSection() {
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
    const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<TContactFormValues>({
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
            } else {
                setSubmitStatus('error');
            }

            setTimeout(() => setSubmitStatus('idle'), 5000)
        } catch {
            setSubmitStatus('error');
        }
    };

    return (
        <section id="kontakt" className="py-20 md:py-32 bg-zinc-900 border-t border-zinc-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="text-center mb-16 flex flex-col items-center">
                    <div className="flex items-center gap-2 text-blue-500 font-bold uppercase tracking-widest text-sm mb-4">
                        <Terminal size={18} />
                        <span>Zostańmy w kontakcie</span>
                    </div>

                    <h2
                        className="text-4xl md:text-5xl font-extrabold text-white mb-6 uppercase tracking-tight"
                        style={{ fontFamily: 'var(--font-oswald), sans-serif' }}
                    >
                        Napisz <span className="text-blue-500">do nas</span>
                    </h2>
                    <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
                        Masz pytania lub chcesz umówić termin? Wybierz najwygodniejszą dla siebie formę kontaktu. Reagujemy błyskawicznie.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 bg-zinc-950 rounded-sm shadow-2xl overflow-hidden border border-zinc-800">

                    <div className="lg:col-span-5 bg-zinc-900 p-8 md:p-12 text-white flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-zinc-800 relative group">

                        <div className="absolute top-0 left-0 w-1 h-full bg-blue-500 opacity-50 group-hover:opacity-100 transition-opacity duration-500" />

                        <div className="relative z-10">
                            <h3
                                className="text-2xl font-extrabold mb-10 uppercase tracking-wide"
                                style={{ fontFamily: 'var(--font-oswald), sans-serif' }}
                            >
                                Dane <span className="text-blue-500">kontaktowe</span>
                            </h3>

                            <div className="space-y-10">
                                <a href="tel:+48535880525" className="flex items-center gap-6 group/item hover:translate-x-2 transition-transform duration-300">
                                    <div className="w-14 h-14 bg-zinc-950 border border-zinc-800 group-hover/item:border-blue-500 group-hover/item:text-blue-500 rounded-sm flex items-center justify-center flex-shrink-0 transition-colors">
                                        <Phone size={24} className="text-zinc-400 group-hover/item:text-blue-500 transition-colors" />
                                    </div>
                                    <div>
                                        <p className="text-zinc-500 text-xs font-bold uppercase tracking-widest mb-1">Zadzwoń do nas</p>
                                        <p className="text-xl font-bold tracking-wide">535 880 525</p>
                                    </div>
                                </a>

                                <a href="https://wa.me/48535880525" target="_blank" rel="noopener noreferrer" className="flex items-center gap-6 group/item hover:translate-x-2 transition-transform duration-300">
                                    <div className="w-14 h-14 bg-zinc-950 border border-zinc-800 group-hover/item:border-green-500 group-hover/item:text-green-500 rounded-sm flex items-center justify-center flex-shrink-0 transition-colors">
                                        <MessageSquare size={24} className="text-zinc-400 group-hover/item:text-green-500 transition-colors" />
                                    </div>
                                    <div>
                                        <p className="text-zinc-500 text-xs font-bold uppercase tracking-widest mb-1">Napisz na WhatsApp</p>
                                        <p className="text-xl font-bold tracking-wide">Szybki kontakt</p>
                                    </div>
                                </a>

                                <a href="mailto:kontakt.cleandaw@gmail.com" className="flex items-center gap-6 group/item hover:translate-x-2 transition-transform duration-300">
                                    <div className="w-14 h-14 bg-zinc-950 border border-zinc-800 group-hover/item:border-blue-500 group-hover/item:text-blue-500 rounded-sm flex items-center justify-center flex-shrink-0 transition-colors">
                                        <Mail size={24} className="text-zinc-400 group-hover/item:text-blue-500 transition-colors" />
                                    </div>
                                    <div>
                                        <p className="text-zinc-500 text-xs font-bold uppercase tracking-widest mb-1">Wyślij e-mail</p>
                                        <p className="text-lg font-bold tracking-wide break-all">kontakt.cleandaw@gmail.com</p>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-7 p-8 md:p-12">
                        <h3
                            className="text-2xl font-extrabold text-white mb-8 uppercase tracking-wide"
                            style={{ fontFamily: 'var(--font-oswald), sans-serif' }}
                        >
                            Wyślij <span className="text-blue-500">zapytanie</span>
                        </h3>

                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>

                            <div>
                                <label htmlFor="name" className="block text-xs font-bold uppercase tracking-widest text-zinc-400 mb-2">Imię</label>
                                <input
                                    id="name"
                                    type="text"
                                    className={`w-full px-4 py-3 rounded-sm border bg-zinc-900 text-white placeholder-zinc-600 transition-colors outline-none focus:ring-1 focus:bg-zinc-800 ${
                                        errors.name
                                            ? 'border-red-500 focus:border-red-500 focus:ring-red-500/50'
                                            : 'border-zinc-800 focus:border-blue-500 focus:ring-blue-500/50 hover:border-zinc-700'
                                    }`}
                                    {...register("name")}
                                />
                                {errors.name && <p className="mt-2 text-xs font-bold text-red-500 flex items-center gap-1"><AlertCircle size={14}/> {errors.name.message}</p>}
                            </div>

                            <div>
                                <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-widest text-zinc-400 mb-2">Telefon</label>
                                <input
                                    id="phone"
                                    type="tel"
                                    className={`w-full px-4 py-3 rounded-sm border bg-zinc-900 text-white placeholder-zinc-600 transition-colors outline-none focus:ring-1 focus:bg-zinc-800 ${
                                        errors.phone
                                            ? 'border-red-500 focus:border-red-500 focus:ring-red-500/50'
                                            : 'border-zinc-800 focus:border-blue-500 focus:ring-blue-500/50 hover:border-zinc-700'
                                    }`}
                                    {...register("phone")}
                                />
                                {errors.phone && <p className="mt-2 text-xs font-bold text-red-500 flex items-center gap-1"><AlertCircle size={14}/> {errors.phone.message}</p>}
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-xs font-bold uppercase tracking-widest text-zinc-400 mb-2">Wiadomość</label>
                                <textarea
                                    id="message"
                                    rows={4}
                                    className={`w-full px-4 py-3 rounded-sm border bg-zinc-900 text-white placeholder-zinc-600 transition-colors outline-none focus:ring-1 focus:bg-zinc-800 resize-none ${
                                        errors.message
                                            ? 'border-red-500 focus:border-red-500 focus:ring-red-500/50'
                                            : 'border-zinc-800 focus:border-blue-500 focus:ring-blue-500/50 hover:border-zinc-700'
                                    }`}
                                    {...register("message")}
                                />
                                {errors.message && <p className="mt-2 text-xs font-bold text-red-500 flex items-center gap-1"><AlertCircle size={14}/> {errors.message.message}</p>}
                            </div>

                            <div className="flex items-start gap-3 pt-2">
                                <div className="flex items-center h-5 mt-0.5">
                                    <input
                                        id="rodo"
                                        type="checkbox"
                                        className="w-5 h-5 rounded-sm border-zinc-700 bg-zinc-900 text-blue-600 focus:ring-blue-500 focus:ring-offset-zinc-950 cursor-pointer accent-blue-600"
                                        {...register("rodo")}
                                    />
                                </div>
                                <div className="text-sm">
                                    <label htmlFor="rodo" className="font-bold text-zinc-300 cursor-pointer text-xs uppercase tracking-wide">
                                        Zgoda na przetwarzanie danych
                                    </label>
                                    <p className="text-zinc-500 mt-1 text-xs leading-relaxed">
                                        Wyrażam zgodę na przetwarzanie moich danych osobowych w celu odpowiedzi na zapytanie. Szczegóły w <Link href="/polityka-prywatnosci" className="text-blue-500 underline hover:text-blue-400 transition-colors">Polityce Prywatności</Link>.
                                    </p>
                                    {errors.rodo && <p className="mt-2 text-xs font-bold text-red-500 flex items-center gap-1"><AlertCircle size={14}/> {errors.rodo.message}</p>}
                                </div>
                            </div>

                            <div className="pt-6 border-t border-zinc-800">
                                <Button type="submit" variant="primary" className="w-full sm:w-auto min-w-[220px] group" disabled={isSubmitting}>
                                    {isSubmitting ? (
                                        <span className="flex items-center gap-2 justify-center">
                                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"/>
                                            Trwa wysyłanie...
                                        </span>
                                    ) : (
                                        <span className="flex items-center gap-2 justify-center">
                                            <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                                            Wyślij zapytanie
                                        </span>
                                    )}
                                </Button>

                                {submitStatus === 'success' && (
                                    <div className="mt-6 p-4 rounded-sm bg-green-950/30 border border-green-500/30 text-green-400 flex items-center gap-3 animate-in fade-in slide-in-from-bottom-2 text-sm font-bold tracking-wide">
                                        <CheckCircle2 size={20} className="text-green-500" />
                                        Wiadomość wysłana pomyślnie! Odpowiemy wkrótce.
                                    </div>
                                )}

                                {submitStatus === 'error' && (
                                    <div className="mt-6 p-4 rounded-sm bg-red-950/30 border border-red-500/30 text-red-400 flex items-center gap-3 animate-in fade-in slide-in-from-bottom-2 text-sm font-bold tracking-wide">
                                        <AlertCircle size={20} className="text-red-500" />
                                        Wystąpił błąd serwera. Spróbuj ponownie lub zadzwoń.
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