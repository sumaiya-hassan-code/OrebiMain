import { useRef } from "react";
import Card from "../Components/Card";

import card_img from "../assets/New_Arrivals_img.png";
import card_img2 from "../assets/New_Arrivals_img(2).png";
import card_img3 from "../assets/New_Arrivals_img(3).png";
import card_img4 from "../assets/New_Arrivals_img(4).png";

import Container from "../Components/Container";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { FaCircleArrowRight, FaCircleArrowLeft } from "react-icons/fa6";

const New_Arrival = () => {
  const swiperRef = useRef(null);

  const products = [
    {
      id: 1,
      product_imgSrc: card_img,
      product_addToCart: "Add to Cart",
      product_badge: "New",
      product_color: "Black",
      product_compare: "Compare",
      product_name: "Basic Crew Neck Tee",
      product_price: 44,
      product_wishlist: "Add to Wish List",
    },
    {
      id: 2,
      product_imgSrc: card_img2,
      product_addToCart: "Add to Cart",
      product_badge: "New",
      product_color: "Black",
      product_compare: "Compare",
      product_name: "Basic Crew Neck Tee",
      product_price: 44,
      product_wishlist: "Add to Wish List",
    },
    {
      id: 3,
      product_imgSrc: card_img3,
      product_addToCart: "Add to Cart",
      product_badge: "New",
      product_color: "Black",
      product_compare: "Compare",
      product_name: "Basic Crew Neck Tee",
      product_price: 44,
      product_wishlist: "Add to Wish List",
    },
    {
      id: 4,
      product_imgSrc: card_img4,
      product_addToCart: "Add to Cart",
      product_badge: "New",
      product_color: "Black",
      product_compare: "Compare",
      product_name: "Basic Crew Neck Tee",
      product_price: 44,
      product_wishlist: "Add to Wish List",
    },
    {
      id: 5,
      product_imgSrc: card_img4,
      product_addToCart: "Add to Cart",
      product_badge: "New",
      product_color: "Black",
      product_compare: "Compare",
      product_name: "Basic Crew Neck Tee",
      product_price: 44,
      product_wishlist: "Add to Wish List",
    },
    {
      id: 6,
      product_imgSrc: card_img4,
      product_addToCart: "Add to Cart",
      product_badge: "New",
      product_color: "Black",
      product_compare: "Compare",
      product_name: "Basic Crew Neck Tee",
      product_price: 44,
      product_wishlist: "Add to Wish List",
    },
  ];

  return (
    <div className="px-4 md:px-10">
      <Container>
        <div className="mb-8 flex items-center justify-between relative">
          <p className="text-[28px] font-bold text-[#262626] md:text-[39px]">
            New Arrivals
          </p>
        </div>

        <div className="relative">
          <div>
            <button
              type="button"
              onClick={() => swiperRef.current?.slidePrev()}
              aria-label="Previous products"
              className="text-5xl text-[#767676] absolute top-1/2 left-2 -translate-y-1/2 z-100"
            >
              <FaCircleArrowLeft />
            </button>

            <button
              type="button"
              onClick={() => swiperRef.current?.slideNext()}
              aria-label="Next products"
              className="text-5xl text-[#767676] absolute top-1/2 right-2 -translate-y-1/2 z-100"
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
            {/* ২. map() ব্যবহার করে dynamic SwiperSlide তৈরি করা হয়েছে */}
            {products.map((product) => (
              <SwiperSlide key={product.id}>
                <Card
                  product_imgSrc={product.product_imgSrc}
                  product_addToCart={product.product_addToCart}
                  product_badge={product.product_badge}
                  product_color={product.product_color}
                  product_compare={product.product_compare}
                  product_name={product.product_name}
                  product_price={product.product_price}
                  product_wishlist={product.product_wishlist}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Container>
    </div>
  );
};

export default New_Arrival;