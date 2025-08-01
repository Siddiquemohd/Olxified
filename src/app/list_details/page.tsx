"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { FaTimes } from "react-icons/fa";
import Image from "next/image";

interface Ad {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
  type: "photo" | "video";
}

export default function ListingPage() {
  const router = useRouter();

  const [ads] = useState<Ad[]>([
    {
      id: 1,
      title: "iPhone 13 Pro",
      price: 65000,
      description: "Apple iPhone 13 Pro, Face ID and all features working perfectly.",
      image: "https://apollo.olx.in/v1/files/8w1c46ryvn9u-IN/image;s=1080x1080",
      type: "photo"
    },
    {
      id: 2,
      title: "Hero Sprint Bicycle",
      price: 7500,
      description: "Lightweight steel frame, 21-speed gear system.",
      image: "https://apollo.olx.in/v1/files/0ot3y61e653k-IN/image;s=780x0;q=60",
      type: "photo"
    },
    {
      id: 3,
      title: "Dell Inspiron Laptop",
      price: 45000,
      description: "Core i5, 8GB RAM, 512GB SSD, good condition, used only 6 months.",
      image: "https://apollo.olx.in/v1/files/euljc7k74118-IN/image;s=780x0;q=60",
      type: "photo"
    },
    {
      id: 4,
      title: "Honda Activa 6G",
      price: 85000,
      description: "2022 model, well maintained, single owner.",
      image: "https://apollo.olx.in/v1/files/15743tfj9nfp3-IN/image;s=1080x1080",
      type: "photo"
    }
  ]);

  const handleViewDetails = (ad: Ad) => {
    router.push(
      `/ad_details?title=${encodeURIComponent(ad.title)}&description=${encodeURIComponent(
        ad.description
      )}&price=${ad.price}&image=${encodeURIComponent(ad.image)}&type=${ad.type}`
    );
  };

  return (
    <div className="relative w-full max-w-7xl mx-auto px-4 py-8">
      <button
        onClick={() => router.push("/")}
        className="absolute top-6 right-6 text-gray-600 hover:text-red-500 transition"
        aria-label="Close"
      >
        <FaTimes size={24} />
      </button>

      <h1 className="text-3xl font-bold mb-6 text-center">Listed Ads</h1>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {ads.map((ad) => (
          <div
            key={ad.id}
            className="border rounded-lg shadow p-4 hover:shadow-lg transition"
          >
            <div className="relative w-full h-40">
              <Image
                src={ad.image}
                alt={ad.title}
                fill
                className="object-cover rounded"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <h2 className="text-xl font-semibold mt-4">{ad.title}</h2>
            <p className="text-gray-600 line-clamp-2">{ad.description}</p>
            <p className="text-indigo-600 font-bold mt-2">₹{ad.price.toLocaleString()}</p>
            <button
              onClick={() => handleViewDetails(ad)}
              className="mt-4 w-full bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition"
            >
              View Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}