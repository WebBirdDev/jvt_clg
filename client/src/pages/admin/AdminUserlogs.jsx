import React, { useEffect, useState } from "react";
import Select from "react-select";
import { getRequest, baseurl } from "../../utils/service";
import { formatDateTime } from "../../utils/dateFormatting";

const AdminUserlogs = () => {
  const [userLogs, setUserLogs] = useState([]);
  const [usernames, setUsernames] = useState([]);
  const [selectedUsername, setSelectedUsername] = useState(null);

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

  // On mount
  useEffect(() => {
    getUserLogs();
    getAllUsernames();
  }, []);

  // Create select options with "All Users" as default
  const userOptions = [
    { value: null, label: "All Users" },
    ...usernames.map((user) => ({
      value: user.username,
      label: user.username,
    })),
  ];

  // Filter logs by selected username
  const filteredLogs = selectedUsername
    ? userLogs.filter((log) => log.username === selectedUsername)
    : userLogs;

  // Custom styles for react-select
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
    <main className="px-10 md:py-12 py-20 bg-white rounded-2xl xl:mx-3">
      <h1 className="mb-5 font-medium px-3">User logs</h1>
      <section className="py-3 sm:py-5">
        <div>
          <div className="flex md:flex-row flex-col w-full md:items-center gap-3 md:justify-between">
            <form className="flex items-center gap-1">
              <div className="flex items-center gap-5 px-5 py-2 border-1 border-slate-200 bg-gray-100 rounded-md md:w-full w-fit">
                <Select
                  options={userOptions}
                  styles={customStyles}
                  placeholder="Select username"
                  menuPlacement="bottom"
                  name="username"
                  id="username"
                  onChange={(selectedOption) =>
                    setSelectedUsername(selectedOption?.value || null)
                  }
                />
              </div>
            </form>
          </div>

          <div className="overflow-x-auto mt-5 bg-white px-5 py-5 w-full">
            <table className="w-full text-sm text-left  bg-ternary/20 shadow-md shadow-[#8863f73d] rounded-md">
              <thead className="text-xs text-whitey uppercase bg-[#8963f7] shadow-xl rounded-t-md dark:bg-purple-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    #
                  </th>
                  <th scope="col" className="px-6 py-3">
                    User
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Task{" "}
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Accessed
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Time Stamp
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredLogs.length > 0 ? (
                  filteredLogs.map((userlog, i) => (
                    <tr
                      key={userlog._id}
                       className="hover:bg-ternary/40 border-b-1 border-black-two/10 hover:text-purple-900 cursor-pointer"
                    >
                      <td className="px-4 py-3">{i + 1}</td>
                      <td scope="row" className="px-4 py-3">
                        {userlog.username}
                      </td>
                      <td className="px-4 py-3">{userlog.task}</td>
                      <td className="px-4 py-3">{userlog.ipaddress}</td>
                      <td className="px-4 py-3">
                        <p className="bg-ternary py-1 px-3 rounded-full w-fit text-primary">
                          {" "}
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
          </div>
        </div>
      </section>
    </main>
  );
};

export default AdminUserlogs;
