/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const sitemap = [
  { title: "Home", link: "/" },
  { title: "The Institute", link: "/about" },
  { title: "Academic", link: "/academic" },
  { title: "Services", link: "/services" },
  { title: "Career", link: "/career" },
  {
    title: "Happenings",
    children: [
      { title: "Events", link: "/events" },
      { title: "News", link: "/news" },
    ],
  },
  { title: "Contact", link: "/contacy" },
  { title: "Gallery", link: "/events" },
  { title: "Privacy Policy", link: "/privacy" },
  { title: "Terms of Use", link: "/terms" },
  { title: "Sitemap", link: "/sitemap" },
];

const Sitemap = () => {
  return (
    <motion.main
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 1.5,
        ease: "easeInOut",
      }}
      className="min-w-full text-blacky lg:py-5 py-40 px-5"
    >
      <div className="flex flex-col items-center lg:justify-center">
        <p className="lg:text-left text-center mb-5">Sitemap</p>
        <div className="flex">
          <div className="border-l-4 border-purple-300 mr-4"></div>
          <ul className="space-y-3 text-purple-500">
            {sitemap.map((item, i) => (
              <li key={i} className="relative flex items-center pl-8">
                <span className="absolute -left-4 top-1/2 w-4 h-px bg-purple-300 "></span>
                <span className="absolute left-0 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full border-2 border-purple-300 bg-purple-500"></span>

                <Link to={item.link}>
                  <span className="font-light">{item.title}</span>
                </Link>

                {item.children && (
                  <ul className="mt-8 -right-22  absolute  space-y-2">
                    <span className="absolute left-0 top-1/4 z-10 -translate-y-1/2 w-3 h-3 rounded-full border-2 border-purple-300 bg-purple-500"></span>
                    <span className="absolute left-1 top-1/3 z-10 -translate-y-1/10 w-[1px] h-8 bg-purple-500"></span>
                    {item.children.map((child, j) => (
                      <li key={j} className="relative mt-1 flex items-center">
                        {/* Horizontal Line before child circle */}
                        <span className="absolute left-1 w-7 h-[1px] bg-purple-500"></span>

                        {/* Small Circle */}
                        <span className="absolute left-6 w-3 h-3 rounded-full border-2 border-purple-300 bg-purple-500"></span>

                        {/* Child Title */}
                        <Link to={child.link}>
                          <span className="ml-10 font-light">
                            {child.title}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.main>
  );
};

export default Sitemap;
