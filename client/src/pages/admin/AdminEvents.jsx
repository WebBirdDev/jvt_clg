import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { events } from "../../utils/content";
import { GoDotFill } from "react-icons/go";
import { TbEdit } from "react-icons/tb";
import { MdOutlineDeleteOutline } from "react-icons/md";
const AdminEvents = () => {
  const [eventsDetails, setEventDetails] = useState([]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    setEventDetails(events);
  }, []);
  const filteredEvents = eventsDetails.filter((event) => {
    const query = search.toLowerCase();
    return event.name.toLowerCase().includes(query);
  });
  return (
    <main className="py-20 px-5">
      <div className="flex items-center justify-between w-full">
        <h1 className="text-primary font-semibold">Event Details</h1>
        <div className="flex items-center gap-5">
          <div>
            <input
              type="text"
              placeholder="Search..."
              onChange={(e) => setSearch(e.target.value)}
              className=" outline-none border-2 py-2 px-3 border-ternary rounded-md"
            />
          </div>
          <Link
            to="/admin/events/create"
            className="text-whitey bg-[#8963f7] px-5 py-3 rounded-xl"
          >
            Create Event
          </Link>
        </div>
      </div>
      <div className="overflow-x-auto mt-5 bg-white px-5 py-5 w-full">
        <table className="w-full text-sm text-left  bg-ternary/20 shadow-md shadow-[#8863f73d] rounded-md">
          <thead className="text-xs text-whitey uppercase bg-[#8963f7] shadow-xl rounded-t-md dark:bg-purple-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-4 py-3">
                #
              </th>
              <th scope="col" className="px-4 py-3">
                Event
              </th>
              <th scope="col" className="px-4 py-3">
                Date
              </th>
              <th scope="col" className="px-4 py-3">
                Time
              </th>
              <th scope="col" className="px-4 py-3">
                status
              </th>

              <th scope="col" className="px-4 py-3">
                <span className="">Actions</span>
              </th>
            </tr>
          </thead>
          <tbody className="">
            {filteredEvents.length > 0 ? (
              filteredEvents.map((event, i) => (
                <tr
                  key={event.id}
                  className="hover:bg-ternary/40 border-b-1 border-black-two/10 hover:text-purple-900 cursor-pointer"
                >
                  <td className="px-4 py-3">{i + 1}</td>
                  <th
                    scope="row"
                    className="px-4 py-3 font-medium whitespace-nowrap dark:text-white"
                  >
                    {event.name}
                  </th>
                  <td className="px-4 py-3">{event.date} </td>
                  <td className="px-4 py-3">{event.time} </td>
                  <td
                    className={`mx-4 my-3 flex items-center gap-1 ${
                      event.status === "active"
                        ? "bg-green-300/50 text-green-600"
                        : event.status === "disabled"
                        ? "bg-red-300/50 text-red-600"
                        : ""
                    } w-fit pl-2 pr-4 py-1 rounded-full`}
                  >
                    {" "}
                    <GoDotFill />
                    {event.status}{" "}
                  </td>
                  <td className="px-4 py-3 ">
                    <div className="flex gap-5">
                      <button className="flex items-center gap-2 bg-yellow-300 px-3 py-1 text-black/50 hover:bg-yellow-500 transition-colors duration-300 ease-in cursor-pointer rounded-md">
                        <TbEdit />
                        Edit
                      </button>
                      <button className="flex items-center gap-2 bg-red-500 px-3 py-1 text-whitey hover:bg-red-700 transition-colors duration-300 ease-in cursor-pointer rounded-md">
                        <MdOutlineDeleteOutline />
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={6} className="py-4 px-2 text-center">
                  No events found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </main>
  );
};

export default AdminEvents;
