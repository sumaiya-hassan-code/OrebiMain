import { useState } from 'react';

const MyAccount = () => {
  const [activeTab, setActiveTab] = useState('Dashboard');

  const menuItems = [
    'Dashboard',
    'Orders',
    'Downloads',
    'Addresses',
    'Account details',
    'Logout',
  ];

  const handleLogout = () => {
    console.log('Logging out...');
    // এখানে লগআউট বা লগইন পেজে রিডাইরেক্ট করার লজিক যুক্ত করুন
  };

  return (
    <div className="max-w-[1600px] mx-auto px-4 sm:px-8 md:px-16 lg:px-24 py-16 md:py-28 font-sans">
      {/* Page Title & Breadcrumb */}
      <div className="mb-16 md:mb-24">
        <h1 className="text-[40px] md:text-[49px] font-bold text-[#262626] leading-tight">
          My Account
        </h1>
        <p className="text-xs text-[#767676] mt-2 flex items-center gap-2">
          <span className="cursor-pointer hover:text-[#262626]">Home</span>
          <span>&gt;</span>
          <span>My account</span>
        </p>
      </div>

      {/* Main Content Layout */}
      <div className="flex flex-col md:flex-row gap-10 lg:gap-16">
        {/* Left Sidebar Navigation */}
        <div className="w-full md:w-[234px] shrink-0">
          <ul className="flex flex-col">
            {menuItems.map((item) => (
              <li
                key={item}
                onClick={() => {
                  if (item === 'Logout') {
                    handleLogout();
                  } else {
                    setActiveTab(item);
                  }
                }}
                className={`py-5 border-b border-[#F0F0F0] text-base cursor-pointer transition-colors ${
                  activeTab === item
                    ? 'font-bold text-[#262626]'
                    : 'font-normal text-[#767676] hover:text-[#262626]'
                }`}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Right Tab Content */}
        <div className="flex-1 max-w-[918px] pt-2">
          {activeTab === 'Dashboard' && (
            <div className="text-base text-[#767676] leading-[30px] space-y-6">
              <p>
                Hello <span className="text-[#262626]">admin</span> (not{'/ '}
                <span className="text-[#262626]">admin</span>?{' '}
                <button
                  type="button"
                  onClick={handleLogout}
                  className="text-[#262626] hover:underline cursor-pointer"
                >
                  Log out
                </button>
                )
              </p>
              <p>
                From your account dashboard you can view your{' '}
                <button
                  type="button"
                  onClick={() => setActiveTab('Orders')}
                  className="text-[#262626] hover:underline cursor-pointer"
                >
                  recent orders
                </button>
                , manage your{' '}
                <button
                  type="button"
                  onClick={() => setActiveTab('Addresses')}
                  className="text-[#262626] hover:underline cursor-pointer"
                >
                  shipping and billing addresses
                </button>
                , and{' '}
                <button
                  type="button"
                  onClick={() => setActiveTab('Account details')}
                  className="text-[#262626] hover:underline cursor-pointer"
                >
                  edit your password and account details.
                </button>
              </p>
            </div>
          )}

          {activeTab === 'Orders' && (
            <div className="text-base text-[#767676]">
              <p className="mb-4 font-bold text-[#262626]">Your Recent Orders</p>
              <p>No orders have been made yet.</p>
            </div>
          )}

          {activeTab === 'Downloads' && (
            <div className="text-base text-[#767676]">
              <p className="mb-4 font-bold text-[#262626]">Downloads</p>
              <p>No downloads available yet.</p>
            </div>
          )}

          {activeTab === 'Addresses' && (
            <div className="text-base text-[#767676]">
              <p className="mb-6">
                The following addresses will be used on the checkout page by default.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-[#262626] mb-2">Billing Address</h3>
                  <p className="text-sm">You have not set up this type of address yet.</p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#262626] mb-2">Shipping Address</h3>
                  <p className="text-sm">You have not set up this type of address yet.</p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'Account details' && (
            <form
              onSubmit={(e) => e.preventDefault()}
              className="space-y-6 max-w-[600px]"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-[#262626] mb-2">
                    First name *
                  </label>
                  <input
                    type="text"
                    placeholder="First name"
                    className="w-full border-b border-[#F0F0F0] pb-3 text-sm text-[#262626] focus:outline-none focus:border-[#262626]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-[#262626] mb-2">
                    Last name *
                  </label>
                  <input
                    type="text"
                    placeholder="Last name"
                    className="w-full border-b border-[#F0F0F0] pb-3 text-sm text-[#262626] focus:outline-none focus:border-[#262626]"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-[#262626] mb-2">
                  Email address *
                </label>
                <input
                  type="email"
                  placeholder="company@domain.com"
                  className="w-full border-b border-[#F0F0F0] pb-3 text-sm text-[#262626] focus:outline-none focus:border-[#262626]"
                />
              </div>
              <button
                type="submit"
                className="w-[200px] h-[50px] bg-[#262626] text-white text-sm font-bold hover:bg-black transition-colors cursor-pointer"
              >
                Save Changes
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyAccount;