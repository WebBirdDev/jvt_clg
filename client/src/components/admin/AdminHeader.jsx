import { Link } from "react-router-dom";
import useAuth from "../../context/useAuth";

const AdminHeader = () => {
  const { user, logoutUser } = useAuth();
  return (
    <header className="bg-whitey min-w-full text-sm py-5 px-10 flex justify-end items-center rounded-t-md">
      <div className="flex gap-5 items-center">
        <Link to="/admin/profile" className="">
          Hi, {user.name}
        </Link>
        <button onClick={logoutUser} className="bg-admin text-whitey rounded-md cursor-pointer px-3 py-2">Logout</button>
      </div>
    </header>
  );
};

export default AdminHeader;
