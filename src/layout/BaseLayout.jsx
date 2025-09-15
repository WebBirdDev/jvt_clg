import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
const BaseLayout = () => {
  return (
    <main className="">
      <Header />
      <div className="min-h-[100vh] lg:pt-44 lg:px-20">
        <Outlet/>
      </div>
      <Footer />
    </main>
  );
};

export default BaseLayout;
