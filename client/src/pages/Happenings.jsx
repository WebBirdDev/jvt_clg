/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import event_hero from "../assets/news/news_hero.png";
import tag_1 from "../assets/events/tag_1.png";
import tag_2 from "../assets/events/tag_2.png";
import tag_3 from "../assets/events/tag_3.png";
import "../assets/css/card.css";
import { useEffect, useState } from "react";
import { getRequest, baseurl, uploadurl } from "../utils/service";

const Happenings = () => {
  const [stories, setStories] = useState([]);
  const getAllStories = async () => {
    try {
      const response = await getRequest(`${baseurl}/stories`);
      if (response.error) {
        console.log(response.error);
        return;
      }
      setStories(response.stories);
    } catch (error) {
      console.error("error in fetching stories details", error);
    }
  };

  useEffect(() => {
    getAllStories();
  }, []);
  return (
    <main className="min-w-full">
      <motion.section
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 1.5,
          ease: "easeInOut",
        }}
        className="transparent-hero-odd rounded-md h-full lg:my-10 mt-32 mx-2 text-whitey"
      >
        <div className="w-full h-full bg-cover bg-center box-container-transparent pt-5 px-5">
          <div className="flex lg:flex-row flex-col-reverse lg:justify-between justify-center items-center">
            <div className="lg:px-28 lg:text-left text-center">
              <h1 className="font-bold lg:text-4xl text-xl leading-snug">
                Real Journeys. <br />
                True Growth. Bright Futures.
              </h1>
              <p className="lg:w-[85%] w-full py-5 lg:text-xl text-sm">
                Stories of perseverance, progress, and personal triumph from
                students like you.
              </p>
            </div>
            <div className="w-full h-full relative overflow-hidden">
              <div className="flex flex-col justify-end items-end relative">
                <img src={event_hero} className="z-10" />

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
                  className="z-20 absolute lg:right-72 right-5 lg:-bottom-10 -bottom-9 lg:w-fit w-[60%]"
                />
                <motion.img
                  animate={{ x: [0, -10, 0] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  src={tag_3}
                  className="z-20 absolute lg:-right-30 lg:bottom-30 bottom-2 -right-12 lg:w-fit w-[60%]"
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
        className="w-full lg:px-20 lg:py-20 px-5 py-10"
      >
        <h1 className="vertical-tag lg:text-4xl text-xl  text-overlay font-bold">
          Success Stories
        </h1>

        <div className="py-20 flex items-center gap-20 justify-center flex-wrap">
          {stories.map(({ quote, author, img }, i) => (
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                duration: 1 + i * 0.5,
                ease: "easeInOut",
              }}
              key={i}
              className="success-card"
            >
              <div className="content">
                <img src={`${uploadurl}/uploads/success_story/${img}`} />
                <p className="text-center text-sm">
                  {quote}
                  {author}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </main>
  );
};

export default Happenings;
