
import React, { useEffect, useState } from "react";
import AppNavigation from "../components/AppNavigation";
const AllFlashDeals: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [activePriceFilter, setActivePriceFilter] = useState("All");
  const [activeSort, setActiveSort] = useState("Popular");
  const [isLoading, setIsLoading] = useState(true);
  const [hours, setHours] = useState(5);
  const [minutes, setMinutes] = useState(32);
  const [seconds, setSeconds] = useState(14);
  // Flash deals products data
  const flashDeals = [
    {
      id: 1,
      name: "Wireless Noise Cancelling Headphones",
      originalPrice: 299.99,
      salePrice: 149.99,
      discount: 50,
      image:
        "https://readdy.ai/api/search-image?query=Premium%20wireless%20headphones%20with%20noise%20cancellation%20feature%20in%20sleek%20black%20design%20with%20metallic%20accents%20on%20minimal%20light%20gray%20background%2C%20professional%20product%20photography%20with%20perfect%20lighting%2C%20ultra%20sharp%20details%2C%20centered%20composition%2C%20commercial%20quality&width=180&height=180&seq=1001&orientation=squarish",
      rating: 4.8,
      reviews: 342,
    },
    {
      id: 2,
      name: "Smart Fitness Watch Pro",
      originalPrice: 199.99,
      salePrice: 119.99,
      discount: 40,
      image:
        "https://readdy.ai/api/search-image?query=Modern%20smartwatch%20with%20fitness%20tracking%20features%20in%20sleek%20design%20with%20bright%20display%20showing%20health%20metrics%20on%20minimal%20light%20gray%20background%2C%20professional%20product%20photography%20with%20perfect%20lighting%2C%20ultra%20sharp%20details%2C%20centered%20composition%2C%20commercial%20quality&width=180&height=180&seq=1002&orientation=squarish",
      rating: 4.6,
      reviews: 215,
    },
    {
      id: 3,
      name: "Portable Bluetooth Speaker",
      originalPrice: 129.99,
      salePrice: 64.99,
      discount: 50,
      image:
        "https://readdy.ai/api/search-image?query=Compact%20cylindrical%20bluetooth%20speaker%20with%20fabric%20mesh%20covering%20and%20metallic%20accents%20on%20minimal%20light%20gray%20background%2C%20professional%20product%20photography%20with%20perfect%20lighting%2C%20ultra%20sharp%20details%2C%20centered%20composition%2C%20commercial%20quality&width=180&height=180&seq=1003&orientation=squarish",
      rating: 4.5,
      reviews: 178,
    },
    {
      id: 4,
      name: "Ultra HD Action Camera",
      originalPrice: 249.99,
      salePrice: 149.99,
      discount: 40,
      image:
        "https://readdy.ai/api/search-image?query=Compact%20action%20camera%20with%20rugged%20design%20and%20wide%20angle%20lens%20on%20minimal%20light%20gray%20background%2C%20professional%20product%20photography%20with%20perfect%20lighting%2C%20ultra%20sharp%20details%2C%20centered%20composition%2C%20commercial%20quality&width=180&height=180&seq=1004&orientation=squarish",
      rating: 4.7,
      reviews: 124,
    },
    {
      id: 5,
      name: "Wireless Charging Pad",
      originalPrice: 59.99,
      salePrice: 29.99,
      discount: 50,
      image:
        "https://readdy.ai/api/search-image?query=Circular%20wireless%20charging%20pad%20with%20LED%20indicator%20and%20premium%20aluminum%20finish%20on%20minimal%20light%20gray%20background%2C%20professional%20product%20photography%20with%20perfect%20lighting%2C%20ultra%20sharp%20details%2C%20centered%20composition%2C%20commercial%20quality&width=180&height=180&seq=1005&orientation=squarish",
      rating: 4.4,
      reviews: 98,
    },
    {
      id: 6,
      name: "Smart Home Security Camera",
      originalPrice: 149.99,
      salePrice: 89.99,
      discount: 40,
      image:
        "https://readdy.ai/api/search-image?query=Modern%20smart%20home%20security%20camera%20with%20sleek%20design%20and%20adjustable%20stand%20on%20minimal%20light%20gray%20background%2C%20professional%20product%20photography%20with%20perfect%20lighting%2C%20ultra%20sharp%20details%2C%20centered%20composition%2C%20commercial%20quality&width=180&height=180&seq=1006&orientation=squarish",
      rating: 4.3,
      reviews: 87,
    },
    {
      id: 7,
      name: "Mechanical Gaming Keyboard",
      originalPrice: 129.99,
      salePrice: 77.99,
      discount: 40,
      image:
        "https://readdy.ai/api/search-image?query=RGB%20mechanical%20gaming%20keyboard%20with%20aluminum%20frame%20and%20customizable%20keys%20on%20minimal%20light%20gray%20background%2C%20professional%20product%20photography%20with%20perfect%20lighting%2C%20ultra%20sharp%20details%2C%20centered%20composition%2C%20commercial%20quality&width=180&height=180&seq=1007&orientation=squarish",
      rating: 4.7,
      reviews: 156,
    },
    {
      id: 8,
      name: "Wireless Gaming Mouse",
      originalPrice: 89.99,
      salePrice: 44.99,
      discount: 50,
      image:
        "https://readdy.ai/api/search-image?query=Ergonomic%20wireless%20gaming%20mouse%20with%20RGB%20lighting%20and%20programmable%20buttons%20on%20minimal%20light%20gray%20background%2C%20professional%20product%20photography%20with%20perfect%20lighting%2C%20ultra%20sharp%20details%2C%20centered%20composition%2C%20commercial%20quality&width=180&height=180&seq=1008&orientation=squarish",
      rating: 4.5,
      reviews: 132,
    },
    {
      id: 9,
      name: "Smart LED Light Bulbs (4-Pack)",
      originalPrice: 79.99,
      salePrice: 39.99,
      discount: 50,
      image:
        "https://readdy.ai/api/search-image?query=Set%20of%20smart%20LED%20light%20bulbs%20with%20color%20changing%20capability%20on%20minimal%20light%20gray%20background%2C%20professional%20product%20photography%20with%20perfect%20lighting%2C%20ultra%20sharp%20details%2C%20centered%20composition%2C%20commercial%20quality&width=180&height=180&seq=1009&orientation=squarish",
      rating: 4.4,
      reviews: 76,
    },
    {
      id: 10,
      name: "True Wireless Earbuds",
      originalPrice: 149.99,
      salePrice: 74.99,
      discount: 50,
      image:
        "https://readdy.ai/api/search-image?query=Premium%20true%20wireless%20earbuds%20with%20charging%20case%20on%20minimal%20light%20gray%20background%2C%20professional%20product%20photography%20with%20perfect%20lighting%2C%20ultra%20sharp%20details%2C%20centered%20composition%2C%20commercial%20quality&width=180&height=180&seq=1010&orientation=squarish",
      rating: 4.6,
      reviews: 203,
    },
  ];
  // Categories for filter
  const categories = [
    "All",
    "Electronics",
    "Audio",
    "Smart Home",
    "Gaming",
    "Accessories",
  ];
  // Price ranges for filter
  const priceRanges = [
    "All",
    "Under $50",
    "$50-$100",
    "$100-$200",
    "Over $200",
  ];
  // Sort options
  const sortOptions = [
    "Popular",
    "Price: Low-High",
    "Price: High-Low",
    "Discount %",
  ];
  // Timer countdown effect
  useEffect(() => {
    const timer = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      } else {
        if (minutes > 0) {
          setMinutes(minutes - 1);
          setSeconds(59);
        } else {
          if (hours > 0) {
            setHours(hours - 1);
            setMinutes(59);
            setSeconds(59);
          } else {
            clearInterval(timer);
          }
        }
      }
    }, 1000);
    return () => clearInterval(timer);
  }, [hours, minutes, seconds]);
  // Simulate loading
  useEffect(() => {
    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(loadingTimer);
  }, []);
  // Format time with leading zeros
  const formatTime = (time: number) => {
    return time < 10 ? `0${time}` : time;
  };
  // Filtered products based on active filters
  const getFilteredProducts = () => {
    let filtered = [...flashDeals];
    // Filter by category
    if (activeFilter !== "All") {
      const categoryMap: Record<string, string[]> = {
        Electronics: [
          "Smart Fitness Watch Pro",
          "Ultra HD Action Camera",
          "Smart Home Security Camera",
        ],
        Audio: [
          "Wireless Noise Cancelling Headphones",
          "Portable Bluetooth Speaker",
          "True Wireless Earbuds",
        ],
        "Smart Home": [
          "Smart Home Security Camera",
          "Smart LED Light Bulbs (4-Pack)",
        ],
        Gaming: ["Mechanical Gaming Keyboard", "Wireless Gaming Mouse"],
        Accessories: ["Wireless Charging Pad"],
      };
      filtered = filtered.filter((product) =>
        categoryMap[activeFilter]?.includes(product.name)
      );
    }
    // Filter by price range
    if (activePriceFilter !== "All") {
      switch (activePriceFilter) {
        case "Under $50":
          filtered = filtered.filter((product) => product.salePrice < 50);
          break;
        case "$50-$100":
          filtered = filtered.filter(
            (product) => product.salePrice >= 50 && product.salePrice <= 100
          );
          break;
        case "$100-$200":
          filtered = filtered.filter(
            (product) => product.salePrice > 100 && product.salePrice <= 200
          );
          break;
        case "Over $200":
          filtered = filtered.filter((product) => product.salePrice > 200);
          break;
      }
    }
    // Sort products
    switch (activeSort) {
      case "Price: Low-High":
        filtered.sort((a, b) => a.salePrice - b.salePrice);
        break;
      case "Price: High-Low":
        filtered.sort((a, b) => b.salePrice - a.salePrice);
        break;
      case "Discount %":
        filtered.sort((a, b) => b.discount - a.discount);
        break;
      default:
        // Default 'Popular' sort - already in order
        break;
    }
    return filtered;
  };
  const filteredProducts = getFilteredProducts();
  return (
    <div className="min-h-screen bg-gray-50 pb-16">
      {/* Navigation Header */}
      <div className="fixed top-0 w-full z-10 bg-white/95 backdrop-blur-sm shadow-sm">
        <div className="flex items-center justify-between px-4 py-3">
          <a
            href="https://readdy.ai/home/b79e29f1-1f47-4bb0-bee4-af561efbbbd4/cad49841-4c52-43e3-86b2-1b95c6704abc"
            data-readdy="true"
            className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors cursor-pointer"
          >
            <i className="fas fa-arrow-left text-gray-700"></i>
          </a>
          <h1 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
            Flash Deals
          </h1>
          <div className="flex items-center gap-3">
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors cursor-pointer">
              <i className="fas fa-search text-gray-700"></i>
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors cursor-pointer">
              <i className="fas fa-sliders-h text-gray-700"></i>
            </button>
          </div>
        </div>
      </div>
      {/* Main Content */}
      <div className="pt-16 px-4">
        {/* Timer Section */}
        <div className="mt-4 bg-white rounded-xl shadow-sm p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-red-600 rounded-xl flex items-center justify-center shadow-lg">
                <i className="fas fa-bolt text-white text-xl"></i>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-800">
                  Flash Sale Ends In
                </h3>
                <div className="flex items-center gap-1 mt-1">
                  <div className="bg-gradient-to-r from-red-500 to-red-600 text-white px-3 py-1.5 rounded-lg text-sm font-bold animate-pulse shadow-md">
                    {formatTime(hours)}
                  </div>
                  <span className="text-red-500 font-bold">:</span>
                  <div className="bg-gradient-to-r from-red-500 to-red-600 text-white px-3 py-1.5 rounded-lg text-sm font-bold animate-pulse shadow-md">
                    {formatTime(minutes)}
                  </div>
                  <span className="text-red-500 font-bold">:</span>
                  <div className="bg-gradient-to-r from-red-500 to-red-600 text-white px-3 py-1.5 rounded-lg text-sm font-bold animate-pulse shadow-md">
                    {formatTime(seconds)}
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-blue-50 text-blue-600 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide shadow-sm">
              Hurry Up!
            </div>
          </div>
        </div>
        {/* Filter Options */}
        <div className="mt-4">
          <div className="overflow-x-auto pb-2">
            <div className="flex space-x-2 mb-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveFilter(category)}
                  className={`px-3 py-2 rounded-full text-sm font-medium whitespace-nowrap ${
                    activeFilter === category
                      ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md"
                      : "bg-white text-gray-700 border border-gray-200 hover:border-blue-300"
                  } cursor-pointer transition-all duration-200`}
                >
                  {category}
                </button>
              ))}
            </div>
            <div className="flex space-x-2 mb-3">
              {priceRanges.map((range) => (
                <button
                  key={range}
                  onClick={() => setActivePriceFilter(range)}
                  className={`px-3 py-2 rounded-full text-sm font-medium whitespace-nowrap ${
                    activePriceFilter === range
                      ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md"
                      : "bg-white text-gray-700 border border-gray-200 hover:border-blue-300"
                  } cursor-pointer transition-all duration-200`}
                >
                  {range}
                </button>
              ))}
            </div>
            <div className="flex space-x-2">
              {sortOptions.map((option) => (
                <button
                  key={option}
                  onClick={() => setActiveSort(option)}
                  className={`px-3 py-2 rounded-full text-sm font-medium whitespace-nowrap ${
                    activeSort === option
                      ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md"
                      : "bg-white text-gray-700 border border-gray-200 hover:border-blue-300"
                  } cursor-pointer transition-all duration-200`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        </div>
        {/* Products Grid */}
        <div className="mt-4">
          {isLoading ? (
            // Skeleton loading
            <div className="grid grid-cols-2 gap-3">
              {[...Array(6)].map((_, index) => (
                <div key={index} className="bg-white rounded-xl p-3 shadow-sm">
                  <div className="h-36 bg-gray-200 rounded-lg mb-3 animate-pulse"></div>
                  <div className="h-4 bg-gray-200 rounded w-3/4 mb-2 animate-pulse"></div>
                  <div className="h-4 bg-gray-200 rounded w-1/2 mb-2 animate-pulse"></div>
                  <div className="h-8 bg-gray-200 rounded w-full mt-3 animate-pulse"></div>
                </div>
              ))}
            </div>
          ) : filteredProducts.length > 0 ? (
            <div className="grid grid-cols-2 gap-3">
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className="bg-white rounded-xl p-4 shadow-sm hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 cursor-pointer border border-gray-100"
                >
                  <div className="relative mb-2">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-36 object-cover object-top rounded-lg"
                    />
                    <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full shadow-sm">
                      -{product.discount}%
                    </div>
                  </div>
                  <h3 className="text-sm font-semibold text-gray-800 line-clamp-2 h-10 mb-2 tracking-tight">
                    {product.name}
                  </h3>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex items-center text-yellow-400">
                      <i className="fas fa-star text-xs"></i>
                      <span className="text-xs font-medium text-gray-700 ml-1">
                        {product.rating}
                      </span>
                    </div>
                    <span className="text-xs text-gray-500">
                      ({product.reviews})
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                        ${product.salePrice.toFixed(2)}
                      </p>
                      <p className="text-xs text-gray-500 line-through">
                        ${product.originalPrice.toFixed(2)}
                      </p>
                    </div>
                    <button className="h-9 w-9 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full flex items-center justify-center transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 !rounded-button">
                      <i className="fas fa-shopping-cart text-sm"></i>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            // Empty state
            <div className="bg-white rounded-xl p-6 shadow-sm text-center mt-4">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-search text-gray-400 text-xl"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                No deals found
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                Try different filters or check back later for new deals
              </p>
              <button
                onClick={() => {
                  setActiveFilter("All");
                  setActivePriceFilter("All");
                  setActiveSort("Popular");
                }}
                className="px-4 py-2 bg-indigo-600 text-white rounded-full text-sm font-medium hover:bg-indigo-700 transition-colors !rounded-button"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </div>
      {/* Tab Bar */}
      <AppNavigation/>
    </div>
  );
};
export default AllFlashDeals;
