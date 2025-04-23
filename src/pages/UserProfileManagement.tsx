// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.
import React, { useState } from "react";
import AppNavigation from "../components/AppNavigation";
const UserProfileManagement: React.FC = () => {
  // User profile data
  const [userData] = useState({
    name: "Michael Anderson",
    email: "michael.anderson@example.com",
    phone: "+1 (555) 123-4567",
    memberSince: "April 2023",
    profileImage:
      "https://readdy.ai/api/search-image?query=Professional%2520headshot%2520of%2520a%2520young%2520man%2520with%2520short%2520brown%2520hair%2520and%2520friendly%2520smile%252C%2520business%2520casual%2520attire%252C%2520neutral%2520background%252C%2520high%2520quality%2520portrait%2520photography%252C%2520soft%2520lighting%252C%2520sharp%2520focus%252C%2520professional%2520appearance&width=120&height=120&seq=201&orientation=squarish",
  });
  // Addresses data
  const [addresses] = useState([
    {
      id: 1,
      type: "Home",
      isDefault: true,
      street: "1234 Park Avenue",
      city: "New York",
      state: "NY",
      zip: "10001",
      country: "United States",
    },
    {
      id: 2,
      type: "Work",
      isDefault: false,
      street: "555 Business Plaza, Suite 400",
      city: "New York",
      state: "NY",
      zip: "10022",
      country: "United States",
    },
  ]);
  // Payment methods data
  const [paymentMethods] = useState([
    {
      id: 1,
      type: "visa",
      isDefault: true,
      cardNumber: "•••• •••• •••• 4582",
      expiryDate: "05/26",
    },
    {
      id: 2,
      type: "mastercard",
      isDefault: false,
      cardNumber: "•••• •••• •••• 7891",
      expiryDate: "09/25",
    },
  ]);
  // Order history data
  const [orders] = useState([
    {
      id: "ORD-39472",
      date: "Apr 15, 2025",
      status: "Delivered",
      items: 3,
      total: 1249.97,
      image:
        "https://readdy.ai/api/search-image?query=Electronics%2520package%2520with%2520headphones%2520and%2520tablet%252C%2520product%2520photography%252C%2520e-commerce%2520style%252C%2520white%2520background%252C%2520professional%2520lighting%252C%2520high%2520quality%2520commercial%2520image%252C%2520clean%2520composition&width=60&height=60&seq=202&orientation=squarish",
    },
    {
      id: "ORD-38215",
      date: "Mar 28, 2025",
      status: "Delivered",
      items: 2,
      total: 579.98,
      image:
        "https://readdy.ai/api/search-image?query=Smart%2520watch%2520and%2520wireless%2520earbuds%2520package%252C%2520product%2520photography%252C%2520e-commerce%2520style%252C%2520white%2520background%252C%2520professional%2520lighting%252C%2520high%2520quality%2520commercial%2520image%252C%2520clean%2520composition&width=60&height=60&seq=203&orientation=squarish",
    },
    {
      id: "ORD-37104",
      date: "Feb 12, 2025",
      status: "Delivered",
      items: 1,
      total: 1999.99,
      image:
        "https://readdy.ai/api/search-image?query=Laptop%2520package%2520box%252C%2520product%2520photography%252C%2520e-commerce%2520style%252C%2520white%2520background%252C%2520professional%2520lighting%252C%2520high%2520quality%2520commercial%2520image%252C%2520clean%2520composition&width=60&height=60&seq=204&orientation=squarish",
    },
  ]);
  // Wishlist items data
  const [wishlistItems] = useState([
    {
      id: 1,
      name: "Apple MacBook Pro 16-inch",
      price: 2499.99,
      image:
        "https://readdy.ai/api/search-image?query=MacBook%2520Pro%2520laptop%252C%2520premium%2520product%2520photography%252C%2520white%2520background%252C%2520professional%2520lighting%252C%2520detailed%2520texture%252C%2520commercial%2520shot%252C%2520front%2520angled%2520view&width=100&height=100&seq=205&orientation=squarish",
    },
    {
      id: 2,
      name: "Sony A7 IV Mirrorless Camera",
      price: 2499.99,
      image:
        "https://readdy.ai/api/search-image?query=Sony%2520mirrorless%2520camera%252C%2520premium%2520product%2520photography%252C%2520white%2520background%252C%2520professional%2520lighting%252C%2520detailed%2520texture%252C%2520commercial%2520shot%252C%2520front%2520angled%2520view&width=100&height=100&seq=206&orientation=squarish",
    },
    {
      id: 3,
      name: "Samsung Galaxy S23 Ultra",
      price: 1199.99,
      image:
        "https://readdy.ai/api/search-image?query=Samsung%2520smartphone%252C%2520premium%2520product%2520photography%252C%2520white%2520background%252C%2520professional%2520lighting%252C%2520detailed%2520texture%252C%2520commercial%2520shot%252C%2520front%2520view&width=100&height=100&seq=207&orientation=squarish",
    },
    {
      id: 4,
      name: "Bose QuietComfort Ultra Headphones",
      price: 429.99,
      image:
        "https://readdy.ai/api/search-image?query=Bose%2520headphones%252C%2520premium%2520product%2520photography%252C%2520white%2520background%252C%2520professional%2520lighting%252C%2520detailed%2520texture%252C%2520commercial%2520shot%252C%2520side%2520view&width=100&height=100&seq=208&orientation=squarish",
    },
  ]);
  // Settings data
  const [settings] = useState({
    notifications: {
      orderUpdates: true,
      promotions: false,
      newProducts: true,
      accountActivity: true,
    },
    privacy: {
      shareActivity: false,
      allowRecommendations: true,
    },
    preferences: {
      language: "English",
      currency: "USD",
      theme: "Light",
    },
  });
  // Card component for profile sections
  const SectionCard = ({
    title,
    children,
    icon,
    actionText,
    onAction,
  }: {
    title: string;
    children: React.ReactNode;
    icon: string;
    actionText?: string;
    onAction?: () => void;
  }) => (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden mt-4">
      <div className="p-4 border-b border-gray-100">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <i className={`${icon} text-purple-600 mr-2`}></i>
            <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
          </div>
          {actionText && (
            <button
              onClick={onAction}
              className="text-blue-600 text-sm font-medium flex items-center cursor-pointer"
            >
              {actionText} <i className="fas fa-chevron-right ml-1 text-xs"></i>
            </button>
          )}
        </div>
      </div>
      <div className="p-4">{children}</div>
    </div>
  );
  return (
    <div className="min-h-screen bg-gray-50 pb-32">
      {/* Header */}
      <div className="bg-white fixed top-0 w-full z-10 shadow-sm">
        <div className="flex items-center justify-between px-4 py-3">
          <a
            href="https://readdy.ai/home/b79e29f1-1f47-4bb0-bee4-af561efbbbd4/959e5ddc-1083-4313-92b1-d4e7bdf2a84a"
            data-readdy="true"
            className="flex items-center cursor-pointer text-gray-700"
          >
            <i className="fas fa-arrow-left"></i>
          </a>
          <h1 className="text-lg font-semibold text-gray-800">My Profile</h1>
          <button className="text-purple-600 cursor-pointer">
            <i className="fas fa-cog"></i>
          </button>
        </div>
      </div>
      {/* Main Content */}
      <div className="pt-16 px-4 pb-32">
        {/* Profile Header */}
        <div className="flex flex-col items-center mt-6">
          <div className="relative">
            <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-md">
              <img
                src={userData.profileImage}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <button className="absolute bottom-0 right-0 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full p-2 shadow-md cursor-pointer !rounded-button">
              <i className="fas fa-camera text-xs"></i>
            </button>
          </div>
          <h2 className="text-xl font-semibold text-gray-800 mt-3">
            {userData.name}
          </h2>
          <p className="text-sm text-gray-500">
            Member since {userData.memberSince}
          </p>
          <div className="flex items-center mt-2">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <i
                  key={star}
                  className="fas fa-star text-yellow-400 text-xs"
                ></i>
              ))}
            </div>
            <span className="text-xs text-gray-600 ml-1">5.0 (24 reviews)</span>
          </div>
        </div>
        {/* Personal Information */}
        <SectionCard
          title="Personal Information"
          icon="fas fa-user"
          actionText="Edit"
          onAction={() => {}}
        >
          <div className="space-y-4">
            <div className="flex justify-between items-center py-2 border-b border-gray-100">
              <div>
                <p className="text-sm text-gray-500">Full Name</p>
                <p className="text-base text-gray-800">{userData.name}</p>
              </div>
              <i className="fas fa-pen text-gray-400 text-sm"></i>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-gray-100">
              <div>
                <p className="text-sm text-gray-500">Email Address</p>
                <p className="text-base text-gray-800">{userData.email}</p>
              </div>
              <i className="fas fa-pen text-gray-400 text-sm"></i>
            </div>
            <div className="flex justify-between items-center py-2">
              <div>
                <p className="text-sm text-gray-500">Phone Number</p>
                <p className="text-base text-gray-800">{userData.phone}</p>
              </div>
              <i className="fas fa-pen text-gray-400 text-sm"></i>
            </div>
          </div>
        </SectionCard>
        {/* Shipping Addresses */}
        <SectionCard
          title="Shipping Addresses"
          icon="fas fa-map-marker-alt"
          actionText="Add New"
          onAction={() => {}}
        >
          <div className="space-y-4">
            {addresses.map((address) => (
              <div
                key={address.id}
                className="flex items-start p-3 border border-gray-100 rounded-lg hover:border-blue-200 transition-colors"
              >
                <div className="flex-1">
                  <div className="flex items-center mb-1">
                    <span className="font-medium text-gray-800">
                      {address.type}
                    </span>
                    {address.isDefault && (
                      <span className="ml-2 px-2 py-0.5 bg-purple-100 text-purple-700 text-xs rounded-full">
                        Default
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-gray-600">{address.street}</p>
                  <p className="text-sm text-gray-600">
                    {address.city}, {address.state} {address.zip}
                  </p>
                  <p className="text-sm text-gray-600">{address.country}</p>
                </div>
                <div className="flex space-x-2">
                  <button className="p-2 text-gray-500 hover:text-blue-600 cursor-pointer">
                    <i className="fas fa-pen text-sm"></i>
                  </button>
                  <button className="p-2 text-gray-500 hover:text-red-600 cursor-pointer">
                    <i className="fas fa-trash-alt text-sm"></i>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </SectionCard>
        {/* Payment Methods */}
        <SectionCard
          title="Payment Methods"
          icon="fas fa-credit-card"
          actionText="Add New"
          onAction={() => {}}
        >
          <div className="space-y-4">
            {paymentMethods.map((payment) => (
              <div
                key={payment.id}
                className="flex items-center p-3 border border-gray-100 rounded-lg hover:border-blue-200 transition-colors"
              >
                <div className="w-10 h-10 flex items-center justify-center bg-gray-100 rounded-full mr-3">
                  <i
                    className={`fab fa-${payment.type} text-lg ${
                      payment.type === "visa" ? "text-blue-700" : "text-red-600"
                    }`}
                  ></i>
                </div>
                <div className="flex-1">
                  <div className="flex items-center">
                    <span className="font-medium text-gray-800">
                      {payment.type === "visa" ? "Visa" : "Mastercard"}
                    </span>
                    {payment.isDefault && (
                      <span className="ml-2 px-2 py-0.5 bg-purple-100 text-purple-700 text-xs rounded-full">
                        Default
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-gray-600">{payment.cardNumber}</p>
                  <p className="text-xs text-gray-500">
                    Expires {payment.expiryDate}
                  </p>
                </div>
                <div className="flex space-x-2">
                  <button className="p-2 text-gray-500 hover:text-blue-600 cursor-pointer">
                    <i className="fas fa-pen text-sm"></i>
                  </button>
                  <button className="p-2 text-gray-500 hover:text-red-600 cursor-pointer">
                    <i className="fas fa-trash-alt text-sm"></i>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </SectionCard>
        {/* Order History */}
        <SectionCard
          title="Order History"
          icon="fas fa-shopping-bag"
          actionText="View All"
          onAction={() => {}}
        >
          <div className="space-y-4">
            {orders.map((order) => (
              <div
                key={order.id}
                className="flex items-center p-3 border border-gray-100 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer"
              >
                <div className="w-12 h-12 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                  <img
                    src={order.image}
                    alt={order.id}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="ml-3 flex-1">
                  <div className="flex justify-between">
                    <span className="font-medium text-gray-800">
                      {order.id}
                    </span>
                    <span
                      className={`text-sm ${
                        order.status === "Delivered"
                          ? "text-green-600"
                          : "text-blue-600"
                      }`}
                    >
                      {order.status}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600">
                    {order.date} • {order.items}{" "}
                    {order.items === 1 ? "item" : "items"}
                  </p>
                  <p className="text-sm font-medium text-purple-600">
                    ${order.total.toFixed(2)}
                  </p>
                </div>
                <i className="fas fa-chevron-right text-gray-400 ml-2"></i>
              </div>
            ))}
          </div>
        </SectionCard>
        {/* Wishlist */}
        <SectionCard
          title="Wishlist"
          icon="fas fa-heart"
          actionText="View All"
          onAction={() => {}}
        >
          <div className="grid grid-cols-2 gap-3">
            {wishlistItems.map((item) => (
              <div
                key={item.id}
                className="border border-gray-100 rounded-lg p-3 hover:border-blue-200 transition-colors"
              >
                <div className="relative group">
                  <div className="w-full h-24 bg-gray-50 rounded-lg flex items-center justify-center mb-2 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-full object-contain"
                    />
                  </div>
                  <button className="absolute top-1 right-1 p-1.5 bg-white rounded-full shadow-sm text-gray-400 hover:text-red-500 transition-colors cursor-pointer !rounded-button">
                    <i className="fas fa-times text-xs"></i>
                  </button>
                </div>
                <h4 className="text-sm font-medium text-gray-800 line-clamp-1">
                  {item.name}
                </h4>
                <p className="text-sm text-purple-600 font-medium mt-1">
                  ${item.price.toFixed(2)}
                </p>
                <button className="w-full mt-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs py-1.5 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-colors cursor-pointer !rounded-button">
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </SectionCard>
        {/* Account Settings */}
        <SectionCard title="Account Settings" icon="fas fa-cog">
          <div className="space-y-4">
            <div>
              <h3 className="text-base font-medium text-gray-800 mb-2">
                Notifications
              </h3>
              <div className="space-y-3">
                {Object.entries(settings.notifications).map(([key, value]) => (
                  <div key={key} className="flex items-center justify-between">
                    <span className="text-sm text-gray-700">
                      {key === "orderUpdates"
                        ? "Order Updates"
                        : key === "promotions"
                        ? "Promotions & Deals"
                        : key === "newProducts"
                        ? "New Products"
                        : "Account Activity"}
                    </span>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={value}
                        className="sr-only peer"
                        onChange={() => {}}
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-gradient-to-r peer-checked:from-blue-600 peer-checked:to-purple-600"></div>
                    </label>
                  </div>
                ))}
              </div>
            </div>
            <div className="border-t border-gray-100 pt-4">
              <h3 className="text-base font-medium text-gray-800 mb-2">
                Privacy
              </h3>
              <div className="space-y-3">
                {Object.entries(settings.privacy).map(([key, value]) => (
                  <div key={key} className="flex items-center justify-between">
                    <span className="text-sm text-gray-700">
                      {key === "shareActivity"
                        ? "Share Activity with Partners"
                        : "Allow Personalized Recommendations"}
                    </span>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={value}
                        className="sr-only peer"
                        onChange={() => {}}
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-gradient-to-r peer-checked:from-blue-600 peer-checked:to-purple-600"></div>
                    </label>
                  </div>
                ))}
              </div>
            </div>
            <div className="border-t border-gray-100 pt-4">
              <h3 className="text-base font-medium text-gray-800 mb-2">
                Preferences
              </h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-700">Language</span>
                  <button className="flex items-center text-sm text-gray-800 font-medium cursor-pointer">
                    {settings.preferences.language}
                    <i className="fas fa-chevron-down ml-2 text-xs text-gray-500"></i>
                  </button>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-700">Currency</span>
                  <button className="flex items-center text-sm text-gray-800 font-medium cursor-pointer">
                    {settings.preferences.currency}
                    <i className="fas fa-chevron-down ml-2 text-xs text-gray-500"></i>
                  </button>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-700">Theme</span>
                  <button className="flex items-center text-sm text-gray-800 font-medium cursor-pointer">
                    {settings.preferences.theme}
                    <i className="fas fa-chevron-down ml-2 text-xs text-gray-500"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </SectionCard>
        {/* Logout Button */}
        <div className="mt-6">
          <button className="w-full py-3 border border-gray-300 text-gray-700 rounded-xl font-medium hover:bg-gray-50 transition-colors cursor-pointer !rounded-button">
            Log Out
          </button>
        </div>
        {/* App Version */}
        <div className="mt-6 text-center">
          <p className="text-xs text-gray-500">App Version 2.4.1</p>
        </div>
      </div>
      {/* Bottom Tab Bar */}
     <AppNavigation />
    </div>
  );
};
export default UserProfileManagement;
