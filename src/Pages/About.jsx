import clock from "../assets/New_Arrivals_img.png";
import buscat from "../assets/About_Image (1).png";


const About = () => {
  return (
    <div className="max-w-[1600px] mx-auto px-4 sm:px-8 md:px-16 lg:px-24 py-16 md:py-28 font-sans">
      {/* Page Title & Breadcrumb */}
      <div className="mb-16 md:mb-24">
        <h1 className="text-[40px] md:text-[49px] font-bold text-[#262626] leading-tight">
          About
        </h1>
        <p className="text-xs text-[#767676] mt-2 flex items-center gap-2">
          <span className="cursor-pointer hover:text-[#262626]">Home</span>
          <span>&gt;</span>
          <span>About</span>
        </p>
      </div>

      {/* Two Showcase Product Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 mb-20 md:mb-28">
        {/* Left Card: Our Brands */}
        <div className="relative bg-[#F3F3F3] aspect-square flex items-center justify-center overflow-hidden group">
          <img
            src={clock}
            alt="Minimalist Desk Clock"
            className="w-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-500"
          />
          <button
            type="button"
            onClick={() => console.log('Navigate to Brands')}
            className="absolute bottom-10 md:bottom-14 left-1/2 -translate-x-1/2 w-[220px] sm:w-[280px] h-[64px] md:h-[76px] bg-[#262626] text-white text-base font-bold hover:bg-black transition-colors duration-300 cursor-pointer"
          >
            Our Brands
          </button>
        </div>

        {/* Right Card: Our Stores */}
        <div className="relative bg-[#F3F3F3] aspect-square flex items-center justify-center overflow-hidden group">
          <img
            src={buscat}
            className="object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-500"
          />
          <button
            type="button"
            onClick={() => console.log('Navigate to Stores')}
            className="absolute bottom-10 md:bottom-14 left-1/2 -translate-x-1/2 w-[220px] sm:w-[280px] h-[64px] md:h-[76px] bg-[#262626] text-white text-base font-bold hover:bg-black transition-colors duration-300 cursor-pointer"
          >
            Our Stores
          </button>
        </div>
      </div>

      {/* Brand Tagline Statement */}
      <div className="mb-20 md:mb-28">
        <p className="text-[26px] sm:text-[32px] md:text-[39px] text-[#262626] leading-[1.35] font-normal">
          Orebi is one of the world’s leading ecommerce brands and is internationally recognized for celebrating the essence of classic Worldwide cool looking style.
        </p>
      </div>

      {/* Three Columns: Vision, Story, Brands */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Column 1 */}
        <div>
          <h3 className="text-[22px] md:text-[25px] font-bold text-[#262626] leading-[36px] mb-3">
            Our Vision
          </h3>
          <p className="text-base text-[#767676] leading-[30px]">
            We aim to redefine modern online shopping by blending timeless aesthetics with everyday functionality, making curated lifestyle essentials accessible to customers everywhere.
          </p>
        </div>

        {/* Column 2 */}
        <div>
          <h3 className="text-[22px] md:text-[25px] font-bold text-[#262626] leading-[36px] mb-3">
            Our Story
          </h3>
          <p className="text-base text-[#767676] leading-[30px]">
            Founded with a passion for clean design and enduring quality, our journey began with a small collection of home and personal accessories that quickly grew into a global community.
          </p>
        </div>

        {/* Column 3 */}
        <div>
          <h3 className="text-[22px] md:text-[25px] font-bold text-[#262626] leading-[36px] mb-3">
            Our Brands
          </h3>
          <p className="text-base text-[#767676] leading-[30px]">
            We partner with independent designers and established makers worldwide to bring you thoughtfully crafted goods built to last season after season.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;