import { createContext, useCallback, useEffect, useState } from "react";
import { baseurl, postRequest } from "../utils/service";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [loginError, setLoginError] = useState("");
  const [loginMessage, setLoginMessage] = useState(false);
  const [loginInfo, setLoginInfo] = useState({ email: "", password: "" });
  const [isLoading, setIsLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      try {
        const parsedUser = JSON.parse(user);
        setUser(parsedUser);
        setIsAuthenticated(true);
      } catch (err) {
        console.error("Failed to parse user:", err);
        localStorage.removeItem("user");
      }
    }
    setIsLoading(false);
  }, []);

  const loginUser = useCallback(
    async (e) => {
      e.preventDefault();
      setLoginError("");
      setLoginMessage(false);

      try {
        const response = await postRequest(
          `${baseurl}/users/login`,
          JSON.stringify(loginInfo)
        );
        if (response.user) {
          setUser(response.user);
          setIsAuthenticated(true);
          setLoginMessage(true);
          localStorage.setItem("user", JSON.stringify(response.user));
          setLoginInfo({ email: "", password: "" });
          navigate("/admin");
        } else if (response.message === "Invalid credentials") {
          setLoginError("Invalid credentials");
        } else if (response.error === "AccountDisabled") {
          setLoginError(response.message);
        }
      } catch (err) {
        console.error("Login failed:", err);
        setLoginError("Something went wrong");
      }
    },
    [loginInfo, navigate]
  );

  const updateLoginInfo = useCallback((info) => {
    setLoginInfo(info);
  }, []);

  const logoutUser = useCallback(async () => {
    console.log(user);

    try {
      const payload = {
        username: user.name,
        task: `User ${user.name} logout`,
      };
      const response = await postRequest(
        `${baseurl}/userlog`,
        JSON.stringify(payload)
      );

      if (response.error) {
        setLoginError(response.error);
        return;
      } else {
        localStorage.removeItem("user");
        setUser(null);
        setIsAuthenticated(false);
        navigate("/login");
      }
    } catch (err) {
      console.error("Login failed:", err);
      setLoginError("Something went wrong");
    }
  }, [navigate, user]);

  const checkAuth = useCallback(() => isAuthenticated, [isAuthenticated]);

  return (
    <AuthContext.Provider
      value={{
        user,
        loginInfo,
        loginError,
        loginMessage,
        isAuthenticated,
        loginUser,
        isLoading,
        setLoginError,
        setLoginInfo,
        updateLoginInfo,
        logoutUser,
        checkAuth,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext };
