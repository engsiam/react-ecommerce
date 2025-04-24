// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import AppNavigation from "../components/AppNavigation";
interface AdminStats {
  totalSales: number;
  totalOrders: number;
  totalUsers: number;
  totalProducts: number;
}
interface OrderData {
  id: string;
  customer: string;
  date: string;
  amount: number;
  status: "pending" | "completed" | "cancelled";
}
const AdminPanel: React.FC = () => {
  const [activeSection, setActiveSection] = useState("dashboard");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDateRange, setSelectedDateRange] = useState("today");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const stats: AdminStats = {
    totalSales: 152890.5,
    totalOrders: 1234,
    totalUsers: 8562,
    totalProducts: 456,
  };
  const recentOrders: OrderData[] = [
    {
      id: "#ORD-7829",
      customer: "Emily Thompson",
      date: "2025-04-16",
      amount: 299.99,
      status: "completed",
    },
    {
      id: "#ORD-7830",
      customer: "Michael Chen",
      date: "2025-04-16",
      amount: 159.5,
      status: "pending",
    },
    {
      id: "#ORD-7831",
      customer: "Sarah Johnson",
      date: "2025-04-16",
      amount: 89.99,
      status: "cancelled",
    },
    {
      id: "#ORD-7832",
      customer: "David Wilson",
      date: "2025-04-16",
      amount: 449.99,
      status: "completed",
    },
  ];
  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-green-100 text-green-800";
      case "pending":
        return "bg-yellow-100 text-yellow-800";
      case "cancelled":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Top Navigation */}
      <div className="bg-white shadow-sm fixed top-0 w-full z-10">
        <div className="flex items-center justify-between px-4 py-3">
          <div className="flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-500 hover:text-gray-600"
            >
              <i className="fas fa-bars text-xl"></i>
            </button>
            <h1 className="text-xl font-semibold text-gray-800 ml-4">
              Admin Dashboard
            </h1>
          </div>
          <div className="flex items-center space-x-4">
            <button className="text-gray-500 hover:text-gray-600">
              <i className="fas fa-bell text-xl"></i>
            </button>
            <div className="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center text-white">
              <i className="fas fa-user"></i>
            </div>
          </div>
        </div>
      </div>
      {/* Sidebar */}
      <div
        className={`fixed left-0 top-0 h-full bg-white w-64 shadow-lg transform transition-transform duration-200 ease-in-out z-20 ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-4 border-b">
          <h2 className="text-xl font-semibold text-gray-800">
            ShopEase Admin
          </h2>
        </div>
        <nav className="mt-4">
          {[
            { id: "dashboard", icon: "fas fa-chart-line", label: "Dashboard" },
            { id: "products", icon: "fas fa-box", label: "Products" },
            { id: "orders", icon: "fas fa-shopping-cart", label: "Orders" },
            { id: "customers", icon: "fas fa-users", label: "Customers" },
            { id: "analytics", icon: "fas fa-chart-bar", label: "Analytics" },
            { id: "settings", icon: "fas fa-cog", label: "Settings" },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setActiveSection(item.id);
                setIsMenuOpen(false);
              }}
              className={`w-full flex items-center px-4 py-3 text-left ${
                activeSection === item.id
                  ? "bg-emerald-50 text-emerald-600"
                  : "text-gray-600 hover:bg-gray-50"
              }`}
            >
              <i className={`${item.icon} w-6`}></i>
              <span className="ml-3">{item.label}</span>
            </button>
          ))}
        </nav>
      </div>
      {/* Main Content */}
      <div className="pt-16 px-4 pb-4 ml-0">
        {/* Search and Date Filter */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mt-4 gap-4">
          <div className="relative w-full sm:w-64">
            <input
              type="text"
              placeholder="Search..."
              className="w-full bg-white rounded-lg pl-10 pr-4 py-2 text-sm border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <span className="absolute left-3 top-2.5 text-gray-400">
              <i className="fas fa-search"></i>
            </span>
          </div>
          <div className="flex space-x-2">
            {["today", "week", "month", "year"].map((range) => (
              <button
                key={range}
                onClick={() => setSelectedDateRange(range)}
                className={`px-3 py-2 rounded-lg text-sm ${
                  selectedDateRange === range
                    ? "bg-indigo-600 text-white"
                    : "bg-white text-gray-600 hover:bg-gray-50"
                }`}
              >
                {range.charAt(0).toUpperCase() + range.slice(1)}
              </button>
            ))}
          </div>
        </div>
        {/* Stats Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
          {[
            {
              label: "Total Sales",
              value: `$${stats.totalSales.toLocaleString()}`,
              icon: "fas fa-dollar-sign",
              color: "bg-green-500",
            },
            {
              label: "Total Orders",
              value: stats.totalOrders.toLocaleString(),
              icon: "fas fa-shopping-bag",
              color: "bg-blue-500",
            },
            {
              label: "Total Users",
              value: stats.totalUsers.toLocaleString(),
              icon: "fas fa-users",
              color: "bg-purple-500",
            },
            {
              label: "Total Products",
              value: stats.totalProducts.toLocaleString(),
              icon: "fas fa-box",
              color: "bg-orange-500",
            },
          ].map((stat, index) => (
            <div key={index} className="bg-white rounded-lg p-4 shadow-sm">
              <div className="flex items-center">
                <div
                  className={`w-12 h-12 rounded-full ${stat.color} flex items-center justify-center text-white`}
                >
                  <i className={`${stat.icon} text-xl`}></i>
                </div>
                <div className="ml-4">
                  <p className="text-sm text-gray-500">{stat.label}</p>
                  <p className="text-xl font-semibold text-gray-800">
                    {stat.value}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Recent Orders */}
        <div className="mt-6 bg-white rounded-lg shadow-sm">
          <div className="p-4 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-800">
              Recent Orders
            </h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Order ID
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Customer
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Date
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Amount
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Status
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {recentOrders.map((order) => (
                  <tr key={order.id}>
                    <td className="px-4 py-3 text-sm text-gray-900">
                      {order.id}
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-900">
                      {order.customer}
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-500">
                      {order.date}
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-900">
                      ${order.amount.toFixed(2)}
                    </td>
                    <td className="px-4 py-3">
                      <span
                        className={`px-2 py-1 text-xs rounded-full ${getStatusColor(
                          order.status
                        )}`}
                      >
                        {order.status.charAt(0).toUpperCase() +
                          order.status.slice(1)}
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <button className="text-indigo-600 hover:text-indigo-800">
                        <i className="fas fa-eye"></i>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
const EcommerceHomePage: React.FC = () => {
  // const [currentTab, setCurrentTab] = useState("home");
  const [searchQuery, setSearchQuery] = useState("");
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest(".relative")) {
        setIsProfileDropdownOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);
  // Mock data for featured products
  const featuredProducts = [
    {
      id: 1,
      name: "Premium Wireless Headphones",
      price: 129.99,
      rating: 4.8,
      reviews: 342,
      imageUrl:
        "https://readdy.ai/api/search-image?query=Professional%20studio%20headphones%20with%20premium%20metallic%20finish%20and%20leather%20ear%20cushions%20on%20minimal%20light%20gray%20background%2C%20product%20photography%20with%20dramatic%20lighting%2C%20ultra%20sharp%20details%2C%20centered%20composition%2C%20commercial%20quality&width=400&height=300&seq=101&orientation=landscape",
    },
    {
      id: 2,
      name: "Smart Fitness Watch",
      price: 89.99,
      rating: 4.6,
      reviews: 215,
      imageUrl:
        "https://readdy.ai/api/search-image?query=Modern%20smartwatch%20with%20sleek%20aluminum%20case%20and%20bright%20OLED%20display%20showing%20fitness%20metrics%20on%20minimal%20light%20gray%20background%2C%20product%20photography%20with%20soft%20lighting%2C%20ultra%20sharp%20details%2C%20centered%20composition%2C%20commercial%20quality&width=400&height=300&seq=102&orientation=landscape",
    },
    {
      id: 3,
      name: "Portable Bluetooth Speaker",
      price: 59.99,
      rating: 4.5,
      reviews: 178,
      imageUrl:
        "https://readdy.ai/api/search-image?query=Compact%20cylindrical%20bluetooth%20speaker%20with%20fabric%20mesh%20covering%20and%20metallic%20accents%20on%20minimal%20light%20gray%20background%2C%20product%20photography%20with%20directional%20lighting%2C%20ultra%20sharp%20details%2C%20centered%20composition%2C%20commercial%20quality&width=400&height=300&seq=103&orientation=landscape",
    },
    {
      id: 4,
      name: "Ergonomic Gaming Chair",
      price: 199.99,
      rating: 4.7,
      reviews: 124,
      imageUrl:
        "https://readdy.ai/api/search-image?query=Racing%20style%20gaming%20chair%20with%20premium%20PU%20leather%20and%20carbon%20fiber%20accents%20on%20minimal%20light%20gray%20background%2C%20product%20photography%20with%20dramatic%20lighting%2C%20ultra%20sharp%20details%2C%20centered%20composition%2C%20commercial%20quality&width=400&height=300&seq=104&orientation=landscape",
    },
  ];
  // Mock data for new arrivals
  const newArrivals = [
    {
      id: 5,
      name: 'Ultra HD Smart TV 55"',
      price: 549.99,
      rating: 4.9,
      reviews: 87,
      imageUrl:
        "https://readdy.ai/api/search-image?query=Slim%20bezel%204K%20television%20with%20vibrant%20display%20showing%20nature%20scene%20on%20minimal%20light%20gray%20background%2C%20product%20photography%20with%20ambient%20lighting%2C%20ultra%20sharp%20details%2C%20centered%20composition%2C%20commercial%20quality&width=400&height=300&seq=105&orientation=landscape",
    },
    {
      id: 6,
      name: "Professional DSLR Camera",
      price: 899.99,
      rating: 4.8,
      reviews: 56,
      imageUrl:
        "https://readdy.ai/api/search-image?query=Professional%20mirrorless%20camera%20with%20premium%20telephoto%20lens%20attached%20on%20minimal%20light%20gray%20background%2C%20product%20photography%20with%20studio%20lighting%2C%20ultra%20sharp%20details%2C%20centered%20composition%2C%20commercial%20quality&width=400&height=300&seq=106&orientation=landscape",
    },
    {
      id: 7,
      name: "Mechanical Gaming Keyboard",
      price: 129.99,
      rating: 4.7,
      reviews: 93,
      imageUrl:
        "https://readdy.ai/api/search-image?query=Full%20size%20mechanical%20keyboard%20with%20per%20key%20RGB%20lighting%20and%20aluminum%20frame%20on%20minimal%20light%20gray%20background%2C%20product%20photography%20with%20dramatic%20lighting%2C%20ultra%20sharp%20details%2C%20centered%20composition%2C%20commercial%20quality&width=400&height=300&seq=107&orientation=landscape",
    },
    {
      id: 8,
      name: "Wireless Charging Pad",
      price: 34.99,
      rating: 4.5,
      reviews: 112,
      imageUrl:
        "https://readdy.ai/api/search-image?query=Circular%20wireless%20charging%20pad%20with%20LED%20indicator%20and%20premium%20aluminum%20finish%20on%20minimal%20light%20gray%20background%2C%20product%20photography%20with%20soft%20lighting%2C%20ultra%20sharp%20details%2C%20centered%20composition%2C%20commercial%20quality&width=400&height=300&seq=108&orientation=landscape",
    },
  ];
  // Mock data for categories
  // const categories = [
  //   {
  //     id: 1,
  //     name: "Electronics",
  //     icon: "https://readdy.ai/api/search-image?query=Flat%20design%20electronics%20icon%20on%20orange%20circular%20background%2C%20simple%20geometric%20smartphone%20illustration%20with%20sparkle%20elements%2C%20clean%20minimal%20style%2C%20vibrant%20colors%2C%20centered%20composition%2C%20modern%20tech%20symbol&width=64&height=64&seq=15&orientation=squarish",
  //   },
  //   {
  //     id: 2,
  //     name: "Fashion",
  //     icon: "https://readdy.ai/api/search-image?query=Flat%20design%20fashion%20icon%20on%20blue%20circular%20background%2C%20simple%20geometric%20hanger%20illustration%20with%20sparkle%20elements%2C%20clean%20minimal%20style%2C%20vibrant%20colors%2C%20centered%20composition%2C%20modern%20fashion%20symbol&width=64&height=64&seq=16&orientation=squarish",
  //   },
  //   {
  //     id: 3,
  //     name: "Home",
  //     icon: "https://readdy.ai/api/search-image?query=Flat%20design%20home%20icon%20on%20purple%20circular%20background%2C%20simple%20geometric%20house%20illustration%20with%20sparkle%20elements%2C%20clean%20minimal%20style%2C%20vibrant%20colors%2C%20centered%20composition%2C%20modern%20home%20symbol&width=64&height=64&seq=17&orientation=squarish",
  //   },
  //   {
  //     id: 4,
  //     name: "Sports",
  //     icon: "https://readdy.ai/api/search-image?query=Flat%20design%20sports%20icon%20on%20green%20circular%20background%2C%20simple%20geometric%20basketball%20illustration%20with%20sparkle%20elements%2C%20clean%20minimal%20style%2C%20vibrant%20colors%2C%20centered%20composition%2C%20modern%20sports%20symbol&width=64&height=64&seq=18&orientation=squarish",
  //   },
  //   {
  //     id: 5,
  //     name: "Beauty",
  //     icon: "https://readdy.ai/api/search-image?query=Flat%20design%20beauty%20icon%20on%20purple%20circular%20background%2C%20simple%20geometric%20lipstick%20illustration%20with%20sparkle%20elements%2C%20clean%20minimal%20style%2C%20vibrant%20colors%2C%20centered%20composition%2C%20modern%20beauty%20symbol&width=64&height=64&seq=19&orientation=squarish",
  //   },
  //   {
  //     id: 6,
  //     name: "Toys",
  //     icon: "https://readdy.ai/api/search-image?query=Flat%20design%20toys%20icon%20on%20red%20circular%20background%2C%20simple%20geometric%20teddy%20bear%20illustration%20with%20sparkle%20elements%2C%20clean%20minimal%20style%2C%20vibrant%20colors%2C%20centered%20composition%2C%20modern%20toy%20symbol&width=64&height=64&seq=20&orientation=squarish",
  //   },
  // ];
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };
  const renderProductCard = (product: any) => (
    <div
      key={product.id}
      className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden cursor-pointer group"
    >
      <div className="h-44 overflow-hidden relative">
        <a
          href="https://readdy.ai/home/b79e29f1-1f47-4bb0-bee4-af561efbbbd4/9ff06d5e-601a-4dc0-b491-801a1ecc154f"
          data-readdy="true"
        >
          <img
            src={product.imageUrl}
            alt={product.name}
            className="w-full h-full object-cover object-top transform group-hover:scale-105 transition-transform duration-500"
          />
        </a>
        <div className="absolute top-3 right-3 space-y-2">
          <button className="w-8 h-8 bg-white/95 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-600 hover:text-red-500 hover:bg-white transition-all duration-300 shadow-sm hover:shadow-md">
            <i className="fas fa-heart text-sm"></i>
          </button>
          <button className="w-8 h-8 bg-white/95 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-600 hover:text-indigo-500 hover:bg-white transition-all duration-300 shadow-sm hover:shadow-md">
            <i className="fas fa-share-alt text-sm"></i>
          </button>
        </div>
        <div className="absolute bottom-3 left-3">
          <div className="bg-[#9641C1] text-white text-xs font-medium px-2.5 py-1 rounded-full shadow-sm">
            New Arrival
          </div>
        </div>
      </div>
      <div className="p-4">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <h3 className="text-[15px] font-medium text-gray-800 leading-snug line-clamp-2 mb-1.5 font-sans group-hover:text-[#9641C1] transition-colors duration-300">
              {product.name}
            </h3>
            <div className="flex items-center gap-2">
              <div className="flex items-center bg-yellow-50 px-2 py-1 rounded-full">
                <span className="text-yellow-400">
                  <i className="fas fa-star text-[11px]"></i>
                </span>
                <span className="text-xs font-medium text-yellow-700 ml-1">
                  {product.rating}
                </span>
              </div>
              <div className="text-xs text-gray-500 flex items-center">
                <i className="fas fa-comment-alt text-[10px] mr-1"></i>
                {product.reviews} reviews
              </div>
            </div>
          </div>
        </div>
        <div className="mt-3 flex items-center justify-between">
          <div>
            <p className="text-base font-semibold text-gray-900">
              ${product.price.toFixed(2)}
            </p>
            <p className="text-xs text-gray-500 line-through">
              ${(product.price * 1.2).toFixed(2)}
            </p>
          </div>
          <button className="h-9 px-4 bg-[#9641C1] hover:bg-[#8537AB] text-white rounded-full flex items-center justify-center gap-2 transition-colors duration-300 group">
            <i className="fas fa-shopping-cart text-sm"></i>
            <span className="text-sm font-medium">Add</span>
          </button>
        </div>
      </div>
    </div>
  );
  return (
    <div
      className="min-h-screen relative pb-16"
      style={{
        backgroundImage: `url('https://readdy.ai/api/search-image?query=Elegant%20abstract%20gradient%20background%20with%20soft%20flowing%20curves%20and%20gentle%20color%20transitions%20from%20light%20blue%20to%20soft%20lavender%20to%20white%2C%20delicate%20pastel%20tones%2C%20minimal%20design%20with%20subtle%20texture%2C%20perfect%20for%20premium%20brand%20aesthetic%2C%20ultra%20high%20resolution%2C%20centered%20composition&width=375&height=812&seq=113&orientation=portrait')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Navigation Bar */}
      <div className="bg-white/90 backdrop-blur-sm fixed top-0 w-full z-10 shadow-sm">
        <div className="flex items-center justify-between p-4">
          <h1 className="text-xl font-semibold text-gray-800">Welcome</h1>
          <div className="flex items-center gap-2">
            <div className="relative">
              <i className="fas fa-shopping-cart text-gray-700"></i>
              <span className="absolute -top-1 -right-2 bg-indigo-600 text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full">
                2
              </span>
            </div>
            <button className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
              <i className="fas fa-bell text-gray-600 text-sm"></i>
            </button>
            <div className="relative">
              <button
                onClick={() => setIsProfileDropdownOpen(!isProfileDropdownOpen)}
                className="w-8 h-8 rounded-full overflow-hidden border-2 border-white focus:outline-none"
              >
                <img
                  src="https://readdy.ai/api/search-image?query=Professional%20headshot%20of%20young%20business%20professional%20with%20warm%20genuine%20smile%2C%20modern%20business%20attire%2C%20soft%20neutral%20background%2C%20perfect%20studio%20lighting%2C%20natural%20skin%20tones%2C%20ultra%20sharp%20focus%20on%20face&width=100&height=100&seq=112&orientation=squarish"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </button>
              {isProfileDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-1 z-50">
                  <button className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100 flex items-center">
                    <i className="fas fa-user-circle mr-2"></i>
                    My Profile
                  </button>
                  <button className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100 flex items-center">
                    <i className="fas fa-cog mr-2"></i>
                    Settings
                  </button>
                  <button className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100 flex items-center">
                    <i className="fas fa-question-circle mr-2"></i>
                    Help Center
                  </button>
                  <div className="border-t border-gray-100 my-1"></div>
                  <button className="w-full px-4 py-2 text-left text-sm text-red-600 hover:bg-gray-100 flex items-center">
                    <i className="fas fa-sign-out-alt mr-2"></i>
                    Sign Out
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      {/* Main Content */}
      <div className="pt-16 pb-16">
        {/* Welcome Text */}
        <div className="px-4 pt-6">
          <h2 className="text-2xl font-semibold text-gray-800 tracking-tight font-sans">
            Hi, Welcome Back! ✨
          </h2>
          <p className="text-sm text-gray-500 mt-2">
            Let's find something special for you today
          </p>
        </div>
        {/* Search Bar */}
        <div className="px-4 pt-4">
          <div className="flex items-center gap-2">
            <div className="relative flex-1">
              <input
                type="text"
                placeholder="Search products..."
                className="w-full bg-white rounded-xl py-3 pl-11 pr-4 text-sm shadow-sm border border-gray-100 focus:border-emerald-300 focus:ring focus:ring-emerald-200 focus:ring-opacity-50 transition-all duration-200"
                value={searchQuery}
                onChange={handleSearchChange}
              />
              <span className="absolute left-4 top-3.5 text-gray-400">
                <i className="fas fa-search"></i>
              </span>
            </div>
            <button className="p-3 bg-indigo-600 rounded-xl text-white shadow-sm hover:bg-indigo-700 transition-colors duration-200">
              <i className="fas fa-sliders-h"></i>
            </button>
          </div>
        </div>
        {/* Categories */}
        <div className="mt-4">
          <div className="px-4 flex justify-between items-center">
            <h2 className="text-[17px] font-semibold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent tracking-tight">
              Categories
            </h2>
            <Link
              to="/category"
              data-readdy="true"
              className="text-xs text-gray-500 flex items-center"
            >
              View All
              <i className="fas fa-chevron-right ml-1 text-xs"></i>
            </Link>
          </div>
          <div className="mt-2 px-4 overflow-x-auto">
            <div className="flex space-x-4 py-2">
              {[
                {
                  id: 1,
                  name: "Electronics",
                  icon: "https://readdy.ai/api/search-image?query=Flat%20design%20electronics%20icon%20on%20orange%20circular%20background%2C%20simple%20geometric%20smartphone%20illustration%20with%20sparkle%20elements%2C%20clean%20minimal%20style%2C%20vibrant%20colors%2C%20centered%20composition%2C%20modern%20tech%20symbol&width=64&height=64&seq=15&orientation=squarish",
                },
                {
                  id: 2,
                  name: "Fashion",
                  icon: "https://readdy.ai/api/search-image?query=Flat%20design%20fashion%20icon%20on%20blue%20circular%20background%2C%20simple%20geometric%20hanger%20illustration%20with%20sparkle%20elements%2C%20clean%20minimal%20style%2C%20vibrant%20colors%2C%20centered%20composition%2C%20modern%20fashion%20symbol&width=64&height=64&seq=16&orientation=squarish",
                },
                {
                  id: 3,
                  name: "Home",
                  icon: "https://readdy.ai/api/search-image?query=Flat%20design%20home%20icon%20on%20purple%20circular%20background%2C%20simple%20geometric%20house%20illustration%20with%20sparkle%20elements%2C%20clean%20minimal%20style%2C%20vibrant%20colors%2C%20centered%20composition%2C%20modern%20home%20symbol&width=64&height=64&seq=17&orientation=squarish",
                },
                {
                  id: 4,
                  name: "Sports",
                  icon: "https://readdy.ai/api/search-image?query=Flat%20design%20sports%20icon%20on%20green%20circular%20background%2C%20simple%20geometric%20basketball%20illustration%20with%20sparkle%20elements%2C%20clean%20minimal%20style%2C%20vibrant%20colors%2C%20centered%20composition%2C%20modern%20sports%20symbol&width=64&height=64&seq=18&orientation=squarish",
                },
                {
                  id: 5,
                  name: "Beauty",
                  icon: "https://readdy.ai/api/search-image?query=Flat%20design%20beauty%20icon%20on%20purple%20circular%20background%2C%20simple%20geometric%20lipstick%20illustration%20with%20sparkle%20elements%2C%20clean%20minimal%20style%2C%20vibrant%20colors%2C%20centered%20composition%2C%20modern%20beauty%20symbol&width=64&height=64&seq=19&orientation=squarish",
                },
                {
                  id: 6,
                  name: "Toys",
                  icon: "https://readdy.ai/api/search-image?query=Flat%20design%20toys%20icon%20on%20red%20circular%20background%2C%20simple%20geometric%20teddy%20bear%20illustration%20with%20sparkle%20elements%2C%20clean%20minimal%20style%2C%20vibrant%20colors%2C%20centered%20composition%2C%20modern%20toy%20symbol&width=64&height=64&seq=20&orientation=squarish",
                },
              ].map((category) => (
                <div
                  key={category.id}
                  className="flex flex-col items-center cursor-pointer"
                >
                  <div className="w-16 h-16 rounded-full overflow-hidden bg-white shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
                    <img
                      src={category.icon}
                      alt={category.name}
                      className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <span className="text-xs font-medium text-gray-700 mt-2 whitespace-nowrap overflow-hidden text-overflow-ellipsis max-w-[64px] text-center">
                    {category.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Hero Banner */}
        <div className="px-4 mt-4">
          <Swiper
            modules={[Pagination, Autoplay]}
            pagination={{ clickable: true }}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            className="rounded-xl overflow-hidden shadow-lg"
          >
            <SwiperSlide>
              <div className="relative">
                <img
                  src="https://readdy.ai/api/search-image?query=Premium%20electronics%20and%20luxury%20accessories%20arranged%20artistically%20with%20floating%203D%20MEGA%20SALE%20text%2C%20dramatic%20studio%20lighting%2C%20deep%20purple%20to%20gold%20gradient%20background%2C%20professional%20commercial%20photography%20with%20high%20end%20products&width=600&height=250&seq=109&orientation=landscape"
                  alt="Special Offers"
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/80 to-purple-800/60 flex flex-col justify-center px-6">
                  <div className="animate-fade-in">
                    <h3 className="text-white text-2xl font-bold mb-1">
                      Mega Sale
                    </h3>
                    <p className="text-white/90 text-sm mb-3">
                      Up to 70% Off on Premium Products
                    </p>
                    <div className="flex gap-2">
                      <div className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                        <span className="text-white text-xs font-medium">
                          Limited Time
                        </span>
                      </div>
                      <div className="bg-gradient-to-r from-indigo-500 to-purple-600 px-3 py-1 rounded-full">
                        <span className="text-white text-xs font-medium">
                          Shop Now
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute top-3 right-3">
                  <div className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-sm font-bold px-3 py-1 rounded-full animate-pulse">
                    -70%
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative">
                <img
                  src="https://readdy.ai/api/search-image?query=Latest%20smartphones%20and%20laptops%20arranged%20in%20modern%20composition%20with%20floating%203D%20NEW%20ARRIVALS%20text%2C%20futuristic%20blue%20to%20cyan%20gradient%20background%2C%20professional%20tech%20product%20photography%20with%20dramatic%20lighting%20effects&width=600&height=250&seq=110&orientation=landscape"
                  alt="New Arrivals"
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-cyan-800/60 flex flex-col justify-center px-6">
                  <div className="animate-fade-in">
                    <h3 className="text-white text-2xl font-bold mb-1">
                      New Arrivals
                    </h3>
                    <p className="text-white/90 text-sm mb-3">
                      Discover Latest Tech Innovations
                    </p>
                    <div className="flex gap-2">
                      <div className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                        <span className="text-white text-xs font-medium">
                          Just Launched
                        </span>
                      </div>
                      <div className="bg-gradient-to-r from-blue-500 to-cyan-600 px-3 py-1 rounded-full">
                        <span className="text-white text-xs font-medium">
                          Explore Now
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative">
                <img
                  src="https://readdy.ai/api/search-image?query=Luxury%20watches%20and%20premium%20accessories%20arranged%20elegantly%20with%20floating%203D%20EXCLUSIVE%20COLLECTION%20text%2C%20sophisticated%20rose%20gold%20to%20burgundy%20gradient%20background%2C%20high%20end%20product%20photography%20with%20perfect%20lighting&width=600&height=250&seq=111&orientation=landscape"
                  alt="Exclusive Collection"
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-rose-900/80 to-pink-800/60 flex flex-col justify-center px-6">
                  <div className="animate-fade-in">
                    <h3 className="text-white text-2xl font-bold mb-1">
                      Exclusive Collection
                    </h3>
                    <p className="text-white/90 text-sm mb-3">
                      Premium Lifestyle Products
                    </p>
                    <div className="flex gap-2">
                      <div className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                        <span className="text-white text-xs font-medium">
                          Limited Edition
                        </span>
                      </div>
                      <div className="bg-gradient-to-r from-rose-500 to-pink-600 px-3 py-1 rounded-full">
                        <span className="text-white text-xs font-medium">
                          View Collection
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        {/* Featured Products */}
        <div className="mt-6">
          <div className="px-4 flex justify-between items-center">
            <h2 className="text-[19px] font-semibold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent tracking-tight">
              Featured Products
            </h2>
            <button className="text-sm text-indigo-600 cursor-pointer">
              See All
            </button>
          </div>
          <div className="mt-2 px-4">
            <Link to="/checkout">
              <div className="grid grid-cols-2 gap-3">
                {featuredProducts.map((product) => renderProductCard(product))}
              </div>
            </Link>
          </div>
        </div>
        {/* New Arrivals */}
        <div className="mt-6">
          <div className="px-4 flex justify-between items-center">
            <h2 className="text-[19px] font-semibold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent tracking-tight">
              New Arrivals
            </h2>
            <button className="text-sm text-indigo-600 cursor-pointer">
              See All
            </button>
          </div>
          <div className="mt-2 px-4">
            <div className="grid grid-cols-2 gap-3">
              {newArrivals.map((product) => renderProductCard(product))}
            </div>
          </div>
        </div>
        {/* Popular Collections */}
        <div className="mt-6">
          <div className="px-4">
            <h2 className="text-[19px] font-semibold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent tracking-tight mb-4">
              Popular Collections
            </h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-indigo-100 to-purple-50 rounded-xl p-4">
                <div className="flex items-center mb-2">
                  <i className="fas fa-mobile-alt text-indigo-600 text-xl mr-2"></i>
                  <h3 className="text-sm font-medium text-gray-800">
                    Smart Gadgets
                  </h3>
                </div>
                <p className="text-xs text-gray-600">120+ products</p>
              </div>
              <div className="bg-gradient-to-br from-purple-100 to-pink-50 rounded-xl p-4">
                <div className="flex items-center mb-2">
                  <i className="fas fa-headphones text-purple-600 text-xl mr-2"></i>
                  <h3 className="text-sm font-medium text-gray-800">
                    Audio Devices
                  </h3>
                </div>
                <p className="text-xs text-gray-600">85+ products</p>
              </div>
              <div className="bg-gradient-to-br from-blue-100 to-indigo-50 rounded-xl p-4">
                <div className="flex items-center mb-2">
                  <i className="fas fa-laptop text-blue-600 text-xl mr-2"></i>
                  <h3 className="text-sm font-medium text-gray-800">Laptops</h3>
                </div>
                <p className="text-xs text-gray-600">95+ products</p>
              </div>
              <div className="bg-gradient-to-br from-pink-100 to-rose-50 rounded-xl p-4">
                <div className="flex items-center mb-2">
                  <i className="fas fa-camera text-pink-600 text-xl mr-2"></i>
                  <h3 className="text-sm font-medium text-gray-800">Cameras</h3>
                </div>
                <p className="text-xs text-gray-600">70+ products</p>
              </div>
            </div>
          </div>
          {/* Recent Searches */}
          <div className="mt-6 px-4">
            <h2 className="text-[19px] font-semibold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent tracking-tight mb-3">
              Recent Searches
            </h2>
            <div className="flex flex-wrap gap-2">
              {[
                "Wireless Earbuds",
                "Smart Watch",
                "Gaming Mouse",
                "USB-C Cable",
                "Power Bank",
              ].map((item, index) => (
                <button
                  key={index}
                  className="bg-gray-100 text-gray-700 text-sm px-3 py-1.5 rounded-full hover:bg-gray-200"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
          {/* Trending Tags */}
          <div className="mt-6 px-4">
            <h2 className="text-[19px] font-semibold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent tracking-tight mb-3">
              Trending Tags
            </h2>
            <div className="flex flex-wrap gap-2">
              {[
                { name: "New Arrival", color: "bg-green-100 text-green-700" },
                { name: "Best Seller", color: "bg-blue-100 text-blue-700" },
                {
                  name: "Limited Edition",
                  color: "bg-purple-100 text-purple-700",
                },
                { name: "Sale", color: "bg-red-100 text-red-700" },
              ].map((tag, index) => (
                <span
                  key={index}
                  className={`${tag.color} text-sm px-3 py-1 rounded-full`}
                >
                  #{tag.name}
                </span>
              ))}
            </div>
          </div>
          {/* Flash Deals */}
          <div className="mt-6 px-4">
            <h2 className="text-[19px] font-semibold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent tracking-tight mb-3">
              Flash Deals ⚡
            </h2>
            <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl shadow-sm p-4">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center shadow-lg transform hover:scale-105 transition-transform duration-200">
                    <i className="fas fa-bolt text-white text-2xl"></i>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-800">
                      Flash Sale Ends In
                    </h3>
                    <div className="flex items-center gap-2 mt-1">
                      <div className="bg-red-500 text-white px-2 py-1 rounded-lg text-sm font-bold">
                        05
                      </div>
                      <span className="text-red-500 font-bold">:</span>
                      <div className="bg-red-500 text-white px-2 py-1 rounded-lg text-sm font-bold">
                        32
                      </div>
                      <span className="text-red-500 font-bold">:</span>
                      <div className="bg-red-500 text-white px-2 py-1 rounded-lg text-sm font-bold">
                        14
                      </div>
                    </div>
                  </div>
                </div>
                <Link
                  to="/flash"
                  data-readdy="true"
                  className="text-sm text-indigo-600 font-medium hover:text-indigo-700 transition-colors duration-200"
                >
                  View All
                </Link>
              </div>
              <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
                {[
                  {
                    name: "Wireless Earbuds Pro",
                    discount: "45% OFF",
                    price: "$89.99",
                    originalPrice: "$159.99",
                    image:
                      "https://readdy.ai/api/search-image?query=Premium%20wireless%20earbuds%20with%20charging%20case%20on%20minimal%20light%20gray%20background%2C%20product%20photography%20with%20dramatic%20lighting%2C%20ultra%20sharp%20details%2C%20centered%20composition%2C%20commercial%20quality&width=200&height=200&seq=201&orientation=squarish",
                  },
                  {
                    name: "Smart Watch Series 5",
                    discount: "30% OFF",
                    price: "$199.99",
                    originalPrice: "$299.99",
                    image:
                      "https://readdy.ai/api/search-image?query=Modern%20smartwatch%20with%20metallic%20finish%20on%20minimal%20light%20gray%20background%2C%20product%20photography%20with%20dramatic%20lighting%2C%20ultra%20sharp%20details%2C%20centered%20composition%2C%20commercial%20quality&width=200&height=200&seq=202&orientation=squarish",
                  },
                  {
                    name: "HD Action Camera",
                    discount: "50% OFF",
                    price: "$149.99",
                    originalPrice: "$299.99",
                    image:
                      "https://readdy.ai/api/search-image?query=Compact%20action%20camera%20with%20rugged%20design%20on%20minimal%20light%20gray%20background%2C%20product%20photography%20with%20dramatic%20lighting%2C%20ultra%20sharp%20details%2C%20centered%20composition%2C%20commercial%20quality&width=200&height=200&seq=203&orientation=squarish",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="min-w-[160px] bg-white rounded-xl p-3 shadow-sm hover:shadow-md transition-all duration-200 transform hover:scale-105"
                  >
                    <div className="relative mb-3">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-28 object-cover rounded-xl"
                      />
                      <div className="absolute top-2 left-2 bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs px-3 py-1 rounded-full font-medium shadow-sm">
                        {item.discount}
                      </div>
                      <div className="absolute bottom-2 right-2 bg-white/90 backdrop-blur-sm text-indigo-600 p-2 rounded-full shadow-sm hover:bg-white transition-colors duration-200 cursor-pointer">
                        <i className="fas fa-shopping-cart text-sm"></i>
                      </div>
                    </div>
                    <h4 className="text-sm font-medium text-gray-800 line-clamp-1 mb-1">
                      {item.name}
                    </h4>
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-sm font-bold text-indigo-600">
                          {item.price}
                        </span>
                        <span className="text-xs text-gray-400 line-through ml-2">
                          {item.originalPrice}
                        </span>
                      </div>
                      <div className="flex items-center">
                        <i className="fas fa-star text-yellow-400 text-xs mr-1"></i>
                        <span className="text-xs text-gray-500">4.8</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* Top Brands */}
          <div className="mt-6 px-4">
            <h2 className="text-[19px] font-semibold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent tracking-tight mb-3">
              Top Brands
            </h2>
            <div className="grid grid-cols-4 gap-3">
              {[
                {
                  name: "Apple",
                  logo: "https://readdy.ai/api/search-image?query=Modern%20minimalist%20apple%20brand%20logo%20design%20with%20sleek%20metallic%20finish%2C%20centered%20composition%20on%20pure%20white%20background%2C%20professional%203D%20rendering%20with%20subtle%20shadows%20and%20reflections%2C%20ultra%20high%20quality&width=80&height=80&seq=301&orientation=squarish",
                },
                {
                  name: "Samsung",
                  logo: "https://readdy.ai/api/search-image?query=Modern%20minimalist%20samsung%20brand%20logo%20design%20with%20elegant%20blue%20gradient%20finish%2C%20centered%20composition%20on%20pure%20white%20background%2C%20professional%203D%20rendering%20with%20subtle%20shadows%20and%20reflections%2C%20ultra%20high%20quality&width=80&height=80&seq=302&orientation=squarish",
                },
                {
                  name: "Sony",
                  logo: "https://readdy.ai/api/search-image?query=Modern%20minimalist%20sony%20brand%20logo%20design%20with%20premium%20silver%20metallic%20finish%2C%20centered%20composition%20on%20pure%20white%20background%2C%20professional%203D%20rendering%20with%20subtle%20shadows%20and%20reflections%2C%20ultra%20high%20quality&width=80&height=80&seq=303&orientation=squarish",
                },
                {
                  name: "Google",
                  logo: "https://readdy.ai/api/search-image?query=Modern%20minimalist%20google%20brand%20logo%20design%20with%20vibrant%20multicolor%20palette%2C%20centered%20composition%20on%20pure%20white%20background%2C%20professional%203D%20rendering%20with%20subtle%20shadows%20and%20reflections%2C%20ultra%20high%20quality&width=80&height=80&seq=304&orientation=squarish",
                },
              ].map((brand, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-gray-50 to-white rounded-full p-0.5 shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer group"
                >
                  <div className="bg-white w-full h-full rounded-full p-3 flex items-center justify-center overflow-hidden">
                    <img
                      src={brand.logo}
                      alt={brand.name}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-200"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Today's Special Deals */}
          <div className="mt-6 px-4">
            <h2 className="text-[19px] font-semibold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent tracking-tight mb-3">
              Today's Special Deals
            </h2>
            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl p-4">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center shadow-lg">
                  <i className="fas fa-gift text-white text-2xl"></i>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    Special Offer
                  </h3>
                  <p className="text-sm text-gray-600">Valid only for today</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-white rounded-xl p-3 shadow-sm">
                  <div className="text-2xl font-bold text-orange-500 mb-2">
                    25%
                  </div>
                  <p className="text-sm text-gray-600">Off on Electronics</p>
                  <button className="mt-2 text-xs bg-orange-100 text-orange-600 px-3 py-1 rounded-full">
                    Shop Now
                  </button>
                </div>
                <div className="bg-white rounded-xl p-3 shadow-sm">
                  <div className="text-2xl font-bold text-purple-500 mb-2">
                    $50
                  </div>
                  <p className="text-sm text-gray-600">Cashback Reward</p>
                  <button className="mt-2 text-xs bg-purple-100 text-purple-600 px-3 py-1 rounded-full">
                    Claim Now
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* Live Shopping Events */}
          <div className="mt-6 px-4">
            <h2 className="text-[19px] font-semibold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent tracking-tight mb-3">
              Live Shopping Events
            </h2>
            <div className="bg-gradient-to-br from-red-50 to-pink-50 rounded-xl p-4">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="w-3 h-3 bg-red-500 rounded-full animate-ping absolute"></div>
                    <div className="w-3 h-3 bg-red-500 rounded-full relative"></div>
                  </div>
                  <span className="text-red-500 font-medium">LIVE NOW</span>
                </div>
                <span className="text-sm text-gray-500">2.5K watching</span>
              </div>
              <div className="relative rounded-xl overflow-hidden">
                <img
                  src="https://readdy.ai/api/search-image?query=Professional%20tech%20product%20showcase%20event%20with%20modern%20stage%20setup%2C%20dramatic%20lighting%2C%20large%20display%20screens%20showing%20product%20details%2C%20audience%20silhouettes%20in%20foreground&width=400&height=200&seq=401&orientation=landscape"
                  alt="Live Event"
                  className="w-full h-32 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-3">
                  <div className="text-white">
                    <h3 className="text-sm font-medium">
                      New Tech Launch Event
                    </h3>
                    <p className="text-xs opacity-80">
                      Special discounts during live stream
                    </p>
                  </div>
                </div>
                <button className="absolute top-3 right-3 bg-red-500 text-white text-xs px-3 py-1 rounded-full flex items-center gap-1">
                  <i className="fas fa-video"></i>
                  Join Live
                </button>
              </div>
            </div>
          </div>
          {/* Personalized Recommendations */}
          <div className="mt-6 px-4">
            <h2 className="text-[19px] font-semibold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent tracking-tight mb-3">
              For You
            </h2>
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-4">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full overflow-hidden">
                  <img
                    src="https://readdy.ai/api/search-image?query=Professional%20headshot%20of%20young%20person%20with%20friendly%20smile%2C%20casual%20modern%20attire%2C%20soft%20lighting%2C%20neutral%20background&width=100&height=100&seq=402&orientation=squarish"
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-800">
                    Hi, Alex!
                  </h3>
                  <p className="text-xs text-gray-500">
                    Based on your preferences
                  </p>
                </div>
              </div>
              <div className="flex gap-3 overflow-x-auto pb-2">
                {[
                  {
                    name: "Gaming Headset",
                    match: "98%",
                    price: "$129.99",
                    image:
                      "https://readdy.ai/api/search-image?query=Premium%20gaming%20headset%20with%20RGB%20lighting%20effects%20on%20minimal%20light%20gray%20background%2C%20product%20photography&width=200&height=200&seq=403&orientation=squarish",
                  },
                  {
                    name: "Mechanical Keyboard",
                    match: "95%",
                    price: "$89.99",
                    image:
                      "https://readdy.ai/api/search-image?query=RGB%20mechanical%20keyboard%20with%20aluminum%20frame%20on%20minimal%20light%20gray%20background%2C%20product%20photography&width=200&height=200&seq=404&orientation=squarish",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="min-w-[140px] bg-white rounded-xl p-3 shadow-sm"
                  >
                    <div className="relative mb-2">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-24 object-cover rounded-lg"
                      />
                      <div className="absolute top-2 right-2 bg-green-500 text-white text-xs px-2 py-0.5 rounded-full">
                        {item.match}
                      </div>
                    </div>
                    <h4 className="text-xs font-medium text-gray-800 line-clamp-1">
                      {item.name}
                    </h4>
                    <p className="text-sm font-semibold text-indigo-600 mt-1">
                      {item.price}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* Customer Reviews */}
          <div className="mt-6 px-4">
            <h2 className="text-[19px] font-semibold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent tracking-tight mb-3">
              Customer Reviews
            </h2>
            <div className="space-y-3">
              {[
                {
                  name: "Emma Wilson",
                  rating: 5,
                  date: "2025-04-15",
                  comment:
                    "Excellent product quality and fast delivery! Will definitely buy again.",
                  avatar:
                    "https://readdy.ai/api/search-image?query=Professional%20headshot%20of%20young%20woman%20with%20natural%20smile%2C%20modern%20casual%20attire%2C%20soft%20lighting%2C%20neutral%20background&width=100&height=100&seq=208&orientation=squarish",
                },
                {
                  name: "James Chen",
                  rating: 4,
                  date: "2025-04-14",
                  comment:
                    "Great service and product selection. Minor shipping delay but overall satisfied.",
                  avatar:
                    "https://readdy.ai/api/search-image?query=Professional%20headshot%20of%20young%20asian%20man%20with%20confident%20smile%2C%20business%20casual%20attire%2C%20soft%20lighting%2C%20neutral%20background&width=100&height=100&seq=209&orientation=squarish",
                },
              ].map((review, index) => (
                <div key={index} className="bg-white rounded-xl p-4 shadow-sm">
                  <div className="flex items-start gap-3">
                    <img
                      src={review.avatar}
                      alt={review.name}
                      className="w-10 h-10 rounded-full"
                    />
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h4 className="text-sm font-medium text-gray-800">
                          {review.name}
                        </h4>
                        <span className="text-xs text-gray-500">
                          {review.date}
                        </span>
                      </div>
                      <div className="flex items-center mt-1">
                        {[...Array(5)].map((_, i) => (
                          <i
                            key={i}
                            className={`fas fa-star text-xs ${
                              i < review.rating
                                ? "text-yellow-400"
                                : "text-gray-200"
                            }`}
                          ></i>
                        ))}
                      </div>
                      <p className="text-sm text-gray-600 mt-2">
                        {review.comment}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Gamification Section */}
          <div className="mt-6 px-4">
            <h2 className="text-[19px] font-semibold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent tracking-tight mb-3">
              Rewards & Games
            </h2>
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-4">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg">
                    <i className="fas fa-trophy text-white text-xl"></i>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-800">
                      Your Points
                    </h3>
                    <p className="text-lg font-bold text-purple-600">2,450</p>
                  </div>
                </div>
                <button className="bg-purple-100 text-purple-600 px-3 py-1 rounded-full text-sm">
                  Redeem
                </button>
              </div>
              <div className="grid grid-cols-3 gap-3">
                <div className="bg-white rounded-xl p-3 text-center">
                  <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-2">
                    <i className="fas fa-dice text-yellow-600"></i>
                  </div>
                  <p className="text-xs text-gray-600">Lucky Draw</p>
                </div>
                <div className="bg-white rounded-xl p-3 text-center">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                    <i className="fas fa-gamepad text-green-600"></i>
                  </div>
                  <p className="text-xs text-gray-600">Daily Game</p>
                </div>
                <div className="bg-white rounded-xl p-3 text-center">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                    <i className="fas fa-gift text-blue-600"></i>
                  </div>
                  <p className="text-xs text-gray-600">Surprises</p>
                </div>
              </div>
            </div>
          </div>
          {/* AR Try-On Feature */}
          <div className="mt-6 px-4">
            <h2 className="text-[19px] font-semibold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent tracking-tight mb-3">
              Virtual Try-On
            </h2>
            <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl p-4">
              <div className="relative rounded-xl overflow-hidden mb-3">
                <img
                  src="https://readdy.ai/api/search-image?query=Person%20trying%20on%20virtual%20glasses%20using%20augmented%20reality%20technology%2C%20modern%20UI%20overlay%20elements%2C%20clean%20minimal%20background%2C%20high%20tech%20visualization&width=400&height=200&seq=405&orientation=landscape"
                  alt="AR Try-On"
                  className="w-full h-40 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                  <div className="text-white">
                    <h3 className="text-sm font-medium">Try Before You Buy</h3>
                    <p className="text-xs opacity-80">
                      Use AR to preview products
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex gap-2">
                <button className="flex-1 bg-blue-600 text-white py-2 rounded-lg text-sm font-medium">
                  <i className="fas fa-camera mr-2"></i>Start AR
                </button>
                <button className="w-10 h-10 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center">
                  <i className="fas fa-question"></i>
                </button>
              </div>
            </div>
          </div>
          {/* Newsletter Subscription */}
          <div className="mt-6 px-4 mb-24">
            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl p-6 text-white">
              <h2 className="text-xl font-semibold mb-2">
                Subscribe to Newsletter
              </h2>
              <p className="text-sm text-white/90 mb-4">
                Get the latest updates and exclusive offers!
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 rounded-lg text-sm text-gray-800 border-none focus:ring-2 focus:ring-white/50"
                />
                <button className="px-4 py-2 bg-white text-indigo-600 rounded-lg text-sm font-medium hover:bg-white/90 transition-colors duration-200">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Tab Bar */}
      <AppNavigation />
    </div>
  );
};
export { AdminPanel };
export default EcommerceHomePage;
