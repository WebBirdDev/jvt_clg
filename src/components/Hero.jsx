/* eslint-disable no-unused-vars */
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";

import hero_img_1 from "../assets/hero_img.png";
import hero_img_2 from "../assets/hero_img.png";
import hero_img_3 from "../assets/hero_img.png";
import Marquee from "./Marquee";
const slides = [
  {
    title: "Shaping Futures, Building Leaders",
    subtitle: "SRI JVT College, Jaffna",
    desc: "Delivering excellence in education and vocational training with a holistic approach to student growth and global opportunities",
    img: hero_img_1,
  },
  {
    title: "Empowering Skills for Tomorrow",
    subtitle: "Hands-on Learning",
    desc: "Our institute focuses on practical knowledge and real-world applications to prepare students for global opportunities.",
    img: hero_img_2,
  },
  {
    title: "A Gateway to Global Success",
    subtitle: "International Opportunities",
    desc: "Providing pathways for higher education and careers worldwide with mentorship and guidance.",
    img: hero_img_3,
  },
];

const Hero = () => {
  return (
    <section className="w-full h-screen bg-cover bg-center hero relative py-5 px-5">
      <Marquee />
      <Swiper
        direction="vertical"
        modules={[Navigation, Pagination, Mousewheel, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        className="w-full h-[75%]"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <motion.div
              initial={{ y: 200, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className={`flex lg:flex-row flex-col-reverse h-full lg:px-20 px-5 py-10 lg:justify-between justify-center items-center`}
            >
            {/* className={`flex flex-col-reverse lg:px-20 lg:py-5 py-10 lg:justify-between justify-center lg:items-center items-center 
              ${index % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"}`} */}
              {/* Text Section */}
              <div className="text-overlay flex flex-col gap-5 lg:items-start items-center">
                <h1 className="font-medium lg:text-4xl text-xl lg:leading-14 lg:text-left text-center">
                  {slide.title} <br />
                  {slide.subtitle}
                </h1>
                <p className="lg:text-lg text-sm lg:w-[50%] w-full lg:text-left text-center">
                  {slide.desc}
                </p>
                <button className="system-btn">Explore our institute</button>
              </div>

              {/* Image Section */}
              <div>
                <motion.img
                  src={slide.img}
                  alt="Hero"
                  className="max-w-[600px] h-auto"
                  animate={{
                    y: [0, -20, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Hero;
