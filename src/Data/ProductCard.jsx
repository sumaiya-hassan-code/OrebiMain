import { FaHeart, FaShoppingCart, FaEye } from 'react-icons/fa';

const ProductCard = ({ product }) => {
  return (
    <div className="group relative bg-white border border-gray-100 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
      
      {/* --- Product Image & Badge Area --- */}
      <div className="relative w-full h-64 bg-gray-100 overflow-hidden">
        {/* Badge (যেমন: New বা Sale) */}
        {product.badge && (
          <span className="absolute top-3 left-3 bg-black text-white text-xs font-semibold px-2.5 py-1 rounded z-10">
            {product.badge}
          </span>
        )}

        {/* Product Image */}
        <img 
          src={product.img || "https://via.placeholder.com/300"} 
          alt={product.name} 
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
        />

        {/* Hover Action Buttons (ডানপাশে বা নিচে ভেসে ওঠা আইকনগুলো) */}
        <div className="absolute bottom-4 right-4 flex flex-col gap-2 translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 z-10">
          <button 
            title="Add to Wishlist" 
            className="w-9 h-9 bg-white text-gray-700 rounded-full flex items-center justify-center shadow hover:bg-black hover:text-white transition-colors"
          >
            <FaHeart size={14} />
          </button>
          <button 
            title="Quick View" 
            className="w-9 h-9 bg-white text-gray-700 rounded-full flex items-center justify-center shadow hover:bg-black hover:text-white transition-colors"
          >
            <FaEye size={14} />
          </button>
          <button 
            title="Add to Cart" 
            className="w-9 h-9 bg-white text-gray-700 rounded-full flex items-center justify-center shadow hover:bg-black hover:text-white transition-colors"
          >
            <FaShoppingCart size={14} />
          </button>
        </div>
      </div>

      {/* --- Product Info Area (Name, Color, Price) --- */}
      <div className="p-4">
        {/* Color or Category sub-text */}
        <div className="text-xs text-gray-400 mb-1 flex justify-between items-center">
          <span>{product.color || "Default Color"}</span>
          <span className="text-green-600 font-medium">In Stock</span>
        </div>

        {/* Product Title */}
        <h3 className="font-semibold text-gray-800 text-base mb-2 truncate group-hover:text-blue-600 transition-colors">
          {product.name}
        </h3>

        {/* Product Price */}
        <div className="flex items-center justify-between">
          <span className="font-bold text-gray-900 text-lg">{product.price}</span>
          
          {/* Optional: Rating stars if needed */}
          <div className="text-yellow-400 text-xs">
            ★★★★★
          </div>
        </div>
      </div>

    </div>
  );
};

export default ProductCard;