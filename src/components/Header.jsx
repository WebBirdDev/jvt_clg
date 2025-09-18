import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo_sm.jpeg";
import { IoChevronDownOutline, IoClose } from "react-icons/io5";
import { FaBarsStaggered } from "react-icons/fa6";
import { useEffect, useState } from "react";

const Header = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [currentPath, setCurrentPath] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const navlinks = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "The Institute", path: "/about" },
    { id: 3, name: "Academic", path: "/academic" },
    { id: 4, name: "Services", path: "/services" },
    { id: 5, name: "Career", path: "/career" },
    {
      id: 6,
      name: "Happenings",
      path: "/happenings",
      submenu: [
        { name: "Events", path: "/events" },
        { name: "News", path: "/news" },
      ],
    },
  ];
  const submenu = [
    { id: 1, name: "News", path: "/news" },
    { id: 2, name: "Contact", path: "/contact" },
  ];

  useEffect(() => {
    setCurrentPath(location.pathname);
  }, [location.pathname]);

  return (
    <header
      className={`rounded-b-3xl fixed top-0 min-w-full z-50 bg-white transition-all duration-500 ease-in-out
    transform ${
      scrolled
        ? "drop-shadow-md backdrop-blur-2xl border-none"
        : "drop-shadow-sm"
    } `}
    >
      <div className="bg-primary lg:px-20 lg:py-5 py-2 px-10 text-whitey flex  flex-wrap lg:justify-between justify-center">
        <div className="flex items-center gap-5 relative ">
          {submenu.map(({ id, name, path }) => (
            <Link
              key={id}
              to={path}
              className={`lg:text-md text-xs relative underline-animation ${
                location.pathname === path ? "border-b-2 border-whitey" : ""
              }`}
            >
              {name}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-6 lg:text-md text-xs">
          <a href="mailto:#">info@jvtclg.com</a>
          <a href="tel:#">+94 123 456 7890</a>
        </div>
      </div>
      <div className="lg:px-20 px-10 lg:py-5 py-1 flex justify-between items-center text-primary">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} className="lg:w-18 w-14 lg:rounded-2xl rounded-xl" />

          <h3 className="lg:text-md text-sm font-bold">SRI JVT College</h3>
        </Link>
        <div className="items-center gap-10 text-base font-medium lg:flex hidden">
          {navlinks.map(({ id, name, path, submenu }) => {
            let active =
              name === "Happenings" &&
              (currentPath === "/news" || currentPath === "/events");
            return (
              <div key={id} className="group relative">
                <Link
                  to={path}
                  className={`relative underline-animation flex items-center gap-1 ${
                    location.pathname === path || active
                      ? "border-b-4 border-primary"
                      : ""
                  }`}
                >
                  {name}
                  {submenu && (
                    <IoChevronDownOutline className="mt-1 transform transition-transform duration-500 ease-in-out group-hover:rotate-180" />
                  )}
                </Link>

                {submenu && (
                  <div className="absolute top-full w-full left-0 mt-10 bg-white text-black rounded shadow-lg border border-slate-200 transform transition-all duration-300 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 z-50 min-w-max">
                    <ul className="py-2 px-6 space-y-2">
                      {submenu.map((item, index) => (
                        <li
                          key={index}
                          className="px-3 py-1 font-semibold relative underline-animation border-primary "
                        >
                          <Link
                            to={item.path}
                            className="hover:text-primary w-full transition-colors duration-300 "
                          >
                            {item.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            );
          })}
        </div>
        <FaBarsStaggered
          className="lg:hidden text-2xl cursor-pointer"
          onClick={() => setMenuOpen(true)}
        />
        <div
          className={`fixed lg:hidden top-0 right-0 min-h-[100vh] w-full max-w-full bg-overlay/60 z-50 transform transition-transform duration-500 ease-in-out ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="w-3/4 min-h-[100vh] bg-overlay transition-transform duration-700 fixed right-0">
            <div className="flex justify-end items-center p-5 px-10">
              <IoClose
                className={`text-2xl cursor-pointer text-ternary font-semibold`}
                onClick={() => setMenuOpen(false)}
              />
            </div>
            <ul className="text-ternary text-center font-semibold flex flex-col items-center justify-center gap-5 px-5">
              {navlinks.map(({ id, name, path, submenu }) => (
                <li key={id}>
                  {submenu ? (
                    <div className="">
                      <button
                        className="flex pl-8 items-center relative underline-animation justify-center gap-2 cursor-pointer hover:text-white"
                        onClick={() => setSubmenuOpen(!submenuOpen)}
                      >
                        {name}
                        <IoChevronDownOutline
                          className={`mt-1 transform transition-transform duration-500 ease-in-out ${
                            submenuOpen ? "rotate-180" : "rotate-0"
                          }`}
                        />
                      </button>
                      <ul
                        className={`overflow-hidden bg-ternary text-center rounded-md transition-all duration-1000 ease-in-out flex flex-col gap-3 ${
                          submenuOpen
                            ? "max-h-40 opacity-100 my-5 py-2 mb-0"
                            : "max-h-0 opacity-0"
                        }`}
                      >
                        {submenu.map((item, index) => (
                          <div key={index} className="px-5 py-3">
                            <Link
                              className="hover:border-b-2 text-overlay border-b-white relative underline-animation py-2"
                              key={index}
                              to={item.path}
                              onClick={() => {
                                setMenuOpen(false);
                                setSubmenuOpen(false);
                              }}
                            >
                              {item.name}
                            </Link>
                          </div>
                        ))}
                      </ul>
                    </div>
                  ) : (
                    <Link
                      to={path}
                      onClick={() => {
                        setMenuOpen(false);
                        setSubmenuOpen(false);
                      }}
                      className="block relative underline-animation"
                    >
                      {name}
                    </Link>
                  )}
                </li>
              ))}
              <button className="text-left mt-5">
                <Link
                  className="bg-ternary text-overlay px-3 py-2 rounded"
                  to={"/contact"}
                  onClick={() => {
                    setMenuOpen(false);
                    setSubmenuOpen(false);
                  }}
                >
                  Contact us
                </Link>
              </button>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
