import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useEffect } from "react";
const BaseLayout = () => {
  const location = useLocation();
  useEffect(() => {
    const imgs = document.querySelectorAll("img");

    imgs.forEach((img) => {
      img.addEventListener("load", () => {
        img.style.display = "none";
        img.offsetHeight; // force reflow
        img.style.display = "";
      });
    });
  }, [location.pathname]);
  return (
    <main className="">
      <Header />
      <div className="min-h-[100vh] lg:pt-56 lg:px-20">
        <Outlet/>
      </div>
      <Footer />
    </main>
  );
};

export default BaseLayout;
