/* eslint-disable no-unused-vars */
import { TiWeatherPartlySunny } from "react-icons/ti";
import fb from "../assets/social_icons/fb.png";
import insta from "../assets/social_icons/insta.png";
import linkedin from "../assets/social_icons/linkedin.png";
import twitter from "../assets/social_icons/twitter.png";
import youtube from "../assets/social_icons/youtube.png";
import logo from "../assets/logo_sm.jpeg";
import { Link } from "react-router-dom";
import Weather from "./Weather";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaEnvelope } from "react-icons/fa";
import { FaE, FaLocationDot } from "react-icons/fa6";

const Footer = () => {
  const today = new Date();
  const formattedDate = today.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const top_footer = [
    { id: 1, name: "Students", path: "/about" },
    { id: 2, name: "Faculty & Staffs", path: "/about" },
    { id: 3, name: "Gallery", path: "/events" },
  ];
  const header_items = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "About", path: "/about" },
    { id: 3, name: "Destinations", path: "/countries" },
    { id: 4, name: "Services", path: "/services" },
  ];

  const visa_services = [
    { id: 1, name: "Visit visa", path: "/services" },
    { id: 2, name: "Student visa", path: "/services" },
    { id: 3, name: "Work visa", path: "/services" },
    { id: 4, name: "Immigration / PR", path: "/services" },
    { id: 5, name: "Documentation Support", path: "/services" },
  ];

  // const departments = [
  //   {
  //     id: 1,
  //     name: "Faculty of Information Technology & Computing",
  //     path: "/faculty",
  //     submenu: [
  //       { course: "Computer Science" },
  //       { course: "Software Engineering" },
  //       { course: "Networking & Cybersecurity" },
  //     ],
  //   },
  //   {
  //     id: 2,
  //     name: "Faculty of Business & Management",
  //     path: "/faculty",
  //     submenu: [
  //       { course: "Computer Science" },
  //       { course: "Software Engineering" },
  //       { course: "Networking & Cybersecurity" },
  //     ],
  //   },
  //   {
  //     id: 3,
  //     name: "Faculty of Arts & Humanities",
  //     path: "/faculty",
  //     submenu: [
  //       { course: "English Language & Literature" },
  //       { course: "Social Sciences" },
  //       { course: "Communication & Media Studies" },
  //     ],
  //   },
  //   {
  //     id: 4,
  //     name: "Faculty of Science & Technology",
  //     path: "/faculty",
  //     submenu: [
  //       { course: "Applied Sciences" },
  //       { course: "Engineering Fundamentals" },
  //       { course: "Environmental Studies" },
  //     ],
  //   },
  //   {
  //     id: 5,
  //     name: "Faculty of Vocational & Professional Studies",
  //     path: "/faculty",
  //     submenu: [
  //       { course: "Hospitality & Tourism Management" },
  //       { course: "Event Management" },
  //       { course: "Technical & Trade Skills" },
  //       { course: "Fashion & Design" },
  //     ],
  //   },
  //   {
  //     id: 6,
  //     name: "Faculty of Education & Training",
  //     path: "/faculty",
  //     submenu: [
  //       { course: "Teacher Training Programs" },
  //       { course: "Early Childhood Education" },
  //       { course: "Educational Leadership" },
  //     ],
  //   },
  // ];

  const legal = [
    { id: 1, name: "Privacy Policy", path: "/privacy" },
    { id: 2, name: "Sitemap", path: "/sitemap" },
    { id: 3, name: "Terms of Use", path: "/terms" },
  ];

  const social_icons = [
    { id: 1, icon: fb, path: "#" },
    { id: 2, icon: insta, path: "#" },
    { id: 3, icon: twitter, path: "#" },
    { id: 4, icon: youtube, path: "#" },
    { id: 5, icon: linkedin, path: "#" },
  ];

  const contact_info = [
    {
      id: 1,
      name: "Location",
      icon: <FaLocationDot />,
      content: "Chavakachcheri, Jaffna",
      link: "#",
    },
    {
      id: 2,
      name: "Email",
      icon: <FaEnvelope />,
      content: [
        {
          email_1: "",
          link: "mailto:admin@srijvt.co.uk",
        },
        {
          email_2: "consultant@srijvt.co.uk",
          link: "mailto:consultant@srijvt.co.uk",
        },
      ],
    },
    {
      id: 3,
      name: "Whatsapp",
      icon: <IoLogoWhatsapp />,
      content: [
        {
          name: "Wimal",
          phone_1: "00447427269151",
          link_1: "tel:00447427269151",
        },
        {
          name: "Sri",
          phone_1: "+94 77 651 6747",
          phone_2: "+44 7482 475870",
          link_1: "tel:+94776516747",
          link_2: "tel:+447482475870",
        },
      ],
    },
  ];

  return (
    <footer className="min-w-full bottom-0">
      <nav className="bg-ternary py-5 lg:px-32 px-5 flex lg:flex-row flex-col lg:justify-between justify-start gap-y-2">
        <div className="text-whitey font-bold flex gap-2 items-center lg:text-xl text-md">
          <p className="flex gap-2 items-center lg:text-xl text-md">
            Climate now{" "}
            <TiWeatherPartlySunny className="lg:text-4xl text-2xl" />
          </p>
          <Weather />
        </div>
        <ul className="flex text-4xl items-center gap-3">
          {/* {social_icons.map(({ id, icon, path }) => (
            <Link key={id} to={path}>
              <img src={icon} className="lg:w-12 w-8" />
            </Link>
          ))} */}
        </ul>
      </nav>
      <section className="bg-primary lg:px-32 px-5 py-10 text-whitey text-sm">
        {/* <div className="border-b-1 border-whitey min-w-full py-5 pb-8 px-10">
          <nav className="flex gap-3 lg:justify-start justify-center items-center flex-wrap">
            {header_items.map(({ id, name, path }) => (
              <Link key={id} to={path}>
                {name}
              </Link>
            ))}
          </nav>
        </div> */}
        <div className="border-b-1 flex lg:flex-row flex-col items-center justify-between border-whitey min-w-full py-5 pb-8 lg:px-10">
          <div className="lg:w-[70%] w-full">
            <div className="flex flex-col flex-wrap">
              <div className="min-w-full py-5 pb-8 px-10">
                <p className="mb-5 lg:no-underline md:no-underline underline">
                  Visa Services
                </p>
                <nav className="flex lg:flex-row flex-col flex-wrap gap-5">
                  {visa_services.map(({ id, name, path }) => (
                    <Link key={id} to={path}>
                      {name}
                    </Link>
                  ))}
                  {/* {departments.map(({ id, name, path, submenu }) => (
                <li key={id} to={path} className="text-sm">
                  <span className="underline underline-offset-4 lg:text-base text-xs">
                    {" "}
                    {name}
                  </span>
                  <ul className="flex flex-col gap-2 my-3">
                    {submenu.map(({ course }, i) => (
                      <li
                        key={i}
                        className="text-whitey/80 lg:text-xs text-[10px]"
                      >
                        {course}
                      </li>
                    ))}
                  </ul>
                </li>
              ))} */}
                </nav>
              </div>
              <div className="border-t-1 border-whitey min-w-full py-5 pb-8 px-10">
                <p className="mb-4 lg:no-underline md:no-underline underline">
                  Quick Links
                </p>
                <nav className="flex gap-3 lg:flex-row flex-col flex-wrap">
                  {header_items.map(({ id, name, path }) => (
                    <Link key={id} to={path}>
                      {name}
                    </Link>
                  ))}
                </nav>
              </div>
              <div className="border-t-1 border-whitey min-w-full py-5 pb-8 px-10">
                <p className="mb-4 lg:text-left lg:no-underline md:no-underline underline">
                  Contact Information
                </p>
                <nav className="flex flex-col lg:gap-5 gap-10 flex-wrap">
                  <div className="flex lg:flex-row flex-col gap-3">
                    <span className="flex items-center gap-3">
                      <FaLocationDot /> Location
                    </span>
                    <span className="">
                      <Link to="#" className="hover:bg-whitey/30 transition-all duration-300 hover:text-whitey lg:px-2 py-2">Chavakachcheri, Jaffna</Link>
                    </span>
                  </div>
                  <div className="flex lg:flex-row flex-col gap-3">
                    <span className="flex items-center gap-3">
                      <FaEnvelope /> Email
                    </span>
                    <span className="flex gap-3 lg:flex-row flex-col">
                      <Link to="mailto:admin@srijvt.co.uk" className="hover:bg-whitey/30 transition-all duration-300 hover:text-whitey lg:px-2 py-2">
                        admin@srijvt.co.uk
                      </Link>
                      <Link to="mailto:consultant@srijvt.co.uk" className="hover:bg-whitey/30 transition-all duration-300 hover:text-whitey lg:px-2 py-2">
                        consultant@srijvt.co.uk
                      </Link>
                    </span>
                  </div>
                  <div className="flex flex-col gap-3">
                    <span className="flex items-center gap-3">
                      <IoLogoWhatsapp /> Whatsapp
                    </span>
                    <span className="flex lg:flex-row flex-col lg:items-center gap-3">
                      Wimal:
                      <Link to="tel:00447427269151" className="hover:bg-whitey/30 transition-all duration-300 hover:text-whitey lg:px-2 py-2">00447427269151</Link>
                    </span>
                    <span className="flex lg:flex-row flex-col lg:items-center gap-3">
                      Sri:
                      <Link to="tel:+94776516747" className="flex hover:bg-whitey/30 transition-all duration-300 hover:text-whitey lg:px-2 py-2">
                        +94 77 651 6747 <span className="lg:flex hidden">,</span>
                      </Link>
                      <Link to="tel:+447482475870" className="hover:bg-whitey/30 transition-all duration-300 hover:text-whitey lg:px-2 py-2">+44 7482 475870</Link>
                    </span>
                  </div>
                </nav>
              </div>
              <div className="border-t-1 border-whitey min-w-full py-5 pb-8 px-10">
                <nav className="flex gap-3 items-center lg:justify-start justify-center flex-wrap">
                  {legal.map(({ id, name, path }) => (
                    <Link key={id} to={path}>
                      {name}
                    </Link>
                  ))}
                </nav>
              </div>
            </div>
          </div>
          <div className="lg:w-[30%] w-full flex items-center flex-col">
            <img src={logo} className="w-64" />
            <p className="text-center">
              SriJVT consultancy is a trusted visa and immigration service
              provider helping clients secure, visit, student, work, and PR
              visas with transparent processes and personalized guidance.
              <br /> Dear world ,Education is the most powerful weapon which you
              can use to change the world.
            </p>
          </div>
        </div>

        <div className="pt-10 px-10 flex lg:flex-row lg:text-sm text-xs flex-col flex-wrap lg:justify-between justify-center items-center">
          <span className="text-whitey/70">
            &copy; 2025 SRI JVT Consultancy - All rights reserved, Digital
            Solution By webbriid
          </span>
          {/* <span className="text-whitey/70">
            Website lastly updated on {formattedDate}{" "}
          </span> */}
        </div>
      </section>
    </footer>
  );
};

export default Footer;
