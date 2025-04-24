
import React, { useEffect, useState } from "react";
import AppNavigation from "../components/AppNavigation";
import { Link } from "react-router-dom";
const ShoppingCartPage: React.FC = () => {
  // Cart items state
  const [cartItems, setCartItems] = useState<
    {
      id: number;
      name: string;
      price: number;
      quantity: number;
      image: string;
      details: string;
    }[]
  >([
    {
      id: 1,
      name: "Sony WH-1000XM4 Wireless Headphones",
      price: 349.99,
      quantity: 1,
      image:
        "https://readdy.ai/api/search-image?query=Premium%20wireless%20headphones%20with%20noise%20cancellation%20feature%2C%20high%20quality%20product%20photography%20on%20white%20background%2C%20professional%20lighting%2C%20detailed%20texture%2C%20Sony%20WH-1000XM4%20style%2C%20commercial%20product%20shot%2C%20isolated%20product%2C%20clean%20composition&width=80&height=80&seq=101&orientation=squarish",
      details: "Black | Noise Cancelling",
    },
    {
      id: 2,
      name: "Apple iPad Pro 12.9-inch",
      price: 1099.99,
      quantity: 1,
      image:
        "https://readdy.ai/api/search-image?query=Apple%20iPad%20Pro%2012.9%20inch%20tablet%20device%2C%20high%20quality%20product%20photography%20on%20white%20background%2C%20professional%20lighting%2C%20detailed%20texture%2C%20commercial%20product%20shot%2C%20isolated%20product%2C%20clean%20composition%2C%20front%20view&width=80&height=80&seq=102&orientation=squarish",
      details: "Space Gray | 256GB | Wi-Fi",
    },
    {
      id: 3,
      name: "Samsung 55-inch QLED 4K Smart TV",
      price: 799.99,
      quantity: 1,
      image:
        "https://readdy.ai/api/search-image?query=Samsung%20QLED%204K%20Smart%20TV%2C%20high%20quality%20product%20photography%20on%20white%20background%2C%20professional%20lighting%2C%20detailed%20texture%2C%20commercial%20product%20shot%2C%20isolated%20product%2C%20clean%20composition%2C%20front%20view%20with%20stand&width=80&height=80&seq=103&orientation=squarish",
      details: "2023 Model | 4K Ultra HD",
    },
  ]);
  // Loading state
  const [isLoading, setIsLoading] = useState(true);
  // Simulate loading state
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);
  // Calculate subtotal
  const calculateSubtotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };
  // Add item to cart
  const addToCart = (item: {
    id: number;
    name: string;
    price: number;
    image: string;
  }) => {
    const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);
    if (existingItem) {
      updateQuantity(item.id, existingItem.quantity + 1);
    } else {
      setCartItems([
        ...cartItems,
        { ...item, quantity: 1, details: "New Item" },
      ]);
    }
  };
  // Update item quantity
  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity < 1) return;
    if (newQuantity > 10) {
      alert("Maximum quantity limit reached (10 items)");
      return;
    }
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };
  // Remove item from cart
  const removeItem = (id: number) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };
  // Empty cart state component
  const EmptyCart = () => (
    <div className="flex flex-col items-center justify-center py-16 px-4 bg-gray-50 rounded-lg mt-4">
      <div className="w-40 h-40 mb-6">
        <img
          src="https://readdy.ai/api/search-image?query=Empty%20shopping%20cart%20illustration%2C%20minimalist%20design%2C%20soft%20colors%2C%20clean%20lines%2C%20e-commerce%20concept%2C%20isolated%20on%20light%20background%2C%20simple%20and%20elegant%2C%20modern%20digital%20art%20style%2C%20shopping%20app%20empty%20state&width=200&height=200&seq=104&orientation=squarish"
          alt="Empty Cart"
          className="w-full h-full object-contain"
        />
      </div>
      <h3 className="text-xl font-semibold text-gray-800 mb-2">
        Your cart is empty
      </h3>
      <p className="text-gray-600 text-center mb-6">
        Looks like you haven't added any items to your cart yet.
      </p>
      <a
        href="https://readdy.ai/home/b79e29f1-1f47-4bb0-bee4-af561efbbbd4/0de34f35-1b6a-421e-96f8-dc0e418f74db"
        data-readdy="true"
        className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-full font-medium shadow-md hover:shadow-lg transition-all duration-300 !rounded-button"
      >
        Continue Shopping
      </a>
    </div>
  );
  // Loading skeleton component
  const CartSkeleton = () => (
    <div className="animate-pulse">
      {[1, 2, 3].map((index) => (
        <div key={index} className="flex p-4 border-b border-gray-100">
          <div className="w-20 h-20 bg-gray-200 rounded-lg"></div>
          <div className="ml-4 flex-1">
            <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
            <div className="h-3 bg-gray-200 rounded w-1/2 mb-2"></div>
            <div className="h-4 bg-gray-200 rounded w-1/4 mb-2"></div>
            <div className="flex justify-between mt-2">
              <div className="h-8 bg-gray-200 rounded w-24"></div>
              <div className="h-8 bg-gray-200 rounded w-8"></div>
            </div>
          </div>
        </div>
      ))}
      <div className="p-4 mt-2">
        <div className="h-4 bg-gray-200 rounded w-1/2 mb-2"></div>
        <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
        <div className="h-12 bg-gray-200 rounded w-full mt-4"></div>
      </div>
    </div>
  );
  return (
    <div className="min-h-screen bg-gray-50 pb-32">
      {/* Navigation Bar */}
     <AppNavigation />
      {/* Main Content */}
      <div className="pt-16 px-4 pb-32">
        {isLoading ? (
          <CartSkeleton />
        ) : cartItems.length === 0 ? (
          <EmptyCart />
        ) : (
          <>
            {/* Cart Items */}
            <div className="bg-white rounded-xl shadow-sm overflow-hidden mt-4">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="p-4 border-b border-gray-100 last:border-b-0 hover:bg-gray-50 transition-colors duration-200"
                >
                  <div className="flex">
                    <div className="relative w-24 h-24 bg-white rounded-xl overflow-hidden flex-shrink-0 shadow-sm">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-0 right-0 bg-blue-600 text-white text-xs px-2 py-1 rounded-bl-lg">
                        {item.quantity > 1 ? `${item.quantity}x` : "New"}
                      </div>
                    </div>
                    <div className="ml-4 flex-1">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="text-sm font-medium text-gray-800 line-clamp-2">
                            {item.name}
                          </h3>
                          <p className="text-xs text-gray-500 mt-1">
                            {item.details}
                          </p>
                        </div>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="text-gray-400 hover:text-red-500 transition-colors p-2"
                        >
                          <i className="fas fa-times"></i>
                        </button>
                      </div>
                      <div className="mt-2 flex items-center">
                        <i className="fas fa-tag text-green-500 mr-1 text-xs"></i>
                        <span className="text-xs text-green-500">
                          Free shipping
                        </span>
                      </div>
                      <div className="flex justify-between items-center mt-3">
                        <div className="flex flex-col">
                          <p className="text-blue-600 font-semibold text-lg">
                            ${(item.price * item.quantity).toFixed(2)}
                          </p>
                          {item.quantity > 1 && (
                            <p className="text-xs text-gray-500">
                              ${item.price.toFixed(2)} each
                            </p>
                          )}
                        </div>
                        <div className="flex items-center bg-gray-100 rounded-lg p-1">
                          <button
                            onClick={() =>
                              updateQuantity(item.id, item.quantity - 1)
                            }
                            className="w-8 h-8 flex items-center justify-center text-gray-600 hover:bg-gray-200 rounded-lg transition-colors cursor-pointer !rounded-button"
                          >
                            <i className="fas fa-minus text-xs"></i>
                          </button>
                          <span className="w-12 h-8 flex items-center justify-center bg-white shadow-sm rounded-lg mx-1 text-sm font-medium">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() =>
                              updateQuantity(item.id, item.quantity + 1)
                            }
                            className="w-8 h-8 flex items-center justify-center text-gray-600 hover:bg-gray-200 rounded-lg transition-colors cursor-pointer !rounded-button"
                          >
                            <i className="fas fa-plus text-xs"></i>
                          </button>
                        </div>
                      </div>
                      <div className="flex items-center mt-3 space-x-2">
                        <button
                          className="text-xs text-blue-600 flex items-center hover:text-blue-700 transition-colors"
                          onClick={() => {
                            /* Add to wishlist functionality */
                          }}
                        >
                          <i className="far fa-heart mr-1"></i>
                          Save for later
                        </button>
                        <span className="text-gray-300">|</span>
                        <button
                          className="text-xs text-blue-600 flex items-center hover:text-blue-700 transition-colors"
                          onClick={() => {
                            /* Share functionality */
                          }}
                        >
                          <i className="fas fa-share-alt mr-1"></i>
                          Share
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* People Also Ordered */}
            <div className="mt-6 bg-white rounded-xl shadow-sm p-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                People Also Ordered
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  {
                    id: 4,
                    name: "Apple AirPods Pro",
                    price: 249.99,
                    image:
                      "https://readdy.ai/api/search-image?query=Apple%20AirPods%20Pro%20wireless%20earbuds%20with%20charging%20case%2C%20professional%20product%20photography%2C%20white%20background%2C%20commercial%20quality%2C%20detailed%20texture%2C%20clean%20composition%2C%20front%20view&width=160&height=160&seq=105&orientation=squarish",
                    discount: "15% OFF",
                  },
                  {
                    id: 5,
                    name: "MacBook Pro 14-inch",
                    price: 1999.99,
                    image:
                      "https://readdy.ai/api/search-image?query=MacBook%20Pro%20laptop%2C%20premium%20product%20photography%2C%20white%20background%2C%20professional%20lighting%2C%20detailed%20texture%2C%20commercial%20shot%2C%20front%20angled%20view&width=160&height=160&seq=106&orientation=squarish",
                    discount: "Save $200",
                  },
                  {
                    id: 6,
                    name: "Bose QuietComfort 45",
                    price: 329.99,
                    image:
                      "https://readdy.ai/api/search-image?query=Bose%20QuietComfort%20headphones%2C%20premium%20product%20photography%2C%20white%20background%2C%20professional%20lighting%2C%20detailed%20texture%2C%20commercial%20shot%2C%20side%20view&width=160&height=160&seq=107&orientation=squarish",
                    discount: "Free Shipping",
                  },
                  {
                    id: 7,
                    name: "Samsung Galaxy Watch 5",
                    price: 279.99,
                    image:
                      "https://readdy.ai/api/search-image?query=Samsung%20Galaxy%20smartwatch%2C%20premium%20product%20photography%2C%20white%20background%2C%20professional%20lighting%2C%20detailed%20texture%2C%20commercial%20shot%2C%20front%20view%20with%20band&width=160&height=160&seq=108&orientation=squarish",
                    discount: "10% OFF",
                  },
                ].map((item) => (
                  <div
                    key={item.id}
                    className="bg-white rounded-xl p-3 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100"
                  >
                    <div className="relative group cursor-pointer">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-32 object-contain rounded-lg transform transition-transform duration-300 group-hover:scale-105"
                      />
                      <span className="absolute top-2 right-2 bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs px-3 py-1.5 rounded-full shadow-sm">
                        {item.discount}
                      </span>
                      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300 rounded-lg flex items-center justify-center">
                        <div className="opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                          <button className="bg-white text-blue-600 p-2 rounded-full shadow-lg hover:bg-blue-50 !rounded-button">
                            <i className="far fa-heart"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="mt-3">
                      <div className="flex items-center mb-1">
                        <div className="flex text-yellow-400 text-xs">
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star-half-alt"></i>
                        </div>
                        <span className="text-xs text-gray-500 ml-1">
                          (4.5)
                        </span>
                      </div>
                      <h4 className="text-sm font-medium text-gray-800 line-clamp-2 h-10">
                        {item.name}
                      </h4>
                      <div className="flex items-center mt-2">
                        <span className="text-blue-600 font-semibold">
                          ${item.price}
                        </span>
                        <span className="text-xs text-gray-500 line-through ml-2">
                          ${(item.price * 1.2).toFixed(2)}
                        </span>
                      </div>
                      <div className="flex justify-between items-center mt-3">
                        <div className="text-xs text-green-500 flex items-center">
                          <i className="fas fa-truck mr-1"></i>
                          <span>Free delivery</span>
                        </div>
                        <button
                          className="bg-blue-600 text-white px-4 py-1.5 rounded-full text-xs font-medium hover:bg-blue-700 transition-colors flex items-center !rounded-button"
                          onClick={() => addToCart(item)}
                        >
                          <i className="fas fa-plus mr-1"></i>
                          Add
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Order Summary */}
            <div className="mt-6 bg-white rounded-xl shadow-sm p-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Order Summary
              </h3>
              <div className="flex justify-between py-2">
                <span className="text-gray-600">Subtotal</span>
                <span className="font-medium">
                  ${calculateSubtotal().toFixed(2)}
                </span>
              </div>
              <div className="flex justify-between py-2">
                <span className="text-gray-600">Shipping</span>
                <span className="font-medium">$5.99</span>
              </div>
              <div className="flex justify-between py-2">
                <span className="text-gray-600">Tax</span>
                <span className="font-medium">
                  ${(calculateSubtotal() * 0.08).toFixed(2)}
                </span>
              </div>
              <div className="border-t border-gray-100 my-2"></div>
              <div className="flex justify-between py-2">
                <span className="font-semibold text-gray-800">Total</span>
                <span className="font-bold text-blue-600">
                  $
                  {(
                    calculateSubtotal() +
                    5.99 +
                    calculateSubtotal() * 0.08
                  ).toFixed(2)}
                </span>
              </div>
            </div>
          </>
        )}
      </div>
      {/* Checkout Button (Fixed at bottom) */}
      {!isLoading && cartItems.length > 0 && (
        <div className="fixed bottom-16 left-0 right-0 bg-white border-t border-gray-100 p-4 shadow-lg">
          <Link to="/checkout">
          <button  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-xl font-medium shadow-md hover:shadow-lg transition-all duration-300 !rounded-button cursor-pointer">
            Proceed to Checkout
          </button>
          </Link>
        </div>
      )}
      {/* Bottom Tab Bar */}
     <AppNavigation />
    </div>
  );
};
export default ShoppingCartPage;
