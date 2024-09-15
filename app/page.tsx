import Link from "next/link";
import Button from "./components/Button";
import ProductContainer from "./components/ProductContainer";
import Products from "./components/Products";
import User from "./components/User";

export default function Home() {
  return (
    <div className="flex justify-center gap-5 items-center h-screen flex-col">
      <div>
        <Button title="Give me head" />
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
        <User username={"Elvis"} age={27} course={"Business Management"} />
      </ProductContainer>
    </div>
  );
}


