import React, { useEffect, useState } from "react";
import Select from "react-select";
import { getRequest, baseurl } from "../../utils/service";
import { formatDateTime } from "../../utils/dateFormatting";
import { BsSliders2Vertical } from "react-icons/bs";

const AdminUserlogs = () => {
  const [userLogs, setUserLogs] = useState([]);
  const [usernames, setUsernames] = useState([]);
  const [selectedUsername, setSelectedUsername] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage, setRecordsPerPage] = useState(10);

  // Fetch usernames
  const getAllUsernames = async () => {
    try {
      const response = await getRequest(`${baseurl}/users`);
      if (response.error) {
        console.log(response.error);
        return;
      }
      setUsernames(response.users);
    } catch (error) {
      console.error("error in fetching username", error);
    }
  };

  // Fetch all user logs
  const getUserLogs = async () => {
    try {
      const response = await getRequest(`${baseurl}/userlog`);
      if (response.error) {
        console.log(response.error);
        return;
      }
      setUserLogs(response.userlogs);
    } catch (error) {
      console.error("error in fetching user logs", error);
    }
  };

  useEffect(() => {
    getUserLogs();
    getAllUsernames();
  }, []);

  const userOptions = [
    { value: null, label: "All Users" },
    ...usernames.map((user) => ({
      value: user.username,
      label: user.username,
    })),
  ];

  const recordsOptions = [
    { value: 10, label: "10" },
    { value: 20, label: "20" },
    { value: 50, label: "50" },
    { value: 75, label: "75" },
    { value: 100, label: "100" },
  ];

  // Filter logs
  const filteredLogs = selectedUsername
    ? userLogs.filter((log) => log.username === selectedUsername)
    : userLogs;

  // Pagination logic
  const totalPages = Math.ceil(filteredLogs.length / recordsPerPage);
  const indexOfLastLog = currentPage * recordsPerPage;
  const indexOfFirstLog = indexOfLastLog - recordsPerPage;
  const currentLogs = filteredLogs.slice(indexOfFirstLog, indexOfLastLog);

  const handlePrevious = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handleRecordsPerPageChange = (selectedOption) => {
    setRecordsPerPage(selectedOption.value);
    setCurrentPage(1); // reset to page 1
  };
  const handleReset = () => {
    setSelectedUsername(null);
    setRecordsPerPage(10);
    setCurrentPage(1);
  };

  const customStyles = {
    control: (provided) => ({
      ...provided,
      backgroundColor: "#f3f4f6",
      color: "#364153",
      borderColor: "#f3f4f6",
      boxShadow: "none",
      "&:hover": {
        borderColor: "#f3f4f6",
      },
    }),
    menu: (provided) => ({
      ...provided,
      backgroundColor: "#f3f4f6",
      color: "#364153",
      zIndex: 9999,
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isFocused ? "#b5a0f5" : "#8963f7",
      color: "white",
      cursor: "pointer",
    }),
    singleValue: (provided) => ({
      ...provided,
      color: "#8963f7",
    }),
    input: (provided) => ({
      ...provided,
      color: "#8963f7",
    }),
    placeholder: (provided) => ({
      ...provided,
      color: "#8963f7",
    }),
  };

  return (
    <main className="px-10 md:py-0 py-20 bg-white rounded-2xl xl:mx-3">
      <h1 className="mb-5 font-medium px-3">User logs</h1>
      <section className="py-3 sm:py-5">
        <div>
          <div className="flex md:flex-row flex-col w-full md:items-center gap-3 md:justify-between">
            <form className="w-full flex items-center justify-between gap-2">
              <div className="flex items-center gap-10">
                <div className="flex items-center gap-5 px-5 py-2 border-1 border-slate-200 bg-gray-100 rounded-md w-fit">
                  <label>Users</label>
                  <Select
                    options={userOptions}
                    styles={customStyles}
                    placeholder="Select username"
                    menuPlacement="bottom"
                    name="username"
                    id="username"
                    onChange={(selectedOption) => {
                      setSelectedUsername(selectedOption?.value || null);
                      setCurrentPage(1);
                    }}
                  />
                </div>
                <div className="flex items-center gap-5 px-5 py-2 border-1 border-slate-200 bg-gray-100 rounded-md w-fit">
                  <label>Logs per page</label>
                  <Select
                    options={recordsOptions}
                    styles={customStyles}
                    defaultValue={recordsOptions[0]}
                    placeholder=""
                    menuPlacement="bottom"
                    onChange={handleRecordsPerPageChange}
                  />
                </div>
              </div>
              <div>
                <button
                  type="button"
                  onClick={handleReset}
                  className="px-4 py-2 flex items-center gap-2 border-1 border-gray-300 cursor-pointer duration-300 ease-in transition-colors hover:bg-purple-500 hover:text-white rounded-md "
                >
                  <BsSliders2Vertical />
                  Reset filters
                </button>
              </div>
            </form>
          </div>

          <div className="overflow-x-auto mt-5 bg-white px-5 py-5 w-full">
            <table className="w-full text-sm text-left bg-ternary/20 shadow-md shadow-[#8863f73d] rounded-md">
              <thead className="text-xs text-whitey uppercase bg-[#8963f7] shadow-xl rounded-t-md">
                <tr>
                  <th className="px-6 py-3">#</th>
                  <th className="px-6 py-3">User</th>
                  <th className="px-6 py-3">Task</th>
                  <th className="px-6 py-3">Accessed</th>
                  <th className="px-6 py-3">Time Stamp</th>
                </tr>
              </thead>
              <tbody>
                {currentLogs.length > 0 ? (
                  currentLogs.map((userlog, i) => (
                    <tr
                      key={userlog._id}
                      className="hover:bg-ternary/40 border-b-1 border-black-two/10 hover:text-purple-900 cursor-pointer"
                    >
                      <td className="px-4 py-3">{indexOfFirstLog + i + 1}</td>
                      <td className="px-4 py-3">{userlog.username}</td>
                      <td className="px-4 py-3">{userlog.task}</td>
                      <td className="px-4 py-3">{userlog.ipaddress}</td>
                      <td className="px-4 py-3">
                        <p className="bg-ternary py-1 px-3 rounded-full w-fit text-primary">
                          {formatDateTime(userlog.created_at)}
                        </p>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={5} className="py-4 px-2 text-center">
                      No user logs found
                    </td>
                  </tr>
                )}
              </tbody>
            </table>

            {/* Pagination Controls */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center gap-4 mt-6">
                <button
                  onClick={handlePrevious}
                  disabled={currentPage === 1}
                  className="px-3 py-1 rounded-md bg-purple-200 text-purple-800 disabled:opacity-50"
                >
                  Previous
                </button>

                <span className="text-sm text-gray-600">
                  Page {currentPage} of {totalPages}
                </span>

                <button
                  onClick={handleNext}
                  disabled={currentPage === totalPages}
                  className="px-3 py-1 rounded-md bg-purple-200 text-purple-800 disabled:opacity-50"
                >
                  Next
                </button>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
};

export default AdminUserlogs;
