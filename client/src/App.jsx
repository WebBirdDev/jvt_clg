import ScrollToTop from "./components/ScrollToTop";
import { Navigate, Route, Routes } from "react-router-dom";
import BaseLayout from "./layout/BaseLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Academic from "./pages/Academic";
import Services from "./pages/Services";
import Career from "./pages/Career";
import Happenings from "./pages/Happenings";
import News from "./pages/News";
import Events from "./pages/Events";
import Contact from "./pages/Contact";
import "./App.css";
import PastEvents from "./pages/PastEvents";
import Sitemap from "./pages/Sitemap";
import TermsConditions from "./pages/TermsConditions";
import Privacy from "./pages/Privacy";
import PastSingleEvent from "./components/PastSingleEvent";
import SingleEvent from "./components/SingleEvent";
import SingleNews from "./components/SingleNews";
import useAuth from "./context/useAuth";
import ProtectedRoute from "./components/admin/ProtectedRoute";
import AdminLayout from "./layout/AdminLayout";
import Login from "./pages/admin/Login";
const App = () => {
  const { isAuthenticated } = useAuth();
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<BaseLayout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/academic" element={<Academic />} />
          <Route path="/services" element={<Services />} />
          <Route path="/career" element={<Career />} />
          <Route path="/happenings" element={<Happenings />} />
          <Route path="/news" element={<News />} />
          <Route path="/news/:id" element={<SingleNews />} />
          <Route path="/events" element={<Events />} />
          <Route path="/events/:id" element={<SingleEvent />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/past_events" element={<PastEvents />} />
          <Route path="/past_events/:id" element={<PastSingleEvent />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<TermsConditions />} />
          <Route path="/sitemap" element={<Sitemap />} />
          <Route path="*" element={<Home />} />
        </Route>
        <Route
          path="/login"
          element={isAuthenticated ? <Navigate to="/admin" /> : <Login />}
        />
        <Route element={<ProtectedRoute />}>
          <Route path="admin" element={<AdminLayout />} />
          {/* <Route path="users" element={<Users />} />
          <Route path="logs" element={<UserLogs />} />
          <Route path="*" element={<AdminHome />} /> */}
        </Route>
      </Routes>
    </>
  );
};

export default App;
