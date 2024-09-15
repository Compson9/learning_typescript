import React, { ReactNode } from 'react'


export default function ProductContainer({children}: {children:ReactNode}) {
    return (
        <div className='w-full max-w-6xl bg-slate-900 border border-gray-200 rounded-lg p-6 shadow sm:p-6'>
            {children}
        </div>
    )
}

