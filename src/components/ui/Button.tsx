import type { ButtonHTMLAttributes, ReactNode } from "react"

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    // title:string;
    children: ReactNode;
    isLoading?: boolean;
    className?: string
}

function Button({children, isLoading, className, ...rest}: IProps) {
    return (
        <button {...rest} className={`bg-indigo-700 w-full p-5 rounded-md flex justify-center items-center cursor-pointer disabled:bg-indigo-400 disabled:cursor-not-allowed text-white ${className}`} disabled={isLoading}>
            {/* {title} */}
            {children}
        </button>
    )
}

export default Button
