/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import academic_hero from "../assets/academic/hero_img.png";
import tag_1 from "../assets/academic/tag_1.png";
import tag_2 from "../assets/academic/tag_2.png";
import tag_3 from "../assets/academic/tag_3.png";
import ict from "../assets/academic/ict.png";
import bm from "../assets/academic/bm.png";
import ah from "../assets/academic/ah.png";
import ve from "../assets/academic/ve.png";
import vt from "../assets/academic/vt.png";
import { FaCheckCircle } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { BsStars } from "react-icons/bs";
const Academic = () => {
  const featured_courses = [
    {
      name: "Faculty of Information Technology & Computing",
      modules: [
        { unit: "Computer Science & Software Engineering" },
        { unit: "Networking & Cybersecurity" },
        { unit: "Data Science & AI Basics" },
        { unit: "Digital Solutions & Innovation" },
      ],
      ratings: 5,
      img: ict,
    },
    {
      name: "Faculty of Business & Management",
      modules: [
        { unit: "Business Administration" },
        { unit: "Accounting & Finance" },
        { unit: "Marketing & Entrepreneurship" },
        { unit: "Leadership & Organizational skills" },
      ],
      ratings: 3,
      img: bm,
    },
    {
      name: "Faculty of  Arts & Humanities",
      modules: [
        { unit: "English Language & Literature" },
        { unit: "Communication & Media Studies" },
        { unit: "Social Sciences" },
        { unit: "Cultural & Linguistic Studies" },
      ],
      ratings: 4,
      img: ah,
    },
    {
      name: "Faculty of Vocational & Professional Studies",
      modules: [
        { unit: "Hospitality & Tourism Management" },
        { unit: "Event Planning & Management" },
        { unit: "Fashion & Design" },
        { unit: "Technical & Trade skills" },
      ],
      ratings: 3,
      img: ve,
    },
    {
      name: "Faculty of Education & Training",
      modules: [
        { unit: "Teacher Training Programs" },
        { unit: "Early Childhood Education" },
        { unit: "Educational Psychology" },
        { unit: "Educational Leadership" },
      ],
      ratings: 5,
      img: vt,
    },
  ];

  const learning_highlights = [
    {
      item: "Industry-Relevant Programs  - Designed to meet modern career demands",
    },
    {
      item: "Skill Development Modules - Communication, teamwork, leadership, and digital literacy",
    },
    {
      item: "Hands-On Experience - Workshops, labs, internships, and real-world projects",
    },
    {
      item: "Pathways to Higher Studies - Opportunities to progress into advanced degree locally and aboard",
    },
    {
      item: "Balanced Assessments - Projects, presentations, and exams to support growth",
    },
    {
      item: "Innovation & Research - Opportunities for creativity, exploration, and problem solving",
    },
    {
      item: "Holistic Growth - Sports, clubs, cultural events, and leadership activities",
    },
  ];

  const core_feature = [
    {
      heading: "Comprehensive Programs",
      content: "From foundation courses to professional training",
    },
    {
      heading: "Expert Faculty",
      content: "Skilled lectures and industry professionals",
    },
    {
      heading: "Global Perspective",
      content: "Preparing students for opportunities worldwide",
    },
    {
      heading: "Practical Learning",
      content: "Real-world projects, workshops and internships",
    },
    {
      heading: "Student-Centred Approach",
      content: "Focus on individual strengths and career goals",
    },
    {
      heading: "Proven Success",
      content:
        "Alumni achieving excellence in studies, careers, and leadership",
    },
  ];
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
          <div className="flex lg:flex-row flex-col lg:justify-between justify-center items-center lg:pt-32">
            <div className="w-full h-full relative overflow-hidden">
              <div className="flex flex-col justify-end items-end relative">
                <img src={academic_hero} className="z-10" />

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
                  className="z-20 absolute lg:right-40 right-0 lg:-bottom-10 -bottom-9 lg:w-fit w-[60%]"
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
            <div className="lg:px-28 lg:text-left ">
              <h1 className="font-bold lg:text-4xl text-xl leading-snug">
                Empowering Knowledge <br />
                Shaping Futures
              </h1>
              <p className="lg:w-[85%] w-full py-5 lg:text-xl text-sm">
                At SRI JVT College, academics are more than courses - they are
                pathways to growth, innovation, and global opportunities
              </p>
            </div>
          </div>
        </div>
      </motion.section>
      <motion.section
        initial={{ y: 200, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{
          duration: 2,
          ease: "easeInOut",
        }}
        className="w-full lg:px-20 lg:pt-32 px-5 py-10"
      >
        <h1 className="vertical-tag lg:text-4xl text-xl  text-overlay font-bold">
          Overview
        </h1>
        <div className="flex lg:flex-row flex-col-reverse">
          <div className="pt-10 flex flex-col gap-y-5 text-blacky lg:text-lg text-sm lg:leading-loose w-full">
            <p className=" font-light">
              At SRI JVT, we are committed to delivering an education that
              combines knowledge, skills, and values. Our courses are designed
              to balance theory with practice, ensuring students are ready for
              both higher studies and ca reer success. We adopt modern teaching
              methods, interactive classrooms, and a student-focused approach
              that encourages critical thinking, creativity, and innovation. By
              focusing on personal and professional growth, we prepare students
              to face real-world challenges with confidence.
            </p>
          </div>
        </div>
      </motion.section>
      <motion.section
        initial={{ y: 200, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{
          duration: 2,
          ease: "easeInOut",
        }}
        className="w-full lg:px-20 lg:pb-10 px-5 py-10"
      >
        <h1 className="vertical-tag lg:text-4xl text-xl  text-overlay font-bold lg:mb-0 mb-3">
          Faculties
        </h1>
        <div className="flex lg:flex-row flex-col  lg:gap-10">
          <div className="pt-10 lg:pb-0 pb-5 text-sm font-light flex flex-col gap-y-5 text-blacky lg:text-lg lg:leading-loose lg:w-[70%] w-full">
            <p>
              Our programs are organized under specialized faculties, each
              carefully designed to deliver comprehensive knowledge, practical
              experience, and career-focused learning. Every faculty blends
              theory with hands-on training, ensuring that students not only
              understand their chosen field but can also apply it effectively in
              real-world situations.
            </p>
            <p>
              By working closely with industry experts and educational partners,
              our faculties stay aligned with current trends, future
              opportunities, and global standards. This structure allows
              students to explore their interests, develop specialized skills,
              and build a strong foundation for higher studies, professional
              growth, and lifelong success.
            </p>
          </div>
          <div className="lg:w-[30%] w-full rounded-md bg-light-bg py-5 px-5">
            <h3 className="border-b-4 text-xl w-fit text-overlay font-semibold">
              Courses that we provide
            </h3>
            <ul className="py-5 lg:pl-5">
              {featured_courses.map(({ name }, i) => (
                <li
                  key={i}
                  className="text-blacky lg:text-sm text-[10px] py-1 font-light hover:font-medium cursor-pointer hover:text-overlay transition-all duration-300 ease-in flex lg:items-center gap-2"
                >
                  <FaCheckCircle className="text-overlay/90 lg:text-base text-xs" />{" "}
                  {name}
                </li>
              ))}
            </ul>
            <div className="flex flex-col gap-1">
              <h3 className="w-fit text-overlay font-semibold">
                Academic Curriculum
              </h3>
              <h3 className="w-fit text-overlay font-semibold">Why SRI JVT</h3>
              <h3 className="w-fit text-overlay font-semibold">
                Course Structure
              </h3>
            </div>
          </div>
        </div>
      </motion.section>
      <motion.section
        initial={{ y: 200, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{
          duration: 2,
          ease: "easeInOut",
        }}
        className="px-5 mb-10 rounded-md"
      >
        <div className=" bg-secondary-overlay lg:px-20 lg:py-20 px-5 py-5 rounded-md">
          <h1 className="vertical-tag lg:text-4xl text-xl  text-overlay font-bold lg:mb-0 mb-10">
            Featured Courses
          </h1>

          <div className="lg:py-10 flex lg:flex-row gap-5 items-center justify-center lg:px-20 flex-wrap">
            {featured_courses.map(({ name, modules, ratings, img }, i) => (
              <motion.div
                initial={{ y: 200, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 1.5,
                  ease: "easeInOut",
                }}
                key={i}
                className="bg-white h-96 rounded-md drop-shadow-lg px-5 py-5 flex flex-col"
              >
                <p className="text-blacky text-sm lg:w-[60%] w-full text-left pb-3">
                  {name}
                </p>
                <img src={img} />
                <p className="text-blacky pt-5 font-semibold">Modules</p>
                <ul className="text-blacky text-[12px]">
                  {modules.map(({ unit }, i) => (
                    <li key={i}>{unit}</li>
                  ))}
                </ul>

                <div className="flex gap-1 py-2 items-center">
                  <p className="text-blacky text-[12px]">ratings</p>
                  {[...Array(5)].map((_, indx) => (
                    <FaStar
                      key={indx}
                      className={
                        indx < ratings ? "text-yellow-500" : "text-gray-200"
                      }
                    />
                  ))}
                </div>
              </motion.div>
            ))}
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
        className=" px-10 lg:py-20 mb-10 rounded-md"
      >
        <h1 className="vertical-tag lg:text-4xl text-xl  text-overlay font-bold">
          Learning Pathways
        </h1>
        <p className="text-blacky pt-5 lg:w-[60%] w-full lg:text-base text-sm">
          Our programs are structured to ensure students gain deep knowledge,
          practical skills, and global exposure. Each pathway combines classroom
          learning with hands-on experience.
        </p>
        <h4 className="lg:py-10 py-5 text-blacky font-semibold">
          Key highlights
        </h4>
        <ul className="lg:pl-5 text-blacky">
          {learning_highlights.map(({ item }, i) => (
            <li
              key={i}
              className="flex lg:items-center gap-2 py-1 lg:text-base text-xs"
            >
              <BsStars className=" text-secondary lg:text-xl text-3xl" />
              {item}
            </li>
          ))}
        </ul>
      </motion.section>
      <motion.section
        initial={{ y: 200, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{
          duration: 1,
          ease: "easeInOut",
        }}
        className=" px-10 lg:py-20 mb-10 rounded-md"
      >
        <h1 className="vertical-tag lg:text-4xl text-xl  text-overlay font-bold">
          Why Choose SRI JVT College
        </h1>
        <div className="justify-center flex items-center gap-5 py-20 lg:px-80 flex-wrap">
          {core_feature.map(({ heading, content }, i) => (
            <div className="flip-card lg:w-[25%] w-full h-64 cursor-pointer" key={i}>
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <p className="title text-whitey px-5">{heading}</p>
                </div>
                <div className="flip-card-back">
                  <p className="text-whitey px-5">{content}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.section>
    </main>
  );
};

export default Academic;
