import React, { useEffect, useState } from "react";
import useAuth from "../../../context/useAuth";
import { baseurl, updateRequest, getRequest } from "../../../utils/service";
import { IoIosEyeOff, IoIosEye } from "react-icons/io";

const UpdateUser = ({ isOpen, onClose, userId }) => {
  const { user } = useAuth();
  const [showUsername, setShowUsername] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordContainer, setShowPasswordContainer] = useState(false);
  const [userData, setUserData] = useState({
    username: "",
    password: "",
    email: "",
    role: "",
  });

  useEffect(() => {
    const fetchUserData = async () => {
      const response = await getRequest(`${baseurl}/users/${userId}`);
      console.log(response);
      setUserData({
        username: response.username,
        email: response.email,
        role: response.role,
      });
      setShowUsername(response.username);
    };
    fetchUserData();
  }, [userId]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(JSON.stringify(userData));
    const payload = {
      ...userData,
      logusername: user?.username || "unknown",
      task: `User ${showUsername} details updated.`,
    };
    console.log(JSON.stringify(payload));
    const response = await updateRequest(
      `${baseurl}/users/${userId}`,
      JSON.stringify(payload)
    );
    console.log(response);
    onClose();
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
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            Update {showUsername} user
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
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="username"
              className="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              autoComplete="off"
              placeholder="Webbriid"
              className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-2.5 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:text-white"
              required
              value={userData.username}
              onChange={(e) => {
                setUserData({ ...userData, username: e.target.value });
              }}
            />
          </div>
          <div className="flex flex-col gap-5">
            <div>
              <label
                htmlFor="email"
                className="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                autoComplete="off"
                placeholder="useremail@gmail.com"
                className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-2.5 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:text-white"
                required
                value={userData.email}
                onChange={(e) => {
                  setUserData({ ...userData, email: e.target.value });
                }}
              />
            </div>
            <div>
              <label
                htmlFor="role"
                className="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
              >
                Role
              </label>
              <select
                value={userData.role}
                onChange={(e) => {
                  setUserData({ ...userData, role: e.target.value });
                }}
                className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-2.5 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:text-white"
              >
                <option>Select a user role</option>
                <option value="user">User</option>
                <option value="admin">Admin</option>
                <option value="super_admin">Super admin</option>
              </select>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <label
              htmlFor="change_password"
              className="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
            >
              Change Password
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                value="true"
                checked={showPasswordContainer === true}
                onChange={() => setShowPasswordContainer(true)}
              />
              Yes
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                value="false"
                checked={showPasswordContainer === false}
                onChange={() => setShowPasswordContainer(false)}
              />
              No
            </label>
          </div>

          {showPasswordContainer && (
            <div>
              <label
                htmlFor="password"
                className="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
              >
                Password
              </label>
              <div className="flex items-center gap-5">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  autoComplete="off"
                  placeholder="your password"
                  className="w-[90%] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-2.5 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:text-white"
                  value={userData.password}
                  onChange={(e) => {
                    setUserData({ ...userData, password: e.target.value });
                  }}
                />
                {showPassword === false ? (
                  <IoIosEyeOff
                    className="text-blue-800"
                    onClick={() => setShowPassword(!showPassword)}
                  />
                ) : (
                  <IoIosEye
                    className="text-blue-800"
                    onClick={() => setShowPassword(!showPassword)}
                  />
                )}
              </div>
            </div>
          )}
          <div className="flex gap-2 pt-2">
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
        </form>
      </div>
    </div>
  );
};

export default UpdateUser;
