/* eslint-disable no-unused-vars */
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";

// import hero_img_1 from "../assets/hero_img.png";
import hero_img_1 from "../assets/home/hero_img.png";
import hero_img_2 from "../assets/home/hero_img_2.png";
import hero_img_3 from "../assets/home/hero_img_3.png";
import Marquee from "./Marquee";
import { Link } from "react-router-dom";
import { useRef, useState } from "react";
const slides = [
  {
    title: "Global Mobility & Visa Consultancy",
    subtitle: "SRI JVT Consultant Ltd",
    desc: "Delivering strategic immigration and visa advisory services for individuals, families, and businesses seeking international education, employment, and residency opportunities.",
    img: hero_img_1,
  },
  {
    title: "Professional Immigration Advisory",
    subtitle: "Trusted Consultancy Experts",
    desc: "From eligibility assessment to final approval, we provide structured guidance, compliance checks, and end-to-end visa processing support.",
    img: hero_img_2,
  },
  {
    title: "Legal, Financial & Administrative Solutions",
    subtitle: "Integrated Consultancy Services",
    desc: "Comprehensive advisory services covering immigration, business licensing, financial coordination, and official documentation support.",
    img: hero_img_3,
  },
];

const Hero = () => {
  const [autoplay, setAutoPlay] = useState(true);
  const swiperRef = useRef(null);

  const handleMouseEnter = () => {
    if (window.innerWidth >= 1024 && swiperRef.current) {
      swiperRef.current.autoplay.stop();
    }
  };
  const handleMouseLeave = () => {
    if (window.innerWidth >= 1024 && swiperRef.current) {
      swiperRef.current.autoplay.start();
    }
  };
  return (
    <section
      className="w-full h-screen bg-cover bg-center hero relative py-5 px-5"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Marquee />
      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        modules={[Navigation, Pagination, Mousewheel, Autoplay]}
        // pagination={{ clickable: true }}
        // autoplay={false}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          0: {
            direction: "horizontal",
            mousewheel: false,
            pagination: false,
          },
          1024: {
            direction: "vertical",
            mousewheel: {
              forceToAxis: true,
            },
            pagination: {
              clickable: true,
            },
          },
        }}
        className="w-[90%] lg:h-[75%] h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <motion.div
              initial={{ y: 200, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className={`flex flex-col-reverse lg:px-20 lg:py-5 py-10 lg:justify-between justify-center lg:items-center items-center 
              ${index % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"}`}
            >
              {/* Text Section */}
              <div className="text-overlay flex flex-col gap-5 lg:items-start items-center">
                <h1 className="font-medium lg:text-4xl text-xl lg:leading-14 lg:text-left text-center">
                  {slide.title} <br />
                  {slide.subtitle}
                </h1>
                <p className="lg:text-lg text-sm lg:w-[50%] w-full lg:text-left text-center">
                  {slide.desc}
                </p>
                <div className="flex flex-wrap gap-4 lg:justify-start justify-center">
                  <Link to="/about">
                    {" "}
                    <button className="system-btn">Explore our services</button>
                  </Link>
                  <button className="border border-primary rounded-full px-5 py-[10px] hover:bg-white hover:text-primary hover:border-whitey hover:shadow-2xl transition-all duration-300">
                    <Link to="/contact">Book a Consultation</Link>
                  </button>
                </div>
              </div>

              {/* Image Section */}
              <div>
                <motion.img
                  src={slide.img}
                  alt="Hero"
                  className="lg:max-w-[700px] max-w-[250px] h-auto"
                  animate={{
                    y: [0, -10, 0],
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
