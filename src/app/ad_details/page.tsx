"use client";
import { useSearchParams, useRouter } from "next/navigation";
import { useState, Suspense } from "react";
import { FaTimes } from "react-icons/fa";
import Image from "next/image";

function AdDetailsContent() {
  const params = useSearchParams();
  const router = useRouter();

  const [isEdit, setIsEdit] = useState(false);
  const [title, setTitle] = useState(params.get("title") || "");
  const [description, setDescription] = useState(params.get("description") || "");
  const [price, setPrice] = useState(params.get("price") || "");
  const [uploadType, setUploadType] = useState<"photo" | "video">("photo");
  const [preview, setPreview] = useState(params.get("image") || "");

  const handleSave = () => {
    setIsEdit(false);
    alert("Changes saved (for demo only, not connected to backend)");
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event: ProgressEvent<FileReader>) => {
        if (typeof event.target?.result === "string") {
          setPreview(event.target.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50 px-4 relative">
      <button
        onClick={() => router.push("/")}
        className="absolute top-6 right-6 text-gray-600 hover:text-red-500 transition"
        aria-label="Close"
      >
        <FaTimes size={24} />
      </button>

      <div className="bg-white shadow-xl rounded-xl p-7 w-full max-w-md">
        <h2 className="text-3xl font-bold mb-3 text-center">Product Details</h2>
        <div>
          <h6 className="mb-1">Title</h6>
          <input
            type="text"
            placeholder="Ad Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            disabled={!isEdit}
            className="border rounded p-3 mb-4 w-full focus:outline-none focus:ring-2 focus:ring-indigo-400 disabled:bg-gray-100"
          />
        </div>
        <div>
          <h6 className="mb-1">Description</h6>
          <textarea
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            disabled={!isEdit}
            className="border rounded p-3 mb-4 w-full focus:outline-none focus:ring-2 focus:ring-indigo-400 disabled:bg-gray-100"
          />
        </div>
        <div>
          <h6 className="mb-1">Price</h6>
          <input
            type="number"
            placeholder="Set Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            disabled={!isEdit}
            className="border rounded p-3 mb-4 w-full focus:outline-none focus:ring-2 focus:ring-indigo-400 disabled:bg-gray-100"
          />
        </div>

        {/* Toggle Button for Photo/Video */}
        {isEdit && (
          <div className="flex mb-4 justify-center rounded-full overflow-hidden">
            <button
              className={`px-4 py-2 rounded transition-all duration-300 ${uploadType === "photo" ? "bg-indigo-600 text-white" : "bg-gray-100"
                }`}
              onClick={() => setUploadType("photo")}
            >
              Photo
            </button>
            <button
              className={`px-4 py-2 rounded transition-all duration-300 ${uploadType === "video" ? "bg-indigo-600 text-white" : "bg-gray-100"
                }`}
              onClick={() => setUploadType("video")}
            >
              Video
            </button>
          </div>
        )}

        {/* Preview & Upload Section */}
        {uploadType === "photo" ? (
          <>
            {preview && !isEdit && (
              <div className="w-full h-40 relative mb-4">
                <Image
                  src={preview}
                  alt="Ad"
                  fill
                  className="object-cover rounded"
                  unoptimized={true}
                />
              </div>
            )}
            {isEdit && (
              <div className="flex justify-center">
                <label className="bg-indigo-600 text-white px-4 py-2 rounded cursor-pointer hover:bg-indigo-700 transition">
                  Update Photo
                  <input type="file" accept="image/*" className="hidden" onChange={handleFileChange} />
                </label>
              </div>
            )}
          </>
        ) : (
          <>
            {preview && !isEdit && (
              <div className="relative w-full h-40 mb-4">
                <video
                  src={preview}
                  controls
                  className="w-full h-full object-cover rounded"
                />
              </div>
            )}
            {isEdit && (
              <div className="flex justify-center">
                <label className="bg-indigo-600 text-white px-4 py-2 rounded cursor-pointer hover:bg-indigo-700 transition">
                  Update Video
                  <input type="file" accept="video/*" className="hidden" onChange={handleFileChange} />
                </label>
              </div>
            )}
          </>
        )}

        {isEdit ? (
          <button
            onClick={handleSave}
            className="bg-indigo-600 hover:bg-indigo-700 text-white py-2 w-full mt-4 rounded"
          >
            Save Changes
          </button>
        ) : (
          <button
            onClick={() => setIsEdit(true)}
            className="bg-indigo-600 hover:bg-indigo-700 text-white py-2 w-full mt-4 rounded"
          >
            Edit
          </button>
        )}
      </div>
    </div>
  );
}

export default function AdDetails() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AdDetailsContent />
    </Suspense>
  );
}