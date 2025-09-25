import React from "react";
import AdminHeader from "../components/admin/AdminHeader";
import { AdminSidebar } from "../components/admin/AdminSidebar";
import { Outlet } from "react-router-dom";
const AdminLayout = () => {
  return (
    <main className="font-primary min-h-screen text-black-two bg-gray-200">
      <div className="w-full">
        <AdminHeader />
      </div>
      <div className="flex flex-row gap-5 md:flex-row">
        <aside className="w-full md:w-52">
          <AdminSidebar />
        </aside>

        <section className="flex-1 px-10 py-8 md:py-28">
          <Outlet />
        </section>
      </div>
    </main>
  );
};

export default AdminLayout;
