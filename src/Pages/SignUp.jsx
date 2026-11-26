import { useState } from 'react';
import { FaCaretDown } from 'react-icons/fa'; // ইন্সটল না থাকলে: npm install react-icons
import { Link } from 'react-router-dom';

const Signup = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    telephone: '',
    address1: '',
    address2: '',
    city: '',
    postCode: '',
    country: '',
    region: '',
    password: '',
    repeatPassword: '',
    agreePolicy: false,
    newsletter: 'no',
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.agreePolicy) {
      alert('Please agree to the Privacy Policy.');
      return;
    }
    if (formData.password !== formData.repeatPassword) {
      alert('Passwords do not match!');
      return;
    }
    console.log('Signup Form Data:', formData);
    // এখানে আপনার রেজিস্ট্রেশন বা API কল যুক্ত করুন
  };

  return (
    <div className="max-w-[1600px] mx-auto px-4 sm:px-8 md:px-16 lg:px-24 py-16 md:py-28 font-sans">
      {/* Page Title & Breadcrumb */}
      <div className="mb-16 md:mb-24">
        <h1 className="text-[40px] md:text-[49px] font-bold text-[#262626] leading-tight">
          Sign up
        </h1>
        <p className="text-xs text-[#767676] mt-2 flex items-center gap-2">
          <span className="cursor-pointer hover:text-[#262626]">Home</span>
          <span>&gt;</span>
          <span>Sign up</span>
        </p>
      </div>

      {/* Intro Description */}
      <div className="pb-14 border-b border-[#F0F0F0]">
        <p className="text-base text-[#767676] max-w-[644px] leading-[30px]">
          Create your account to enjoy a personalized shopping experience, faster checkout, and easy order tracking.
        </p>
      </div>

      <form onSubmit={handleSubmit}>
        {/* Section 1: Your Personal Details */}
        <div className="py-14 border-b border-[#F0F0F0]">
          <h2 className="text-[32px] md:text-[39px] font-bold text-[#262626] mb-10">
            Your Personal Details
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8 max-w-[1054px]">
            {/* First Name */}
            <div className="flex flex-col">
              <label className="text-base font-bold text-[#262626] leading-[23px] mb-2">
                First Name
              </label>
              <input
                type="text"
                name="firstName"
                required
                value={formData.firstName}
                onChange={handleChange}
                placeholder="First Name"
                className="w-full border-b border-[#F0F0F0] pb-4 text-sm text-[#262626] placeholder-[#767676] focus:outline-none focus:border-[#262626] transition-colors"
              />
            </div>

            {/* Last Name */}
            <div className="flex flex-col">
              <label className="text-base font-bold text-[#262626] leading-[23px] mb-2">
                Last Name
              </label>
              <input
                type="text"
                name="lastName"
                required
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Last Name"
                className="w-full border-b border-[#F0F0F0] pb-4 text-sm text-[#262626] placeholder-[#767676] focus:outline-none focus:border-[#262626] transition-colors"
              />
            </div>

            {/* Email Address */}
            <div className="flex flex-col">
              <label className="text-base font-bold text-[#262626] leading-[23px] mb-2">
                Email address
              </label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="company@domain.com"
                className="w-full border-b border-[#F0F0F0] pb-4 text-sm text-[#262626] placeholder-[#767676] focus:outline-none focus:border-[#262626] transition-colors"
              />
            </div>

            {/* Telephone */}
            <div className="flex flex-col">
              <label className="text-base font-bold text-[#262626] leading-[23px] mb-2">
                Telephone
              </label>
              <input
                type="tel"
                name="telephone"
                required
                value={formData.telephone}
                onChange={handleChange}
                placeholder="Your phone number"
                className="w-full border-b border-[#F0F0F0] pb-4 text-sm text-[#262626] placeholder-[#767676] focus:outline-none focus:border-[#262626] transition-colors"
              />
            </div>
          </div>
        </div>

        {/* Section 2: New Customer (Address Details) */}
        <div className="py-14 border-b border-[#F0F0F0]">
          <h2 className="text-[32px] md:text-[39px] font-bold text-[#262626] mb-10">
            New Customer
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8 max-w-[1054px]">
            {/* Address 1 */}
            <div className="flex flex-col">
              <label className="text-base font-bold text-[#262626] leading-[23px] mb-2">
                Address 1
              </label>
              <input
                type="text"
                name="address1"
                required
                value={formData.address1}
                onChange={handleChange}
                placeholder="4279 Zboncak Port Suite 6212"
                className="w-full border-b border-[#F0F0F0] pb-4 text-sm text-[#262626] placeholder-[#767676] focus:outline-none focus:border-[#262626] transition-colors"
              />
            </div>

            {/* Address 2 */}
            <div className="flex flex-col">
              <label className="text-base font-bold text-[#262626] leading-[23px] mb-2">
                Address 2
              </label>
              <input
                type="text"
                name="address2"
                value={formData.address2}
                onChange={handleChange}
                placeholder="—"
                className="w-full border-b border-[#F0F0F0] pb-4 text-sm text-[#262626] placeholder-[#767676] focus:outline-none focus:border-[#262626] transition-colors"
              />
            </div>

            {/* City */}
            <div className="flex flex-col">
              <label className="text-base font-bold text-[#262626] leading-[23px] mb-2">
                City
              </label>
              <input
                type="text"
                name="city"
                required
                value={formData.city}
                onChange={handleChange}
                placeholder="Your city"
                className="w-full border-b border-[#F0F0F0] pb-4 text-sm text-[#262626] placeholder-[#767676] focus:outline-none focus:border-[#262626] transition-colors"
              />
            </div>

            {/* Post Code */}
            <div className="flex flex-col">
              <label className="text-base font-bold text-[#262626] leading-[23px] mb-2">
                Post Code
              </label>
              <input
                type="text"
                name="postCode"
                required
                value={formData.postCode}
                onChange={handleChange}
                placeholder="05228"
                className="w-full border-b border-[#F0F0F0] pb-4 text-sm text-[#262626] placeholder-[#767676] focus:outline-none focus:border-[#262626] transition-colors"
              />
            </div>

            {/* Country Dropdown */}
            <div className="flex flex-col">
              <label className="text-base font-bold text-[#262626] leading-[23px] mb-2">
                Country
              </label>
              <div className="relative">
                <select
                  name="country"
                  required
                  value={formData.country}
                  onChange={handleChange}
                  className="w-full appearance-none bg-transparent border-b border-[#F0F0F0] pb-4 text-sm text-[#767676] focus:text-[#262626] focus:outline-none focus:border-[#262626] transition-colors cursor-pointer"
                >
                  <option value="" disabled>
                    Please select
                  </option>
                  <option value="BD">Bangladesh</option>
                  <option value="US">United States</option>
                  <option value="UK">United Kingdom</option>
                  <option value="CA">Canada</option>
                </select>
                <FaCaretDown className="absolute right-2 top-1/3 -translate-y-1/2 text-[#767676] pointer-events-none text-xs" />
              </div>
            </div>

            {/* Region/State Dropdown */}
            <div className="flex flex-col">
              <label className="text-base font-bold text-[#262626] leading-[23px] mb-2">
                Region/State
              </label>
              <div className="relative">
                <select
                  name="region"
                  required
                  value={formData.region}
                  onChange={handleChange}
                  className="w-full appearance-none bg-transparent border-b border-[#F0F0F0] pb-4 text-sm text-[#767676] focus:text-[#262626] focus:outline-none focus:border-[#262626] transition-colors cursor-pointer"
                >
                  <option value="" disabled>
                    Please select
                  </option>
                  <option value="Dhaka">Dhaka</option>
                  <option value="Chattogram">Chattogram</option>
                  <option value="New York">New York</option>
                  <option value="California">California</option>
                </select>
                <FaCaretDown className="absolute right-2 top-1/3 -translate-y-1/2 text-[#767676] pointer-events-none text-xs" />
              </div>
            </div>
          </div>
        </div>

        {/* Section 3: Your Password */}
        <div className="py-14 border-b border-[#F0F0F0]">
          <h2 className="text-[32px] md:text-[39px] font-bold text-[#262626] mb-10">
            Your Password
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8 max-w-[1054px]">
            {/* Password */}
            <div className="flex flex-col">
              <label className="text-base font-bold text-[#262626] leading-[23px] mb-2">
                Password
              </label>
              <input
                type="password"
                name="password"
                required
                value={formData.password}
                onChange={handleChange}
                placeholder="Password"
                className="w-full border-b border-[#F0F0F0] pb-4 text-sm text-[#262626] placeholder-[#767676] focus:outline-none focus:border-[#262626] transition-colors"
              />
            </div>

            {/* Repeat Password */}
            <div className="flex flex-col">
              <label className="text-base font-bold text-[#262626] leading-[23px] mb-2">
                Repeat Password
              </label>
              <input
                type="password"
                name="repeatPassword"
                required
                value={formData.repeatPassword}
                onChange={handleChange}
                placeholder="Repeat password"
                className="w-full border-b border-[#F0F0F0] pb-4 text-sm text-[#262626] placeholder-[#767676] focus:outline-none focus:border-[#262626] transition-colors"
              />
            </div>
          </div>
        </div>

        {/* Privacy Policy, Newsletter & Submit */}
        <div className="pt-14 space-y-6">
          {/* Privacy Policy Checkbox */}
          <label className="flex items-center gap-3 text-sm text-[#767676] cursor-pointer w-fit">
            <input
              type="checkbox"
              name="agreePolicy"
              checked={formData.agreePolicy}
              onChange={handleChange}
              className="w-3.5 h-3.5 accent-[#262626] border-[#767676] cursor-pointer"
            />
            <span>I have read and agree to the Privacy Policy</span>
          </label>

          {/* Subscribe Newsletter */}
          <div className="flex items-center gap-8 text-sm text-[#767676]">
            <span>Subscribe Newsletter</span>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={formData.newsletter === 'yes'}
                onChange={() => setFormData((prev) => ({ ...prev, newsletter: 'yes' }))}
                className="w-3.5 h-3.5 accent-[#262626] border-[#767676] cursor-pointer"
              />
              <span>Yes</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={formData.newsletter === 'no'}
                onChange={() => setFormData((prev) => ({ ...prev, newsletter: 'no' }))}
                className="w-3.5 h-3.5 accent-[#262626] border-[#767676] cursor-pointer"
              />
              <span>No</span>
            </label>
          </div>

          {/* Submit Button (Figma ডিজাইন অনুযায়ী বাটনের টেক্সট রাখা হয়েছে) */}
          <div className="pt-2">
            <Link to={"/login"}>
            <button
              type="submit"
              className="w-[200px] h-[50px] bg-[#262626] text-white text-sm font-bold hover:bg-black transition-colors duration-300 cursor-pointer"
            >
              Log in
            </button>
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Signup;