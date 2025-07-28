"use client";
import { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";

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

  // Close dropdown when clicked outside
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
      <div className="mx-auto md:flex-row">
        <nav className="fixed z-[999] w-full text-white bg-indigo-600 md:ml-auto p-3 flex items-center justify-between gap-5">
          {/* Logo */}
          <h1 className="text-left text-2xl font-bold">Olxified</h1>

          {/* Location Search */}
          <div className="relative flex items-center">
            <FaSearch className="ml-1 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Enter City/Country"
              className="text-black focus:outline-none ml-2 bg-white p-1 rounded shadow-2xl placeholder:text-gray-700 text-center cursor-pointer"
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
          <div className="relative">
            <FaSearch className="ml-3 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
            <input
              type="text"
              placeholder="Search Items!"
              className="text-black focus:outline-none ml-4 bg-white p-1 w-150 rounded shadow-2xl placeholder:text-gray-700 text-center cursor-pointer"
            />
          </div>

          {/* Categories Dropdown */}
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

          {/* Buttons */}
          <div className="flex gap-2">
            <button className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-medium px-5 py-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out">
              <FaPlus />
              Sell
            </button>
            <button className="bg-white text-indigo-600 font-medium px-5 py-2 rounded-full border-3 border-indigo-400 shadow-md hover:bg-indigo-50 transition-all duration-300 ease-in-out">
              Login
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}
