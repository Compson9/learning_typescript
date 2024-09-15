/* eslint-disable @typescript-eslint/no-unused-vars */
import Product from '@/app/components/Product'
import { ProductProps } from '@/types/types'
import React from 'react'

export default function page({ params: { id } }: { params: { id: number } }) {
    const products: ProductProps[] = [
        {
            title: "Bikini Wear",
            price: 300,
            id: 1,
            image: "/products/swim.jpg",
        }, {
            title: "Corsett",
            price: 100,
            id: 2,
            image: "/products/corset.jpg",
        }, {
            title: "Bikini Wear",
            price: 30,
            id: 3,
            image: "/products/corset.jpg",
        },
        {
            title: "Bikini Wear",
            price: 30,
            id: 4,

            image: "/products/corset.jpg",
        },
    ]

    const product = products.find((product) => product.id == id)
    return (
        <div className='min-h-screen flex items-center justify-center'>
            {
                product? <Product
                id={product.id}
                title={product.title}
                image={product.image}
                price={product.price}
                /> : (
                    <p>This cannot be found</p>
                )
            }
    </div>
    )
}

