/* eslint-disable no-unused-vars */
import about_hero from "../assets/about/about_person.png";
import circle from "../assets/about/circle.png";
import tag_1 from "../assets/about/tag_1.png";
import tag_2 from "../assets/about/tag_2.png";
import tag_3 from "../assets/about/tag_3.png";
import clg from "../assets/about/about_office.png";
import { motion } from "framer-motion";
import { mission, vision } from "../utils/content";
import chairperson from "../assets/about/chairman.png";
import avatar from "../assets/about/avatar.jpg";
import avatar_1 from "../assets/about/avatar_1.jpg";
import avatar_2 from "../assets/about/avatar_2.jpg";
import { FaStar } from "react-icons/fa";
const About = () => {
  const strength = [
    {
      item: "Expert guidance for travel, study, work, and permanent residency visas",
    },
    {
      item: "Structured, step-by-step consultation and application support",
    },
    {
      item: "Transparent and ethical processes with clear communication",
    },
    {
      item: "Up-to-date knowledge of global immigration regulations",
    },
    {
      item: "Smooth, efficient, and stress-free visa experience",
    },
  ];
  const academic_team = [
    {
      name: "John Doe",
      position: "Chairman, Director, Academic Head",
      desc: "Provides leadership and vision to guide the institution ensuring academic excellence and sustainable growth",
      img: avatar,
    },
    {
      name: "John Doe",
      position: "Chairman, Director, Academic Head",
      desc: "Provides leadership and vision to guide the institution ensuring academic excellence and sustainable growth",
      img: avatar_1,
    },
    {
      name: "Lisa Rodriguez",
      position: "Chairman, Director, Academic Head",
      desc: "Provides leadership and vision to guide the institution ensuring academic excellence and sustainable growth",
      img: avatar_2,
    },
    {
      name: "John Doe",
      position: "Chairman, Director, Academic Head",
      desc: "Provides leadership and vision to guide the institution ensuring academic excellence and sustainable growth",
      img: avatar_1,
    },
    {
      name: "John Doe",
      position: "Chairman, Director, Academic Head",
      desc: "Provides leadership and vision to guide the institution ensuring academic excellence and sustainable growth",
      img: avatar,
    },
  ];

  return (
    <main className="min-w-full">
      <motion.section
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{
          duration: 1.5,
          ease: "easeInOut",
        }}
        className="transparent-hero rounded-md h-full lg:my-10 mt-32 mx-2 text-whitey"
      >
        <div className="w-full h-full bg-cover bg-center box-container-transparent pt-5 px-5">
          <div className="flex lg:flex-row flex-col lg:justify-between justify-center items-center">
            <div className="lg:px-28 lg:text-left">
              <h1 className="font-bold lg:text-4xl text-xl leading-snug">
                Turning Global Dreams <br />
                into Reality
              </h1>
              <p className="lg:w-[85%] w-full py-5 lg:text-xl text-sm">
                We provide expert visa and immigration guidance with a
                transparent, structured approach, helping you travel, study,
                work, and settle abroad with confidence and ease.
              </p>
            </div>
            <div className="w-full h-full relative overflow-hidden">
              <div className="flex flex-col justify-end items-end relative">
                <img src={about_hero} className="z-10" />
                <motion.img
                  layout
                  animate={{ y: [0, -60, 0] }}
                  transition={{
                    delay: 0.2,
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  src={circle}
                  className="absolute lg:right-28 right-14 lg:max-w-[341px] w-[70%] overflow-hidden"
                />
                <motion.img
                  animate={{ x: [0, -5, 0] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  src={tag_1}
                  className="z-20 absolute lg:-right-28 lg:bottom-16 lg:w-fit w-[80%]"
                />
                <motion.img
                  animate={{ x: [0, -20, 0] }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  src={tag_2}
                  className="z-20 absolute lg:right-60 lg:bottom-30 bottom-16 -right-20 lg:w-fit w-[80%]"
                />
                <motion.img
                  animate={{ y: [0, -10, 0] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  src={tag_3}
                  className="z-20 absolute lg:right-20 lg:-bottom-20 bottom-30 right-16 lg:w-fit w-[80%]"
                />
              </div>
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
        className="w-full lg:px-20 px-5 py-10"
      >
        <h1 className="vertical-tag text-4xl text-overlay font-bold">
          Who we are
        </h1>
        <div className="flex lg:flex-row flex-col-reverse">
          <div className="pt-10 flex flex-col gap-y-5 text-blacky lg:text-lg lg:leading-loose lg:w-[90%] w-full">
            <p className="">
              <span className="text-overlay font-medium">
                {" "}
                SRIJVT Consultancy
              </span>{" "}
              is a professional visa and immigration advisory firm dedicated to
              delivering reliable, transparent, and result-oriented guidance for
              global mobility.
              <br />
              We assist individuals and families in achieving their
              international goals through a structured and client-focused
              approach, ensuring clarity and confidence at every stage of the
              visa process.
            </p>
            <div className="flex flex-col gap-2 lg:pl-10">
              {strength.map(({ item }, index) => (
                <span
                  key={index}
                  className="lg:text-base text-sm flex gap-1 lg:items-center"
                >
                  <FaStar className="text-secondary lg:text-base text-xl" />
                  {item}
                </span>
              ))}
            </div>
          </div>
          <img src={clg} className="lg:max-w-[90%] lg-pt-0 pt-10" />
        </div>
      </motion.section>
      <motion.section
        initial={{ y: 200, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{
          duration: 1.5,
          ease: "easeInOut",
        }}
        className="w-full lg:px-20 px-5 py-10"
      >
        <h1 className="vertical-tag text-4xl text-overlay font-bold">Vision</h1>
        <p className="text-blacky lg:text-lg lg:leading-loose my-5">{vision}</p>
      </motion.section>
      <motion.section
        initial={{ y: 200, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{
          duration: 1.5,
          ease: "easeInOut",
        }}
        className="w-full lg:px-20 px-5 py-10"
      >
        <h1 className="vertical-tag text-4xl text-overlay font-bold">
          Mission
        </h1>
        <p className="text-blacky lg:text-lg lg:leading-loose my-5">
          {mission}
        </p>
      </motion.section>
      {/* <motion.section
        initial={{ y: 200, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{
          duration: 1.5,
          ease: "easeInOut",
        }}
        className="w-full lg:px-20 px-5 py-10 my-5"
      >
        <div className="bg-light-bg rounded-md w-full lg:px-10 p-3 lg:py-10 flex lg:flex-row flex-col-reverse gap-10">
          <div className=" w-full flex flex-col gap-5">
            <h1 className="vertical-tag w-full lg:text-4xl after:!bg-secondary after:!w-1 text-secondary font-bold">
              Message&nbsp;from&nbsp;Chairperson
            </h1>
            <p className="text-blacky lg:text-lg text-sm italic lg:mt-20 lg:w-[80%] font-light">
              At SRI JVT College, we believe that education is not just about
              acquiring knowledge, but about transforming lives. Our mission is
              to empower students with the right skills, values and
              opportunities to thrive in a global world. Every program we design
              and every service we provide is guided by our commitment to
              excellence, innovation, and student success. Together, we are
              shaping not only futures, but also responsible leaders for
              tomorrow
            </p>
            <p className="text-right text-blacky font-bold lg:text-base text-sm">
              [Chairperson's Name], Chairperson, SRI JVT College
            </p>
          </div>
          <img
            src={chairperson}
            className="max-w-[472px] chairman-img rounded-md"
          />
        </div>
      </motion.section>
      <motion.section
        initial={{ y: 200, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{
          duration: 1.5,
          ease: "easeInOut",
        }}
        className="w-full lg:px-20 px-5 py-10 my-5"
      >
        <div className=" bg-secondary-overlay rounded-md w-full lg:px-10 p-3 lg:py-10 flex flex-col lg:gap-0 gap-5">
          <h1 className="vertical-tag lg:text-4xl after:!w-1 text-overlay font-bold">
            Strategic Team
          </h1>
          <p className="text-blacky lg:text-lg text-sm lg:mt-20 lg:w-[80%] font-light">
            Behind the success of SRI JVT College is a dedicated strategic team
            that drives our vision and mission forward. Our team is made up of
            experienced educators, advisors, and professionals who bring
            together expertise in academics, vocational training, student
            services, and global consultancy.
          </p>
          <p className="text-blacky lg:text-lg text-sm lg:mt-5 lg:w-[80%] font-light">
            They work collaboratively to ensure that every program, initiative,
            and service offered by the college is aligned with international
            standards and student needs. From designing innovative learning
            pathways to building partnerships and creating opportunities, the
            strategic team plays a vital role in shaping the future of our
            students.
          </p>
          <p className="text-blacky lg:text-lg text-sm lg:mt-5 lg:w-[80%] font-light">
            Their leadership, commitment, and forward-thinking approach continue
            to make SRI JVT college a hub of excellence, innovation, and student
            success.
          </p>
        </div>
      </motion.section>
      <motion.section
        initial={{ y: 200, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{
          duration: 1.5,
          ease: "easeInOut",
        }}
        className="w-full lg:px-20 px-5 py-10 my-5"
      >
        <h1 className="vertical-tag lg:text-4xl text-lg text-overlay font-bold">
          Academic Team Members
        </h1>
        <div className="flex flex-wrap gap-20 items-center justify-center my-10 lg:px-20">
          {academic_team.map(({ name, position, desc, img }, i) => (
            <div
              key={i}
              className="card flex flex-col items-center justify-center text-center border-[1px] border-gray-200"
            >
              <div className="content">
                <img
                  src={img}
                  className="max-w-[122px] max-h-[122px] rounded-full z-10"
                />
                <div className="z-10">
                  <h1 className="text-overlay text-lg">{name}</h1>
                  <h3 className="text-overlay text-base">{position}</h3>
                  <p className="text-blacky ">{desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.section> */}
    </main>
  );
};

export default About;
