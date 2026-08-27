import { ButtonProps } from "@/types/button.types";

export function Button({ children, variant = "primary", className, ...props }: Readonly<ButtonProps>) {
    const baseStyles = "inline-flex items-center justify-center px-8 py-4 font-bold tracking-widest rounded-sm transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 cursor-pointer active:scale-95 uppercase text-sm";

    const variants = {
        primary: "bg-blue-600 text-white hover:bg-blue-500 hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] hover:-translate-y-0.5 focus:ring-blue-500 shadow-md border border-blue-500",
        secondary: "bg-black/40 backdrop-blur-md text-white border border-white/20 hover:bg-white/10 hover:border-white/40 hover:-translate-y-0.5 focus:ring-white/50",
    };

    return (
        <button className={`${baseStyles} ${variants[variant]} ${className || ""}`} {...props}>
            {children}
        </button>
    )
}