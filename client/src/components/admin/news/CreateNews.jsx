import React, { useState } from "react";
import { MdDelete } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { FiUploadCloud } from "react-icons/fi";
import useAuth from "../../../context/useAuth";
import { useRef } from "react";
import { postRequest, baseurl } from "../../../utils/service";
import { IoArrowBackOutline } from "react-icons/io5";
import { toast } from "react-toastify";

const CreateNews = () => {
  const navigate = useNavigate();
  const [previewImage, setPreviewImage] = useState(null);
  const { user } = useAuth();
  const [newsData, setNewsData] = useState({
    name: "",
    img: null,
    content: "",
    date: "",
  });

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setNewsData({ ...newsData, img: file });
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
    formData.append("name", newsData.name);
    formData.append("content", newsData.content);
    formData.append("date", newsData.date);

    if (newsData.img) {
      formData.append("img", newsData.img);
    }
    formData.append("username", user?.name || "unknown");
    formData.append("task", `News ${newsData.name} is created.`);

    // Simulate submission (you can replace this with API call)
    console.log("Submitting news post with data:");
    for (let [key, value] of formData.entries()) {
      console.log(`${key}:`, value);
    }

    const response = await postRequest(`${baseurl}/news/`, formData);
    if (response.error) {
      console.log(response.message);
    } else {
      toast("News Created successfully");
      setNewsData({
        name: "",
        content: "",
        img: null,
        date: "",
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
              Create News
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
            <label
              htmlFor="student_name"
              className="block mb-1 w-32 text-sm font-medium text-gray-900 dark:text-white"
            >
             News Heading
            </label>
            <input
              type="text"
              id="student_name"
              placeholder="News heading"
              className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-2.5 focus:ring-purple-500 focus:border-purple-500 dark:bg-gray-600 dark:border-gray-500 dark:text-white"
              required
              autoComplete="off"
              value={newsData.name}
              onChange={(e) =>
                setNewsData({ ...newsData, name: e.target.value })
              }
            />
          </div>
          <div className="flex mt-5 gap-5">
            <label className="block mb-1 w-32 text-sm font-medium text-gray-900 dark:text-white">
              Content
            </label>
            <textarea
              rows={9}
              className="w-full outline-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-2.5 focus:ring-purple-500 focus:border-purple-500 dark:bg-gray-600 dark:border-gray-500 dark:text-white"
              required
              placeholder="Your news content goes here..."
              value={newsData.content}
              onChange={(e) =>
                setNewsData({
                  ...newsData,
                  content: e.target.value,
                })
              }
            />
          </div>
          <div className="flex gap-5">
            <label className="block mb-1 w-28 text-sm font-medium text-gray-900 dark:text-white">
              Content
            </label>
            <input type="date"
              rows={9}
              className="w-fit outline-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-2.5 focus:ring-purple-500 focus:border-purple-500 dark:bg-gray-600 dark:border-gray-500 dark:text-white"
              required
              value={newsData.date}
              onChange={(e) =>
                setNewsData({
                  ...newsData,
                  date: e.target.value,
                })
              }
            />
          </div>

          <div className="flex mt-5 gap-5">
            <label
              htmlFor="img"
              className="block mb-1 w-32 text-sm font-medium text-gray-900 dark:text-white"
            >
              Cover Image
            </label>
            {!previewImage ? (
              // Drag & Drop Zone
              <div
                id="dropzone"
                onClick={openFileExplorer}
                className="w-full flex flex-col items-center justify-center border-2 border-dashed border-gray-400 bg-light-bg px-5 py-5 rounded-lg text-center cursor-pointer transition hover:border-purple-500 hover:bg-purple-50"
              >
                <p className="text-gray-500">
                  Drag and drop your news cover image here
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
                    setNewsData({ ...newsData, img: null });
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
              className="w-fit bg-green-500 px-5 py-2 rounded-md text-whitey  hover:bg-green-800 transition-colors duration-300 ease-in cursor-pointer mt-10"
            >
              Create
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

export default CreateNews;
