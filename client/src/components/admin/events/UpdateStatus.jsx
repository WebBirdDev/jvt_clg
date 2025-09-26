import { useEffect, useState } from "react";
import useAuth from "../../../context/useAuth";
import { getRequest, baseurl, updateRequest } from "../../../utils/service";
import { toast } from "react-toastify";

const UpdateStatus = ({ isOpen, onClose, event_id }) => {
  const { user } = useAuth();

  const [eventData, setEventData] = useState({
    name: "",
    status: "",
  });
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await getRequest(`${baseurl}/events/${event_id}`);
        if (response.error) {
          console.error("Error in response", response);
          return;
        }
        setEventData({
          name: response.name,
          status: response.status,
        });
      } catch (error) {
        console.error("Error fetching career data", error);
      }
    };

    if (event_id) {
      fetchUsers();
    }
  }, [event_id]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const payload = {
        ...eventData,
        username: user?.name || "unknown",
        task: `User ${eventData.name} is ${eventData.status}`,
      };
      console.log(payload);
      const response = await updateRequest(
        `${baseurl}/events/${event_id}`,
        JSON.stringify(payload)
      );
      if (response.error) {
        console.error("Error in response", response);
        return;
      }
      onClose();
      toast(`Event ${eventData.name} ${eventData.status}`);
    } catch (error) {
      console.error("Error in updating event data", error);
    }
  };
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div
        className="relative w-full max-w-md bg-white dark:bg-gray-700 rounded-lg shadow-lg p-6"
        aria-modal="true"
        role="dialog"
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-gray-200 dark:border-gray-600 pb-4 mb-4">
          <h3 className="text-base font-semibold text-gray-900 dark:text-white">
            Update Event <br /> {eventData.name} status
          </h3>
          <button
            type="button"
            onClick={onClose}
            className="text-gray-400 hover:text-gray-900 dark:hover:text-white"
          >
            <svg
              className="w-4 h-4"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
          </button>
        </div>

        {/* Form */}
        <form className="space-y-4" onSubmit={handleSubmit}>
          <label className="block text-sm font-medium text-gray-700 dark:text-white">
            Status
          </label>
          <div className="flex items-center gap-5">
            <div>
              <label className="flex items-center gap-1">
                <input
                  type="radio"
                  name="status"
                  value="active"
                  checked={eventData.status === "active"}
                  onChange={() =>
                    setEventData((prevData) => ({
                      ...prevData,
                      status: "active",
                    }))
                  }
                />
                Active
              </label>
            </div>
            <div>
              <label className="flex items-center gap-1">
                <input
                  type="radio"
                  name="status"
                  value="disabled"
                  checked={eventData.status === "disabled"}
                  onChange={() =>
                    setEventData((prevData) => ({
                      ...prevData,
                      status: "disabled",
                    }))
                  }
                />
                Disable
              </label>
            </div>
          </div>
          <div className="flex justify-start gap-6 py-5">
            <button
              type="submit"
              className="px-5 py-2.5 text-sm font-medium text-white bg-orange-500 hover:bg-orange-600 rounded-lg transition-all duration-700 ease focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Update
            </button>
            <button
              onClick={onClose}
              type="cancel"
              className="px-5 py-2.5 text-sm font-medium text-black-two border-1 border-gray-300 hover:bg-gray-300 rounded-lg transition-all duration-700 ease focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Cancel
            </button>
          </div>
          <span className="text-xs text-red-400 font-medium">
            Note: only active events are listed to public
          </span>
        </form>
      </div>
    </div>
  );
};

export default UpdateStatus;
