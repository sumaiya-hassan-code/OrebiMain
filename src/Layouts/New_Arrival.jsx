import Card from "../Components//Card";
import { products } from "../Data/products";

const New_Arrival = () => {
  return (
    <div className="px-10">
        <p className="font-bold text-[39px] text-[#262626] pb-10">New Arrivals</p>
        <div className="flex items-center gap-x-5">
            {products.map((products) => (
            <Card key={products.id} product={products} />
            ))}
        </div>
    </div>
    
  )
}

export default New_Arrival