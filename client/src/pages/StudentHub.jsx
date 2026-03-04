/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import hero_img from "../assets/news/news_hero.png";
import tag_1 from "../assets/news/tag_1.png";
import tag_2 from "../assets/news/tag_2.png";
import tag_3 from "../assets/news/tag_3.png";

import { FaHome, FaBriefcase, FaUniversity, FaFileInvoiceDollar } from "react-icons/fa";

const services = [
  {
    title: "Pre-Departure & Documentation",
    desc: "Expert guidance on visa compliance, travel documents, insurance, and pre-departure orientation — ensuring a smooth transition to your study destination.",
    icon: <FaUniversity />,
  },
  {
    title: "Accommodation & Local Setup",
    desc: "Personalized assistance in finding safe student housing, registering for utilities, opening local bank accounts, and setting up essential services.",
    icon: <FaHome />,
  },
  {
    title: "Part-Time Jobs & Career Support",
    desc: "Tailored advice on internship placements, part-time job opportunities, CV optimization, and networking strategies to enhance employability while studying.",
    icon: <FaBriefcase />,
  },
  {
    title: "Financial & Post-Study Guidance",
    desc: "Scholarship planning, tuition structuring, visa compliance monitoring, and post-study work advisory to maximize your global opportunities.",
    icon: <FaFileInvoiceDollar />,
  },
];

const StudentHub = () => {
  return (
    <main className="min-w-full">
      <motion.section
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 1.5,
          ease: "easeInOut",
        }}
        className="transparent-hero rounded-md h-full lg:my-10 mt-32 mx-2 text-whitey"
      >
        <div className="w-full h-full bg-cover bg-center box-container-transparent pt-5 px-5">
          <div className="flex lg:flex-row flex-col-reverse lg:justify-between justify-center items-center">
            <div className="lg:px-28 lg:text-left">
              <h1 className="font-bold lg:text-4xl text-xl leading-snug">
                Support Every Step <br />
                of the Way
              </h1>
              <p className="lg:w-[85%] w-full py-5 lg:text-xl text-sm">
                End-to-end support for international students — from accommodation and part-time work to career and financial guidance.
              </p>
            </div>
            <div className="w-full h-full relative overflow-hidden">
              <div className="flex flex-col justify-end items-end relative">
                <img src={hero_img} className="z-10 rounded-xl shadow-xl" />

                <motion.img
                  animate={{ x: [0, -5, 0] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  src={tag_1}
                  className="z-20 absolute lg:-right-28 lg:bottom-16 -bottom-10 lg:w-fit w-[80%]"
                />
                <motion.img
                  animate={{ x: [0, -20, 0] }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  src={tag_2}
                  className="z-20 absolute lg:right-80 lg:bottom-60 bottom-12 -right-15 lg:w-[45%] w-[60%]"
                />
                <motion.img
                  animate={{ y: [0, -10, 0] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  src={tag_3}
                  className="z-20 absolute lg:right-20 lg:-bottom-20 bottom-16 right-30 lg:w-fit w-[60%]"
                />
              </div>
            </div>
          </div>
        </div>
      </motion.section>
      {/* Services Cards */}
      <section className="px-6 lg:px-20 py-24 bg-gray-50">
        <h2 className="text-4xl font-bold text-center mb-12">
          What We Offer in the Student Hub
        </h2>
        <div className="flex justify-center items-center py-10 w-full lg:flex-row flex-col lg:gap-0 gap-y-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
              className="cursor-pointer lg:w-80 h-96 bg-whitey transition-all duration-700 ease-in-out shadow-xl p-5 rounded-md m-auto overflow-hidden relative group z-0"
            >
              <div className="circle absolute h-28 w-28 -bottom-[3.5em] -right-[2.5em] rounded-full bg-primary group-hover:scale-[2000%] duration-1000 z-[-1]" />
              <div className="flex items-center justify-between">
                <h3 className="z-20 font-semibold text-[16px] py-10 group-hover:text-whitey">
                  {service.title}
                </h3>
                <span className="lg:text-3xl text-base text-primary group-hover:text-whitey">{service.icon}</span>
              </div>
              <p className=" group-hover:text-whitey lg:text-base text-sm">
                {service.desc}
              </p>

            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default StudentHub;