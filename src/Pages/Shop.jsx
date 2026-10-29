import { useState, useMemo, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Card from "../Components/Card";
import Container from "../Components/Container";
import Sidebar from "../Layouts/Sidebar";
import { FaCaretDown } from "react-icons/fa";

import card_img1 from "../assets/Image_B(1).png";
import card_img2 from "../assets/Special_offers_Image (1).png";
import card_img3 from "../assets/Special_offers_Image (2).png";
import card_img4 from "../assets/Special_offers_Image (3).png";
import card_img6 from "../assets/Image_B.png";
import card_img7 from "../assets/Special_offers_Image.png";
import card_img8 from "../assets/New_Arrivals_img.png";

const products = [
  {
    id: 1,
    image: card_img1,
    name: "Basic Crew Neck Tee",
    price: 44,
    color: "Black",
    brand: "Brand 1",
    category: "Category 1",
    badge: "New",
  },
  {
    id: 2,
    image: card_img2,
    name: "Pink Headphones",
    price: 15,
    color: "Pink",
    brand: "Brand 2",
    category: "Category 2",
    badge: "-10%",
  },
  {
    id: 3,
    image: card_img3,
    name: "Modern Furniture",
    price: 25,
    color: "Green",
    brand: "Brand 3",
    category: "Category 3",
    badge: "New",
  },
  {
    id: 4,
    image: card_img4,
    name: "Classic Watch",
    price: 35,
    color: "Gray",
    brand: "Brand 4",
    category: "Category 4",
    badge: "New",
  },
  {
    id: 5,
    image: card_img2,
    name: "Wireless Headphones",
    price: 44,
    color: "Black",
    brand: "Brand 1",
    category: "Category 2",
    badge: "New",
  },
  {
    id: 6,
    image: card_img6,
    name: "Casual Backpack",
    price: 19,
    color: "Black",
    brand: "Brand 2",
    category: "Category 1",
    badge: "New",
  },
  {
    id: 7,
    image: card_img7,
    name: "Fashion Accessories",
    price: 29,
    color: "Green",
    brand: "Brand 3",
    category: "Category 3",
    badge: "New",
  },
  {
    id: 8,
    image: card_img3,
    name: "Home Decor",
    price: 12,
    color: "Gray",
    brand: "Brand 4",
    category: "Category 4",
    badge: "New",
  },
  {
    id: 9,
    image: card_img4,
    name: "Modern Table",
    price: 39,
    color: "Black",
    brand: "Brand 1",
    category: "Category 3",
    badge: "New",
  },
  {
    id: 10,
    image: card_img1,
    name: "Classic T-shirt",
    price: 9,
    color: "Pink",
    brand: "Brand 2",
    category: "Category 1",
    badge: "New",
  },
  {
    id: 11,
    image: card_img8,
    name: "Travel Bag",
    price: 20,
    color: "Green",
    brand: "Brand 3",
    category: "Category 2",
    badge: "New",
  },
  {
    id: 12,
    image: card_img7,
    name: "Premium Product",
    price: 49,
    color: "Gray",
    brand: "Brand 4",
    category: "Category 4",
    badge: "New",
  },
];



const Shop = () => {

 const [searchParams, setSearchParams] = useSearchParams();

  const [searchTerm, setSearchTerm] = useState(
    () => searchParams.get("search") || ""
  );

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedColor, setSelectedColor] = useState("All");
  const [selectedBrand, setSelectedBrand] = useState("All");
  const [selectedPrice, setSelectedPrice] = useState("All");

  const [sortOrder, setSortOrder] = useState("featured");
  const [productsPerPage, setProductsPerPage] = useState(6);
  const [currentPage, setCurrentPage] = useState(1);

  const filteredProducts = useMemo(() => {
    let result = products.filter((product) => {
      const matchesSearch = product.name
        .toLowerCase()
        .includes(searchTerm.trim().toLowerCase());

      const matchesCategory =
        selectedCategory === "All" ||
        product.category === selectedCategory;

      const matchesColor =
        selectedColor === "All" ||
        product.color === selectedColor;

      const matchesBrand =
        selectedBrand === "All" ||
        product.brand === selectedBrand;

      let matchesPrice = true;

      if (selectedPrice === "0-9.99") {
        matchesPrice = product.price >= 0 && product.price < 10;
      } else if (selectedPrice === "10-19.99") {
        matchesPrice = product.price >= 10 && product.price < 20;
      } else if (selectedPrice === "20-29.99") {
        matchesPrice = product.price >= 20 && product.price < 30;
      } else if (selectedPrice === "30-39.99") {
        matchesPrice = product.price >= 30 && product.price < 40;
      } else if (selectedPrice === "40-69.99") {
        matchesPrice = product.price >= 40 && product.price < 70;
      }

      return (
        matchesSearch &&
        matchesCategory &&
        matchesColor &&
        matchesBrand &&
        matchesPrice
      );
    });

    // Sort products
    if (sortOrder === "lowToHigh") {
      result.sort((a, b) => a.price - b.price);
    } else if (sortOrder === "highToLow") {
      result.sort((a, b) => b.price - a.price);
    } else if (sortOrder === "nameAZ") {
      result.sort((a, b) => a.name.localeCompare(b.name));
    }

    return result;
  }, [
    searchTerm,
    selectedCategory,
    selectedColor,
    selectedBrand,
    selectedPrice,
    sortOrder,
  ]);


  const resetFilters = () => {
  setSearchTerm("");
  setSelectedCategory("All");
  setSelectedColor("All");
  setSelectedBrand("All");
  setSelectedPrice("All");
  setSortOrder("featured");
  setCurrentPage(1);

  setSearchParams((previousParams) => {
    const nextParams = new URLSearchParams(previousParams);
    nextParams.delete("search");
    return nextParams;
  });
}; [
    searchTerm,
    selectedCategory,
    selectedColor,
    selectedBrand,
    selectedPrice,
    sortOrder,
    productsPerPage,
  ]);

  // Pagination
  const totalPages = Math.ceil(
    filteredProducts.length / productsPerPage
  );

  const startIndex = (currentPage - 1) * productsPerPage;

  const currentProducts = filteredProducts.slice(
    startIndex,
    startIndex + productsPerPage
  );

  const resetFilters = () => {
    setSearchTerm("");
    setSelectedCategory("All");
    setSelectedColor("All");
    setSelectedBrand("All");
    setSelectedPrice("All");
    setSortOrder("featured");
  };

  return (
    <div className="p-5 md:p-10">
      <Container>
        {/* Page Heading */}
        <div className="mt-10">
          <p className="text-4xl md:text-[49px] font-bold text-[#262626]">
            Products
          </p>

          <p className="text-[12px] text-[#767676] mt-2">
            Home &gt; Products
          </p>
        </div>

        <div className="mt-12 flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="w-full lg:w-1/4">
            <Sidebar
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
              selectedColor={selectedColor}
              setSelectedColor={setSelectedColor}
              selectedBrand={selectedBrand}
              setSelectedBrand={setSelectedBrand}
              selectedPrice={selectedPrice}
              setSelectedPrice={setSelectedPrice}
            />
          </div>

          {/* Product Section */}
          <div className="w-full lg:w-3/4">
            

            {/* Sort and Show */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <p className="text-sm text-[#767676]">
                Showing{" "}
                {filteredProducts.length === 0 ? 0 : startIndex + 1}
                {" - "}
                {Math.min(
                  startIndex + productsPerPage,
                  filteredProducts.length
                )}{" "}
                of {filteredProducts.length} products
              </p>

              <div className="flex flex-wrap gap-4">
                {/* Sort */}
                <div className="flex items-center gap-2">
                  <label
                    htmlFor="sort"
                    className="text-sm text-[#767676]"
                  >
                    Sort by:
                  </label>

                  <div className="relative">
                    <select
                      id="sort"
                      value={sortOrder}
                      onChange={(e) => setSortOrder(e.target.value)}
                      className="appearance-none border border-[#D8D8D8] rounded py-2 pl-3 pr-8"
                    >
                      <option value="featured">Featured</option>
                      <option value="lowToHigh">
                        Price: Low to High
                      </option>
                      <option value="highToLow">
                        Price: High to Low
                      </option>
                      <option value="nameAZ">Name: A to Z</option>
                    </select>

                    <FaCaretDown className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>
                </div>

                {/* Products per page */}
                <div className="flex items-center gap-2">
                  <label
                    htmlFor="show"
                    className="text-sm text-[#767676]"
                  >
                    Show:
                  </label>

                  <div className="relative">
                    <select
                      id="show"
                      value={productsPerPage}
                      onChange={(e) =>
                        setProductsPerPage(Number(e.target.value))
                      }
                      className="appearance-none border border-[#D8D8D8] rounded py-2 pl-3 pr-8"
                    >
                      <option value={6}>6</option>
                      <option value={9}>9</option>
                      <option value={12}>12</option>
                    </select>

                    <FaCaretDown className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>
                </div>
              </div>
            </div>

            {/* Active filters */}
            <div className="flex flex-wrap items-center gap-2 mt-5 text-sm">
              {searchTerm && (
                <span className="bg-gray-100 rounded px-3 py-1">
                  Search: {searchTerm}
                </span>
              )}

              {selectedCategory !== "All" && (
                <span className="bg-gray-100 rounded px-3 py-1">
                  {selectedCategory}
                </span>
              )}

              {selectedColor !== "All" && (
                <span className="bg-gray-100 rounded px-3 py-1">
                  {selectedColor}
                </span>
              )}

              {selectedBrand !== "All" && (
                <span className="bg-gray-100 rounded px-3 py-1">
                  {selectedBrand}
                </span>
              )}

              {selectedPrice !== "All" && (
                <span className="bg-gray-100 rounded px-3 py-1">
                  ${selectedPrice}
                </span>
              )}

              {(searchTerm ||
                selectedCategory !== "All" ||
                selectedColor !== "All" ||
                selectedBrand !== "All" ||
                selectedPrice !== "All") && (
                <button
                  onClick={resetFilters}
                  className="underline text-[#767676]"
                >
                  Clear all
                </button>
              )}
            </div>

            {/* Product Grid */}
            {currentProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-x-4 gap-y-8 mt-8">
                {currentProducts.map((product) => (
                  <Card
                    key={product.id}
                    product_imgSrc={product.image}
                    product_addToCart="Add to Cart"
                    product_badge={product.badge}
                    product_color={product.color}
                    product_compare="Compare"
                    product_name={product.name}
                    product_price={product.price}
                    product_wishlist="Add to Wish List"
                  />
                ))}
              </div>
            ) : (
              <div className="py-16 text-center">
                <h2 className="text-xl font-semibold">
                  No products found
                </h2>

                <p className="text-gray-500 mt-2">
                  Try another search or change your filters.
                </p>

                <button
                  onClick={resetFilters}
                  className="bg-black text-white px-5 py-2 mt-4"
                >
                  Clear Filters
                </button>
              </div>
            )}

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex flex-wrap justify-center items-center gap-2 mt-12">
                <button
                  onClick={() =>
                    setCurrentPage((page) => page - 1)
                  }
                  disabled={currentPage === 1}
                  className="border px-3 py-2 disabled:opacity-40"
                >
                  Previous
                </button>

                {Array.from(
                  { length: totalPages },
                  (_, index) => index + 1
                ).map((page) => (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`border px-4 py-2 ${
                      currentPage === page
                        ? "bg-black text-white"
                        : "bg-white text-black"
                    }`}
                  >
                    {page}
                  </button>
                ))}

                <button
                  onClick={() =>
                    setCurrentPage((page) => page + 1)
                  }
                  disabled={currentPage === totalPages}
                  className="border px-3 py-2 disabled:opacity-40"
                >
                  Next
                </button>
              </div>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Shop;