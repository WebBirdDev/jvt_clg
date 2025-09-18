/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import career_hero from "../assets/career/hero_img.png";
import tag_1 from "../assets/career/tag_1.png";
import tag_2 from "../assets/career/tag_2.png";
import tag_3 from "../assets/career/tag_3.png";
import success_avatar_1 from "../assets/career/success_avatar_1.png";
import success_avatar_2 from "../assets/career/success_avatar_2.png";
import success_avatar_3 from "../assets/career/success_avatar_3.png";
import "../assets/css/circle.css";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Mousewheel, Navigation, Pagination } from "swiper/modules";
const Career = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const career_step = [
    { step: "Discover Your Path" },
    { step: "Set Clear Goals" },
    { step: "Develop Skills" },
    { step: "Gain Experience" },
    { step: "Launch Your Future" },
  ];
  const guidance = [
    {
      heading: "Higher Education Pathways",
      content: "Connections to advanced studies and universities",
    },
    {
      heading: "Employment Opportunities",
      content: "Access to career placements and industry networks.",
    },
    {
      heading: "Global Outlook",
      content: "Support to pursue international career options.",
    },
    {
      heading: "Mentorship Programs",
      content: "Guidance from experienced professionals and alumni.",
    },
    {
      heading: "Skill Development Workshops",
      content: "Focused on preparing students for the job market.",
    },
  ];

  const success_stories = [
    {
      quote:
        "I started my journey at SRI JVT College with a passion for business. Through career guidance, skill workshops, and internships, I gained the confidence to step into the corporate world. Today, I am working as a Business Development Executive at a leading firm.",
      author: "Tharshini, Faculty of Business & Management",
      img: success_avatar_1,
      active: true,
    },
    {
      quote:
        "Studying IT at SRI JVT College gave me more than technical knowledge — it prepared me for real-world problem solving. With the support of mentors and career advisors, I secured an international internship and am now pursuing higher studies in software engineering.",
      author: "Ramesh, Faculty of IT & Computing",
      img: success_avatar_2,
      active: false,
    },
    {
      quote:
        "The training and counseling I received at SRI JVT College opened doors for me to study abroad. Today, I am completing my master’s degree while working part-time in the UK, a dream that became possible because of the guidance I received.",
      author: "Priya, Faculty of Vocational & Professional Studies",
      img: success_avatar_3,
      active: false,
    },
    {
      quote:
        "The training and counseling I received at SRI JVT College opened doors for me to study abroad. Today, I am completing my master’s degree while working part-time in the UK, a dream that became possible because of the guidance I received.",
      author: "Priya, Faculty of Vocational & Professional Studies",
      img: success_avatar_3,
      active: false,
    },
  ];
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
            <div className="w-full h-full relative overflow-hidden">
              <div className="flex flex-col justify-end items-end relative">
                <img src={career_hero} className="z-10" />

                <motion.img
                  animate={{ x: [0, -5, 0] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  src={tag_1}
                  className="z-20 absolute lg:right-[27em] right-28 lg:bottom-16 bottom-4 lg:w-fit w-[60%]"
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
            <div className="lg:px-28 lg:text-left text-center">
              <h1 className="font-bold lg:text-4xl text-xl leading-snug">
                Shaping Futures <br />
                Building Careers
              </h1>
              <p className="lg:w-[85%] w-full py-5 lg:text-xl text-sm">
                At SRI JVT College, we go beyond education by preparing students
                for meaningful careers through guidance, training, and global
                opportunities.
              </p>
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
        <h1 className="vertical-tag lg:text-4xl text-xl  text-overlay font-bold">
          Overview
        </h1>
        <div className="lg:px-10 text-blacky mt-5 lg:text-xl text-sm leading-relaxed font-light">
          <p className="">
            A strong career is built on more than knowledge - it requires
            skills, direction, and confidence. At SRI JVT College, we provide a
            complete framework to help students move from classrooms to
            successful professions.
          </p>
          <p className="mt-6">
            Our approach combines career counselling, skill development,
            industry connections, and global pathways, ensuring every student is
            future-ready. By offering mentorship and guidance at each stage, we
            help students discover their potential and prepare for opportunities
            both locally and internationally.
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
        <h1 className="vertical-tag lg:text-4xl text-lg lg:pl-0 !pl-4   text-overlay font-bold">
          Steps to Build a Career with Us
        </h1>
        <div className="lg:px-10 flex lg:flex-row md:flex-row flex-col items-center justify-center text-blacky mt-5 lg:text-xl text-sm leading-relaxed font-light">
          {career_step.map(({ step }, i) => (
            <motion.div
              key={i}
              initial={{ y: i % 2 === 0 ? -50 : 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                duration: 1,
                ease: "easeOut",
                delay: i * 0.2,
              }}
              viewport={{ once: false }}
              className={`${
                i % 2 === 0 ? "bottom-circle" : "top-circle"
              } flex items-center justify-center`}
            >
              <div className="lg:w-44 lg:h-44 md:w-32 md:h-32 w-40 h-40 bg-white rounded-full flex items-center justify-center">
                <div className="lg:w-40 lg:h-40 md:w-28 md:h-28 w-36 h-36 bg-secondary-overlay rounded-full text-center flex items-center text-sm text-overlay font-semibold justify-center">
                  {step}
                </div>
              </div>
            </motion.div>
          ))}
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
        <h1 className="vertical-tag lg:text-4xl text-lg lg:pl-0 !pl-4   text-overlay font-bold">
          Opportunities & Guidance
        </h1>
        <div className="flex justify-center items-center xl:px-52 gap-5 lg:flex-row md:flex-row flex-col flex-wrap py-10">
          {guidance.map(({ heading, content }, i) => (
            <div
              key={i}
              className="cursor-pointer xl:w-[350px] xl:h-[350px] lg:w-[300px] lg:h-[300px] md:w-[300px] h-72 w-auto bg-whitey border-[1px] border-gray-200 transition-all duration-700 ease-in-out shadow-xl p-5 rounded-md m-auto overflow-hidden relative group z-0"
            >
              <div className="circle absolute h-28 w-28 -bottom-[3.5em] -left-[2.5em] rounded-full bg-secondary group-hover:bg-light-bg group-hover:scale-[2000%] duration-1000 z-[-1] op" />
              <h3 className="z-20 font-semibold text-[16px] py-10 group-hover:text-primary text-overlay">
                {heading}
              </h3>
              <p className="text-blacky group-hover:text-icon">{content}</p>
            </div>
          ))}
        </div>
      </motion.section>
      <motion.section
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{
          duration: 1.5,
          ease: "easeInOut",
        }}
        className="lg:px-10 p-10 lg:py-20 "
      >
        <h1 className="vertical-tag lg:text-4xl text-lg lg:pl-0 !pl-4 mb-10  text-overlay font-bold">
          Success Stories
        </h1>
        <div className="bg-light-bg mb-10 rounded-md lg:px-10 p-4 lg:py-20 ">
          <div className="lg:px-64 flex lg:flex-row md:flex-row flex-col justify-center lg:gap-20 items-center">
            <div className="lg:w-[70%] w-full transition-all duration-500">
              <div className="bg-white w-full lg:h-64 flex lg:flex-row flex-col items-center gap-5 lg:px-5 lg:py-5 py-3 px-3 rounded-xl drop-shadow-xl drop-shadow-[#bb9de296]">
                <div className="lg:w-[100%] w-32">
                  <img src={success_stories[activeIndex].img} alt="avatar" />
                </div>
                <div className="text-blacky flex flex-col gap-6 lg:text-sm text-xs lg:text-left text-center">
                  <p className="italic lg:pr-10">
                    {success_stories[activeIndex].quote}
                  </p>
                  <p className="lg:text-right text-center font-semibold text-overlay lg:pr-10">
                    {success_stories[activeIndex].author}
                  </p>
                </div>
              </div>
            </div>
            <div className="flex lg:w-[40%] w-full min-h-full lg:mt-0 mt-10">
              <div className="lg:px-5 lg:py-5 lg:m-5 flex flex-col items-center justify-center gap-5 max-h-[500px] overflow-y-auto scrollbar-hide">
                <Swiper
                  direction="vertical"
                  slidesPerView={2}
                  spaceBetween={20}
                  modules={[Navigation, Pagination, Mousewheel, Autoplay]}
                  mousewheel={true}
                  autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                  className="px-5"
                >
                  {success_stories
                    .filter((_, i) => i !== activeIndex)
                    .map((story, i) => (
                      <SwiperSlide
                        key={i}
                        onClick={() =>
                          setActiveIndex(success_stories.indexOf(story))
                        }
                        className="cursor-pointer   bg-white scale-95  flex flex-col px-5 py-5 rounded-xl drop-shadow-xl drop-shadow-[#bb9de296] hover:bg-secondary-overlay transition-all duration-1000 ease-in"
                      >
                        <img src={story.img} className="w-20" alt="avatar" />
                        <p className="italic text-[10px] text-blacky my-2 line-clamp-4">
                          {story.quote}
                        </p>
                        <p className="text-right text-[10px] font-semibold text-overlay">
                          {story.author}
                        </p>
                      </SwiperSlide>
                    ))}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </motion.section>
    </main>
  );
};

export default Career;
