import React from "react";

const products = [
  {
    id: 1,
    name: "Basic Tee",
    color: "Black",
    price: `₹${Math.floor(Math.random() *(5000 - 1000) + 1000)}`,
    description: "A soft cotton tee for everyday wear.",
    imageSrc:
      "https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-01.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
  },
  {
    id: 2,
    name: "Basic Tee",
    color: "Aspen White",
    price: `₹${Math.floor(Math.random() * (5000 - 1000) + 1000)}`,
    description: "Minimal and stylish, perfect for any occasion.",
    imageSrc:
      "https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-02.jpg",
    imageAlt: "Front of men's Basic Tee in white.",
  },
  {
    id: 3,
    name: "Basic Tee",
    color: "Charcoal",
    price: `₹${Math.floor(Math.random() * (5000 - 1000) + 1000)}`,
    description: "Comfortable and durable fabric for daily use.",
    imageSrc:
      "https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-03.jpg",
    imageAlt: "Front of men's Basic Tee in dark gray.",
  },
  {
    id: 4,
    name: "Artwork Tee",
    color: "Iso Dots",
    price: `₹${Math.floor(Math.random() * (5000 - 1000) + 1000)}`,
    description: "Trendy artwork print with a soft fabric feel.",
    imageSrc:
      "https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-04.jpg",
    imageAlt:
      "Front of men's Artwork Tee in peach with white and brown dots forming an isometric cube.",
  },
  {
    id: 5,
    name: "Earthen Bottle",
    price: `₹${Math.floor(Math.random() * (5000 - 1000) + 1000)}`,
    description: "A handcrafted porcelain bottle with cork stopper.",
    imageSrc:
      "https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-04-image-card-01.jpg",
    imageAlt:
      "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
  },
  {
    id: 6,
    name: "Nomad Tumbler",
    price: `₹${Math.floor(Math.random() * (5000 - 1000) + 1000)}`,
    description: "A durable insulated tumbler with a sleek design.",
    imageSrc:
      "https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-04-image-card-02.jpg",
    imageAlt:
      "Olive drab green insulated bottle with flared screw lid and flat top.",
  },
  {
    id: 7,
    name: "Focus Paper Refill",
    price: `₹${Math.floor(Math.random() * (5000 - 1000) + 1000)}`,
    description: "Premium refill paper for focus and productivity.",
    imageSrc:
      "https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-04-image-card-03.jpg",
    imageAlt:
      "Person using a pen to cross a task off a productivity paper card.",
  },
  {
    id: 8,
    name: "Machined Mechanical Pencil",
    price: `₹${Math.floor(Math.random() * (5000 - 1000) + 1000)}`,
    description: "A high-precision mechanical pencil for creatives.",
    imageSrc:
      "https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-04-image-card-04.jpg",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },
  {
    id: 9,
    name: "Focus Card Tray",
    price: `₹${Math.floor(Math.random() * (5000 - 1000) + 1000)}`,
    description: "Elegant walnut card tray for your desk essentials.",
    imageSrc:
      "https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-04-image-card-05.jpg",
    imageAlt: "Paper card sitting upright in walnut card holder on desk.",
  },
  {
    id: 10,
    name: "Focus Multi-Pack",
    price: `₹${Math.floor(Math.random() * (5000 - 1000) + 1000)}`,
    description: "A multi-pack of premium focus cards for daily planning.",
    imageSrc:
      "https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-04-image-card-06.jpg",
    imageAlt:
      "Stack of 3 small drab green cardboard paper card refill boxes with white text.",
  },
  {
    id: 11,
    name: "Brass Scissors",
    price: `₹${Math.floor(Math.random() * (5000 - 1000) + 1000)}`,
    description: "Stylish brass scissors with geometric design.",
    imageSrc:
      "https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-04-image-card-07.jpg",
    imageAlt:
      "Brass scissors with geometric design, black steel finger holes, and included upright brass stand.",
  },
  {
    id: 12,
    name: "Focus Carry Pouch",
    price: `₹${Math.floor(Math.random() * (5000 - 1000) + 1000)}`,
    description: "A gray felt pouch for carrying your focus cards and pen.",
    imageSrc:
      "https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-04-image-card-08.jpg",
    imageAlt:
      "Textured gray felt pouch for paper cards with snap button flap and elastic pen holder loop.",
  },
].sort(() => Math.random() - 0.5); // shuffle products

const ProductGrid = () => {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="mt-5 text-2xl font-bold tracking-tight text-gray-500">
          Recommendations
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="group relative border rounded-lg shadow-sm hover:shadow-lg hover:border-indigo-500 transition duration-300"
            >
              <img
                src={product.imageSrc}
                alt={product.imageAlt}
                className="aspect-square w-full rounded-t-lg bg-gray-200 object-cover transition duration-300 group-hover:opacity-90"
              />
              <div className="p-4">
                <h3 className="text-sm font-semibold text-gray-900">
                  {product.name}
                </h3>
                {product.color && (
                  <p className="text-xs text-gray-500">{product.color}</p>
                )}
                <p className="mt-1 text-sm text-gray-600 line-clamp-2">
                  {product.description}
                </p>
                <p className="mt-2 text-base font-semibold text-gray-900">
                  {product.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductGrid;
