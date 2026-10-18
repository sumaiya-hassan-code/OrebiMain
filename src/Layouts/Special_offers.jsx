import { useRef } from "react";
import Card from "../Components/Card";

import card_img from "../assets/Special_offers_Image (3).png";
import card_img2 from "../assets/Special_offers_Image (2).png";
import card_img3 from "../assets/Special_offers_Image (1).png";
import card_img4 from "../assets/Special_offers_Image.png";

import Container from "../Components/Container";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { FaCircleArrowRight, FaCircleArrowLeft } from "react-icons/fa6";
const Special_offers = () => {
    const swiperRef = useRef(null);
  return (
    <div className="px-4 md:px-10 py-20">
      <Container>
        <div className="mb-8 flex items-center justify-between relative">
          <p className="text-[28px] font-bold text-[#262626] md:text-[39px]">
            Special offers
          </p>
        </div>

        <div className="relative">
          <div className="">
            <button
              type="button"
              onClick={() => swiperRef.current?.slidePrev()}
              aria-label="Previous products"
              className="text-5xl text-[#767676] absolute top-1/2 left-2 -translate-y-1/2 z-100 "
            >
              <FaCircleArrowLeft />
            </button>

            <button
              type="button"
              onClick={() => swiperRef.current?.slideNext()}
              aria-label="Next products"
              className="text-5xl text-[#767676] absolute top-1/2 right-2 -translate-y-1/2 z-100 "
            >
              <FaCircleArrowRight />
            </button>
          </div>
          <Swiper
            onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
          }}
        >
          
          <SwiperSlide>
            <Card
              product_imgSrc={card_img}
              product_addToCart="Add to Cart"
              product_badge="New"
              product_color="Black"
              product_compare="Compare"
              product_name="Basic Crew Neck Tee"
              product_price={44}
              product_wishlist="Add to Wish List"
            />
          </SwiperSlide>

          <SwiperSlide>
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
          </SwiperSlide>

          <SwiperSlide>
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
          </SwiperSlide>

          <SwiperSlide>
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
          </SwiperSlide>

          <SwiperSlide>
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
          </SwiperSlide>

          <SwiperSlide>
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
          </SwiperSlide>
          </Swiper>
        </div>
      </Container>
    </div>
  )
}

export default Special_offers