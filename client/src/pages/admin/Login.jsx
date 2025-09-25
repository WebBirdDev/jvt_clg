import React, { useState } from "react";
import { IoIosEyeOff } from "react-icons/io";
import { IoIosEye } from "react-icons/io";
import bg from "../../assets/admin/login_bg.jpg";
import useAuth from "../../context/useAuth";
const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { loginInfo, loginUser, updateLoginInfo, loginError } = useAuth();
  // console.log(loginError);
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const handleLogin = async (e) => {
    e.preventDefault();
    let emailerr = "";
    let passworderr = "";

    if (!loginInfo.email) {
      emailerr = "Email is required";
    }

    if (!loginInfo.password) {
      passworderr = "Password is required";
    }

    setErrors({
      email: emailerr,
      password: passworderr,
    });

    if (emailerr || passworderr) {
      return;
    }
    await loginUser(e);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    updateLoginInfo({
      ...loginInfo,
      [name]: value,
    });

    setErrors((prev) => ({
      ...prev,
      [name]: value
        ? ""
        : `${name.charAt(0).toUpperCase() + name.slice(1)} is required`,
    }));
  };

  return (
    <main
      className="min-w-full bg-cover bg-no-repeat flex items-center justify-center h-[100vh]"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="h-fit bg-white/20 px-10 py-5  rounded-md border-[1px] border-purple-400 backdrop-blur-md ">
        <h3 className="text-xl font-bold py-5 text-purple-700 text-center pb-5">
          Login
        </h3>
        <form onSubmit={handleLogin} className="lg:w-96 pt-5 pb-14">
          <div className="flex lg:flex-row flex-col gap-3 lg:items-center mb-4">
            <label className="w-14 mr-5">Email</label>
            <input
              type="email"
              className="border-[1px] lg:w-fit w-full flex-1 lg:text-base text-xs lg:px-2 lg:py-2 py-2 px-1 rounded-md border-black/20 outline-none focus:border-purple-400"
              name="email"
              value={loginInfo.email}
              placeholder="user@gmail.com"
              onChange={handleInputChange}
              autoComplete="off"
            />
          </div>
          {errors.email && (
            <p className="text-red-600 text-sm mb-4 text-center">{errors.email}</p>
          )}

          <div className="flex lg:flex-row flex-col gap-3 lg:items-center">
            <label className="w-14 mr-5">Password</label>
            <div className="border-[1px] flex-1   flex px-2 py-2 rounded-md border-black/20 outline-none focus-within:border-purple-400">
              <input
                type={showPassword ? "text" : "password"}
                className="outline-none w-full lg:text-sm text-xs"
                name="password"
                placeholder="your password"
                value={loginInfo.password}
                onChange={handleInputChange}
                autoComplete="off"
              />
              {showPassword === false ? (
                <IoIosEyeOff
                  className="text-purple-800"
                  onClick={() => setShowPassword(!showPassword)}
                />
              ) : (
                <IoIosEye
                  className="text-purple-800"
                  onClick={() => setShowPassword(!showPassword)}
                />
              )}
            </div>
          </div>
          {errors.password && (
            <p className="text-red-600 text-sm mt-4 text-center">{errors.password}</p>
          )}
          <button
            type="submit"
            className="bg-purple-500 mt-10 w-full px-5 py-2 rounded-md text-white hover:bg-purple-800 transition-colors duration-700 ease-in"
          >
            Login
          </button>
          {loginError && (
            <p className="text-red-600 text-sm pt-3 text-center">
              {loginError}
            </p>
          )}
        </form>
      </div>
    </main>
  );
};

export default Login;
