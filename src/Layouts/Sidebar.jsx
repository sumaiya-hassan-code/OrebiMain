import  { useState } from 'react';
import { FaCaretUp, FaCaretDown  } from "react-icons/fa";


const Sidebar = () => {

  const[showColor, setShowColor] = useState(true)

  // const colors =[
  //   {},
  //   {},
  //   {},
  //   {},
  // ]



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
      <div className="mt-5">
        <div 
        onClick={() => setShowColor(!showColor)}
        className="text-[20px] font-bold flex justify-between">
        Shop by Color 
        {showColor ?  <FaCaretDown  /> : <FaCaretUp />   }
        </div>
      </div>
      
    </div>
    </>
  )
}

export default Sidebar