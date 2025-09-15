/* eslint-disable no-unused-vars */
import Hero from "../components/Hero";
import clg from "../assets/home/institute.jpg";
import academic from "../assets/academic/academic.jpg";
import career from "../assets/career/career.png";
import { BsStars } from "react-icons/bs";
import { mission, vision } from "../utils/content";
import arrow from "../assets/arrows.png";
import brand from "../assets/logo.jpeg";
import story_1 from "../assets/career/story_1.png";
import story_2 from "../assets/career/story_2.png";
import story_3 from "../assets/career/story_3.png";
import event_1 from "../assets/events/event_1.png";
import event_2 from "../assets/events/event_2.png";
import event_3 from "../assets/events/event_3.png";
import { FaLocationDot } from "react-icons/fa6";
import { IoCalendarClearOutline } from "react-icons/io5";
import { motion } from "framer-motion";
const Home = () => {
  const about_li = [
    { list: "Modern teaching methods" },
    { list: "Career-oriented programs" },
    { list: "International exposure" },
    { list: "Student-centred learning" },
  ];
  const stats = [
    { num: "1,000", content: "Undergraduate Students" },
    { num: "2,500", content: "Postgraduate Students" },
    { num: "100", content: "Faculty" },
    { num: "600", content: "Staff" },
  ];
  const academic_li = [
    { list: "Diplomas & Certificates - Professional & vocational programs" },
    { list: "IT & Business studies - Industry-relevant courses" },
    { list: "Language training - English & other foreign languages" },
    { list: "Skill development - Practical training for employability" },
  ];
  const faculties = [
    { name: "Faculty of", course: "Business & Management" },
    { name: "Faculty of", course: "Information Technology & Computing" },
    { name: "Faculty of", course: "Arts & Humanities" },
    { name: "Faculty of", course: "Science & Technology" },
    { name: "Faculty of", course: "Health & Social Care" },
  ];
  const feature_services = [
    {
      heading: "Immigration & Visa Guidance",
      content:
        "We provide expert support for student, work, and visit visas, helping you navigate every step of the immigration process with confidence",
    },
    {
      heading: "Legal & Financial Services",
      content:
        "Access reliable legal and financial support, including business licenses, mortgages, and professional accountancy services to manage your affairs smoothly",
    },
    {
      heading: "Administrative & Special Services",
      content:
        "From essential Sri Lankan documents and land registration to event planning and the advice board, we offer practical solutions tailored to your needs.",
    },
  ];
  const career_li = [
    { list: "Internship & job placements" },
    { list: "Career guidance workshops" },
    { list: "Pathways to higher education abroad" },
    { list: "Alumni success network" },
  ];

  const success_stories = [
    { name: "Inspiring Journeys", img: story_1 },
    { name: "Rising Stars", img: story_2 },
    { name: "Real Success", img: story_3 },
  ];
  const events = [
    {
      name: "Annual Cultural Fest 2025",
      content:
        "Connect with industry experts and unlock pathways to your dream career",
      date: "October 12, 2025",
      location: "SRI JVT College Auditorium",
      img: event_1,
    },
    {
      name: "Graduation & Awards Ceremony",
      content:
        "Connect with industry experts and unlock pathways to your dream career",
      date: "November 5, 2025",
      location: "Jaffna District Conference Center",
      img: event_2,
    },
    {
      name: "Career Guidance & Internship Fair",
      content:
        "Connect with industry experts and unlock pathways to your dream career",
      date: "December 20, 2025",
      location: "Main Hall, SRI JVT College",
      img: event_3,
    },
  ];
  return (
    <main className="min-w-full">
      <section className="bg-light-bg rounded-md h-full lg:my-5 mt-32 mx-2">
        <Hero />
      </section>
      <motion.section
        initial={{ y: 200, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{
          duration: 1.5,
          ease: "easeInOut",
        }}
        className="w-full h-full py-20 lg:px-52 px-5 flex lg:flex-row gap-10 flex-col items-center justify-center "
      >
        <div className="w-full">
          <img src={clg} className="rounded-md" />
        </div>
        <div className="w-full flex flex-col gap-2 ">
          <span className="tag mb-5 lg:text-2xl text-lg font-semibold text-overlay ">
            About
          </span>
          <h1 className="text-blacky font-semibold lg:text-2xl text-lg">
            Welcome to SRI JVT College - Jaffna, Sri Lanka
          </h1>
          <p className="text-black-two mt-3 lg:text-md text-sm">
            SRI JVT College is dedicated to delivering excellence in education
            and vocational training with a strong focus on holistic student
            development. We empower young minds with knowledge, skills, and
            global opportunities to thrive in today's competitive world
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
          <button className="system-btn">My SRI JVT</button>
        </div>
      </motion.section>
      <motion.section
        initial={{ y: 200, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{
          duration: 1,
          ease: "easeInOut",
        }}
        className="w-full mb-10 text-whitey"
      >
        <div className="lg:mx-32">
          <div className="stats px-10 lg:py-20 py-10">
            <span className="text-2xl tag mb-5 font-semibold  relative z-10 ">
              SRI JVT College by the Numbers
            </span>
            <motion.div
              initial={{ y: 200, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.9,
                ease: "easeInOut",
              }}
              className="relative z-10 w-full grid lg:grid-cols-4 grid-cols-2 gap-10 lg:py-20 py-10"
            >
              {stats.map(({ num, content }, i) => (
                <div key={i} className="">
                  <p className="lg:text-5xl font-extrabold">{num}</p>
                  <p>{content}</p>
                </div>
              ))}
            </motion.div>
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
        className="w-full mb-10 lg:px-44 px-10 flex lg:flex-row flex-col text-whitey items-center justify-center gap-20"
      >
        <div className="bg-overlay p-5 rounded-md lg:w-[550px] lg:h-[250px]">
          <h4 className="uppercase font-bold text-2xl border-b-2 w-full">
            Vision
          </h4>
          <p className="text-sm font-light my-10">{vision}</p>
        </div>
        <div className="bg-overlay p-5 rounded-md lg:w-[550px] lg:h-[250px]">
          <h4 className="uppercase font-bold text-2xl border-b-2 w-full">
            mission
          </h4>
          <p className="text-sm font-light my-10">{mission}</p>
        </div>
      </motion.section>
      <motion.section
        initial={{ y: 200, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{
          duration: 1,
          ease: "easeInOut",
        }}
        className="lg:px-44 px-10"
      >
        <div className="flex lg:justify-between py-5 bg-primary items-center justify-start rounded-md px-10 gap-5">
          <div>
            <h1 className="text-secondary font-bold">Student Enrollement</h1>
            <p className="text-whitey">Academic Year 2025/2026</p>
          </div>
          <div>
            <img src={arrow} />
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
        className="lg:px-80 px-10 pb-5 my-10"
      >
        <div className="w-full flex lg:flex-row flex-col lg:justify-between lg:items-start items-center bg-ternary lg:gap-10 gap-5 rounded-md">
          <div className="bg-primary rounded-md flex items-center justify-center">
            <img src={brand} className="rounded-md" />
          </div>
          <p className="lg:text-lg text-sm text-black-two lg:py-20 lg:text-left text-center px-5 py-5">
            At SRI JVT College, we believe in shaping futures through excellence
            in education, skills, and opportunities. With world-class academics
            and global pathways, we empower students to learn, grow, and succeed
            - beyond borders
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
            Academic
          </span>
          <h1 className="text-blacky font-semibold lg:text-2xl text-lg">
            Academic Programs That Build Futures
          </h1>
          <p className="text-black-two mt-3 lg:text-md text-sm">
            Our wide range of academic and vocational courses are designed to
            meet industry demands while opening doors to higher education
            worldwide.
          </p>
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
          <button className="system-btn my-5">Explore the courses</button>
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
        className="w-full h-full py-20 lg:px-20 px-5 "
      >
        <div className="grid lg:grid-cols-5 gap-5 md:grid-cols-3 grid-col-2 bg-shade rounded-md py-10 px-10">
          {faculties.map(({ name, course }, i) => (
            <div key={i} className="flex items-center flex-col gap-5">
              <div className="bg-ternary w-50 h-50 rounded-full"></div>
              <p className="text-center text-sm text-black-two">
                {name}
                <br />
                {course}
              </p>
            </div>
          ))}
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
          More Than a College - A Complete Support System
        </h1>
        <p className="text-center lg:px-32 lg:text-base text-sm">
          Through SRI JVT Consultant Ltd, we provide students and families with
          a comprehensive range of reliable services designed to make education,
          travel, and legal processes smooth and hassle-free. Our expertise
          covers immigration and visa guidance, legal and financial services
          such as business licenses, mortgages, and accountancy support, as well
          as administrative assistance for essential documents like passports,
          driving license, and land registrations. Whether you are pursing
          education abroad, planning your career, or managing official paperwork
          at home, our dedicated team ensures professional, accurate, and timely
          support at every step
        </p>
        <div className="flex justify-center items-center lg:w-[80%] py-10 w-full lg:flex-row flex-col lg:gap-0 gap-y-10">
          {feature_services.map(({ heading, content }, i) => (
            <div
              key={i}
              className="cursor-pointer w-80 h-96 bg-whitey transition-all duration-700 ease-in-out shadow-xl p-5 rounded-md m-auto overflow-hidden relative group z-0"
            >
              <div className="circle absolute h-28 w-28 -bottom-[3.5em] -right-[2.5em] rounded-full bg-primary group-hover:scale-[2000%] duration-1000 z-[-1] op" />
              <h3 className="z-20 font-semibold text-[16px] py-10 group-hover:text-whitey">
                {heading}
              </h3>
              <p className=" group-hover:text-whitey">{content}</p>
            </div>
          ))}
        </div>
        <button className="system-btn my-5">Explore Our Services</button>
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
              Start Your Career Journey
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
            Happenings
          </span>
          <h1 className="text-blacky font-semibold lg:text-2xl text-lg py-10">
            Campus Life & Success Stories
          </h1>
          <p className="text-black-two lg:w-[45%] pb-5">
            Stay updated with the latest events, students achievements, alumni
            journeys, and college news. We celebrate success together and
            inspire future generations
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

            <button className="system-btn my-10">Discover Our Stories</button>
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
              {events.map(({ name, img, content, date, location }, i) => (
                <div
                  key={i}
                  className="bg-whitey lg:h-[400px] lg:w-[400px] border-overlay/30 border-1 shadow-xl hover:shadow-2xl p-5 cursor-pointer rounded-md group transition-all duration-700 ease-in-out"
                >
                  <img
                    src={img}
                    className="group-hover:scale-[105%] duration-1000"
                  />
                  <p className="px-5 absolute text-whitey -mt-10 pb-5 group-hover:scale-95 duration-1000">
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
                    <p className="flex gap-1 text-xs text-blacky font-light">
                      <FaLocationDot className="text-overlay" />
                      {location}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <button className="system-btn my-10">Discover What Next</button>
          </div>
        </div>
      </motion.section>
    </main>
  );
};

export default Home;
