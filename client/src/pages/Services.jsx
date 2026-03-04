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
      name: "Immigration & Global Mobility Consultancy",
      desc: "We provide end-to-end immigration consultancy services for individuals, families, and businesses seeking international opportunities. Our structured advisory approach ensures compliance, accuracy, and strategic planning throughout the entire application lifecycle.",
      list: [
        {
          tag: "Student Visa Advisory",
          item: "Strategic guidance for international education pathways.",
        },
        {
          tag: "Skilled Migration & Work Permits",
          item: "Professional assistance for employment-based migration.",
        },
        {
          tag: "Dependent & Family Visas",
          item: "Support for spouse and family reunification applications.",
        },
        {
          tag: "Visitor & Short-Term Entry Visas",
          item: "Consultation and documentation handling for travel purposes.",
        },
        {
          tag: "Graduate & Post-Study Routes",
          item: "Advisory support for extending stay after academic completion.",
        },
        {
          tag: "End-to-End Visa Processing",
          item: "Documentation review, compliance checks, and VFS coordination.",
        },
      ],
      img: visa,
    },
    {
      name: "Legal & Financial Advisory Services",
      desc: "We offer consultancy support in regulatory compliance, financial structuring, and legal coordination for individuals and business entities. Our advisory framework ensures clarity, transparency, and risk mitigation.",
      list: [
        {
          tag: "Sponsor Licensing & Compliance",
          item: "Guidance for employer registrations and sponsorship approvals.",
        },
        {
          tag: "Business Registration & Licensing",
          item: "Structured setup and regulatory approvals for enterprises.",
        },
        {
          tag: "Mortgage & Property Financing",
          item: "Advisory services for residential and commercial financing.",
        },
        {
          tag: "Personal & Business Loans",
          item: "Consultation on securing appropriate funding solutions.",
        },
        {
          tag: "Legal Referrals",
          item: "Coordination with certified immigration and corporate solicitors.",
        },
        {
          tag: "Accounting & Financial Structuring",
          item: "Bookkeeping, tax advisory coordination, and compliance planning.",
        },
      ],
      img: finance,
    },
    {
      name: "Administrative & Government Documentation Support",
      desc: "We streamline complex administrative procedures by providing professional assistance in handling official documentation within Sri Lanka and for international requirements.",
      list: [
        {
          tag: "Passport Applications & Renewals",
          item: "Structured documentation and submission coordination.",
        },
        {
          tag: "Driving & Motor License Processing",
          item: "End-to-end support for licensing requirements.",
        },
        {
          tag: "Land & Property Documentation",
          item: "Assistance with registrations and related legal paperwork.",
        },
        {
          tag: "Certified Document Processing",
          item: "Handling attestations, translations, and official submissions.",
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
            <div className="lg:px-28 lg:text-left">
              <h1 className="font-bold lg:text-4xl text-xl leading-snug">
                Strategic Guidance, <br />
                Global Opportunities
              </h1>
              <p className="lg:w-[85%] w-full py-5 lg:text-xl text-sm">
                Expert consultancy in immigration, legal, finance, and administration — guiding you forward with confidence.
              </p>
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
            Whether you are an individual seeking international mobility,
            a family managing documentation, or a business navigating
            compliance and licensing requirements, we offer reliable,
            results-driven advisory support at every stage.
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
              className={`flex ${i % 2 == 1
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
