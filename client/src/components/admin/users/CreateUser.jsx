import React, { useState } from "react";
import useAuth from "../../../context/useAuth";
import { postRequest, baseurl } from "../../../utils/service";
import { IoIosEyeOff, IoIosEye } from "react-icons/io";
const CreateUser = ({ isOpen, onClose }) => {
  const { user } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [userData, setUserData] = useState({
    name: "",
    password: "",
    email: "",
    role: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(JSON.stringify(userData));
    const payload = {
      ...userData,
      username: user?.name || "unknown",
      task: `New user ${userData.name} created.`,
    };
    console.log(JSON.stringify(payload));
    const response = await postRequest(
      `${baseurl}/users`,
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
            Create new user
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
              onChange={(e) => {
                setUserData({ ...userData, name: e.target.value });
              }}
            />
          </div>
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
                required
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
          <div className={`${user.role === "super_admin" ? "flex gap-5" : ""}`}>
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
                onChange={(e) => {
                  setUserData({ ...userData, email: e.target.value });
                }}
              />
            </div>
            {user?.role === "super_admin" && (
              <div>
                <label
                  htmlFor="role"
                  className="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Role
                </label>
                <select
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
            )}
          </div>

          <div className="flex gap-2 pt-2">
            <button
              type="submit"
              className="px-5 py-2.5 text-sm font-medium text-white bg-green-500 hover:bg-green-600 rounded-lg transition-all duration-700 ease focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Create
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

export default CreateUser;
