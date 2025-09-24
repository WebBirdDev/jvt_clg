/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import Breadcrumbs from "./Breadcrumbs";
import { exclusive_news } from "../utils/content";
import { FaLocationDot } from "react-icons/fa6";
import { IoCalendarClearOutline } from "react-icons/io5";

const SingleNews = () => {
  const { id } = useParams();
  const news = exclusive_news.find((news) => news.id === id);
  if (!news) {
    return <h2>News not found</h2>;
  }
  return (
    <div>
      <Breadcrumbs />
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
          {news.name}
        </h1>
        <div className="w-full flex flex-col gap-5 py-10">
          <div className="bg-light-bg lg:w-[80%] flex rounded-xl">
            <img src={news.img} className=" lg:w-[70%] rounded-l-xl" />
            <div className="py-20 px-5 flex flex-col gap-10">
              <div className="flex gap-6">
                <IoCalendarClearOutline className="text-4xl text-purple-500" />
                <div>
                  <p className="font-semibold text-purple-500">Date</p>
                  <span className="text-blacky"> {news.date}</span>
                </div>
              </div>{" "}
            </div>
          </div>
          <div className="flex flex-col gap-5 mt-10 items-start text-blacky">
            <h1 className="vertical-tag lg:text-xl text-xl  text-overlay font-bold">
              Details
            </h1>
            <p className="lg:w-[60%]">{news.content_2}</p>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default SingleNews;
