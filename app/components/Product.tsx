import { ProductProps } from "@/types/types";
import Image from "next/image";
import Link from "next/link";

export default function Product({title,image,price,id}: ProductProps){

    return(
        <div className="flex flex-col justify-center w-[150px] flex-shrink gap-2 items-center">
            <Image 
            alt="product image"
            src={image}
            width={50}
            height={50} 
            priority={true}
            />
            <h2 className="text-white">{title}</h2>
            <p className="text-white">Price: ${price}</p>
            <Link className="text-gray-500" href={`/products/${id}`}>
            View Details
            </Link>
        </div>
    )
}




