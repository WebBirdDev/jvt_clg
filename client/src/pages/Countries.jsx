/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import hero_img from "../assets/academic/hero_img.png";
import tag_1 from "../assets/academic/tag_1.png";
import tag_2 from "../assets/academic/tag_2.png";
import tag_3 from "../assets/academic/tag_3.png";
import uk from '../assets/countries/uk.jpg'
import germany from '../assets/countries/germany.jpg'
import nl from '../assets/countries/netherlands.jpg'
import ca from '../assets/countries/canada.jpg'
import aus from '../assets/countries/australia.jpg'
import nz from '../assets/countries/newzealand.jpg'
import ire from '../assets/countries/uk.jpg'
import fr from '../assets/countries/france.jpg'
import sw from '../assets/countries/swedan.jpg'
import usa from '../assets/countries/usa.jpg'
import dubai from '../assets/countries/dubai.png'
import poland from '../assets/countries/poland.jpg'
import { Link } from "react-router-dom";

const destinations = [
  {
    name: "United Kingdom",
    slug: "united-kingdom",
    image: uk,
    description:
      "World-leading academic excellence with strong post-study work opportunities.",
  },
  {
    name: "Germany",
    slug: "germany",
    image: germany,
    description:
      "Innovation-driven, tuition-friendly education with strong STEM focus.",
  },
  {
    name: "Netherlands",
    slug: "netherlands",
    image: nl,
    description:
      "English-taught programs with global career pathways.",
  },
  {
    name: "Canada",
    slug: "canada",
    image: ca,
    description:
      "High-quality education with attractive immigration and PR pathways.",
  },
  {
    name: "Australia",
    slug: "australia",
    image: aus,
    description:
      "Globally recognized universities with strong post-study work rights.",
  },
  {
    name: "New Zealand",
    slug: "new-zealand",
    image: nz,
    description:
      "Safe, research-focused education with practical learning exposure.",
  },
  {
    name: "Ireland",
    slug: "ireland",
    image: ire,
    description:
      "European tech hub with strong graduate employability outcomes.",
  },
  {
    name: "France",
    slug: "france",
    image: fr,
    description:
      "Affordable public education with growing English-medium programs.",
  },
  {
    name: "Sweden",
    slug: "sweden",
    image: sw,
    description:
      "Innovation-led economy with sustainability-driven education.",
  },
  {
    name: "United States",
    slug: "united-states",
    image: usa,
    description:
      "Diverse institutions offering global research and career opportunities.",
  },
  {
    name: "Dubai / UAE",
    slug: "dubai-uae",
    image: dubai, // import this image as `dubai`
    description:
      "Visit visas, employment visas, and family visit applications with quick turnaround.",
  },
  {
    name: "Poland",
    slug: "poland",
    image: poland, // import this image as `poland`
    description:
      "Seasonal and general work visas with employer coordination support.",
  },
];

const Countries = () => {

  return (
    <main className="min-w-full">
      {/* <motion.section
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
                Study in the World's <br />
                Migration Destinations
              </h1>
              <p className="lg:w-[85%] w-full py-5 lg:text-xl text-sm">
                We help you identify the best-fit country based on your academic
                goals, budget, and long-term career plans. Get expert advice on
                university admissions, visa processing, scholarships, and
                post-study work opportunities across major global destinations.
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
      </motion.section> */}
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
                <img src={hero_img} className="z-10" />

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
                Study in the World's <br />
                Migration Destinations
              </h1>
              <p className="lg:w-[85%] w-full py-5 lg:text-xl text-sm">
                Find your ideal study destination with expert guidance on admissions, visas, and post-study opportunities.
              </p>
            </div>
          </div>
        </div>
      </motion.section>
      <div className="text-center mt-20 mb-20 lg:px-0 px-10">
        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 1.5,
            ease: "easeInOut",
          }}
          className="text-4xl text-primary lg:text-6xl font-bold tracking-tight">
          European Study Destinations
        </motion.h1>
        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 1.5,
            ease: "easeInOut",
          }}
          className="mt-6 text-gray-600 max-w-2xl mx-auto text-lg">
          Access globally ranked universities, career-focused degrees,
          and post-study work pathways through structured consultancy guidance.
        </motion.p>
      </div>

      {/* country cards */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 1.5,
          ease: "easeInOut",
        }}
        className="py-10 lg:px-0 px-5">

        <div className="flex flex-wrap lg:px-10 gap-10 justify-center items-center">
          {destinations.map((des, index) => (
            <div key={index}
              className="group rounded-3xl overflow-hidden shadow-xl bg-white w-[350px] pb-5 flex flex-col items-center">
              <img
                src={des.image}
                alt={des.name}
                className="h-64 w-full object-cover group-hover:scale-105 transition-all duration-500"
              />
              <div className="py-8 px-4 text-center">
                <h2 className="text-2xl font-semibold ">
                  {des.name}
                </h2>
                <p className="mt-4 text-sm text-gray-600">
                  {des.description}
                </p>
              </div>
              <Link to={`/countries/${des.slug}`}>
                <button className="mt-4 system-btn transition">
                  View Universities
                </button>
              </Link>
            </div>
          ))}
        </div>

      </motion.div>
    </main>
  )
}

export default Countries