/* eslint-disable no-unused-vars */
import Calendar from "react-calendar";
import event_hero from "../assets/events/event_hero.png";
import tag_1 from "../assets/events/tag_1.png";
import tag_2 from "../assets/events/tag_2.png";
import tag_3 from "../assets/events/tag_3.png";
import event_1 from "../assets/events/event_1.png";
import event_2 from "../assets/events/event_2.png";
import event_3 from "../assets/events/event_3.png";
import { motion } from "framer-motion";
import "react-calendar/dist/Calendar.css";
import "../assets/css/calendar.css";
import { IoCalendarClearOutline } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { useState } from "react";
import { Link } from "react-router-dom";
import { past_events, upcoming_events } from "../utils/content";
const Events = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [calendarViewDate, setCalendarViewDate] = useState(new Date());
  const today = new Date();
  const currentMonth = today.getMonth();
  const currentYear = today.getFullYear();

  const selectedDateEvents = upcoming_events.filter((event) => {
    if (!selectedDate) return false;

    const eventDate = new Date(event.date);
    return (
      eventDate.getDate() === selectedDate.getDate() &&
      eventDate.getMonth() === selectedDate.getMonth() &&
      eventDate.getFullYear() === selectedDate.getFullYear()
    );
  });

  const currentMonthEvents = upcoming_events.filter((event) => {
    const eventDate = new Date(event.date);
    return (
      eventDate.getMonth() === currentMonth &&
      eventDate.getFullYear() === currentYear
    );
  });

  return (
    <main className="min-w-full">
      <motion.section layout
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          delay: 0.2,
          duration: 1.5,
          ease: "easeInOut",
        }}
        className="transparent-hero-odd rounded-md h-full lg:my-10 mt-32 mx-2 text-whitey"
      >
        <div className="w-full h-full bg-cover bg-center box-container-transparent pt-5 px-5">
          <div className="flex lg:flex-row flex-col-reverse lg:justify-between justify-center items-center">
            <div className="lg:px-28 lg:text-left text-center">
              <h1 className="font-bold lg:text-4xl text-xl leading-snug">
                Experience <br />
                Celebrate. Connect.
              </h1>
              <p className="lg:w-[85%] w-full py-5 lg:text-xl text-sm">
                Discover upcoming programs, cultural celebrations, and special
                gatherings that shape campus life.
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
                  className="z-20 absolute lg:right-[27em] right-28 lg:bottom-0 bottom-4 lg:w-fit w-[60%]"
                />
                <motion.img
                  animate={{ y: [0, -20, 0] }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  src={tag_2}
                  className="z-20 absolute lg:right-40 right-5 lg:-bottom-10 -bottom-9 lg:w-fit w-[60%]"
                />
                <motion.img
                  animate={{ x: [0, -10, 0] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  src={tag_3}
                  className="z-20 absolute lg:-right-30 lg:bottom-12 bottom-2 -right-12 lg:w-fit w-[60%]"
                />
              </div>
            </div>{" "}
          </div>
        </div>
      </motion.section>
      <motion.section
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          delay:0.4,
          duration: 1.5,
          ease: "easeInOut",
        }}
        className="lg:px-10 p-10 lg:py-20"
      >
        <h1 className="vertical-tag lg:text-4xl text-xl  text-overlay font-bold">
          Overview
        </h1>
        <div className="lg:px-10 text-blacky mt-5 lg:text-xl text-sm leading-relaxed font-light">
          <p className="mt-14">
            At SRI JVT College, events bring our community together. From annual
            cultural fests and seminars to workshops and graduation ceremonies,
            every event is designed to celebrate talent, knowledge, and unity.
            These moments create lasting memories and build strong connections
            among students, alumni, and faculty.
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
          Events Calendar
        </h1>
        <div className="lg:px-20 text-blacky py-20 lg:text-xl text-sm font-light flex lg:flex-row md:flex-row flex-col gap-10 lg:gap-20">
          <Calendar
            value={selectedDate || null}
            activeStartDate={calendarViewDate}
            onActiveStartDateChange={({ activeStartDate }) =>
              setCalendarViewDate(activeStartDate)
            }
            onClickDay={(value) => {
              setSelectedDate(value);
              setCalendarViewDate(value);
            }}
            tileClassName={({ date, view }) => {
              if (view === "month") {
                const isEventDay = upcoming_events.some((event) => {
                  const eventDate = new Date(event.date);
                  return (
                    eventDate.getDate() === date.getDate() &&
                    eventDate.getMonth() === date.getMonth() &&
                    eventDate.getFullYear() === date.getFullYear()
                  );
                });
                return isEventDay ? "highlight-event" : null;
              }
            }}
          />
          <div>
            <h1 className="text-overlay font-bold">
              {selectedDate
                ? `Events on ${selectedDate.toLocaleDateString()}`
                : "Upcoming Events This Month"}
            </h1>
            {selectedDate && (
              <button
                onClick={() => {
                  setSelectedDate(null);
                  setCalendarViewDate(new Date());
                }}
                className="text-sm mt-3 text-purple-500 cursor-pointer hover:underline"
              >
                Show all events this month
              </button>
            )}

            <div className="flex flex-col gap-5 mt-5">
              {(selectedDate ? selectedDateEvents : currentMonthEvents).length >
              0 ? (
                (selectedDate ? selectedDateEvents : currentMonthEvents).map(
                  ({ name, date, id }, i) => {
                    const eventDate = new Date(date);
                    const day = eventDate.getDate();
                    return (
                      <Link
                        to={`./${id}`}
                        key={i}
                        className="bg-light-bg px-3 py-4 rounded-md flex items-center gap-3"
                      >
                        <div className="bg-ternary text-overlay rounded-md font-semibold px-3 py-1">
                          {day}
                        </div>
                        <p className="text-overlay font-medium">{name}</p>
                      </Link>
                    );
                  }
                )
              ) : (
                <p className="text-blacky font-light">No events on this date</p>
              )}
            </div>
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
        <div className="flex justify-between items-center">
          <h1 className="vertical-tag lg:text-4xl text-xl  text-overlay font-bold">
            Past Events
          </h1>
          <Link
            to="/past_events"
            className="text-blacky font-light flex items-center gap-2"
          >
            See all{" "}
            <MdOutlineKeyboardDoubleArrowRight className="text-xl font-light" />
          </Link>
        </div>
        <div className="flex lg:flex-row flex-col items-center py-10 gap-5">
          {past_events
            .slice(0, 3)
            .map(({ id, name, img, content, date, location }, i) => (
              <Link
                to={`/past_events/${id}`}
                key={i}
                className="bg-whitey lg:h-[400px] lg:w-[400px] border-overlay/30 border-1 shadow-xl hover:shadow-2xl p-5 cursor-pointer rounded-md group transition-all duration-700 ease-in-out"
              >
                <img
                  src={img}
                  className="group-hover:scale-[105%] duration-1000 brightness-50 group-hover:brightness-100"
                />
                <p className="px-5 absolute lg:text-base text-xs z-30 text-whitey -mt-10 mb-5 group-hover:scale-95 duration-1000 group-hover:backdrop-blur-xl">
                  {name}
                </p>
                <p className="mt-3 text-black-two text-sm font-light">
                  {content}
                </p>
                <div className="flex w-ful lg:justify-between flex-wrap gap-y-2 lg:flex-row flex-col mb-5 mt-5">
                  <p className="flex gap-1 text-xs text-blacky font-light">
                    <IoCalendarClearOutline className="text-overlay" />
                    {date}
                  </p>
                  <p className="flex gap-1 text-xs text-blacky font-light">
                    <FaLocationDot className="text-overlay" />
                    {location}
                  </p>
                </div>
              </Link>
            ))}
        </div>
      </motion.section>
    </main>
  );
};

export default Events;
