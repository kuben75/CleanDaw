import {ButtonProps} from "@/types/button.types";


export function Button ({ children, variant = "primary", className, ...props}: Readonly<ButtonProps>) {
    const baseStyles = "inline-flex items-center justify-center px-6 py-3 font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 cursor-pointer active:scale-95";

    const variants = {
        primary: "bg-blue-600 text-white hover:bg-blue-700 hover:shadow-lg hover:-translate-y-0.5 focus:ring-blue-600 shadow-md",
        secondary: "bg-white text-slate-700 border border-slate-200 hover:bg-slate-50 hover:shadow-md hover:-translate-y-0.5 focus:ring-slate-200",
    };

    return(
        <button className={`${baseStyles} ${variants[variant]} ${className || ""}`} {...props}>
            {children}
        </button>
    )
}

