import type { InputHTMLAttributes } from "react"

interface IProps extends InputHTMLAttributes<HTMLInputElement> {className?: string}

function Input({className, ...rest}:IProps) {
    return (
        <>
            <input {...rest} className={`p-4 rounded-xl border w-full mb-5 ${className}`} />
        </>
    )
}

export default Input
