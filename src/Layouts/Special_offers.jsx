import  { useRef } from "react";
import Card from "../Components/Card";
import Container from "../Components/Container";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import useFetch from "../Hooks/Usefetch";

import { FaCircleArrowRight, FaCircleArrowLeft } from "react-icons/fa6";

const Special_offers = () => {
  const swiperRef = useRef(null);



  const { data } = useFetch("https://dummyjson.com/products?limit=12");
  const products = data?.products ?? [];


  return (
    <div className="px-4 md:px-10 py-20">
      <Container>
        <div className="mb-8 flex items-center justify-between relative">
          <p className="text-[28px] font-bold text-[#262626] md:text-[39px]">
            Special offers
          </p>
        </div>

        <div className="relative">
          <div>
            <button
              type="button"
              onClick={() => swiperRef.current?.slidePrev()}
              aria-label="Previous products"
              className="text-5xl text-[#767676] absolute top-1/2 left-2 -translate-y-1/2 z-50 cursor-pointer"
            >
              <FaCircleArrowLeft />
            </button>

            <button
              type="button"
              onClick={() => swiperRef.current?.slideNext()}
              aria-label="Next products"
              className="text-5xl text-[#767676] absolute top-1/2 right-2 -translate-y-1/2 z-50 cursor-pointer"
            >
              <FaCircleArrowRight />
            </button>
          </div>

          {products && products.length > 0 ? (
            <Swiper
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
              }}
              spaceBetween={20}
              slidesPerView={1}
              breakpoints={{
                640: { slidesPerView: 2, spaceBetween: 20 },
                768: { slidesPerView: 3, spaceBetween: 20 },
                1024: { slidesPerView: 4, spaceBetween: 20 },
              }}
            >
              {products.map((product) => (
                <SwiperSlide key={product.id}>
                  <Card
                    product_imgSrc={product.thumbnail} 
                    product_name={product.title}       
                    product_price={product.price}       
                    product_badge={product.discountPercentage ? `${Math.round(product.discountPercentage)}% OFF` : ""}
                    product_color="Default"             
                    product_addToCart={() => console.log("Added", product.id)}
                    product_compare={product.product_compare}
                    product_wishlist={product.product_wishlist}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          ) : (
            <p className="text-center text-gray-500">No products available.</p>
          )}
        </div>
      </Container>
    </div>
  );
};

export default Special_offers;
