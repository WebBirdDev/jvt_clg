import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/logo_sm.jpeg";
import {
  IoHomeOutline,
  IoHome,
  IoNewspaper,
  IoNewspaperOutline,
} from "react-icons/io5";
import { GoBell, GoBellFill } from "react-icons/go";
import { HiMiniUsers, HiOutlineUsers } from "react-icons/hi2";
import { RiAdminFill, RiAdminLine } from "react-icons/ri";
import { RiUser3Fill, RiUser3Line } from "react-icons/ri";
import useAuth from "../../context/useAuth";

export const AdminSidebar = () => {
  const { user } = useAuth();
  const location = useLocation();

  const navlinks = [
    {
      name: "Home",
      path: "/admin",
      icon: <IoHomeOutline className="text-xl" />,
      active_icon: <IoHome className="text-xl" />,
    },
    {
      name: "Events",
      path: "/admin/events",
      icon: <GoBell className="text-xl" />,
      active_icon: <GoBellFill className="text-xl" />,
    },
    {
      name: "News",
      path: "/admin/news",
      icon: <IoNewspaperOutline className="text-xl" />,
      active_icon: <IoNewspaper className="text-xl" />,
    },
    {
      name: "Users",
      path: "/admin/users",
      icon: <HiOutlineUsers className="text-xl" />,
      active_icon: <HiMiniUsers className="text-xl" />,
    },
    ...(user?.role === "super_admin"
      ? [
          {
            name: "User Logs",
            path: "/admin/logs",
            icon: <RiAdminLine className="text-xl" />,
            active_icon: <RiAdminFill className="text-xl" />,
          },
        ]
      : []),
    {
      name: "Profile",
      path: "/admin/profile",
      icon: <RiUser3Line className="text-xl" />,
      active_icon: <RiUser3Fill className="text-xl" />,
    },
  ];

  return (
    <aside className="fixed min-h-[100vh] w-16 sm:w-64 px-2 pt-20 sm:px-5 text-whitey bg-admin transition-all duration-300">
      <Link to="/admin" className=" ">
        <img src={logo} className="w-16 rounded-md" />
      </Link>
      <nav className="flex flex-col gap-5 py-10">
        {navlinks.map(({ name, path, icon, active_icon }, i) => {
          const isActive =
            location.pathname === path ||
            (path === "/admin/events" &&
              location.pathname.startsWith("/admin/events"));

          return (
            <Link
              key={i}
              to={path}
              className={`vertical-tag-admin ${
                isActive ? "active" : ""
              } hover:vertical-tag-admin`}
            >
              <p
                className={`flex items-center gap-2 ${
                  isActive ? "bg-white text-primary rounded-r-xl" : ""
                } hover:bg-white hover:text-primary transition-colors duration-500 hover:shadow py-3 px-2 rounded-xl `}
              >
                <span className="">
                  {location.pathname === path ? active_icon : icon}
                </span>
                {name}
              </p>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
};
