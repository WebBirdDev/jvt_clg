import { useEffect, useState } from "react";
import { NavLink, useLocation, useParams } from "react-router-dom";
import { exclusive_news, past_events, upcoming_events } from "../utils/content";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const Breadcrumbs = () => {
  const location = useLocation();
  const [subPath, setSubPath] = useState("");
  const [currentPath, setCurrentPath] = useState("");
  const { id } = useParams();

  useEffect(() => {
    const segments = location.pathname.split("/").filter(Boolean);
    const mainSegment = segments[0] || "";

    const fetchData = async () => {
      if (mainSegment === "past_events") {
        setSubPath("Past Events");
        const event = past_events.find((event) => event.id === id);
        if (event) setCurrentPath(event.name);
      } else if (mainSegment === "events") {
        setSubPath("Upcoming Events");
        const event = upcoming_events.find((event) => event.id === id);
        if (event) setCurrentPath(event.name);
      } else if (mainSegment === "news") {
        setSubPath("Exclusive News");
        const news = exclusive_news.find((news) => news.id === id);
        if (news) setCurrentPath(news.name);
      } else {
        // Static path fallback
        const capitalizedMain = mainSegment
          .split("-")
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(" ");
        setCurrentPath(capitalizedMain);

        if (["blogs", "case-studies"].includes(mainSegment)) {
          setSubPath("Insight");
        } else if (
          ["privacy-policy", "cookie-management"].includes(mainSegment)
        ) {
          setSubPath("Updates");
        } else {
          setSubPath("");
        }
      }
    };

    fetchData();
  }, [id, location.pathname]);

  let subPathLink = "/";
  if (subPath === "Past Events") {
    subPathLink = "/past_events";
  } else if (subPath === "Upcoming Events") {
    subPathLink = "/events";
  } else if (subPath === "Exclusive News") {
    subPathLink = "/news";
  } else if (subPath) {
    subPathLink = "/" + subPath.toLowerCase().replace(/\s+/g, "-");
  }

  return (
    <div className="bg-nav lg:py-3 pt-44 xl:px-20 px-5 ">
      <h4 className="flex lg:flex-row flex-col lg:items-center lg:text-base text-xs w-full">
        <NavLink to="/" className="text-breadcrumb lg:tracking-widest transition-color  duration-300 border-b-2 border-white hover:text-purple-500 hover:border-purple-500">
          Sri&nbsp;JVT
        </NavLink>
        {subPath && (
          <div className="flex items-center group">
            <MdOutlineKeyboardArrowRight />
            <NavLink
              to={subPathLink}
              className="text-breadcrumb lg:tracking-wide lg:px-1 transition-color  duration-300 border-b-2 border-white group-hover:text-purple-500 group-hover:border-purple-500"
            >
              {subPath}
            </NavLink>
          </div>
        )}
        <div className="flex items-center">
          <MdOutlineKeyboardArrowRight /> {currentPath}
        </div>
      </h4>
    </div>
  );
};

export default Breadcrumbs;
