import React, { useEffect, useState } from "react";
import useAuth from "../../context/useAuth";
import { baseurl, updateRequest, getRequest } from "../../utils/service";
import { IoIosEyeOff, IoIosEye } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const AdminProfile = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const userId = user.userId;
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
      loggedusername: user?.name || "unknown",
      task: `${showUsername} profile updated.`,
    };
    console.log(JSON.stringify(payload));
    const response = await updateRequest(
      `${baseurl}/users/${userId}`,
      JSON.stringify(payload)
    );
     toast(`Your Profile Details updated`);
    console.log(response);
  };
  return (
    <main className="flex items-center justify-center py-40 px-10">
      <form
        onSubmit={handleSubmit}
        className="space-y-4 bg-light-bg rounded-md border-admin border-1 px-5 py-5"
      >
        <h3 className="text-admin font-bold">Your Profile</h3>
        <div className="flex flex-col gap-y-5">
          <div className="flex gap-3 items-center">
            <label
              htmlFor="username"
              className="block w-52 mb-1 text-sm font-medium text-gray-900 dark:text-white"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              autoComplete="off"
              placeholder="username"
              className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-2.5 focus:ring-admin focus:border-admin dark:bg-gray-600 dark:border-gray-500 dark:text-white"
              required
              value={userData.username}
              onChange={(e) => {
                setUserData({ ...userData, username: e.target.value });
              }}
            />
          </div>
          <div className="flex gap-3 items-center">
            <label
              htmlFor="email"
              className="block w-52 mb-1 text-sm font-medium text-gray-900 dark:text-white"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              autoComplete="off"
              placeholder="useremail@gmail.com"
              className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-2.5 focus:ring-admin focus:border-admin dark:bg-gray-600 dark:border-gray-500 dark:text-white"
              required
              value={userData.email}
              onChange={(e) => {
                setUserData({ ...userData, email: e.target.value });
              }}
            />
          </div>
          <div className="flex items-center gap-3">
            <label
              htmlFor="change_password"
              className="block w-52 mb-1 text-sm font-medium text-gray-900 dark:text-white"
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
                className="block w-52 mb-1 text-sm font-medium text-gray-900 dark:text-white"
              >
                Password
              </label>
              <div className="flex items-center gap-5">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  autoComplete="off"
                  placeholder="your password"
                  className="w-[90%] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-2.5 focus:ring-admin focus:border-admin dark:bg-gray-600 dark:border-gray-500 dark:text-white"
                  value={userData.password}
                  onChange={(e) => {
                    setUserData({ ...userData, password: e.target.value });
                  }}
                />
                {showPassword === false ? (
                  <IoIosEyeOff
                    className="text-admin-800"
                    onClick={() => setShowPassword(!showPassword)}
                  />
                ) : (
                  <IoIosEye
                    className="text-admin-800"
                    onClick={() => setShowPassword(!showPassword)}
                  />
                )}
              </div>
            </div>
          )}
          <div className="flex gap-2 pt-2">
            <button
              type="submit"
              className="px-5 py-2.5 text-sm font-medium text-white bg-admin/80 hover:bg-admin cursor-pointer rounded-lg transition-all duration-700 ease focus:ring-4 focus:outline-none focus:ring-admin-300 dark:bg-admin-600 dark:hover:bg-admin-700 dark:focus:ring-admin-800"
            >
              Update
            </button>
            <button
              onClick={() => navigate("/admin")}
              type="button"
              className="px-5 py-2.5 text-sm font-medium text-black-two border-1 border-gray-300 hover:bg-gray-300 rounded-lg transition-all duration-700 ease focus:ring-4 focus:outline-none focus:ring-admin-300 dark:bg-admin-600 dark:hover:bg-admin-700 dark:focus:ring-admin-800"
            >
              Cancel
            </button>
          </div>
        </div>
      </form>
    </main>
  );
};

export default AdminProfile;
