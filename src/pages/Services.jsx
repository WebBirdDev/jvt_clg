/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import hero_img from "../assets/services/hero_img.png";
import tag_1 from "../assets/services/tag_1.png";
import tag_2 from "../assets/services/tag_2.png";
import tag_3 from "../assets/services/tag_3.png";
import visa from "../assets/services/visa.png";
import finance from "../assets/services/finance.png";
import admin from "../assets/services/admin.png";
import { BsStars } from "react-icons/bs";
const Services = () => {
  const expertise = [
    {
      name: "Immigration & Visa Guidance",
      desc: "We provide trusted guidance to help individuals and families navigate internationals pathways with confidence. From education to work opportunities, our support covers the entire process, including document preparation and submission.",
      list: [
        {
          tag: "Student Pathways",
          item: "Guidance for those seeking higher education aboard.",
        },
        {
          tag: "Work Permits",
          item: "Helping professionals secure employment opportunities",
        },
        {
          tag: "Spouse Pathways",
          item: "Support for family reunification and dependent visas",
        },
        {
          tag: "Visit Approvals",
          item: "Smooth handling of visitor applications for travel",
        },
        {
          tag: "Graduate Route",
          item: "Assistance for students completing studies and extending their stay",
        },
        {
          tag: "Visa Processing",
          item: "Full support with paperwork, VFS submissions,  and official requirements.",
        },
      ],
      img: visa,
    },
    {
      name: "Legal & Finance Advisory",
      desc: "We provide complete assistance in managing legal and financial requirements for individuals and businesses, ensuring compliance and security.",
      list: [
        {
          tag: "Sponsor Licenses",
          item: "Skilled worker sponsorships and employer registrations",
        },
        {
          tag: "Business Licenses",
          item: "Legal setup and approvals for enterprises",
        },
        {
          tag: "Mortgages",
          item: "Personal and commercial mortgage arrangements",
        },
        {
          tag: "Bank Loans",
          item: "Securing personal or business loans with the right guidance",
        },
        {
          tag: "Immigration Solicitor Referrals",
          item: "Linking clients with trusted legal professionals",
        },
        {
          tag: "Accounting & Bookkeeping",
          item: "Financial management for individuals and organizations",
        },
      ],
      img: finance,
    },
    {
      name: "Administrative Assistance",
      desc: "We simplify the process of handling important officials documents in Sri Lanka, ensuring everything is processed efficiently and accurately.",
      list: [
        {
          tag: "Passport Applications & Renewals",
        },
        {
          tag: "Driving & Motor License Handling",
        },
        {
          tag: "Land & Property Registrations",
        },
        {
          tag: "Other Official Documents",
        },
      ],
      img: admin,
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
        className="transparent-hero rounded-md h-full lg:my-10 mt-32 mx-2 text-whitey"
      >
        <div className="w-full h-full bg-cover bg-center box-container-transparent pt-5 px-5">
          <div className="flex lg:flex-row flex-col-reverse lg:justify-between justify-center items-center">
            <div className="lg:px-28 lg:text-left">
              <h1 className="font-bold lg:text-4xl text-xl leading-snug">
                Guiding You, <br />
                Beyond Education
              </h1>
              <p className="lg:w-[85%] w-full py-5 lg:text-xl text-sm">
                Through SRI JVT Consultant Ltd, we provide trusted solutions in
                immigration, legal, financial, and administrative matters,
                helping students and families achieve their goals with
                confidence
              </p>
            </div>
            <div className="w-full h-full relative overflow-hidden">
              <div className="flex flex-col justify-end items-end relative">
                <img src={hero_img} className="z-10" />

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
                  className="z-20 absolute lg:right-95 lg:bottom-60 bottom-12 -right-15 lg:w-[45%] w-[60%]"
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
      <motion.section
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 1.5,
          ease: "easeInOut",
        }}
        className="lg:px-10 p-10 lg:py-20"
      >
        <h1 className="vertical-tag lg:text-4xl text-xl  text-overlay font-bold">
          Our Expertise
        </h1>
        <div className="lg:px-10 text-blacky mt-5 lg:text-xl text-sm leading-relaxed font-light">
          <p className="">
            At SRI JVT College Ltd, we believe support doesn't end with
            education. We extend our expertise to offer reliable guidance and
            practical solutions for individuals, students, and families. Whether
            it's navigating international pathways, handling legal or financial
            matters, or managing important documentation, we stand beside you
            every step of the way.
          </p>
          <p className="mt-6">
            Our goal is to make complex processes simpler, smoother, and
            stress-free, so you focus on what truly matters - building your
            future
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
        className="lg:px-10 p-10 lg:pb-20 pt-10"
      >
        <h1 className="vertical-tag lg:text-4xl text-xl text-overlay font-bold">
          Key Areas of Expertise
        </h1>
        <div className="lg:px-10 lg:py-10 text-blacky">
          {expertise.map(({ name, desc, list, img }, i) => (
            <motion.div
              key={i}
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{
                duration: 1.5,
                ease: "easeInOut",
              }}
              className={`flex ${
                i % 2 == 1
                  ? "lg:flex-row-reverse flex-col-reverse"
                  : "lg:flex-row flex-col"
              } mb-20 lg:gap-20 gap-10 justify-between `}
            >
              <div className="lg:py-0 ">
                <h3 className="text-overlay font-semibold">{name}</h3>
                <p className="lg:w-[80%] leading-relaxed pt-5 lg:text-base text-sm">
                  {desc}
                </p>
                <p className="leading-relaxed pt-5 lg:pb-0 pb-5 lg:text-base text-sm">
                  We assist with:
                </p>
                <ul className="lg:mt-10">
                  {list.map(({ tag, item }, i) => (
                    <li
                      key={i}
                      className="flex lg:text-base text-xs items-center gap-3 py-2"
                    >
                      <BsStars className="lg:text-2xl text-4xl text-secondary" />
                      <p>
                        <span className="font-semibold">{tag}</span>
                        {item && <span>- {item}</span>}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
              <img src={img} className="lg:max-w-[450px]" />
            </motion.div>
          ))}
        </div>
      </motion.section>
    </main>
  );
};

export default Services;
