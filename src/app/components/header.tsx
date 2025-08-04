"use client";
import { useState, useEffect } from "react";
import { FaSearch, FaPlus, FaVideo } from "react-icons/fa";
import Link from "next/link";

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const [suggestions] = useState([
    "Mumbai,Maharashtra",
    "Navi-Mumbai",
    "Mumbra",
    "Mirzapur",
    "Mangalore",
    "Kerela",
    "Kolkata",
    "Kalyan",
    "Kanpur",
    "Delhi",
    "Pune",
    "Bangalore",
    "Hyderabad",
  ]);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showSellModal, setShowSellModal] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const [uploadType, setUploadType] = useState<"photo" | "video">("photo");
  // Removed unused showPassword, showConfirmPassword and their setters

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest(".dropdown-container")) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const filtered = suggestions.filter((item) =>
    item.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <header className="text-gray-600 body-font">
      <nav className="fixed top-0 left-0 z-[999] w-full bg-indigo-600 text-white p-3">
        <div className="max-w-screen-xl mx-auto flex flex-wrap items-center justify-between gap-4">
          {/* Logo */}
          <h1 className="text-2xl font-bold">Olxified</h1>

          {/* Location Search - hidden on small screens */}
          <div className="relative hidden md:flex items-center w-full md:w-auto md:flex-1">
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Enter City/Country"
              className="text-black bg-white p-2 pl-10 rounded shadow-2xl placeholder:text-gray-700 w-full md:w-64"
            />
            {query && filtered.length > 0 && (
              <ul className="absolute top-full mt-1 w-full bg-white border rounded shadow-md z-10 text-black">
                {filtered.map((item, index) => (
                  <li
                    key={index}
                    className="p-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => setQuery(item)}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Item Search */}
          <div className="relative w-full md:w-auto">
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
            <input
              type="text"
              placeholder="Search Items!"
              className="text-black bg-white p-2 pl-10 rounded shadow-2xl placeholder:text-gray-700 w-full md:w-64"
            />
          </div>

          {/* Category Dropdown */}
          <div className="relative">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="bg-indigo-500 hover:bg-indigo-700 text-white font-medium px-5 py-2 rounded-full shadow-lg transition-all"
            >
              Categories
            </button>
            <div
              className={`absolute mt-2 w-40 bg-white shadow-lg rounded-lg z-20 transform transition-all duration-300 ease-in-out ${
                dropdownOpen
                  ? "opacity-100 scale-100 translate-y-0"
                  : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
              }`}
            >
              <ul className="py-2 text-black">
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Bikes
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Cars
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Mobile Phones
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Jewellery
                </li>
              </ul>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-2 flex-wrap">
            <button
              onClick={() => setShowSellModal(true)}
              className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-medium px-5 py-2 rounded-full shadow-lg transition-all"
            >
              <FaPlus />
              Sell
            </button>
            <button
              onClick={() => setShowLogin(true)}
              className="bg-white text-indigo-600 font-medium px-5 py-2 rounded-full border border-indigo-400 shadow-md hover:bg-indigo-50 transition-all"
            >
              Login
            </button>
          </div>
        </div>
      </nav>

      <div
        className={`${
          showLogin || showSellModal ? "blur-md" : ""
        } transition-all duration-300 mt-16`}
      >
        <div className="mx-auto md:flex-row"></div>
      </div>

      {/* LOGIN MODAL */}
      {showLogin && (
        <div className="fixed inset-0 flex items-center justify-center bg-white z-[1000] transition-all">
          <button
            className="absolute top-4 right-4 text-2xl font-bold text-gray-600 hover:text-gray-800"
            onClick={() => setShowLogin(false)}
          >
            ✕
          </button>
          <div className="bg-white w-[400px] p-8 rounded-lg shadow-2xl relative overflow-hidden">
            <h2 className="text-3xl font-bold mb-4 text-center">
              {isSignUp ? "Sign Up to Olxified" : "Login to Olxified"}
            </h2>

            <div className="flex mb-6 justify-center rounded-full overflow-hidden">
              <button
                className={`px-4 py-2 transition-all duration-300 ${
                  !isSignUp ? "bg-indigo-600 text-white" : "bg-gray-100"
                }`}
                onClick={() => setIsSignUp(false)}
              >
                Sign In
              </button>
              <button
                className={`px-4 py-2 transition-all duration-300 ${
                  isSignUp ? "bg-indigo-600 text-white" : "bg-gray-100"
                }`}
                onClick={() => setIsSignUp(true)}
              >
                Sign Up
              </button>
            </div>

            <div
              className={`relative transition-all duration-500 ease-in-out ${
                isSignUp ? "h-[520px]" : "h-[260px]"
              }`}
            >
              {/* Sign In Form */}
              <form
                className={`absolute w-full transition-all duration-500 ${
                  isSignUp
                    ? "translate-x-full opacity-0"
                    : "translate-x-0 opacity-100"
                }`}
              >
                <input
                  type="email"
                  placeholder="Email"
                  className="border rounded p-3 mb-4 w-full focus:outline-none focus:ring-2 focus:ring-indigo-400"
                  suppressHydrationWarning
                  data-lpignore="true"
                  data-gramm="false"
                  data-gramm_editor="false"
                  data-enable-grammarly="false"
                  data-form-type="other"
                  data-prevent-extensions="true"
                />
                {/* Changed to always use password type */}
                <input
                  type="password"
                  placeholder="Password"
                  className="border rounded p-3 mb-4 w-full focus:outline-none focus:ring-2 focus:ring-indigo-400"
                  suppressHydrationWarning
                  data-lpignore="true"
                  data-gramm="false"
                  required
                />
                <button
                  type="submit"
                  className="bg-indigo-600 hover:bg-indigo-700 text-white py-2 w-full rounded"
                >
                  Login
                </button>
                <p className="text-center mt-4 text-sm">
                  Don’t have an account?{" "}
                  <span
                    className="text-indigo-600 cursor-pointer hover:underline"
                    onClick={() => setIsSignUp(true)}
                  >
                    Sign Up
                  </span>
                </p>
              </form>

              {/* Sign Up Form */}
              <form
                className={`absolute w-full transition-all duration-500 ${
                  isSignUp
                    ? "translate-x-0 opacity-100"
                    : "-translate-x-full opacity-0"
                }`}
              >
                <input
                  type="text"
                  placeholder="First Name"
                  className="border rounded p-3 mb-4 w-full focus:outline-none focus:ring-2 focus:ring-indigo-400"
                  suppressHydrationWarning
                  data-lpignore="true"
                  data-gramm="false"
                  data-gramm_editor="false"
                  data-enable-grammarly="false"
                  data-form-type="other"
                  required
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="border rounded p-3 mb-4 w-full focus:outline-none focus:ring-2 focus:ring-indigo-400"
                  suppressHydrationWarning
                  data-lpignore="true"
                  data-gramm="false"
                  data-gramm_editor="false"
                  data-enable-grammarly="false"
                  data-form-type="other"
                  required
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="border rounded p-3 mb-4 w-full focus:outline-none focus:ring-2 focus:ring-indigo-400"
                  suppressHydrationWarning
                  data-lpignore="true"
                  data-gramm="false"
                  data-gramm_editor="false"
                  data-enable-grammarly="false"
                  data-form-type="other"
                  required
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="border rounded p-3 mb-4 w-full focus:outline-none focus:ring-2 focus:ring-indigo-400"
                  suppressHydrationWarning
                  data-lpignore="true"
                  data-gramm="false"
                  data-gramm_editor="false"
                  data-enable-grammarly="false"
                  data-form-type="other"
                  required
                />
                <input
                  type="password"
                  placeholder="Password"
                  className="border rounded p-3 mb-4 w-full focus:outline-none focus:ring-2 focus:ring-indigo-400"
                  suppressHydrationWarning
                  data-lpignore="true"
                  data-gramm="false"
                  data-gramm_editor="false"
                  data-enable-grammarly="false"
                  data-form-type="other"
                  required
                />
                <input
                  type="password"
                  placeholder="Confirm Password"
                  className="border rounded p-3 mb-4 w-full focus:outline-none focus:ring-2 focus:ring-indigo-400"
                  suppressHydrationWarning
                  data-lpignore="true"
                  data-gramm="false"
                  data-gramm_editor="false"
                  data-enable-grammarly="false"
                  data-form-type="other"
                  required
                />
                <button
                  type="submit"
                  className="bg-indigo-600 hover:bg-indigo-700 text-white py-2 w-full rounded"
                >
                  Signup
                </button>
                <p className="text-center mt-4 text-sm">
                  Already have an account?{" "}
                  <span
                    className="text-indigo-600 cursor-pointer hover:underline"
                    onClick={() => setIsSignUp(false)}
                  >
                    Sign In
                  </span>
                </p>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* SELL MODAL WITH TOGGLE */}
      {showSellModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-white z-[1000] transition-all">
          <button
            className="absolute top-4 right-4 text-2xl font-bold text-gray-600 hover:text-gray-800"
            onClick={() => setShowSellModal(false)}
          >
            ✕
          </button>
          <div className="bg-white w-[500px] p-8 rounded-lg shadow-2xl relative ">
            <h2 className="text-3xl font-bold mb-4 text-center">
              Post Your Ad
            </h2>

            <input
              type="text"
              placeholder="Ad Title"
              className="border rounded p-3 mb-4 w-full focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
            <textarea
              placeholder="Description"
              className="border rounded p-3 mb-4 w-full focus:outline-none focus:ring-2 focus:ring-indigo-400"
            ></textarea>
            <input
              type="number"
              placeholder="Set Price"
              className="border rounded p-3 mb-4 w-full focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />

            {/* Toggle Photos / Video */}
            <div className="flex mb-6 justify-center rounded-full overflow-hidden  ">
              <button
                className={`px-4 py-2 transition-all duration-300 ${
                  uploadType === "photo"
                    ? "bg-indigo-600 text-white"
                    : "bg-gray-100"
                }`}
                onClick={() => setUploadType("photo")}
              >
                Photos
              </button>
              <button
                className={`px-4 py-2 transition-all duration-300 ${
                  uploadType === "video"
                    ? "bg-indigo-600 text-white"
                    : "bg-gray-100"
                }`}
                onClick={() => setUploadType("video")}
              >
                Video
              </button>
            </div>

            {uploadType === "photo" ? (
              <label className="border-2 border-dashed border-gray-300 rounded-md h-32 flex flex-col items-center justify-center cursor-pointer hover:border-indigo-400 transition">
                <FaPlus className="text-gray-500 text-3xl mb-2" />
                <span className="text-gray-500">Click to upload photos</span>
                <input
                  type="file"
                  multiple
                  accept="image/*"
                  className="hidden"
                />
              </label>
            ) : (
              <label className="border-2 border-dashed border-gray-300 rounded-md h-32 flex flex-col items-center justify-center cursor-pointer hover:border-indigo-400 transition">
                <FaVideo className="text-gray-500 text-3xl mb-2" />
                <span className="text-gray-500">Click to upload video</span>
                <input type="file" accept="video/*" className="hidden" />
              </label>
            )}
            <Link
              href="/list_details"
              onClick={() => setShowSellModal(false)}
              className="bg-indigo-600 hover:bg-indigo-700 text-white py-2 w-full mt-4 rounded flex justify-center items-center"
            >
              Submit Ad
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
