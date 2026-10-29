import { useState } from "react";
import { FaCaretUp, FaCaretDown } from "react-icons/fa";

const Sidebar = ({
  selectedCategory,
  setSelectedCategory,
  selectedColor,
  setSelectedColor,
  selectedBrand,
  setSelectedBrand,
  selectedPrice,
  setSelectedPrice,
}) => {
  const [showCategory, setShowCategory] = useState(true);
  const [showColor, setShowColor] = useState(true);
  const [showBrand, setShowBrand] = useState(true);
  const [showPrice, setShowPrice] = useState(true);

  const categories = [
    "Category 1",
    "Category 2",
    "Category 3",
    "Category 4",
  ];

  const brands = [
    "Brand 1",
    "Brand 2",
    "Brand 3",
    "Brand 4",
  ];

  const colors = [
    { name: "Black", hex: "#000000" },
    { name: "Pink", hex: "#FF8686" },
    { name: "Green", hex: "#7ED321" },
    { name: "Gray", hex: "#B6B6B6" },
  ];

  const prices = [
    { label: "$0.00 - $9.99", value: "0-9.99" },
    { label: "$10.00 - $19.99", value: "10-19.99" },
    { label: "$20.00 - $29.99", value: "20-29.99" },
    { label: "$30.00 - $39.99", value: "30-39.99" },
    { label: "$40.00 - $69.99", value: "40-69.99" },
  ];

  const headingClass =
    "text-[20px] font-bold flex items-center justify-between cursor-pointer";

  const listClass =
    "flex flex-col mt-2 text-[16px] text-[#767676]";

  const itemClass =
    "flex justify-between items-center border-b border-[#F0F0F0] py-2 cursor-pointer hover:text-black";

  return (
    <div className="w-full">
      {/* Shop by Category */}
      <div>
        <div
          onClick={() => setShowCategory(!showCategory)}
          className={headingClass}
        >
          Shop by Category
          {showCategory ? <FaCaretUp /> : <FaCaretDown />}
        </div>

        {showCategory && (
          <ul className={listClass}>
            <li
              onClick={() => setSelectedCategory("All")}
              className={`${itemClass} ${
                selectedCategory === "All"
                  ? "text-black font-semibold"
                  : ""
              }`}
            >
              All Categories
              <span>+</span>
            </li>

            {categories.map((category) => (
              <li
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`${itemClass} ${
                  selectedCategory === category
                    ? "text-black font-semibold"
                    : ""
                }`}
              >
                {category}
                <span
                  className={
                    selectedCategory === category
                      ? "font-bold"
                      : "opacity-0 group-hover:opacity-100"
                  }
                >
                  +
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Shop by Color */}
      <div className="mt-5">
        <div
          onClick={() => setShowColor(!showColor)}
          className={headingClass}
        >
          Shop by Color
          {showColor ? <FaCaretUp /> : <FaCaretDown />}
        </div>

        {showColor && (
          <ul className={listClass}>
            <li
              onClick={() => setSelectedColor("All")}
              className={`${itemClass} ${
                selectedColor === "All"
                  ? "text-black font-semibold"
                  : ""
              }`}
            >
              All Colors
            </li>

            {colors.map((color) => (
              <li
                key={color.name}
                onClick={() => setSelectedColor(color.name)}
                className={`${itemClass} ${
                  selectedColor === color.name
                    ? "text-black font-semibold"
                    : ""
                }`}
              >
                <span className="flex items-center gap-x-2">
                  <span
                    className="w-3 h-3 rounded-full inline-block border border-gray-300"
                    style={{ backgroundColor: color.hex }}
                  />
                  {color.name}
                </span>

                {selectedColor === color.name && (
                  <span className="font-bold">✓</span>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Shop by Brand */}
      <div className="mt-5">
        <div
          onClick={() => setShowBrand(!showBrand)}
          className={headingClass}
        >
          Shop by Brand
          {showBrand ? <FaCaretUp /> : <FaCaretDown />}
        </div>

        {showBrand && (
          <ul className={listClass}>
            <li
              onClick={() => setSelectedBrand("All")}
              className={`${itemClass} ${
                selectedBrand === "All"
                  ? "text-black font-semibold"
                  : ""
              }`}
            >
              All Brands
            </li>

            {brands.map((brand) => (
              <li
                key={brand}
                onClick={() => setSelectedBrand(brand)}
                className={`${itemClass} ${
                  selectedBrand === brand
                    ? "text-black font-semibold"
                    : ""
                }`}
              >
                {brand}

                {selectedBrand === brand && (
                  <span className="font-bold">✓</span>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Shop by Price */}
      <div className="mt-5">
        <div
          onClick={() => setShowPrice(!showPrice)}
          className={headingClass}
        >
          Shop by Price
          {showPrice ? <FaCaretUp /> : <FaCaretDown />}
        </div>

        {showPrice && (
          <ul className={listClass}>
            <li
              onClick={() => setSelectedPrice("All")}
              className={`${itemClass} ${
                selectedPrice === "All"
                  ? "text-black font-semibold"
                  : ""
              }`}
            >
              All Prices
            </li>

            {prices.map((price) => (
              <li
                key={price.value}
                onClick={() => setSelectedPrice(price.value)}
                className={`${itemClass} ${
                  selectedPrice === price.value
                    ? "text-black font-semibold"
                    : ""
                }`}
              >
                {price.label}

                {selectedPrice === price.value && (
                  <span className="font-bold">✓</span>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Sidebar;