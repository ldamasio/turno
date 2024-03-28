import { ButtonHTMLAttributes } from 'react';

export default function PrimaryButton({ className = '', disabled, children, ...props }: ButtonHTMLAttributes<HTMLButtonElement>) {
    return (
        <button
            {...props}
            className={
                `                                    bg-bnb-blue
                text-white
                flex w-full 
                justify-center 
                rounded-sm
                mt-10
                px-3 
                py-3
                text-sm 
                font-semibold 
                leading-6 
                text-white 
                shadow-sm 
                transition ease-in-out duration-150 ${
                    disabled && 'opacity-25'
                } ` + className
            }
            disabled={disabled}
        >
            {children}
        </button>
    );
}
