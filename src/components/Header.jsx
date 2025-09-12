import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo_sm.jpeg";

const Header = () => {
  const location = useLocation();
  const navlinks = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "The Institute", path: "/about" },
    { id: 3, name: "Academic", path: "/academic" },
    { id: 4, name: "Services", path: "/services" },
    { id: 5, name: "Career", path: "/career" },
    { id: 6, name: "Happenings", path: "/happenings" },
  ];
  const submenu = [
    { id: 1, name: "News", path: "/news" },
    { id: 2, name: "Contact", path: "/contact" },
  ];

  return (
    <header className="shadow-md rounded-b-3xl fixed min-w-full z-50 bg-white">
      <div className="bg-primary lg:px-20 py-5 px-10 text-whitey flex justify-between">
        <div className="flex items-center gap-5">
          {submenu.map(({ id, name, path }) => (
            <Link
              key={id}
              to={path}
              className={`lg:text-md text-xs ${
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
        <div className="flex items-center gap-3">
          <Link to="/">
            <img
              src={logo}
              className="lg:w-18 w-14 lg:rounded-2xl rounded-xl"
            />
          </Link>
          <h3 className="lg:text-md text-sm font-bold">SRI JVT College</h3>
        </div>
        <div className="items-center gap-5 text-base font-medium lg:flex hidden">
          {navlinks.map(({ id, name, path }) => (
            <Link
              key={id}
              to={path}
              className={
                location.pathname === path ? "border-b-4 border-primary" : ""
              }
            >
              {name}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
