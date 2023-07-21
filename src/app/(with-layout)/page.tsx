"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Mousewheel, Autoplay, Keyboard } from "swiper/modules";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Swiper
        cssMode={true}
        mousewheel={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        keyboard={true}
        modules={[Mousewheel, Keyboard, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center px-10 gap-5">
            <div className="space-y-3">
              <h1 className="text-4xl font-bold">Electronics & Gadgets</h1>
              <p className="text-sm">
                Discover the latest tech innovations and gadgets that make life
                smarter and more enjoyable. From cutting-edge smartphones to
                smart home devices, find everything you need to stay connected
                and stay ahead.
              </p>
              <div>
                <Link
                  href="/home"
                  className="px-3 py-2 bg-yellow-500 border rounded-md text-sm font-semibold text-white hover:bg-yellow-600"
                >
                  Shop Now
                </Link>
              </div>
            </div>
            <img
              className="w-full h-96"
              src="https://www.asalta.com/storage/x0_asalta-ecomerce-banner_5cdbecf3.png.pagespeed.ic.Sl2aCI1G_9.png"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 justify-center items-center px-10">
            <div className="space-y-3">
              <h1 className="text-4xl font-bold">Fashion & Style</h1>
              <p className="text-sm">
              Elevate your wardrobe with our curated collection of fashion-forward clothing and accessories. Unleash your style, whether it's chic, casual, or bold, and embrace the confidence that comes with dressing your best.
              </p>
              <div>
                <Link
                  href="/home"
                  className="px-3 py-2 bg-yellow-500 border rounded-md text-sm font-semibold text-white hover:bg-yellow-600"
                >
                  Browse Styles
                </Link>
              </div>
            </div>
            <img
              className="w-full h-96"
              src="https://pixosoft.com/images/ecommerce/pixosoft-dashboard.png"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 justify-center items-center px-10">
            <div className="space-y-3">
              <h1 className="text-4xl font-bold">Home & Living</h1>
              <p className="text-sm">
              Create your dream sanctuary with our handpicked selection of home decor and living essentials. Transform your living space into a place of comfort, relaxation, and inspiration with our unique and timeless pieces.
              </p>
              <div>
                <Link
                  href="/home"
                  className="px-3 py-2 bg-yellow-500 border rounded-md text-sm font-semibold text-white hover:bg-yellow-600"
                >
                  Explore Home
                </Link>
              </div>
            </div>
            <img
              className="w-full h-96"
              src="https://assets.website-files.com/6364b6fd26e298b11fb9391f/6364b6fd26e29896b5b93c4d_6315572b20f316c2969cded4_DrawKit0005_Working_From_Home_Banner.png"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 justify-center items-center px-10">
            <div className="space-y-3">
              <h1 className="text-4xl font-bold">Sports & Outdoors</h1>
              <p className="text-sm">
              Fuel your passion for adventure and embrace an active lifestyle with our premium sports and outdoor gear. Whether you're hiking, cycling, or simply enjoying the great outdoors, we have the equipment you need to seize every moment.
              </p>
              <div>
                <Link
                  href="/home"
                  className="px-3 py-2 bg-yellow-500 border rounded-md text-sm font-semibold text-white hover:bg-yellow-600"
                >
                  Get Outdoors
                </Link>
              </div>
            </div>
            <img
              className="w-full h-96"
              src="https://png.pngtree.com/png-clipart/20220131/original/pngtree-outdoor-running-fitness-and-weight-loss-png-image_7248766.png"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 justify-center items-center px-10">
            <div className="space-y-3">
              <h1 className="text-4xl font-bold">Beauty & Wellness</h1>
              <p className="text-sm">
              Indulge in self-care and pamper yourself with our luxurious beauty and wellness products. From skincare essentials to rejuvenating spa treatments, embrace the art of self-love and nurture your body and mind.
              </p>
              <div>
                <Link
                  href="/home"
                  className="px-3 py-2 bg-yellow-500 border rounded-md text-sm font-semibold text-white hover:bg-yellow-600"
                >
                  Treat Yourself
                </Link>
              </div>
            </div>
            <img
              className="w-full h-96"
              src="https://timebusinessnews.com/wp-content/uploads/bannerimage-1.png"
              alt=""
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
