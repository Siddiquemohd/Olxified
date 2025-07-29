"use client";
import { useState, useEffect } from "react";
import { FaSearch, FaPlus, FaVideo } from "react-icons/fa";

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
  const [loginWithNumber, setLoginWithNumber] = useState(false);
  const [showSellModal, setShowSellModal] = useState(false);

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
      <nav className="fixed top-0 left-0 z-[999] w-full text-white bg-indigo-600 p-3 flex items-center justify-between gap-5">
        <h1 className="text-left text-2xl font-bold">Olxified</h1>

        <div className="relative flex items-center">
          <FaSearch className="ml-1 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Enter City/Country"
            className="text-black focus:outline-none ml-2 bg-white p-2 rounded shadow-2xl placeholder:text-gray-700 text-center cursor-pointer"
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

        <div className="relative">
          <FaSearch className="ml-3 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
          <input
            type="text"
            placeholder="Search Items!"
            className="text-black focus:outline-none ml-4 bg-white p-2 w-150 rounded shadow-2xl placeholder:text-gray-700 text-center cursor-pointer"
          />
        </div>

        <div className="relative dropdown-container">
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="bg-indigo-500 hover:bg-indigo-700 text-white font-medium px-5 py-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out"
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

        <div className="flex gap-2">
          <button
            onClick={() => setShowSellModal(true)}
            className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-medium px-5 py-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out"
          >
            <FaPlus />
            Sell
          </button>
          <button
            onClick={() => setShowLogin(true)}
            className="bg-white text-indigo-600 font-medium px-5 py-2 rounded-full border-3 border-indigo-400 shadow-md hover:bg-indigo-50 transition-all duration-300 ease-in-out"
          >
            Login
          </button>
        </div>
      </nav>

      <div className={`${showLogin || showSellModal ? "blur-md" : ""} transition-all duration-300 mt-16`}>
        <div className="mx-auto md:flex-row"></div>
      </div>

      {/* Login Modal */}
      {showLogin && (
        <div className="fixed inset-0 flex items-center justify-center bg-white z-[1000] transition-all">
          <button
            className="absolute top-4 right-4 text-2xl font-bold text-gray-600 hover:text-gray-800"
            onClick={() => setShowLogin(false)}
          >
            ✕
          </button>
          <div className="bg-white w-[400px] p-8 rounded-lg shadow-2xl relative overflow-hidden">
            <h2 className="text-3xl font-bold mb-4 text-center">Login to Olxified</h2>

            <div className="flex mb-6 justify-center border rounded-full border-none overflow-hidden">
              <button
                className={`px-4 py-2 transition-all duration-300 ${
                  !loginWithNumber ? "bg-indigo-600 text-white" : "bg-gray-100"
                }`}
                onClick={() => setLoginWithNumber(false)}
              >
                Sign In
              </button>
              <button
                className={`px-4 py-2 transition-all duration-300 ${
                  loginWithNumber ? "bg-indigo-600 text-white" : "bg-gray-100"
                }`}
                onClick={() => setLoginWithNumber(true)}
              >
                Sign Up
              </button>
            </div>


            <div className="relative h-[200px]">
              <form
                className={`absolute w-full transition-all duration-500 ${
                  loginWithNumber
                    ? "translate-x-full opacity-0"
                    : "translate-x-0 opacity-100"
                }`}
              >
                <input
                  type="email"
                  placeholder="Email"
                  className="border rounded p-3 mb-4 w-full focus:outline-none focus:ring-2 focus:ring-indigo-400"
                  required
                />
                <input
                  type="password"
                  placeholder="Password"
                  className="border rounded p-3 mb-4 w-full focus:outline-none focus:ring-2 focus:ring-indigo-400"
                  required
                />
                <button
                  type="submit"
                  className="bg-indigo-600 hover:bg-indigo-700 text-white py-2 w-full rounded"
                >
                  Submit
                </button>
              </form>

              <form
                className={`absolute w-full transition-all duration-500 ${
                  loginWithNumber
                    ? "translate-x-0 opacity-100"
                    : "-translate-x-full opacity-0"
                }`}
              >
                <input
                  type="tel"
                  placeholder="Enter phone number"
                  className="border rounded p-3 mb-4 w-full focus:outline-none focus:ring-2 focus:ring-indigo-400"
                  required
                />
                <button
                  type="button"
                  className="bg-green-600 hover:bg-green-700 text-white py-2 w-full rounded"
                >
                  Get OTP
                </button>
              </form>
            </div>
            <p className="text-sm text-gray-500 mt-6 text-center">
              Don’t have an account? <a href="#" className="text-indigo-600">Sign Up</a>
            </p>
          </div>
        </div>
      )}

      {/* Sell Modal */}
      {showSellModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-white z-[1000] transition-all">
          <button
            className="absolute top-4 right-4 text-2xl font-bold text-gray-600 hover:text-gray-800"
            onClick={() => setShowSellModal(false)}
          >
            ✕
          </button>
          <div className="bg-white w-[500px] p-8 rounded-lg shadow-2xl relative">
            <h2 className="text-3xl font-bold mb-4 text-center">Post Your Ad</h2>

            <input
              type="text"
              placeholder="Ad Title"
              className="border rounded p-3 mb-4 w-full focus:outline-none focus:ring-2 focus:ring-green-400"
            />
            <textarea
              placeholder="Description"
              className="border rounded p-3 mb-4 w-full focus:outline-none focus:ring-2 focus:ring-green-400"
            ></textarea>
            <input
              type="number"
              placeholder="Set Price"
              className="border rounded p-3 mb-4 w-full focus:outline-none focus:ring-2 focus:ring-green-400"
            />

            {/* Photo Upload */}
            <label className="block font-semibold mb-2">Upload Photos</label>
            <label className="border-2 border-dashed border-gray-300 rounded-md h-32 flex flex-col items-center justify-center cursor-pointer hover:border-green-400 transition">
              <FaPlus className="text-gray-500 text-3xl mb-2" />
              <span className="text-gray-500">Click to upload photos</span>
              <input type="file" multiple accept="image/*" className="hidden" />
            </label>

            {/* Video Upload */}
            <label className="block font-semibold mt-4 mb-2">Upload Video</label>
            <label className="border-2 border-dashed border-gray-300 rounded-md h-32 flex flex-col items-center justify-center cursor-pointer hover:border-green-400 transition">
              <FaVideo className="text-gray-500 text-3xl mb-2" />
              <span className="text-gray-500">Click to upload video</span>
              <input type="file" accept="video/*" className="hidden" />
            </label>

            <button className="bg-green-600 hover:bg-green-700 text-white py-2 w-full mt-4 rounded">
              Submit Ad
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
