"use client";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";


export default function SearchBar() {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([
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

  const filtered = suggestions.filter((item) =>
    item.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <header className="text-gray-600 body-font">
      <div className="mx-auto p-5 md:flex-row">
        <nav className="text-white bg-indigo-600 md:ml-auto p-3 rounded-2xl flex items-center gap-5">
          {/* Logo */}
          <h1 className="text-left text-2xl">Olxified</h1>

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
          <div className="ml-auto">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className=" bg-indigo-600 p-1 text-white ml-28 rounded-3xl border-2 hover:bg-white hover:text-indigo-600 transition"
            >
              Categories
            </button>
            {dropdownOpen && (
              <div className="absolute mt-2 w-40 bg-white shadow-lg rounded-lg z-20">
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
            )}
          </div>

          {/* Buttons */}
          <div className="ml-auto flex gap-2">
            <button className="flex  items-center gap-2 border-2 py-1 px-3 focus:outline-none hover:bg-white mt-4 md:mt-0 hover:text-indigo-600 bg-indigo-600 p-1 text-white rounded-3xl cursor-pointer">
              <FaPlus/>
               Sell
            </button>
            <button className="items-center border-2 py-1 px-3 focus:outline-none hover:bg-white mt-4 md:mt-0 hover:text-indigo-600 bg-indigo-600 p-1 text-white rounded-3xl cursor-pointer">
              Login
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}
