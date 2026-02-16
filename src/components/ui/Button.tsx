import type { ButtonHTMLAttributes, ReactNode } from "react"

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    // title:string;
    children: ReactNode;
    isLoading?: boolean;
    className?: string
}

function Button({children, isLoading, className, ...rest}: IProps) {
    return (
        <button {...rest} className={` rounded-md flex justify-center items-center cursor-pointer disabled:cursor-not-allowed ${className}`} disabled={isLoading}>
            {/* {title} */}
            {children}
        </button>
    )
}

export default Button
