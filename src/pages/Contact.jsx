/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import contact_hero from "../assets/contact/hero_img.png";
import tag_1 from "../assets/contact/tag_1.png";
import tag_2 from "../assets/contact/tag_2.png";
import tag_3 from "../assets/contact/tag_3.png";

import { TiLocation } from "react-icons/ti";
import { MdMail } from "react-icons/md";
import { PiPhoneCallFill } from "react-icons/pi";
import { FaMap } from "react-icons/fa";

import contact_banner from "../assets/contact/contact_banner.png";
import map_static from "../assets/contact/map_static.png";
const Contact = () => {
  const contact_details = [
    {
      name: "Address",
      content: "SRI JVT College / Campus Jaffna, Sri Lanka",
      link: "https://www.google.com/maps/place/Jaffna/@9.6699992,80.0078271,14z/data=!3m1!4b1!4m6!3m5!1s0x3afe53fd7be66aa5:0xc7da0d9203baf512!8m2!3d9.6614981!4d80.0255465!16s%2Fm%2F0266536?authuser=0&entry=ttu&g_ep=EgoyMDI1MDkxNS4wIKXMDSoASAFQAw%3D%3D",
      icon: <TiLocation />,
    },
    {
      name: "Call us",
      content: "+94 123 456 7890",
      link: "tel:+941234567890",
      icon: <MdMail />,
    },
    {
      name: "Mail us",
      content: "info@jvtclg.com",
      link: "mailto:info@jvtclg.com",
      icon: <PiPhoneCallFill />,
    },
  ];
  return (
    <main className="min-w-full">
      <motion.div
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
            <div className="w-full h-full relative overflow-hidden">
              <div className="flex flex-col justify-start items-start relative">
                <img src={contact_hero} className="z-10" />

                <motion.img
                  animate={{ x: [0, -5, 0] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  src={tag_1}
                  className="z-20 absolute lg:right-[20rem] right-28 lg:bottom-0 bottom-4 lg:w-fit w-[60%]"
                />
                <motion.img
                  animate={{ y: [0, -20, 0] }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  src={tag_2}
                  className="z-20 absolute lg:right-[29rem] right-5 lg:bottom-48 -bottom-9 lg:w-fit w-[60%]"
                />
                <motion.img
                  animate={{ x: [0, -10, 0] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  src={tag_3}
                  className="z-20 absolute lg:-right-36 lg:bottom-30 bottom-2 -right-12 lg:w-fit w-[60%]"
                />
              </div>
            </div>
            <div className="lg:px-48 lg:text-left text-center">
              <h1 className="font-bold lg:text-4xl text-xl leading-snug">
                We&apos;re Here
                <br />
                To Help You
              </h1>
              <p className="lg:w-[85%] w-full py-5 lg:text-xl text-sm">
                Have questions about admissions, programs, or support? Our team
                is ready to guide you every step of the way.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{
          duration: 1.5,
          ease: "easeInOut",
        }}
        className="flex items-center justify-center lg:px-44 lg:py-20 py-10 px-5"
      >
        <p className="text-blacky lg:text-[16px] text-sm text-center">
          At SRI JVT College & Consultant Ltd, we value open communication and
          are committed to providing timely assistance. Whether you&apos;re a
          student exploring your future, a parent seeking guidance, or an
          individual looking for support in documentation or consultancy,
          we&apos;re just a message away.
        </p>
      </motion.div>
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{
          duration: 1.5,
          ease: "easeInOut",
        }}
        className="flex items-center justify-center lg:px-44 lg:py-20 py-10 px-5"
      >
        <img src={contact_banner} />
      </motion.div>
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{
          duration: 1.5,
          ease: "easeInOut",
        }}
        className="flex lg:flex-row flex-col items-center justify-center gap-10 lg:px-44 lg:py-20 py-10 px-5"
      >
        {contact_details.map(({ name, content, icon, link }, i) => (
          <div
            key={i}
            className="text-blacky lg:w-[350px] w-72 h-64 drop-shadow-2xl bg-whitey border-t-8 border-secondary rounded-xl px-10 py-10 flex items-center flex-col justify-center gap-5"
          >
            <p className="text-4xl text-overlay"> {icon}</p>
            <h4 className="border-b-[1px] pb-3 border-gray-200 w-full text-center">
              {name}
            </h4>
            <a href={link} target="_blank" className="lg:w-[85%] text-center">
              {content}
            </a>
          </div>
        ))}
      </motion.div>
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{
          duration: 1.5,
          ease: "easeInOut",
        }}
        className="lg:px-44 lg:py-20 py-10 px-5"
      >
        <h1 className="vertical-tag lg:text-4xl text-xl  text-overlay font-bold flex items-center gap-3">
          Campus on Map view <FaMap />
        </h1>
        <div className="flex items-center justify-center py-10">
          <motion.img
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              duration: 1,
              ease: "easeInOut",
            }}
            className="grayscale hover:grayscale-0 cursor-pointer shadow transition-all duration-700 ease-in"
            src={map_static}
          />
        </div>
      </motion.div>
    </main>
  );
};

export default Contact;
