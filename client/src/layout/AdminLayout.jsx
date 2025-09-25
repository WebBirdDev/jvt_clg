import AdminHeader from "../components/admin/AdminHeader";
import { AdminSidebar } from "../components/admin/AdminSidebar";
import { Outlet } from "react-router-dom";
const AdminLayout = () => {
  return (
    <main className="font-primary min-h-screen text-blacky">
      <div className="flex flex-row gap-12 md:flex-row">
        <main className="w-full md:w-52">
          <AdminSidebar />
        </main>
        <main className="flex-1 items-center bg-[#8963f7] pr-2 pt-5 min-h-full">
          <AdminHeader />
          <div className="bg-whitey px-5">
            <Outlet />
          </div>
        </main>
      </div>
    </main>
  );
};

export default AdminLayout;
