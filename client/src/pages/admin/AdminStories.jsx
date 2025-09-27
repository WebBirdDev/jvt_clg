import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { GoDotFill } from "react-icons/go";
import { TbEdit } from "react-icons/tb";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { getRequest, baseurl, uploadurl } from "../../utils/service";
import UpdateStatus from "../../components/admin/story/UpdateStatus";
import DeleteStory from "../../components/admin/story/DeleteStory";

const AdminStories = () => {
  const [storyData, setStoryData] = useState([]);
  const [search, setSearch] = useState("");
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [openStatusModal, setOpenStatusModal] = useState(false);
  const [selectedStoryId, setSelectedStoryId] = useState("");

  const getAllStories = async () => {
    try {
      const response = await getRequest(`${baseurl}/stories`);
      if (response.error) {
        console.log(response.error);
        return;
      }
      setStoryData(response.stories);
    } catch (error) {
      console.error("error in fetching stories details", error);
    }
  };
  useEffect(() => {
    getAllStories();
  }, []);
  const filteredStories = storyData.filter((story) => {
    const query = search.toLowerCase();
    return story.name.toLowerCase().includes(query);
  });
  const handleStatusUpdate = () => {
    setOpenStatusModal(false);
    getAllStories();
  };

  const handleDeleteModal = () => {
    setOpenDeleteModal(false);
    getAllStories();
  };
  return (
    <main className="py-20 px-5">
      <div className="flex items-center justify-between w-full">
        <h1 className="text-primary font-semibold">Success stories</h1>
        <div className="flex items-center gap-5">
          <div>
            <input
              type="text"
              placeholder="Search..."
              onChange={(e) => setSearch(e.target.value)}
              className=" outline-none border-2 py-2 px-3 border-ternary rounded-md"
            />
          </div>
          <Link
            to="/admin/stories/create"
            className="text-whitey bg-admin px-5 py-3 rounded-xl"
          >
            Create Story
          </Link>
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
                Student name
              </th>
              <th scope="col" className="px-4 py-3">
                Image
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
            {filteredStories.length > 0 ? (
              filteredStories.map((story, i) => (
                <tr
                  key={story._id}
                  className="hover:bg-ternary/40 border-b-1 border-black-two/10 hover:text-purple-900 cursor-pointer"
                >
                  <td className="px-4 py-3">{i + 1}</td>
                  <th
                    scope="row"
                    className="px-4 py-3 font-medium whitespace-nowrap dark:text-white"
                  >
                    {story.name}
                  </th>
                  <td className="px-4 py-3">
                    <img
                      src={`${uploadurl}/uploads/success_story/${story.img.replace(
                        /\\/g,
                        "/"
                      )}`}
                      alt={story.name}
                      className="h-16 w-16 object-cover rounded-full"
                    />
                  </td>
                  <td
                    onClick={() => {
                      setOpenStatusModal(true);
                      setSelectedStoryId(story._id);
                    }}
                    className="px-4 py-3"
                  >
                    <span
                      className={`mx-4 my-3 flex items-center gap-1 ${
                        story.status === "active"
                          ? "bg-green-300/50 text-green-600"
                          : story.status === "disabled"
                          ? "bg-red-300/50 text-red-600"
                          : ""
                      } w-fit pl-2 pr-4 py-1 rounded-full`}
                    >
                      <GoDotFill />
                      {story.status}
                    </span>
                  </td>
                  <td className="px-4 py-3 ">
                    <div className="flex gap-5">
                      <Link
                        to={`/admin/stories/update/${story._id}`}
                        className="flex items-center gap-2 bg-yellow-300 px-3 py-1 text-black/50 hover:bg-yellow-500 transition-colors duration-300 ease-in cursor-pointer rounded-md"
                      >
                        <TbEdit />
                        Edit
                      </Link>
                      <button
                        onClick={() => {
                          setOpenDeleteModal(true);
                          setSelectedStoryId(story._id);
                        }}
                        className="flex items-center gap-2 bg-red-500 px-3 py-1 text-whitey hover:bg-red-700 transition-colors duration-300 ease-in cursor-pointer rounded-md"
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
                  No storys found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      {openStatusModal && (
        <UpdateStatus
          isOpen={openStatusModal}
          onClose={handleStatusUpdate}
          story_id={selectedStoryId}
        />
      )}

      {openDeleteModal && (
        <DeleteStory
          isOpen={openDeleteModal}
          onClose={handleDeleteModal}
          story_id={selectedStoryId}
        />
      )}
    </main>
  );
};

export default AdminStories;
