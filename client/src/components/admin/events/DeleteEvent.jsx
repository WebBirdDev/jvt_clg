import React, { useEffect, useState } from "react";
import useAuth from "../../../context/useAuth";
import { getRequest, baseurl, deleteRequest } from "../../../utils/service";

const DeleteEvent = ({ isOpen, onClose, event_id }) => {
  const { user } = useAuth();
  const [eventData, setEventData] = useState({
    name: "",
  });

  useEffect(() => {
    const getEvent = async () => {
      try {
        const response = await getRequest(`${baseurl}/events/${event_id}`);
        if (response.error) {
          console.log(response.error);
          return;
        }
        setEventData({
          name: response.name,
        });
      } catch (error) {
        console.error("error in fetching event details", error);
      }
    };
    if (event_id) {
      getEvent();
    }
  }, [event_id]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const payload = {
        ...eventData,
        username: user?.name || "unknown",
        task: `${eventData.name} is deleted`,
      };
      const response = await deleteRequest(
        `${baseurl}/events/${event_id}`,
        JSON.stringify(payload)
      );
      if (response.error) {
        console.error("Error in response", response);
        return;
      }
      onClose();
    } catch (error) {
      console.error("Error in updating career data", error);
    }
  };

  if (!isOpen) return null;
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 bg-opacity-50"
      aria-modal="true"
      role="dialog"
    >
      <div className="bg-white dark:bg-gray-700 rounded-lg shadow-lg w-full max-w-md p-6 relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          type="button"
          className="absolute top-3 right-3 text-gray-400 hover:text-gray-900 dark:hover:text-white"
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

        {/* Modal Content */}
        <div className="text-center">
          <svg
            className="mx-auto mb-4 w-12 h-12 text-gray-400 dark:text-gray-200"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
          <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
            Are you sure you want to delete this Event {eventData.name}?
          </h3>

          <div className="flex justify-center gap-3">
            <button
              onClick={handleSubmit}
              className="px-5 py-2.5 text-sm font-medium text-white bg-red-600 hover:bg-red-700 rounded-lg"
            >
              Yes, I'm sure
            </button>
            <button
              onClick={onClose}
              className="px-5 py-2.5 text-sm font-medium text-gray-700 bg-white border border-gray-300 hover:bg-gray-100 rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:hover:bg-gray-700"
            >
              No, cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteEvent;
