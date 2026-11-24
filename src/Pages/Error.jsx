import { useState } from 'react';
import { FaSearch } from 'react-icons/fa'; 
const Error404 = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    console.log('Searching for:', searchQuery);
    
  };

  const handleBackToHome = () => {
    console.log('Navigating to Home...');
  };

  return (
    <div className="max-w-[1600px] mx-auto px-4 sm:px-8 md:px-16 lg:px-24 py-16 md:py-28 font-sans">
      <div className="max-w-[652px]">
        {/* Large 404 Heading */}
        <h1 className="text-[120px] sm:text-[160px] md:text-[200px] font-bold text-[#262626] leading-none tracking-tight">
          404
        </h1>

        {/* Error Description */}
        <p className="text-base text-[#767676] leading-[30px] mt-4 mb-12">
          The page you were looking for couldn't be found. The page could be removed or you misspelled the word while searching for it. Maybe try a search?
        </p>

        {/* Search Input Box */}
        <form onSubmit={handleSearch} className="relative w-full max-w-[643px] mb-14">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Type to search"
            className="w-full h-[71px] border border-[#F0F0F0] pl-5 pr-14 text-sm text-[#262626] placeholder-[#767676] focus:outline-none focus:border-[#262626] transition-colors"
          />
          <button
            type="submit"
            aria-label="Search"
            className="absolute right-5 top-1/2 -translate-y-1/2 text-[#262626] hover:text-black cursor-pointer"
          >
            <FaSearch className="text-base" />
          </button>
        </form>

        {/* Back to Home Button */}
        <button
          type="button"
          onClick={handleBackToHome}
          className="w-[200px] h-[50px] bg-[#262626] text-white text-sm font-bold hover:bg-black transition-colors duration-300 cursor-pointer"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default Error404;