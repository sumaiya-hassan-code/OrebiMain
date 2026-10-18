import Button from "./Button"
import Container from "./Container"
import Image from "./Image"
import { FaHeart } from "react-icons/fa";


const Card = ({product_imgSrc,product_badge, product_wishlist, product_compare, product_addToCart, product_name,product_price, product_color}) => {
  return (
    <Container>
        <div className=" flex flex-col relative group">
            <Image 
            imgSrc={product_imgSrc} 
            className=""/>
            <Button className={'absolute top-5 left-5'} >{product_badge}</Button>
            <div className="absolute bottom-24  w-full h-1/3 p-5 flex flex-col justify-between gap-y-2 bg-white opacity-0 group-hover:opacity-100 transition-all duration-300">
                <div className="flex justify-end items-center gap-x-3">
                    <div className="text-[16px] text-[#767676] hover:text-black hover:font-bold transition-all duration-300">{product_wishlist}</div>
                    <FaHeart />
                </div>
                <div className="flex justify-end items-center gap-x-3">
                    <div className="text-[16px] text-[#767676] hover:text-black hover:font-bold transition-all duration-300">{product_compare}</div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 12 12" fill="none">
                        <path d="M5.99632 1.93548C7.03761 1.93456 8.01915 2.32277 8.77548 3.03097L7.7654 4.04102C7.39962 4.40683 7.65869 5.03226 8.17599 5.03226H11.4194C11.74 5.03226 12 4.7723 12 4.45161V1.20825C12 0.690944 11.3746 0.431879 11.0088 0.797661L10.1447 1.66173C9.06752 0.632323 7.60761 0 6 0C3.06806 0 0.627411 2.103 0.103935 4.88284C0.070379 5.06112 0.208185 5.22581 0.389589 5.22581H1.77595C1.90972 5.22581 2.02531 5.13419 2.05783 5.00444C2.50452 3.22205 4.12234 1.93713 5.99632 1.93548ZM3.82401 6.96774H0.580645C0.25996 6.96774 0 7.2277 0 7.54839V10.7917C0 11.3091 0.625427 11.5681 0.99121 11.2023L1.85528 10.3383C2.93248 11.3677 4.39239 12 6 12C8.93194 12 11.3726 9.897 11.8961 7.11721C11.9296 6.93893 11.7918 6.77424 11.6104 6.77424H10.224C10.0903 6.77424 9.97469 6.86586 9.94217 6.99561C9.49527 8.7788 7.87679 10.0628 6.00377 10.0645C4.96246 10.0655 3.98085 9.67727 3.22452 8.96906L4.2346 7.95898C4.60038 7.59317 4.34131 6.96774 3.82401 6.96774Z" fillRule="evenodd" clipRule="evenodd" fill="#262626"/>
                    </svg>
                </div>
                <div className="flex justify-end items-center gap-x-3">
                    <div className="text-[16px] text-[#767676] hover:text-black hover:font-bold transition-all duration-300">{product_addToCart}</div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 13 12" fill="none">
                        <path d="M11.9224 6.80235L12.9896 2.1067C13.0667 1.76766 12.809 1.44482 12.4613 1.44482H3.59416L3.38724 0.433219C3.33567 0.181076 3.1138 0 2.85642 0H0.541806C0.242571 0 0 0.242571 0 0.541806V0.90301C0 1.20224 0.242571 1.44482 0.541806 1.44482H2.11943L3.7053 9.19795C3.3259 9.41614 3.07023 9.82525 3.07023 10.2943C3.07023 10.9925 3.63624 11.5585 4.33445 11.5585C5.03266 11.5585 5.59866 10.9925 5.59866 10.2943C5.59866 9.94047 5.45312 9.62078 5.21886 9.3913H9.95169C9.71745 9.62078 9.57191 9.94047 9.57191 10.2943C9.57191 10.9925 10.1379 11.5585 10.8361 11.5585C11.5343 11.5585 12.1003 10.9925 12.1003 10.2943C12.1003 9.79378 11.8094 9.36123 11.3874 9.15641L11.512 8.60837C11.589 8.26934 11.3313 7.94649 10.9836 7.94649H4.92405L4.77629 7.22408H11.3941C11.6471 7.22408 11.8664 7.04903 11.9224 6.80235Z" fill="#262626"/>
                    </svg>
                </div>
            </div>
            <div className="flex flex-col justify-between p-3 gap-y-4">
                    <div className="flex justify-between">
                        <div className="text-[20px] font-bold text-[#262626]">
                            {product_name} 
                        </div>
                        <div className="text-[16px] text-[#767676]">
                            {product_price} 
                        </div>
                    </div>
                    <div className="text-[16px] text-[#767676]">
                        {product_color} 
                    </div>
            </div>
        </div>
    </Container>
  )
}

export default Card