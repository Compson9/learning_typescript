import React from 'react'
import Product from './Product'
import { ProductProps } from '@/types/types'

export default function Products() {

    const products: ProductProps[] = [
        {
            title: "Bikini Wear",
            price: 300,
            id:1,
            image: "/products/swim.jpg",
        }, {
            title: "Corsett",
            price: 100,
            id:2,
            image: "/products/corset.jpg",
        }, {
            title: "Bikini Wear",
            price: 30,
            id:3,
            image: "/products/corset.jpg",
        },
        {
            title: "Bikini Wear",
            price: 30,
            id:4,

            image: "/products/corset.jpg",
        },
        
    ]

    return (
        <div className='py-8 '>
            <div className="flex ">
              {
                products.map((product,i)=> {
                    return(
                        <div key={i}>
                            <Product 
                        key={i}
                        id={product.id}
                        image={product.image}
                        title={product.title}
                        price={product.price} 
                        />
                        </div>
                         
                    )
                })
              }
            </div>

        </div>
    )
}
