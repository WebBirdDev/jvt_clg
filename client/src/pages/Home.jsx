/* eslint-disable no-unused-vars */
import Hero from "../components/Hero";
import office from "../assets/home/office.png";
import academic from "../assets/home/home_real_1.png";
import career from "../assets/home/career.png";
import { BsStars } from "react-icons/bs";
import { mission, upcoming_events, vision } from "../utils/content";
import brand from "../assets/logo.jpeg";
import story_1 from "../assets/career/ss_1.jpeg";
import story_2 from "../assets/career/ss_2.jpeg";
import story_3 from "../assets/career/ss_3.jpeg";
import story_4 from "../assets/career/ss_4.jpeg";
import story_5 from "../assets/career/ss_5.jpeg";
import { FaLocationDot } from "react-icons/fa6";
import { IoCalendarClearOutline } from "react-icons/io5";
import { MdFlightTakeoff } from "react-icons/md";
import { FaPassport } from "react-icons/fa";
import { LuTicketsPlane } from "react-icons/lu";

import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Home = () => {
  const about_li = [
    { list: "Student Visas" },
    { list: "Work Visas" },
    { list: "Visit Visas" },
    { list: "Documentation Guidance" },
  ];
  const academic_li = [
    { list: "High approval success rate" },
    { list: "Transparent documentation process" },
    { list: "Personalized case handling" },
    { list: "After-visa support for travel and accommodation" },
    { list: "Affordable pricing with installment options" },
  ];
  const feature_services = [
    {
      heading: "Visa Services",
      content:
        "We provide fast and reliable support for visit, student, and work visas. Our team ensures smooth processing for tourist and business visas, end-to-end guidance from university selection to student visa approvals, and expert advice for skilled, semi-skilled, and seasonal work visa categories.",
      icon: <MdFlightTakeoff />,
    },
    {
      heading: "Immigration / PR",
      content:
        "Professional assistance for permanent residency and long-term immigration pathways, including eligibility assessment and documentation support.",
      icon: <FaPassport />,
    },
    {
      heading: "Countries We Cover",
      content:
        "Canada, UK, Australia, Europe (Schengen), Dubai, Poland, New Zealand, and many more global destinations.",
      icon: <LuTicketsPlane />,
    },
  ];
  const career_li = [
    { list: "Internship & job placements" },
    { list: "Career guidance workshops" },
    { list: "Pathways to higher education abroad" },
    { list: "Part-time work support" },
  ];
  const success_stories = [
    { name: "Inspiring Journeys", img: story_1 },
    { name: "Rising Stars", img: story_2 },
    { name: "Real Success", img: story_4 },
    { name: "Real Success", img: story_3 },
    { name: "Real Success", img: story_5 },
  ];

  return (
    <main className="min-w-full">
      <section className="bg-light-bg rounded-md h-fit lg:my-5 mt-32 mx-2">
        <Hero />
      </section>
      {/* <motion.section
        initial={{ y: 200, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{
          duration: 1.5,
          ease: "easeInOut",
        }}
        className="w-full h-full py-20 lg:px-52 px-5 flex lg:flex-row gap-10 flex-col items-center justify-center "
      >
        <div className="w-full">
          <img src={office} className="rounded-md" />
        </div>
        <div className="w-full flex flex-col gap-2 ">
          <span className="tag mb-5 lg:text-2xl text-lg font-semibold text-overlay ">
            About
          </span>
          <h1 className="text-blacky font-semibold lg:text-2xl text-lg">
            Your Trusted Partner for Global Visa Solutions
          </h1>
          <p className="text-black-two mt-3 lg:text-md text-sm">
            SRIJVT Consultancy provides professional and transparent visa
            support for individuals and families planning to study, work,
            travel, or settle abroad. Start your journey today with expert
            guidance and guaranteed clarity at every step.
          </p>
          <ul className="lg:pl-8 lg:text-base">
            {about_li.map(({ list }, i) => (
              <li
                key={i}
                className="text-black-two lg:text-base text-sm font-medium my-2 flex items-center gap-2"
              >
                <BsStars className="text-star text-2xl" />
                {list}
              </li>
            ))}
          </ul>
          <button className="system-btn mt-5">
            <Link to="/contact">Book a Consultation</Link>
          </button>
        </div>
      </motion.section>
      <motion.section
        initial={{ y: 200, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{
          duration: 1,
          ease: "easeInOut",
        }}
        className="w-full mb-10 lg:px-44 px-10 flex lg:flex-row flex-col text-whitey items-center justify-center gap-20"
      >
        <div className="bg-overlay p-5 rounded-md lg:w-[550px] lg:h-[250px]">
          <h4 className="uppercase font-bold text-2xl border-b-2 w-full">
            Vision
          </h4>
          <p className="lg:text-lg text-sm font-light my-10">{vision}</p>
        </div>
        <div className="bg-overlay p-5 rounded-md lg:w-[550px] lg:h-[250px]">
          <h4 className="uppercase font-bold text-2xl border-b-2 w-full">
            mission
          </h4>
          <p className="lg:text-lg text-sm font-light my-10">{mission}</p>
        </div>
      </motion.section>
      <motion.section
        initial={{ y: 200, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{
          duration: 1,
          ease: "easeInOut",
        }}
        className="lg:px-80 px-10 pb-5 my-10"
      >
        <div className="w-full flex lg:flex-row flex-col lg:justify-between lg:items-start items-center bg-ternary lg:gap-10 gap-5 rounded-md">
          <div className="bg-primary rounded-md flex items-center justify-center">
            <img src={brand} className="rounded-md" />
          </div>
          <p className="lg:text-lg text-sm text-black-two lg:py-20 lg:text-left text-center px-5 py-5">
            At SRI JVT Consultancy, we believe in shaping futures through
            excellence in education, skills, and opportunities. With world-class
            academics and global pathways, we empower students to learn, grow,
            and succeed - beyond borders
          </p>
        </div>
      </motion.section>
      <motion.section
        initial={{ y: 200, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{
          duration: 1,
          ease: "easeInOut",
        }}
        className="w-full h-full py-20 lg:px-52 px-5 flex lg:flex-row gap-10 flex-col items-center justify-center "
      >
        <div className="w-full flex flex-col gap-2 ">
          <span className="tag mb-5 lg:text-2xl text-lg font-semibold text-overlay ">
            Expertise
          </span>
          <h1 className="text-blacky font-semibold lg:text-2xl text-lg">
            Why Choose SRIJVT Consultancy
          </h1>
          <ul className="lg:pl-8 lg:text-base">
            {academic_li.map(({ list }, i) => (
              <li
                key={i}
                className="text-black-two lg:text-base text-xs font-medium my-2 flex items-center gap-2"
              >
                <BsStars className="text-star text-2xl" />
                {list}
              </li>
            ))}
          </ul>
          <button className="system-btn my-5">
            <Link to="/services">See What We provide</Link>
          </button>
        </div>
        <div className="w-full">
          <img src={academic} className="rounded-md" />
        </div>
      </motion.section>
      <motion.section
        initial={{ y: 200, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{
          duration: 1,
          ease: "easeInOut",
        }}
        className="bg-light-bg rounded-md text-blacky h-full lg:my-5 lg:mt-32 mx-2 flex flex-col items-center justify-center p-5 lg:py-20 lg:px-32 gap-5"
      >
        <h1 className="text-xl font-semibold text-center">
          Complete Visa & Immigration Support Under One Roof
        </h1>
        <p className="text-center lg:px-32 lg:text-base text-sm">
          SRI JVT Consultant Ltd offers professional and transparent visa and
          immigration services to individuals and families planning to travel,
          study, work, or settle abroad. From short-term visits to permanent
          residency pathways, our experienced team ensures accurate guidance and
          smooth processing at every stage.
        </p>
        <div className="flex justify-center items-center lg:w-[80%] py-10 w-full lg:flex-row flex-col lg:gap-0 gap-y-10">
          {feature_services.map(({ heading, content, icon }, i) => (
            <div
              key={i}
              className="cursor-pointer lg:w-80 h-96 bg-whitey transition-all duration-700 ease-in-out shadow-xl p-5 rounded-md m-auto overflow-hidden relative group z-0"
            >
              <div className="circle absolute h-28 w-28 -bottom-[3.5em] -right-[2.5em] rounded-full bg-primary group-hover:scale-[2000%] duration-1000 z-[-1]" />
              <div className="flex items-center justify-between">
                <h3 className="z-20 font-semibold text-[16px] py-10 group-hover:text-whitey">
                  {heading}
                </h3>
                <span className="lg:text-6xl text-base text-primary group-hover:text-whitey">{icon}</span>
              </div>
              <p className=" group-hover:text-whitey lg:text-base text-sm">
                {content}
              </p>
            </div>
          ))}
        </div>
        <button className="system-btn my-5">
          <Link to="/services">Explore Our Services</Link>
        </button>
      </motion.section>
      <motion.section
        initial={{ y: 200, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{
          duration: 1,
          ease: "easeInOut",
        }}
        className="bg-secondary-overlay rounded-md w-full h-full"
      >
        <div className="box-container flex lg:flex-row gap-10 flex-col-reverse items-center justify-center py-20 my-10 lg:px-52 px-5">
          <div className="w-full flex flex-col gap-2 ">
            <span className="tag mb-5 lg:text-2xl text-lg font-semibold text-overlay ">
              Career
            </span>
            <h1 className="text-blacky font-semibold lg:text-2xl text-lg">
              Your Career Starts Here
            </h1>
            <p className="text-black-two mt-10 lg:text-md mb-3 text-sm">
              We go beyond traditional education by preparing students for
              real-world careers through a comprehensive approach that combines
              career counselling, practical skill development, and exposure to
              global opportunities. Our programs are designed to equip students
              with the knowledge, confidence, and professional competencies
              needed to thrive in today's competitive job market. From
              personalized guidance on career paths and internships to
              workshops, mentorship, and networking opportunities, we ensure
              that every student is future-ready, adaptable, and prepared to
              success both locally and internationally.
            </p>
            <ul className="lg:pl-8 lg:text-base">
              {career_li.map(({ list }, i) => (
                <li
                  key={i}
                  className="text-black-two lg:text-base text-sm font-medium my-2 flex items-center gap-2"
                >
                  <BsStars className="text-star text-2xl" />
                  {list}
                </li>
              ))}
            </ul>
            <button className="system-btn my-5">
              <Link to="/career">Start Your Career Journey</Link>
            </button>
          </div>
          <div className="w-full">
            <img src={career} className="rounded-md" />
          </div>
        </div>
      </motion.section>
      <motion.section
        initial={{ y: 200, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{
          duration: 1,
          ease: "easeInOut",
        }}
        className="bg-box-bg rounded-md w-full h-full"
      >
        <div className="box-container flex flex-col py-20 my-10 lg:px-52 px-5">
          <span className="tag mb-5 lg:text-2xl text-lg font-semibold text-overlay ">
            Testimonials
          </span>
          <h1 className="text-blacky font-semibold lg:text-2xl text-lg py-10">
            What Our Clients Say
          </h1>
          <p className="text-black-two lg:w-[45%] pb-5">
            Hear directly from students and clients who trusted us with their
            visa, immigration, and study abroad journeys. We take pride in
            providing professional, reliable, and transparent services.
          </p>
          <h3 className="text-blacky font-semibold lg:text-2xl text-lg py-10">
            Success Stories
          </h3>
          <div className="w-full flex flex-col items-center justify-center">
            <div className="flex lg:flex-row flex-col items-center justify-center gap-5">
              {success_stories.map(({ name, img }, i) => (
                <div
                  key={i}
                  className="bg-whitey shadow-xl hover:shadow-2xl p-5 cursor-pointer rounded-md group transition-all duration-700 ease-in-out"
                >
                  <img
                    src={img}
                    className="group-hover:scale-[105%] duration-1000 brightness-85"
                  />
                  <p className="px-5 absolute text-whitey -mt-10 pb-5 group-hover:scale-95 duration-1000">
                    {name}
                  </p>
                </div>
              ))}
            </div>

            <button className="system-btn my-10">
              <Link to="/happenings">Discover Our Stories</Link>
            </button>
          </div>
        </div>
      </motion.section>
      <motion.section
        initial={{ y: 200, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{
          duration: 1,
          ease: "easeInOut",
        }}
        className="bg-box-bg rounded-md w-full h-full lg:mb-20"
      >
        <div className="box-container flex flex-col py-20 my-10 lg:px-52 px-5">
          <span className="tag lg:w-[40%] mb-5 lg:text-2xl text-lg font-semibold text-overlay ">
            Events
          </span>
          <div className="w-full flex flex-col items-center justify-center">
            <div className="flex lg:flex-row flex-col items-center justify-center gap-5">
              {upcoming_events
                .slice(0, 3)
                .map(({ name, img, content, date, location, id }, i) => (
                  <Link
                    to={`./events/${id}`}
                    key={i}
                    className="bg-whitey lg:h-[400px] lg:w-[400px] border-overlay/30 border-1 shadow-xl hover:shadow-2xl p-5 cursor-pointer rounded-md group transition-all duration-700 ease-in-out"
                  >
                    <img
                      src={img}
                      className="group-hover:scale-[105%] duration-1000 brightness-50 group-hover:brightness-100"
                    />
                    <p className="px-5 z-30 absolute text-whitey -mt-10 mb-5 group-hover:scale-95 duration-1000 group-hover:backdrop-blur-xl">
                      {name}
                    </p>
                    <p className="mt-3 text-black-two text-sm font-light">
                      {content}
                    </p>
                    <div className="flex w-ful lg:justify-between gap-y-2 lg:flex-row flex-col flex-wrap mb-5 mt-5">
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

            <button className="system-btn my-10">
              <Link to="/events">Discover What Next</Link>
            </button>
          </div>
        </div>
      </motion.section> */}
      <motion.section
        initial={{ y: 200, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        className="w-full py-20 px-5 lg:px-52 flex flex-col lg:flex-row gap-10 items-center justify-center"
      >
        {/* Image */}
        <div className="w-full lg:w-1/2">
          <img src={office} className="rounded-md w-full h-auto" />
        </div>

        {/* Text Content */}
        <div className="w-full lg:w-1/2 flex flex-col gap-4">
          <span className="tag mb-5 text-lg lg:text-2xl font-semibold text-overlay">
            About
          </span>
          <h1 className="text-blacky font-semibold text-lg lg:text-2xl">
            Your Trusted Partner for Global Visa Solutions
          </h1>
          <p className="text-black-two mt-3 text-sm lg:text-md">
            SRIJVT Consultancy provides professional and transparent visa support for
            individuals and families planning to study, work, travel, or settle abroad.
            Start your journey today with expert guidance and guaranteed clarity at every step.
          </p>
          <ul className="lg:pl-8 text-sm lg:text-base flex flex-col gap-2 mt-3">
            {about_li.map(({ list }, i) => (
              <li key={i} className="flex items-center gap-2 font-medium">
                <BsStars className="text-star text-2xl" />
                {list}
              </li>
            ))}
          </ul>
          <button className="system-btn mt-5 self-start">
            <Link to="/contact">Book a Consultation</Link>
          </button>
        </div>
      </motion.section>

      <motion.section
        initial={{ y: 200, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{
          duration: 1,
          ease: "easeInOut",
        }}
        className="w-full mb-10 lg:px-44 px-10 flex lg:flex-row flex-col text-whitey items-center justify-center gap-20"
      >
        <div className="bg-overlay p-5 rounded-md lg:w-[550px]">
          <h4 className="uppercase font-bold text-2xl border-b-2 w-full">
            Vision
          </h4>
          <p className="lg:text-lg text-sm font-light my-10">{vision}</p>
        </div>
        <div className="bg-overlay p-5 rounded-md lg:w-[550px]">
          <h4 className="uppercase font-bold text-2xl border-b-2 w-full">
            mission
          </h4>
          <p className="lg:text-lg text-sm font-light my-10">{mission}</p>
        </div>
      </motion.section>

      <motion.section
        initial={{ y: 200, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="w-full py-10 px-5 lg:px-80 flex flex-col lg:flex-row gap-10 items-center justify-center"
      >
        {/* Brand Image */}
        <div className="bg-primary rounded-md flex justify-center items-center w-full lg:w-1/3">
          <img src={brand} className="rounded-md w-full h-auto" />
        </div>
        {/* Text */}
        <p className="w-full lg:w-2/3 text-black-two text-sm lg:text-lg px-2 py-5 text-center lg:text-left">
          At SRI JVT Consultancy, we believe in shaping futures through excellence
          in education, skills, and opportunities. With world-class academics and
          global pathways, we empower students to learn, grow, and succeed - beyond borders.
        </p>
      </motion.section>

      <motion.section
        initial={{ y: 200, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="w-full py-20 px-5 lg:px-52 flex flex-col lg:flex-row gap-10 items-center justify-center"
      >
        {/* Text */}
        <div className="w-full lg:w-1/2 flex flex-col gap-4">
          <span className="tag mb-5 text-lg lg:text-2xl font-semibold text-overlay">
            Expertise
          </span>
          <h1 className="text-blacky font-semibold text-lg lg:text-2xl">
            Why Choose SRIJVT Consultancy
          </h1>
          <ul className="lg:pl-8 flex flex-col gap-2 mt-3 text-xs lg:text-base">
            {academic_li.map(({ list }, i) => (
              <li key={i} className="flex items-center gap-2 font-medium text-black-two">
                <BsStars className="text-star text-2xl" />
                {list}
              </li>
            ))}
          </ul>
          <button className="system-btn mt-5 self-start">
            <Link to="/services">See What We Provide</Link>
          </button>
        </div>
        {/* Image */}
        <div className="w-full lg:w-1/2">
          <img src={academic} className="rounded-md w-full h-auto" />
        </div>
      </motion.section>

      <motion.section
        initial={{ y: 200, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="bg-light-bg rounded-md text-blacky w-full py-10 lg:py-20 px-5 lg:px-32 flex flex-col items-center gap-5"
      >
        <h1 className="text-xl lg:text-2xl font-semibold text-center">
          Complete Visa & Immigration Support Under One Roof
        </h1>
        <p className="text-center text-sm lg:text-base lg:px-32">
          SRI JVT Consultant Ltd offers professional and transparent visa and
          immigration services to individuals and families planning to travel,
          study, work, or settle abroad. From short-term visits to permanent
          residency pathways, our experienced team ensures accurate guidance and
          smooth processing at every stage.
        </p>

        <div className="flex justify-center items-center lg:w-[80%] py-10 w-full lg:flex-row flex-col lg:gap-0 gap-y-10">
          {feature_services.map(({ heading, content, icon }, i) => (
            <div
              key={i}
              className="cursor-pointer lg:w-80 h-96 bg-whitey transition-all duration-700 ease-in-out shadow-xl p-5 rounded-md m-auto overflow-hidden relative group z-0"
            >
              <div className="circle absolute h-28 w-28 -bottom-[3.5em] -right-[2.5em] rounded-full bg-primary group-hover:scale-[2000%] duration-1000 z-[-1]" />
              <div className="flex items-center justify-between">
                <h3 className="z-20 font-semibold text-[16px] py-10 group-hover:text-whitey">
                  {heading}
                </h3>
                <span className="lg:text-6xl text-base text-primary group-hover:text-whitey">{icon}</span>
              </div>
              <p className=" group-hover:text-whitey lg:text-base text-sm">
                {content}
              </p>
            </div>
          ))}
        </div>

        <button className="system-btn mt-5">
          <Link to="/services">Explore Our Services</Link>
        </button>
      </motion.section>
      <motion.section
        initial={{ y: 200, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{
          duration: 1,
          ease: "easeInOut",
        }}
        className="bg-box-bg rounded-md w-full h-full"
      >
        <div className="box-container flex flex-col py-20 my-10 lg:px-52 px-5">
          <span className="tag mb-5 lg:text-2xl text-lg font-semibold text-overlay ">
            Testimonials
          </span>
          <h1 className="text-blacky font-semibold lg:text-2xl text-lg py-10">
            What Our Clients Say
          </h1>
          <p className="text-black-two lg:w-[45%] pb-5">
            Hear directly from students and clients who trusted us with their
            visa, immigration, and study abroad journeys. We take pride in
            providing professional, reliable, and transparent services.
          </p>
          <h3 className="text-blacky font-semibold lg:text-2xl text-lg py-10">
            Success Stories
          </h3>
          <div className="w-full flex flex-col items-center justify-center">
            <div className="flex flex-wrap gap-5 items-center justify-center">
              {success_stories.map(({ name, img }, i) => (
                <div
                  key={i}
                  className="bg-whitey shadow-xl hover:shadow-2xl p-5 cursor-pointer rounded-md group transition-all duration-700 ease-in-out w-[350px]"
                >
                  <img
                    src={img}
                    className="group-hover:scale-[105%] duration-1000 brightness-85 rounded-md"
                  />
                  {/* <p className="px-5 absolute text-whitey -mt-10 pb-5 group-hover:scale-95 duration-1000 bg-primary w-fit">
                    {name}
                  </p> */}
                </div>
              ))}
            </div>

            <button className="system-btn my-10">
              <Link to="/happenings">Discover Our Stories</Link>
            </button>
          </div>
        </div>
      </motion.section>
      <motion.section
        initial={{ y: 200, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{
          duration: 1,
          ease: "easeInOut",
        }}
        className="bg-box-bg rounded-md w-full h-full lg:mb-20"
      >
        <div className="box-container flex flex-col py-20 my-10 lg:px-52 px-5">
          <span className="tag lg:w-[40%] mb-5 lg:text-2xl text-lg font-semibold text-overlay ">
            Events
          </span>
          <div className="w-full flex flex-col items-center justify-center">
            <div className="flex lg:flex-row flex-col items-center justify-center gap-5">
              {upcoming_events
                .slice(0, 3)
                .map(({ name, img, content, date, location, id }, i) => (
                  <Link
                    to={`./events/${id}`}
                    key={i}
                    className="bg-whitey lg:h-[400px] lg:w-[400px] border-overlay/30 border-1 shadow-xl hover:shadow-2xl p-5 cursor-pointer rounded-md group transition-all duration-700 ease-in-out"
                  >
                    <img
                      src={img}
                      className="group-hover:scale-[105%] duration-1000 brightness-50 group-hover:brightness-100"
                    />
                    <p className="px-5 z-30 absolute text-whitey -mt-10 mb-5 group-hover:scale-95 duration-1000 group-hover:backdrop-blur-xl">
                      {name}
                    </p>
                    <p className="mt-3 text-black-two text-sm font-light">
                      {content}
                    </p>
                    <div className="flex w-ful lg:justify-between gap-y-2 lg:flex-row flex-col flex-wrap mb-5 mt-5">
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

            <button className="system-btn my-10">
              <Link to="/events">Discover What Next</Link>
            </button>
          </div>
        </div>
      </motion.section>
    </main>
  );
};

export default Home;
