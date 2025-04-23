
import React, { useEffect, useState } from "react";
import AppNavigation from "../components/AppNavigation.js";

const AllProductCategories: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [recentSearches, setRecentSearches] = useState([
    "Headphones",
    "Laptops",
    "Smartphones",
    "Cameras",
  ]);
  const [isLoading, setIsLoading] = useState(true);
  // Categories data with product counts
  const categories = [
    {
      id: 1,
      name: "Electronics",
      count: 458,
      icon: "https://readdy.ai/api/search-image?query=icon%252C%2520Realistic%2520electronics%2520gadget%252C%2520photorealistic%2520smartphone%2520and%2520headphones%252C%2520high-detail%25203D%2520rendering%252C%2520prominent%2520main%2520subjects%252C%2520clear%2520and%2520sharp%252C%2520subject%2520fills%252080%2520percent%2520of%2520frame%252C%2520isolated%2520on%2520white%2520background%252C%2520centered%2520composition%252C%2520soft%2520lighting%252C%2520subtle%2520shadows%252C%2520product%2520photography%2520style&width=100&height=100&seq=1&orientation=squarish",
    },
    {
      id: 2,
      name: "Fashion",
      count: 325,
      icon: "https://readdy.ai/api/search-image?query=icon%252C%25202.5D%2520vector%2520illustration%252C%2520Simple%2520clothing%2520hanger%2520with%2520dress%252C%2520high-quality%2520details%252C%2520prominent%2520main%2520subject%252C%2520clear%2520and%2520sharp%252C%2520subject%2520fills%252080%2520percent%2520of%2520frame%252C%2520isolated%2520on%2520white%2520background%252C%2520centered%2520composition%252C%2520soft%2520lighting%252C%2520no%2520shadows%252C%2520no%2520text%252C%2520Content%2520simple&width=100&height=100&seq=2&orientation=squarish",
    },
    {
      id: 3,
      name: "Home & Kitchen",
      count: 287,
      icon: "https://readdy.ai/api/search-image?query=icon%252C%25203D%2520cartoon%252C%2520Kitchen%2520appliance%252C%2520subject%2520fills%252080%2520percent%2520of%2520frame%252C%2520vibrant%2520colors%2520with%2520soft%2520gradients%252C%2520minimalist%2520design%252C%2520smooth%2520rounded%2520shapes%252C%2520subtle%2520shading%252C%2520no%2520outlines%252C%2520centered%2520composition%252C%2520isolated%2520on%2520white%2520background%252C%2520playful%2520and%2520friendly%2520aesthetic%252C%2520isometric%2520perspective%252C%2520high%2520detail%2520quality%252C%2520clean%2520and%2520modern%2520look%252C%2520single%2520object%2520focus&width=100&height=100&seq=3&orientation=squarish",
    },
    {
      id: 4,
      name: "Beauty & Personal Care",
      count: 196,
      icon: "https://readdy.ai/api/search-image?query=icon%252C%25202.5D%2520vector%2520illustration%252C%2520Simple%2520beauty%2520product%2520bottle%252C%2520high-quality%2520details%252C%2520prominent%2520main%2520subject%252C%2520clear%2520and%2520sharp%252C%2520subject%2520fills%252080%2520percent%2520of%2520frame%252C%2520isolated%2520on%2520white%2520background%252C%2520centered%2520composition%252C%2520soft%2520lighting%252C%2520no%2520shadows%252C%2520no%2520text%252C%2520Content%2520simple&width=100&height=100&seq=4&orientation=squarish",
    },
    {
      id: 5,
      name: "Sports & Outdoors",
      count: 243,
      icon: "https://readdy.ai/api/search-image?query=icon%252C%25203D%2520cartoon%252C%2520Sports%2520equipment%252C%2520subject%2520fills%252080%2520percent%2520of%2520frame%252C%2520vibrant%2520colors%2520with%2520soft%2520gradients%252C%2520minimalist%2520design%252C%2520smooth%2520rounded%2520shapes%252C%2520subtle%2520shading%252C%2520no%2520outlines%252C%2520centered%2520composition%252C%2520isolated%2520on%2520white%2520background%252C%2520playful%2520and%2520friendly%2520aesthetic%252C%2520isometric%2520perspective%252C%2520high%2520detail%2520quality%252C%2520clean%2520and%2520modern%2520look%252C%2520single%2520object%2520focus&width=100&height=100&seq=5&orientation=squarish",
    },
    {
      id: 6,
      name: "Toys & Games",
      count: 178,
      icon: "https://readdy.ai/api/search-image?query=icon%252C%25203D%2520cartoon%252C%2520Colorful%2520toy%2520blocks%252C%2520subject%2520fills%252080%2520percent%2520of%2520frame%252C%2520vibrant%2520colors%2520with%2520soft%2520gradients%252C%2520minimalist%2520design%252C%2520smooth%2520rounded%2520shapes%252C%2520subtle%2520shading%252C%2520no%2520outlines%252C%2520centered%2520composition%252C%2520isolated%2520on%2520white%2520background%252C%2520playful%2520and%2520friendly%2520aesthetic%252C%2520isometric%2520perspective%252C%2520high%2520detail%2520quality%252C%2520clean%2520and%2520modern%2520look%252C%2520single%2520object%2520focus&width=100&height=100&seq=6&orientation=squarish",
    },
    {
      id: 7,
      name: "Books & Media",
      count: 312,
      icon: "https://readdy.ai/api/search-image?query=icon%252C%25202.5D%2520vector%2520illustration%252C%2520Simple%2520book%2520and%2520media%252C%2520high-quality%2520details%252C%2520prominent%2520main%2520subject%252C%2520clear%2520and%2520sharp%252C%2520subject%2520fills%252080%2520percent%2520of%2520frame%252C%2520isolated%2520on%2520white%2520background%252C%2520centered%2520composition%252C%2520soft%2520lighting%252C%2520no%2520shadows%252C%2520no%2520text%252C%2520Content%2520simple&width=100&height=100&seq=7&orientation=squarish",
    },
    {
      id: 8,
      name: "Automotive",
      count: 156,
      icon: "https://readdy.ai/api/search-image?query=icon%252C%25203D%2520cartoon%252C%2520Car%2520parts%252C%2520subject%2520fills%252080%2520percent%2520of%2520frame%252C%2520vibrant%2520colors%2520with%2520soft%2520gradients%252C%2520minimalist%2520design%252C%2520smooth%2520rounded%2520shapes%252C%2520subtle%2520shading%252C%2520no%2520outlines%252C%2520centered%2520composition%252C%2520isolated%2520on%2520white%2520background%252C%2520playful%2520and%2520friendly%2520aesthetic%252C%2520isometric%2520perspective%252C%2520high%2520detail%2520quality%252C%2520clean%2520and%2520modern%2520look%252C%2520single%2520object%2520focus&width=100&height=100&seq=8&orientation=squarish",
    },
    {
      id: 9,
      name: "Health & Wellness",
      count: 204,
      icon: "https://readdy.ai/api/search-image?query=icon%252C%25202.5D%2520vector%2520illustration%252C%2520Simple%2520health%2520and%2520wellness%2520item%252C%2520high-quality%2520details%252C%2520prominent%2520main%2520subject%252C%2520clear%2520and%2520sharp%252C%2520subject%2520fills%252080%2520percent%2520of%2520frame%252C%2520isolated%2520on%2520white%2520background%252C%2520centered%2520composition%252C%2520soft%2520lighting%252C%2520no%2520shadows%252C%2520no%2520text%252C%2520Content%2520simple&width=100&height=100&seq=9&orientation=squarish",
    },
    {
      id: 10,
      name: "Pet Supplies",
      count: 143,
      icon: "https://readdy.ai/api/search-image?query=icon%252C%25203D%2520cartoon%252C%2520Pet%2520food%2520bowl%252C%2520subject%2520fills%252080%2520percent%2520of%2520frame%252C%2520vibrant%2520colors%2520with%2520soft%2520gradients%252C%2520minimalist%2520design%252C%2520smooth%2520rounded%2520shapes%252C%2520subtle%2520shading%252C%2520no%2520outlines%252C%2520centered%2520composition%252C%2520isolated%2520on%2520white%2520background%252C%2520playful%2520and%2520friendly%2520aesthetic%252C%2520isometric%2520perspective%252C%2520high%2520detail%2520quality%252C%2520clean%2520and%2520modern%2520look%252C%2520single%2520object%2520focus&width=100&height=100&seq=10&orientation=squarish",
    },
    {
      id: 11,
      name: "Jewelry & Watches",
      count: 167,
      icon: "https://readdy.ai/api/search-image?query=icon%252C%2520Realistic%2520jewelry%2520item%252C%2520photorealistic%2520wristwatch%252C%2520high-detail%25203D%2520rendering%252C%2520prominent%2520main%2520subjects%252C%2520clear%2520and%2520sharp%252C%2520subject%2520fills%252080%2520percent%2520of%2520frame%252C%2520isolated%2520on%2520white%2520background%252C%2520centered%2520composition%252C%2520soft%2520lighting%252C%2520subtle%2520shadows%252C%2520product%2520photography%2520style&width=100&height=100&seq=11&orientation=squarish",
    },
    {
      id: 12,
      name: "Baby & Kids",
      count: 189,
      icon: "https://readdy.ai/api/search-image?query=icon%252C%25202.5D%2520vector%2520illustration%252C%2520Simple%2520baby%2520rattle%252C%2520high-quality%2520details%252C%2520prominent%2520main%2520subject%252C%2520clear%2520and%2520sharp%252C%2520subject%2520fills%252080%2520percent%2520of%2520frame%252C%2520isolated%2520on%2520white%2520background%252C%2520centered%2520composition%252C%2520soft%2520lighting%252C%2520no%2520shadows%252C%2520no%2520text%252C%2520Content%2520simple&width=100&height=100&seq=12&orientation=squarish",
    },
    {
      id: 13,
      name: "Office Supplies",
      count: 134,
      icon: "https://readdy.ai/api/search-image?query=icon%252C%25203D%2520cartoon%252C%2520Office%2520supplies%252C%2520subject%2520fills%252080%2520percent%2520of%2520frame%252C%2520vibrant%2520colors%2520with%2520soft%2520gradients%252C%2520minimalist%2520design%252C%2520smooth%2520rounded%2520shapes%252C%2520subtle%2520shading%252C%2520no%2520outlines%252C%2520centered%2520composition%252C%2520isolated%2520on%2520white%2520background%252C%2520playful%2520and%2520friendly%2520aesthetic%252C%2520isometric%2520perspective%252C%2520high%2520detail%2520quality%252C%2520clean%2520and%2520modern%2520look%252C%2520single%2520object%2520focus&width=100&height=100&seq=13&orientation=squarish",
    },
    {
      id: 14,
      name: "Grocery & Gourmet",
      count: 276,
      icon: "https://readdy.ai/api/search-image?query=icon%252C%2520Realistic%2520food%2520item%252C%2520photorealistic%2520fruit%2520basket%252C%2520high-detail%25203D%2520rendering%252C%2520prominent%2520main%2520subjects%252C%2520clear%2520and%2520sharp%252C%2520subject%2520fills%252080%2520percent%2520of%2520frame%252C%2520isolated%2520on%2520white%2520background%252C%2520centered%2520composition%252C%2520soft%2520lighting%252C%2520subtle%2520shadows%252C%2520product%2520photography%2520style&width=100&height=100&seq=14&orientation=squarish",
    },
    {
      id: 15,
      name: "Furniture",
      count: 123,
      icon: "https://readdy.ai/api/search-image?query=icon%252C%25202.5D%2520vector%2520illustration%252C%2520Simple%2520furniture%2520chair%252C%2520high-quality%2520details%252C%2520prominent%2520main%2520subject%252C%2520clear%2520and%2520sharp%252C%2520subject%2520fills%252080%2520percent%2520of%2520frame%252C%2520isolated%2520on%2520white%2520background%252C%2520centered%2520composition%252C%2520soft%2520lighting%252C%2520no%2520shadows%252C%2520no%2520text%252C%2520Content%2520simple&width=100&height=100&seq=15&orientation=squarish",
    },
    {
      id: 16,
      name: "Digital Products",
      count: 215,
      icon: "https://readdy.ai/api/search-image?query=icon%252C%25203D%2520cartoon%252C%2520Digital%2520product%2520software%2520box%252C%2520subject%2520fills%252080%2520percent%2520of%2520frame%252C%2520vibrant%2520colors%2520with%2520soft%2520gradients%252C%2520minimalist%2520design%252C%2520smooth%2520rounded%2520shapes%252C%2520subtle%2520shading%252C%2520no%2520outlines%252C%2520centered%2520composition%252C%2520isolated%2520on%2520white%2520background%252C%2520playful%2520and%2520friendly%2520aesthetic%252C%2520isometric%2520perspective%252C%2520high%2520detail%2520quality%252C%2520clean%2520and%2520modern%2520look%252C%2520single%2520object%2520focus&width=100&height=100&seq=16&orientation=squarish",
    },
  ];
  // Simulate loading state
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim() && !recentSearches.includes(searchQuery)) {
      setRecentSearches((prev) => [searchQuery, ...prev.slice(0, 3)]);
    }
    setSearchQuery("");
  };
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };
  const renderSkeletonLoader = () => (
    <div className="grid grid-cols-2 gap-4 mt-4">
      {[...Array(8)].map((_, index) => (
        <div
          key={index}
          className="bg-white rounded-xl p-4 shadow-sm animate-pulse"
        >
          <div className="w-16 h-16 bg-gray-200 rounded-full mx-auto mb-3"></div>
          <div className="h-4 bg-gray-200 rounded w-3/4 mx-auto mb-2"></div>
          <div className="h-3 bg-gray-200 rounded w-1/2 mx-auto"></div>
        </div>
      ))}
    </div>
  );
  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Navigation Bar */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 fixed top-0 w-full z-10 shadow-sm">
        <div className="flex items-center justify-between px-4 py-3">
          <a
            href="https://readdy.ai/home/b79e29f1-1f47-4bb0-bee4-af561efbbbd4/cad49841-4c52-43e3-86b2-1b95c6704abc"
            data-readdy="true"
            className="flex items-center cursor-pointer"
          >
            <i className="fas fa-arrow-left text-white"></i>
          </a>
          <h1 className="text-lg font-semibold bg-gradient-to-r from-indigo-200 to-purple-200 bg-clip-text text-transparent">
            All Categories
          </h1>
          <button className="text-white">
            <i className="fas fa-search"></i>
          </button>
        </div>
      </div>
      {/* Main Content */}
      <div className="pt-16 px-4 pb-20">
        {/* Search Bar */}
        <div className="mt-4">
          <form onSubmit={handleSearch} className="relative">
            <input
              type="text"
              placeholder="Search categories..."
              className="w-full bg-white rounded-xl py-3 pl-10 pr-10 text-sm shadow-sm border-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
              value={searchQuery}
              onChange={handleSearchChange}
            />
            <span className="absolute left-3 top-3 text-gray-400">
              <i className="fas fa-search"></i>
            </span>
            <button
              type="button"
              className="absolute right-3 top-3 text-blue-600"
            >
              <i className="fas fa-microphone"></i>
            </button>
          </form>
        </div>
        {/* Recent Searches */}
        {recentSearches.length > 0 && (
          <div className="mt-4">
            <div className="flex items-center mb-2">
              <span className="text-sm font-medium text-gray-600">
                Recent Searches
              </span>
              <button
                onClick={() => setRecentSearches([])}
                className="ml-2 text-xs text-blue-600 hover:text-blue-700 transition-colors duration-200"
              >
                Clear all
              </button>
            </div>
            <div className="flex overflow-x-auto py-2 space-x-2 scrollbar-hide">
              {recentSearches.map((search, index) => (
                <div key={index} className="flex-shrink-0">
                  <button
                    onClick={() => setSearchQuery(search)}
                    className="bg-gradient-to-r from-blue-50 to-indigo-50 text-gray-700 text-sm px-4 py-2 rounded-full
border border-blue-100 flex items-center gap-2 hover:from-blue-100 hover:to-indigo-100
transition-all duration-300 shadow-sm hover:shadow-md group"
                  >
                    <i className="fas fa-history text-xs text-blue-600 group-hover:text-blue-700 transition-colors duration-200"></i>
                    <span className="truncate max-w-[120px]">{search}</span>
                    <i
                      className="fas fa-times text-xs text-gray-400 ml-1 hover:text-red-500 transition-colors duration-200"
                      onClick={(e) => {
                        e.stopPropagation();
                        setRecentSearches((prev) =>
                          prev.filter((item) => item !== search)
                        );
                      }}
                    ></i>
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
        {/* Categories Grid */}
        <div className="mt-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">
            Browse All Categories
          </h2>
          {isLoading ? (
            renderSkeletonLoader()
          ) : (
            <div className="grid grid-cols-2 gap-4">
              {categories.map((category) => (
                <div
                  key={category.id}
                  className="bg-white rounded-xl p-4 shadow-sm hover:shadow-lg hover:scale-105 transform transition-all duration-300 cursor-pointer !rounded-button relative overflow-hidden group"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="flex flex-col items-center relative z-10">
                    <div className="w-20 h-20 rounded-full overflow-hidden bg-white shadow-inner p-1 mb-3 flex items-center justify-center group-hover:shadow-md transition-shadow duration-300">
                      <img
                        src={category.icon}
                        alt={category.name}
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <h3 className="text-sm font-semibold text-gray-800 text-center mb-1 group-hover:text-blue-600 transition-colors duration-300">
                      {category.name}
                    </h3>
                    <p className="text-xs bg-gradient-to-r from-blue-600 to-purple-600 text-white px-2 py-0.5 rounded-full">
                      {category.count} products
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      {/* Bottom Tab Bar */}
     <AppNavigation />
    </div>
  );
};
export default AllProductCategories;
