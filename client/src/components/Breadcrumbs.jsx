/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { NavLink, useLocation, useParams } from "react-router-dom";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { getRequest, baseurl } from "../utils/service";
import { formatDate } from "../utils/dateFormatting";

const Breadcrumbs = () => {
  const location = useLocation();
  const [subPath, setSubPath] = useState("");
  const [currentPath, setCurrentPath] = useState("");
  const [pastEvent, setPastEvent] = useState([]);
  const [upcomingEvent, setUpcomingEvent] = useState([]);
  const [news, setNews] = useState([]);

  const { id } = useParams();
  const today = new Date();

  useEffect(() => {
    const isEventDetailPath =
      location.pathname.startsWith("/past_events/") ||
      location.pathname.startsWith("/events/");

    if (!isEventDetailPath) return;

    const getEvent = async () => {
      try {
        const response = await getRequest(`${baseurl}/events/${id}`);
        if (formatDate(today) > formatDate(response.event_date)) {
          setPastEvent(response);
        } else {
          setUpcomingEvent(response);
        }
      } catch (error) {
        console.log("error in fetching event", error);
      }
    };

    getEvent();
  }, [id, location.pathname]);

  useEffect(() => {
    const getNews = async () => {
      try {
        if (location.pathname.startsWith("/news")) {
          const response = await getRequest(`${baseurl}/news/${id}`);
          setNews(response);
        }
      } catch (error) {
        console.log("error in fetching news", error);
      }
    };
    getNews();
  }, [id, location.pathname]);

  useEffect(() => {
    const segments = location.pathname.split("/").filter(Boolean);
    const mainSegment = segments[0] || "";

    const fetchData = () => {
      if (mainSegment === "past_events") {
        setSubPath("Past Events");

        if (pastEvent && pastEvent.name) {
          setCurrentPath(pastEvent.name);
        }
      } else if (mainSegment === "events") {
        setSubPath("Upcoming Events");

        if (upcomingEvent && upcomingEvent.name) {
          setCurrentPath(upcomingEvent.name);
        }
      } else if (mainSegment === "news") {
        setSubPath("Exclusive News");

        if (news && news.date) setCurrentPath(news.name);
      } else {
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
  }, [id, location.pathname, pastEvent, upcomingEvent, news]);

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
        <NavLink
          to="/"
          className="text-breadcrumb lg:tracking-widest transition-color  duration-300 border-b-2 border-white hover:text-purple-500 hover:border-purple-500"
        >
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
