/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import news_hero from "../assets/news/news_hero.png";
import tag_1 from "../assets/news/tag_1.png";
import tag_2 from "../assets/news/tag_2.png";
import tag_3 from "../assets/news/tag_3.png";
import news_1 from "../assets/news/news_1.png";
import news_2 from "../assets/news/news_2.png";
import news_3 from "../assets/news/news_3.png";
import { IoCalendarClearOutline } from "react-icons/io5";
import { exclusive_news } from "../utils/content";
import { Link } from "react-router-dom";
const News = () => {
  return (
    <main className="min-w-full">
      <motion.section
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{
          duration: 1.5,
          ease: "easeInOut",
        }}
        className="transparent-hero-odd rounded-md h-full lg:my-10 mt-32 mx-2 text-whitey"
      >
        <div className="w-full h-full bg-cover bg-center box-container-transparent pt-5 px-5">
          <div className="flex lg:flex-row flex-col-reverse lg:justify-between justify-center items-center">
            <div className="lg:px-48 lg:text-left text-center">
              <h1 className="font-bold lg:text-4xl text-xl leading-snug">
                Updates <br />
                That Matter
              </h1>
              <p className="lg:w-[85%] w-full py-5 lg:text-xl text-sm">
                Stay informed with the latest campus developments, student
                achievements, and community highlights.
              </p>
            </div>
            <div className="w-full h-full relative overflow-hidden">
              <div className="flex flex-col justify-end items-end relative">
                <img src={news_hero} className="z-10" />

                <motion.img
                  animate={{ x: [0, -5, 0] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  src={tag_1}
                  className="z-20 absolute lg:right-[27em] right-28 lg:bottom-60 bottom-4 lg:w-fit w-[60%]"
                />
                <motion.img
                  animate={{ y: [0, -20, 0] }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  src={tag_2}
                  className="z-20 absolute lg:-right-20 right-5 lg:bottom-24 -bottom-9 lg:w-fit w-[60%]"
                />
                <motion.img
                  animate={{ x: [0, -10, 0] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  src={tag_3}
                  className="z-20 absolute lg:right-30 lg:bottom-70 bottom-2 -right-12 lg:w-fit w-[60%]"
                />
              </div>
            </div>{" "}
          </div>
        </div>
      </motion.section>
      <motion.section
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{
          duration: 1.5,
          ease: "easeInOut",
        }}
        className="lg:px-10 p-10 lg:py-20"
      >
        <h1 className="vertical-tag lg:text-4xl text-xl  text-overlay font-bold">
          Overview
        </h1>
        <div className="lg:px-10 text-blacky mt-5 lg:text-xl text-sm leading-relaxed font-light">
          <p className="">
            Our News page keeps you connected with everything happening at SRI
            JVT College. From awards and recognitions to campus upgrades and
            partnerships, we share stories that reflect our progress and
            dedication.
          </p>
        </div>
      </motion.section>
      <motion.section
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{
          duration: 1.5,
          ease: "easeInOut",
        }}
        className="lg:px-10 p-10 lg:py-20"
      >
        <h1 className="vertical-tag lg:text-4xl text-xl  text-overlay font-bold">
          Exclusive Updates
        </h1>
        <div className="lg:px-44">
          <div className="flex lg:flex-row flex-col items-center py-10 gap-5">
            {exclusive_news.map(({ name, img, content, date, id }, i) => (
              <Link
                to={`./${id}`}
                key={i}
                className="bg-whitey lg:h-[400px] lg:w-[400px] border-overlay/30 border-1 shadow-xl hover:shadow-2xl p-5 cursor-pointer rounded-md group transition-all duration-700 ease-in-out"
              >
                <img
                  src={img}
                  className="group-hover:scale-[105%] duration-1000"
                />
                <p className="px-5 absolute lg:text-base text-[10px] text-whitey -mt-10 pb-5 group-hover:scale-95 duration-1000">
                  {name}
                </p>
                <p className="mt-3 text-black-two text-sm font-light">
                  {content}
                </p>
                <div className="flex w-ful lg:justify-between gap-y-2 lg:flex-row flex-col mb-5 mt-5">
                  <p className="flex gap-1 text-xs text-blacky font-light">
                    <IoCalendarClearOutline className="text-overlay" />
                    {date}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </motion.section>
    </main>
  );
};

export default News;
