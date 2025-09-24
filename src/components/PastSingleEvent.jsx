/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import { past_events } from "../utils/content";
import Breadcrumbs from "./Breadcrumbs";

import { IoCalendarClearOutline } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdTime } from "react-icons/io";

const PastSingleEvent = () => {
  const { id } = useParams();
  const event = past_events.find((event) => event.id === id);

  if (!event) {
    return <h2>Event not found</h2>;
  }

  return (
    <main className="min-w-full">
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
          {event.name}
        </h1>
        <div className="w-full flex flex-col gap-5 py-10">
          <div className="bg-light-bg lg:w-[80%] flex rounded-xl">
            <img src={event.img} className=" lg:w-[70%] rounded-l-xl" />
            <div className="py-20 px-5 flex flex-col gap-10">
              <div className="flex gap-6">
                <IoCalendarClearOutline className="text-4xl text-purple-500" />
                <div>
                  <p className="font-semibold text-purple-500">Date</p>
                  <span className="text-blacky"> {event.date}</span>
                </div>
              </div>
              <div className="flex gap-6">
                <IoMdTime className="text-4xl text-purple-500" />
                <div>
                  <p className="font-semibold text-purple-500">Time</p>
                  <span className="text-blacky"> {event.time}</span>
                </div>
              </div>
              <div className="flex gap-6">
                <FaLocationDot className="text-4xl text-purple-500" />
                <div>
                  <p className="font-semibold text-purple-500">Location</p>
                  <span className="text-blacky"> {event.location}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-5 mt-10 items-start text-blacky">
            <h1 className="vertical-tag lg:text-xl text-xl  text-overlay font-bold">
              Details
            </h1>
            <p className="lg:w-[60%]">{event.content_2}</p>
          </div>
        </div>
      </motion.section>
    </main>
  );
};

export default PastSingleEvent;
