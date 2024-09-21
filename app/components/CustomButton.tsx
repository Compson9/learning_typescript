import Link from 'next/link'
import React, { ReactNode } from 'react'

type CustomButtonProps = {
    title: string,
    className?: string,
    icon?: ReactNode,
    onClick?:()=> void,
    href?: string,
}


export default function CustomButton({ title, className, icon, onClick, href }: CustomButtonProps) {
    const defaultClassName = "py-3 px-6 bg-slate-200"
    const combineClassName = `${defaultClassName} ${className}`
   
    return (
        <>
        {href ? ( <Link href={href} className={combineClassName} onClick={onClick}>
            {title}
            {icon && <span>{icon}</span> }
        </Link>): (
             <button className={combineClassName} onClick={onClick}>
             {title}
             {icon && <span>{icon}</span> } 
         </button>
        )}
        </>
    )
}



