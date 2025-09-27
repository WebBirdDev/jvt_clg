import React, { useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";
import { useNavigate, useParams } from "react-router-dom";
import { FiUploadCloud } from "react-icons/fi";
import useAuth from "../../../context/useAuth";
import { useRef } from "react";
import {
  uploadurl,
  baseurl,
  getRequest,
  updateRequest,
} from "../../../utils/service";
import { IoArrowBackOutline } from "react-icons/io5";
import { toast } from "react-toastify";

const UpdateStory = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [previewImage, setPreviewImage] = useState(null);
  const { user } = useAuth();
  const [storyData, setStoryData] = useState({
    name: "",
    img: null,
    quote: "",
    faculty: "",
  });

  useEffect(() => {
    const getStory = async () => {
      try {
        const response = await getRequest(`${baseurl}/stories/${id}`);
        if (response.error) {
          console.log(response.error);
          return;
        }
        setStoryData({
          name: response.name,
          quote: response.quote,
          faculty: response.faculty,
        });
        setPreviewImage(
          `${uploadurl}/uploads/success_story/${response.img.replace(/\\/g, "/")}`
        );
      } catch (error) {
        console.error("error in fetching story details", error);
      }
    };
    getStory();
  }, [id]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setStoryData({ ...storyData, img: file });
      setPreviewImage(URL.createObjectURL(file));
    }
  };

  const fileInput = useRef(null);
  const openFileExplorer = () => {
    fileInput.current.click();
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", storyData.name);
    formData.append("quote", storyData.quote);
    formData.append("faculty", storyData.faculty);

    if (storyData.img) {
      formData.append("img", storyData.img);
    }
    formData.append("username", user?.name || "unknown");
    formData.append("task", `Success story ${storyData.name} is created.`);

    // Simulate submission (you can replace this with API call)
    console.log("Submitting story post with data:");
    for (let [key, value] of formData.entries()) {
      console.log(`${key}:`, value);
    }

    const response = await updateRequest(`${baseurl}/stories/`, formData);
    if (response.error) {
      console.log(response.message);
    } else {
      toast("Success story Created successfully");
      setStoryData({
        name: "",
        quote: "",
        img: null,
        faculty: "",
      });
      setPreviewImage(null);
    }
  };
  return (
    <main>
      <form onSubmit={handleSubmit} className="space-y-4 px-20 py-0">
        <div className="w-[80%] flex flex-col gap-5 border-1 border-slate-300 rounded-md shadow-md px-10 py-6">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-semibold text-gray-900 mb-5 dark:text-white">
              Update Success Story
            </h3>
            <button
              type="button"
              onClick={() => navigate(-1)}
              className="flex items-center gap-2 cursor-pointer hover:text-purple-500 transition-colors duration-300 ease-in"
            >
              <IoArrowBackOutline />
              Go Back
            </button>
          </div>
          <div className="flex items-center gap-5">
            <div className="flex lg:w-[50%] items-center gap-5">
              <label
                htmlFor="student_name"
                className="block mb-1 w-44 text-sm font-medium text-gray-900 dark:text-white"
              >
                Student Name
              </label>
              <input
                type="text"
                id="student_name"
                placeholder="Student name"
                className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-2.5 focus:ring-purple-500 focus:border-purple-500 dark:bg-gray-600 dark:border-gray-500 dark:text-white"
                required
                autoComplete="off"
                value={storyData.name}
                onChange={(e) =>
                  setStoryData({ ...storyData, name: e.target.value })
                }
              />
            </div>
            <div className="flex lg:w-[50%] items-center gap-5">
              <label className="block mb-1 text-sm font-medium text-gray-900 dark:text-white">
                Faculty
              </label>
              <input
                type="text"
                id="faculty"
                placeholder="Faculty"
                className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-2.5 focus:ring-purple-500 focus:border-purple-500 dark:bg-gray-600 dark:border-gray-500 dark:text-white"
                required
                autoComplete="off"
                value={storyData.faculty}
                onChange={(e) =>
                  setStoryData({
                    ...storyData,
                    faculty: e.target.value,
                  })
                }
              />
            </div>
          </div>
          <div className="flex mt-5 gap-5">
            <label className="block mb-1 w-32 text-sm font-medium text-gray-900 dark:text-white">
              Quote
            </label>
            <textarea
              rows={9}
              className="w-full outline-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-2.5 focus:ring-purple-500 focus:border-purple-500 dark:bg-gray-600 dark:border-gray-500 dark:text-white"
              required
              value={storyData.quote}
              onChange={(e) =>
                setStoryData({
                  ...storyData,
                  quote: e.target.value,
                })
              }
            />
          </div>

          <div className="flex mt-5 gap-5">
            <label
              htmlFor="img"
              className="block mb-1 w-32 text-sm font-medium text-gray-900 dark:text-white"
            >
              Student img
            </label>
            {!previewImage ? (
              // Drag & Drop Zone
              <div
                id="dropzone"
                onClick={openFileExplorer}
                className="w-full flex flex-col items-center justify-center border-2 border-dashed border-gray-400 bg-light-bg px-5 py-5 rounded-lg text-center cursor-pointer transition hover:border-purple-500 hover:bg-purple-50"
              >
                <p className="text-gray-500">
                  Drag and drop your student image here
                </p>
                <FiUploadCloud className="text-7xl my-5 text-card" />
                <input
                  type="file"
                  name="resume"
                  id="resumeInput"
                  ref={fileInput}
                  required
                  accept="image/*"
                  className="hidden"
                  onChange={handleImageChange}
                />
              </div>
            ) : (
              // Image Preview + Remove Button
              <div className="relative mt-2 inline-block">
                <img
                  src={previewImage}
                  alt="Preview"
                  className="max-h-40 rounded border border-gray-300 dark:border-gray-600"
                />
                <button
                  type="button"
                  onClick={() => {
                    setPreviewImage(null);
                    setStoryData({ ...storyData, img: null });
                  }}
                  className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                >
                  <MdDelete />
                </button>
              </div>
            )}
          </div>
          <div className="flex items-center gap-10">
            <button
              type="submit"
              className="w-fit bg-yellow-500 px-5 py-2 rounded-md text-whitey  hover:bg-yellow-800 transition-colors duration-300 ease-in cursor-pointer mt-10"
            >
              Update
            </button>
            <button
              type="button"
              onClick={() => navigate(-1)}
              className="w-fit bg-gray-200 border-1 border-gray-500 px-5 py-2 rounded-md text-gray-500 hover:bg-gray-800 hover:text-whitey transition-colors duration-300 ease-in cursor-pointer mt-10"
            >
              Cancel
            </button>
          </div>
        </div>
      </form>
    </main>
  );
};

export default UpdateStory;
