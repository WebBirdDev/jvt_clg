import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { GoDotFill } from "react-icons/go";
import { TbEdit } from "react-icons/tb";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { getRequest, baseurl } from "../../utils/service";
import CreateUser from "../../components/admin/users/CreateUser";
import UpdateUser from "../../components/admin/users/UpdateUser";
import DeleteUser from "../../components/admin/users/DeleteUser";
import UpdateStatus from "../../components/admin/users/UpdateStatus";
import useAuth from "../../context/useAuth";

const AdminUsers = () => {
  const { user } = useAuth();
  console.log(user);
  const [userDetails, setUserDetails] = useState([]);
  const [search, setSearch] = useState("");
  const [openCreateModal, setOpenCreateModal] = useState(false);
  const [openUpdateModal, setOpenUpdateModal] = useState(false);
  const [openStatusModal, setOpenStatusModal] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState("");

  const getUserDetails = async () => {
    try {
      const response = await getRequest(`${baseurl}/users`);
      if (response.error) {
        console.log(response.error);
        return;
      }
      setUserDetails(response.users);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getUserDetails();
  }, []);
  const filteredUsers = userDetails.filter((user) => {
    const query = search.toLowerCase();
    return (
      user.username.toLowerCase().includes(query) ||
      user.role.toLowerCase().includes(query) ||
      user.status.toLowerCase().includes(query)
    );
  });

  const handleCreateCloseModal = () => {
    setOpenCreateModal(false);
    getUserDetails();
  };

  const handleUpdateCloseModal = () => {
    setOpenUpdateModal(false);
    getUserDetails();
  };

  const handleDeleteCloseModal = () => {
    setOpenDeleteModal(false);
    getUserDetails();
  };

  const handleUpdateStatusCloseModal = () => {
    setOpenStatusModal(false);
    getUserDetails();
  };
  return (
    <main className="py-20 px-5">
      <div className="flex items-center justify-between w-full">
        <h1 className="text-primary font-semibold">User Details</h1>
        <div className="flex items-center gap-5">
          <div>
            <input
              type="text"
              placeholder="Search..."
              onChange={(e) => setSearch(e.target.value)}
              className=" outline-none border-2 py-2 px-3 border-ternary rounded-md"
            />
          </div>
          <button
            onClick={() => {
              if (user.role === "super_admin" || user.role === "admin")
                setOpenCreateModal(true);
            }}
            className={` ${
              user.role === "super_admin" || user.role === "admin"
                ? "text-whitey bg-admin cursor-pointer"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
            } px-5 py-3 rounded-xl`}
          >
            Create user
          </button>
        </div>
      </div>
      <div className="overflow-x-auto mt-5 bg-white px-5 py-5 w-full">
        <table className="w-full text-sm text-left  bg-ternary/20 shadow-md shadow-[#8863f73d] rounded-md">
          <thead className="text-xs text-whitey uppercase bg-admin shadow-xl rounded-t-md dark:bg-purple-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-4 py-3">
                #
              </th>
              <th scope="col" className="px-4 py-3">
                username
              </th>
              <th scope="col" className="px-4 py-3">
                email
              </th>
              <th scope="col" className="px-4 py-3">
                role
              </th>
              <th scope="col" className="px-4 py-3">
                status
              </th>
              <th scope="col" className="px-4 py-3">
                <span className="">Actions</span>
              </th>
            </tr>
          </thead>
          <tbody className="">
            {filteredUsers.length > 0 ? (
              filteredUsers.map((listedUsers, i) => (
                <tr
                  key={listedUsers._id}
                  className="hover:bg-ternary/40 border-b-1 border-black-two/10 hover:text-purple-900 cursor-pointer"
                >
                  <td className="px-4 py-3">{i + 1}</td>
                  <th
                    scope="row"
                    className="px-4 py-3 font-medium whitespace-nowrap dark:text-white"
                  >
                    {listedUsers.username}
                  </th>
                  <td className="px-4 py-3">{listedUsers.email} </td>
                  <td className="px-4 py-3">
                    {listedUsers.role === "super_admin"
                      ? "super admin"
                      : listedUsers.role}
                  </td>
                  <td className="px-4 py-3">
                    <span
                      onClick={() => {
                        if (
                          user.role === "super_admin" ||
                          user.role === "admin"
                        )
                          setOpenStatusModal(true);
                        setSelectedUserId(listedUsers._id);
                      }}
                      className={`mx-4 my-3 flex items-center gap-1 ${
                        listedUsers.status === "active"
                          ? "bg-green-300/50 text-green-600"
                          : user.status === "disabled"
                          ? "bg-red-300/50 text-red-600"
                          : ""
                      } w-fit pl-2 pr-4 py-1 rounded-full`}
                    >
                      <GoDotFill />
                      {listedUsers.status}
                    </span>
                  </td>
                  <td className="px-4 py-3 ">
                    <div className="flex w-fit gap-5">
                      <button
                        onClick={() => {
                          if (
                            user.role === "super_admin" ||
                            user.role === "admin"
                          ) {
                            setOpenUpdateModal(true);
                            setSelectedUserId(listedUsers._id);
                          }
                        }}
                        disabled={
                          user.role !== "super_admin" && user.role !== "admin"
                        }
                        className={`flex items-center gap-2 px-3 py-1 rounded-md transition-colors duration-300 ease-in
                        ${
                          user.role !== "super_admin" && user.role !== "admin"
                            ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                            : "bg-yellow-300 text-black/50 hover:bg-yellow-500 cursor-pointer"
                        }`}
                      >
                        <TbEdit />
                        Edit
                      </button>

                      <button
                        onClick={() => {
                          if (
                            user.role === "super_admin" ||
                            user.role === "admin"
                          ) {
                            setOpenDeleteModal(true);
                            setSelectedUserId(listedUsers._id);
                          }
                        }}
                        className={`flex items-center gap-2 px-3 py-1 rounded-md transition-colors duration-300 ease-in
                        ${
                          user.role !== "super_admin" && user.role !== "admin"
                            ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                            : "bg-red-500 text-whitey hover:bg-red-600 cursor-pointer"
                        }`}
                      >
                        <MdOutlineDeleteOutline />
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={6} className="py-4 px-2 text-center">
                  No users found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      {openCreateModal && (
        <CreateUser isOpen={openCreateModal} onClose={handleCreateCloseModal} />
      )}
      {openUpdateModal && (
        <UpdateUser
          isOpen={openUpdateModal}
          onClose={handleUpdateCloseModal}
          userId={selectedUserId}
        />
      )}
      {openDeleteModal && (
        <DeleteUser
          isOpen={openDeleteModal}
          onClose={handleDeleteCloseModal}
          userId={selectedUserId}
        />
      )}
      {openStatusModal && (
        <UpdateStatus
          isOpen={openStatusModal}
          onClose={handleUpdateStatusCloseModal}
          userId={selectedUserId}
        />
      )}
    </main>
  );
};

export default AdminUsers;
