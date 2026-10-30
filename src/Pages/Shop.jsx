import Card from "../Components/Card";
import Container from "../Components/Container";
import Sidebar from "../Layouts/Sidebar";
import {  FaCaretDown  } from "react-icons/fa";
import card_img1 from "../assets/Image_B(1).png";
import card_img2 from "../assets/Special_offers_Image (1).png";
import card_img3 from "../assets/Special_offers_Image (2).png";
import card_img4 from "../assets/Special_offers_Image (3).png";

import card_img6 from "../assets/Image_B.png";
import card_img7 from "../assets/Special_offers_Image.png";
import card_img8 from "../assets/New_Arrivals_img.png";
import Pagination from "../Layouts/Pagination";
import { useState } from "react";


const Shop = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 12;

  return (
    <>
    <div className="p-10">
      <Container>
        <div className="mt-10 flex flex-col gap-x-2">
          <p className="text-[49px] font-bold text-[#262626]">Products</p>
          <p className="text-[12px] text-[#767676]">Home  &gt;  Products</p>
        </div>
        <div
            className={"mt-20 flex justify-between gap-x-2"}>
          <div className="w-full lg:w-1/4">
            <Sidebar/>
          </div>
          <div className="w-full lg:w-3/4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
                  <rect width="36" height="36" fill="#262626"/>
                  <path d="M19.1999 16.6944V13.0833C19.1999 12.485 19.6849 12 20.2832 12H24.8573C25.4556 12 25.9406 12.485 25.9406 13.0833V16.6944C25.9406 17.2928 25.4556 17.7778 24.8573 17.7778H20.2832C19.6849 17.7778 19.1999 17.2928 19.1999 16.6944ZM17.7554 20.3056V23.9167C17.7554 24.515 17.2704 25 16.672 25H12.098C11.4997 25 11.0146 24.515 11.0146 23.9167V20.3056C11.0146 19.7072 11.4997 19.2222 12.098 19.2222H16.6721C17.2704 19.2222 17.7554 19.7072 17.7554 20.3056ZM17.7554 16.6944V13.0833C17.7554 12.485 17.2704 12 16.6721 12H12.098C11.4997 12 11.0146 12.485 11.0146 13.0833V16.6944C11.0146 17.2928 11.4997 17.7778 12.098 17.7778H16.672C17.2704 17.7778 17.7554 17.2928 17.7554 16.6944ZM24.8573 25H20.2832C19.6849 25 19.1999 24.515 19.1999 23.9167V20.3056C19.1999 19.7072 19.6849 19.2222 20.2832 19.2222H24.8573C25.4556 19.2222 25.9406 19.7072 25.9406 20.3056V23.9167C25.9406 24.515 25.4556 25 24.8573 25Z" fill-rule="evenodd" clip-rule="evenodd" fill="white"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
                    <path d="M0.5 0.5H35.5V35.5H0.5V0.5Z" stroke="#F0F0F0"/>
                    <path d="M15 24.4375V22.5625C15 22.2518 14.7122 22 14.3571 22H11.6429C11.2878 22 11 22.2518 11 22.5625V24.4375C11 24.7482 11.2878 25 11.6429 25H14.3571C14.7122 25 15 24.7482 15 24.4375V24.4375Z" fill="#737373"/>
                    <path d="M16.9414 12.5625V14.4375C16.9414 14.7482 17.589 15 18.3878 15H24.495C25.2938 15 25.9414 14.7482 25.9414 14.4375V12.5625C25.9414 12.2518 25.2938 12 24.495 12H18.3878C17.589 12 16.9414 12.2518 16.9414 12.5625H16.9414Z" fill="#737373"/>
                    <path d="M15 14.4375V12.5625C15 12.2518 14.7122 12 14.3571 12H11.6429C11.2878 12 11 12.2518 11 12.5625V14.4375C11 14.7482 11.2878 15 11.6429 15H14.3571C14.7122 15 15 14.7482 15 14.4375V14.4375Z" fill="#737373"/>
                    <path d="M15 19.4375V17.5625C15 17.2518 14.7122 17 14.3571 17H11.6429C11.2878 17 11 17.2518 11 17.5625V19.4375C11 19.7482 11.2878 20 11.6429 20H14.3571C14.7122 20 15 19.7482 15 19.4375V19.4375Z" fill="#737373"/>
                    <path d="M18.3878 20H24.495C25.2938 20 25.9414 19.7482 25.9414 19.4375V17.5625C25.9414 17.2518 25.2938 17 24.495 17H18.3878C17.589 17 16.9414 17.2518 16.9414 17.5625V19.4375C16.9414 19.7482 17.589 20 18.3878 20Z" fill="#737373"/>
                    <path d="M18.3878 25H24.495C25.2938 25 25.9414 24.7482 25.9414 24.4375V22.5625C25.9414 22.2518 25.2938 22 24.495 22H18.3878C17.589 22 16.9414 22.2518 16.9414 22.5625V24.4375C16.9414 24.7482 17.589 25 18.3878 25Z" fill="#737373"/>
                </svg>
              </div>
                <div className="flex items-center gap-x-5">
                  <div className="flex items-center gap-x-2">
                    <span className="text-[16px] text-[#767676]">Sort by:</span>
                  <span className="text-[16px] text-[#767676] flex items-center justify-between p-2 border border-[#737373] w-[150px] rounded-[5px]">Featured <FaCaretDown  /></span>
                  </div>
                  <div className="flex items-center gap-x-2">
                    <span className="text-[16px] text-[#767676]">Show:</span>
                  <span className="text-[16px] text-[#767676] flex items-center justify-between p-2 border border-[#737373] w-[100px] rounded-[5px]">36<FaCaretDown  /></span>
                  </div>
              </div>
            </div>
            <div className="mt-10">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card
              product_imgSrc={card_img1}
              product_addToCart="Add to Cart"
              product_badge="New"
              product_color="Black"
              product_compare="Compare"
              product_name="Basic Crew Neck Tee"
              product_price={44}
              product_wishlist="Add to Wish List"
            />
            <Card
              product_imgSrc={card_img2}
              product_addToCart="Add to Cart"
              product_badge="-10%"
              product_color="Black"
              product_compare="Compare"
              product_name="Basic Crew Neck Tee"
              product_price={44}
              product_wishlist="Add to Wish List"
            />
            <Card
              product_imgSrc={card_img3}
              product_addToCart="Add to Cart"
              product_badge = "New"
              product_color="Black"
              product_compare="Compare"
              product_name="Basic Crew Neck Tee"
              product_price={44}
              product_wishlist="Add to Wish List"
            />
              <Card
              product_imgSrc={card_img4}
              product_addToCart="Add to Cart"
              product_badge="New"
              product_color="Black"
              product_compare="Compare"
              product_name="Basic Crew Neck Tee"
              product_price={44}
              product_wishlist="Add to Wish List"
            />
            <Card
              product_imgSrc={card_img2}
              product_addToCart="Add to Cart"
              product_badge="New"
              product_color="Black"
              product_compare="Compare"
              product_name="Basic Crew Neck Tee"
              product_price={44}
              product_wishlist="Add to Wish List"
            />
            <Card
              product_imgSrc={card_img6}
              product_addToCart="Add to Cart"
              product_badge="New"
              product_color="Black"
              product_compare="Compare"
              product_name="Basic Crew Neck Tee"
              product_price={44}
              product_wishlist="Add to Wish List"
            />
              <Card
              product_imgSrc={card_img7}
              product_addToCart="Add to Cart"
              product_badge="New"
              product_color="Black"
              product_compare="Compare"
              product_name="Basic Crew Neck Tee"
              product_price={44}
              product_wishlist="Add to Wish List"
            />
            <Card
              product_imgSrc={card_img3}
              product_addToCart="Add to Cart"
              product_badge="New"
              product_color="Black"
              product_compare="Compare"
              product_name="Basic Crew Neck Tee"
              product_price={44}
              product_wishlist="Add to Wish List"
            />
            <Card
              product_imgSrc={card_img4}
              product_addToCart="Add to Cart"
              product_badge="New"
              product_color="Black"
              product_compare="Compare"
              product_name="Basic Crew Neck Tee"
              product_price={44}
              product_wishlist="Add to Wish List"
            />
              <Card
              product_imgSrc={card_img1}
              product_addToCart="Add to Cart"
              product_badge="New"
              product_color="Black"
              product_compare="Compare"
              product_name="Basic Crew Neck Tee"
              product_price={44}
              product_wishlist="Add to Wish List"
            />
            <Card
              product_imgSrc={card_img8}
              product_addToCart="Add to Cart"
              product_badge="New"
              product_color="Black"
              product_compare="Compare"
              product_name="Basic Crew Neck Tee"
              product_price={44}
              product_wishlist="Add to Wish List"
            />
            <Card
              product_imgSrc={card_img7}
              product_addToCart="Add to Cart"
              product_badge="New"
              product_color="Black"
              product_compare="Compare"
              product_name="Basic Crew Neck Tee"
              product_price={44}
              product_wishlist="Add to Wish List"
            />
              </div>
            </div>
            <div className="mt-10">
              <Pagination totalProducts={36} productsPerPage={productsPerPage} currentPage={currentPage} paginate={(page) => setCurrentPage(page)} />
            </div>
          </div>
        </div>
        
      </Container>
    </div>
    </>
  );
};

export default Shop;
