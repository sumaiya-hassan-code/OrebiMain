
import Card from "../Components/Card";
import card_img from "../assets/New_Arrivals_img.png";
import card_img2 from "../assets/New_Arrivals_img(2).png";
import card_img3 from "../assets/New_Arrivals_img(3).png";
import card_img4 from "../assets/New_Arrivals_img(4).png";
import React, { useRef, useState } from 'react';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css/navigation';
// import './styles.css';
import "swiper/css";

import Container from "../Components/Container";

const New_Arrival = () => {
  return (
    <div className="px-10">
      <Container>
        <p className="font-bold text-[39px] text-[#262626] pb-10">
          New Arrivals
        </p>

        <Swiper
          spaceBetween={50}
          slidesPerView={4}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
          navigation={true} modules={[Navigation]} className="mySwiper"
          
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
      </Container>
    </div>
  );
};

export default New_Arrival;
