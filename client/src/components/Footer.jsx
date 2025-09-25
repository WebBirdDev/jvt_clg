import { TiWeatherPartlySunny } from "react-icons/ti";
import fb from "../assets/social_icons/fb.png";
import insta from "../assets/social_icons/insta.png";
import linkedin from "../assets/social_icons/linkedin.png";
import twitter from "../assets/social_icons/twitter.png";
import youtube from "../assets/social_icons/youtube.png";
import logo from "../assets/logo_sm.jpeg";
import { Link } from "react-router-dom";
import Weather from "./Weather";

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
    { id: 2, name: "The Institute", path: "/about" },
    { id: 3, name: "Academic", path: "/academic" },
    { id: 4, name: "Services", path: "/services" },
    { id: 5, name: "Career", path: "/career" },
    { id: 6, name: "Happenings", path: "/happenings" },
  ];

  const departments = [
    {
      id: 1,
      name: "Faculty of Information Technology & Computing",
      path: "/faculty",
      submenu: [
        { course: "Computer Science" },
        { course: "Software Engineering" },
        { course: "Networking & Cybersecurity" },
      ],
    },
    {
      id: 2,
      name: "Faculty of Business & Management",
      path: "/faculty",
      submenu: [
        { course: "Computer Science" },
        { course: "Software Engineering" },
        { course: "Networking & Cybersecurity" },
      ],
    },
    {
      id: 3,
      name: "Faculty of Arts & Humanities",
      path: "/faculty",
      submenu: [
        { course: "English Language & Literature" },
        { course: "Social Sciences" },
        { course: "Communication & Media Studies" },
      ],
    },
    {
      id: 4,
      name: "Faculty of Science & Technology",
      path: "/faculty",
      submenu: [
        { course: "Applied Sciences" },
        { course: "Engineering Fundamentals" },
        { course: "Environmental Studies" },
      ],
    },
    {
      id: 5,
      name: "Faculty of Vocational & Professional Studies",
      path: "/faculty",
      submenu: [
        { course: "Hospitality & Tourism Management" },
        { course: "Event Management" },
        { course: "Technical & Trade Skills" },
        { course: "Fashion & Design" },
      ],
    },
    {
      id: 6,
      name: "Faculty of Education & Training",
      path: "/faculty",
      submenu: [
        { course: "Teacher Training Programs" },
        { course: "Early Childhood Education" },
        { course: "Educational Leadership" },
      ],
    },
  ];

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
  return (
    <footer className="min-w-full bottom-0">
      <nav className="bg-ternary py-5 lg:px-32 px-5 flex lg:flex-row flex-col lg:justify-between justify-start gap-y-2">
        <div className="text-whitey font-bold flex gap-2 items-center lg:text-xl text-md">
          <p className="flex gap-2 items-center lg:text-xl text-md">
            On Campus <TiWeatherPartlySunny className="lg:text-4xl text-2xl" />
          </p>
          <Weather />
        </div>
        <ul className="flex text-4xl items-center gap-3">
          {social_icons.map(({ id, icon, path }) => (
            <Link key={id} to={path}>
              <img src={icon} className="lg:w-12 w-8" />
            </Link>
          ))}
        </ul>
      </nav>
      <section className="bg-primary lg:px-32 px-5 py-10 text-whitey text-sm">
        <div className="border-b-1 border-whitey min-w-full py-5 pb-8 px-10">
          <nav className="flex gap-3 lg:justify-start justify-center items-center flex-wrap">
            {top_footer.map(({ id, name, path }) => (
              <Link key={id} to={path}>
                {name}
              </Link>
            ))}
          </nav>
        </div>
        <div className="border-b-1 border-whitey min-w-full py-5 pb-8 px-10">
          <nav className="flex gap-3 lg:justify-start justify-center items-center flex-wrap">
            {header_items.map(({ id, name, path }) => (
              <Link key={id} to={path}>
                {name}
              </Link>
            ))}
          </nav>
        </div>
        <div className="border-b-1 flex lg:flex-row flex-col justify-between items-center border-whitey min-w-full py-5 pb-8 px-10">
          <div className="lg:w-[70%] w-full">
            <p>Departments</p>
            <nav className="grid lg:grid-cols-3 grid-cols-2 gap-5 items-center py-5">
              {departments.map(({ id, name, path, submenu }) => (
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
              ))}
            </nav>
          </div>
          <div className="lg:w-[30%] w-full flex items-center flex-col">
            <img src={logo} className="w-80" />
            <p className="text-center">
              SRI JVT College - Inspiring Minds, Shaping Futures. Education,
              growth, and opportunities beyond borders.
            </p>
          </div>
        </div>
        <div className="border-b-1 border-whitey min-w-full py-5 pb-8 px-10">
          <nav className="flex gap-3 items-center lg:justify-start justify-center flex-wrap">
            {legal.map(({ id, name, path }) => (
              <Link key={id} to={path}>
                {name}
              </Link>
            ))}
          </nav>
        </div>
        <div className="pt-10 px-10 flex lg:flex-row lg:text-sm text-xs flex-col flex-wrap lg:justify-between justify-center items-center">
          <span className="text-whitey/70">
            &copy; 2025 SRI JVT College - All rights reserved, Digital Solution
            By webbriid
          </span>
          <span className="text-whitey/70">
            Website lastly updated on {formattedDate}{" "}
          </span>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
