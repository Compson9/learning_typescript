"use client"
import Link from "next/link";
import Button from "./components/Button";
import ProductContainer from "./components/ProductContainer";
import Products from "./components/Products";
import Admin from "./components/Admin";
import Employees from "./components/Employees";
import { useState } from "react";
import CustomButton from "./components/CustomButton";
import {Mail} from "lucide-react"

export default function Home() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [loading, setloading] = useState("kofi")
  
  

  
  return (
    <div className="flex justify-center gap-5 items-center h-screen flex-col">
      <div className="mt-[400px]">
        <Button title="Give me head" loading={loading} />
      </div>
      <ProductContainer>
        <div className="flex justify-between items-center">
          <h2 className='text-white'>Popular Products</h2>
          <Link className='text-slate-800  bg-slate-200 text-[16px] hover:bg-slate-100 rounded-lg py-2.5 px-6' href={"#"}>See All</Link>
        </div>
        <div className="grid grid-cols-2">
        <Products />
        </div>
      </ProductContainer>
      <ProductContainer>
        <section className="py-8">
          <h2 className="text-white">Welcome to the New Section</h2>
        </section>
        <Admin name={"Kwame"} email={"kwame@gmail.com"} adminNo={23450}/>
        <Employees name={"Elvis"} email={"elvis@gmail.com"} id={220} department={"Accounting"}/>
      </ProductContainer>
      <ProductContainer>
        <div className="py-8 flex gap-4">
        <CustomButton className="bg-indigo-500 flex py-2 px-6 gap-4 items-center hover:bg-indigo-700 text-white" 
        icon = {<Mail/>}
        href="https://www.mpowerfinancing.com/get-a-loan/schools-we-support#schools"
        // onClick={()=> alert("It is working correctly")}
        title="Add to cart"/>
        <CustomButton className=""  title="Get started"/>
        <CustomButton className="bg-green-500 p-2 " title="Loading"/>
        </div>
      </ProductContainer>
    </div>
  );
}


