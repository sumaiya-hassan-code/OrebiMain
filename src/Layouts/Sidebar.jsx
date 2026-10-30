import  { useState } from 'react';
import { FaCaretUp, FaCaretDown  } from "react-icons/fa";


const Sidebar = () => {

  const[showColor, setShowColor] = useState(true)
  const[showBrand, setShowBrand] = useState(true)
  const[showPrice, setShowPrice] = useState(true)


  const Price = ["$0.00 - $9.99", "$10.00 - $19.99", "$20.00 - $29.99", "$30.00 - $39.99", "$40.00 - $69.99"]
  
  
  const brands = ["Brand 1", "Brand 2", "Brand 3", "Brand 4"];

  const colors =[
    {name: "Color 1" , hex:"#000000" },
    {name: "Color 2" , hex:"#FF8686" },
    {name: "Color 3" , hex:"#7ED321" },
    {name: "Color 4" , hex:"#B6B6B6" },
    {name: "Color 5" , hex:"#15CBA5" },
  ]



  return (
    <>
    <div className="w-full">
      <div className="">
        <div className="text-[20px] font-bold">Shop by Category</div>
        <ul className="flex flex-col gap-y-2 mt-2 text-[16px] text-[#767676]">
          <li className=" group flex justify-between items-center border-b border-[#F0F0F0] py-2">Category 1 <span className="font-bold text-xl opacity-0 group-hover:opacity-100 transition-all duration-300">+</span></li>
          <li className=" group flex justify-between items-center border-b border-[#F0F0F0] py-2">Category 2 <span className="font-bold text-xl opacity-0 group-hover:opacity-100 transition-all duration-300">+</span></li>
          <li className=" group flex justify-between items-center border-b border-[#F0F0F0] py-2">Category 3 <span className="font-bold text-xl opacity-0 group-hover:opacity-100 transition-all duration-300">+</span></li> 
          <li className=" group flex justify-between items-center border-b border-[#F0F0F0] py-2">Category 4 <span className="font-bold text-xl opacity-0 group-hover:opacity-100 transition-all duration-300">+</span></li>
        </ul>
      </div>
      
      {/* Shop by color */}

      <div className="mt-5">
        <div 
        onClick={() => setShowColor(!showColor)}
        className="text-[20px] font-bold flex items-center justify-between">
        Shop by Color 
        {showColor ?  <FaCaretUp /> : <FaCaretDown  />  }
        </div>
        {showColor &&  (
          <ul className="flex flex-col gap-y-2 mt-2 text-[16px] text-[#767676]">
            {colors.map((color, index) => (
              <li key={index} className="group flex items-center gap-x-2 border-b border-[#F0F0F0] py-2">
                <span className="w-3 h-3 rounded-full border-none"
                style={{background:color.hex}}></span>
                <span>{color.name}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
      
      {/* Shop by Brand */}

      <div className="mt-5">
        <div 
        onClick={() => setShowBrand(!showBrand)}
        className="text-[20px] font-bold flex items-center justify-between">
        Shop by Brand 
        {showBrand ?   <FaCaretUp /> : <FaCaretDown  />   }
        </div>
        {showBrand &&  (
          <ul className="flex flex-col gap-y-2 mt-2 text-[16px] text-[#767676]">
            {brands.map((brands, index) => (
              <li key={index} className="group flex items-center gap-x-2 border-b border-[#F0F0F0] py-2">
                {brands}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>

    {/* Shop by Price */}

      <div className="mt-5">
        <div 
        onClick={() => setShowPrice(!showPrice)}
        className="text-[20px] font-bold flex items-center justify-between">
        Shop by Brand 
        {showPrice ?  <FaCaretUp /> : <FaCaretDown  />   }
        </div>
        {showPrice &&  (
          <ul className="flex flex-col gap-y-2 mt-2 text-[16px] text-[#767676]">
            {Price.map((Price, index) => (
              <li 
              key={index} 
              className="group flex items-center gap-x-2 border-b border-[#F0F0F0] py-2">
              {Price}
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  )
}

export default Sidebar 