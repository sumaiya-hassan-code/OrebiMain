import { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Login Info:', { email, password });
    // এখানে আপনার লগইন লজিক বা API কল যুক্ত করুন
  };

  const handleContinue = () => {
    console.log('Redirecting to Signup...');
    // এখানে Signup পেজে নেভিগেট করার লজিক যুক্ত করুন (যেমন: navigate('/signup'))
  };

  return (
    <div className="max-w-[1600px] mx-auto px-4 sm:px-8 md:px-16 lg:px-24 py-16 md:py-28 font-sans">
      {/* Page Title & Breadcrumb */}
      <div className="mb-16 md:mb-24">
        <h1 className="text-[40px] md:text-[49px] font-bold text-[#262626] leading-tight">
          Login
        </h1>
        <p className="text-xs text-[#767676] mt-2 flex items-center gap-2">
          <span className="cursor-pointer hover:text-[#262626]">Home</span>
          <span>&gt;</span>
          <span>Login</span>
        </p>
      </div>

      {/* Intro Description */}
      <div className="pb-14 border-b border-[#F0F0F0]">
        <p className="text-base text-[#767676] max-w-[644px] leading-[30px]">
          Welcome back! Please enter your credentials to access your account and manage your orders.
        </p>
      </div>

      {/* Returning Customer Section */}
      <div className="py-14 border-b border-[#F0F0F0]">
        <h2 className="text-[32px] md:text-[39px] font-bold text-[#262626] mb-10">
          Returning Customer
        </h2>

        <form onSubmit={handleLogin}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[1054px]">
            {/* Email Address Input */}
            <div className="flex flex-col">
              <label
                htmlFor="email"
                className="text-base font-bold text-[#262626] leading-[23px] mb-2"
              >
                Email address
              </label>
              <input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="company@domain.com"
                className="w-full border-b border-[#F0F0F0] pb-4 text-sm text-[#262626] placeholder-[#767676] focus:outline-none focus:border-[#262626] transition-colors"
              />
            </div>

            {/* Password Input */}
            <div className="flex flex-col">
              <label
                htmlFor="password"
                className="text-base font-bold text-[#262626] leading-[23px] mb-2"
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="•••••••••"
                className="w-full border-b border-[#F0F0F0] pb-4 text-sm text-[#262626] placeholder-[#767676] focus:outline-none focus:border-[#262626] transition-colors"
              />
            </div>
          </div>

          {/* Log in Button */}
          <button
            type="submit"
            className="mt-8 w-[200px] h-[50px] border border-[#2B2B2B] bg-white text-[#262626] text-sm font-bold hover:bg-[#262626] hover:text-white transition-colors duration-300 cursor-pointer"
          >
            Log in
          </button>
        </form>
      </div>

      {/* New Customer Section */}
      <div className="pt-14">
        <h2 className="text-[32px] md:text-[39px] font-bold text-[#262626] mb-8">
          New Customer
        </h2>
        <p className="text-base text-[#767676] max-w-[644px] leading-[30px] mb-12">
          Create a new account to enjoy faster checkout, track your orders easily, and save multiple shipping addresses.
        </p>

        {/* Continue Button */}
        <button
          type="button"
          onClick={handleContinue}
          className="w-[200px] h-[50px] bg-[#262626] text-white text-sm font-bold hover:bg-black transition-colors duration-300 cursor-pointer"
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default Login;