
import React, { useState } from "react";
import AppNavigation from "../components/AppNavigation";
import BackButton from "../components/BakcButtob";
const HeadphonesCheckoutPage: React.FC = () => {
  const [selectedShipping, setSelectedShipping] = useState<string>("standard");
  const [selectedPayment, setSelectedPayment] = useState<string>("credit");
  // const [showSavedAddresses, setShowSavedAddresses] = useState<boolean>(false);
  const [showSavedPayments, setShowSavedPayments] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    fullName: "John Anderson",
    address: "123 Main Street",
    apartment: "",
    city: "San Francisco",
    state: "CA",
    zipCode: "94105",
    country: "United States",
    phone: "(415) 555-7890",
    saveAddress: true,
    savePayment: true,
    promoCode: "",
  });
  // const [showConfirmDialog, setShowConfirmDialog] = useState(false);
  // const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  // const [orderNumber, setOrderNumber] = useState("");
  // const generateOrderNumber = () => {
  //   return "ORD-" + Math.random().toString(36).substr(2, 9).toUpperCase();
  // };
  // const handleConfirmOrder = () => {
  //   const newOrderNumber = generateOrderNumber();
  //   setOrderNumber(newOrderNumber);
  //   setShowConfirmDialog(false);
  //   setShowSuccessMessage(true);
  // };
  // const handleViewOrder = () => {
  //   window.location.href = `/order-confirmation/${orderNumber}`;
  // };
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };
  const handleShippingChange = (method: string) => {
    setSelectedShipping(method);
  };
  const handlePaymentChange = (method: string) => {
    setSelectedPayment(method);
  };
  const calculateSubtotal = () => {
    return 129.99;
  };
  const calculateTax = () => {
    return (calculateSubtotal() * 0.0825).toFixed(2);
  };
  const calculateShipping = () => {
    switch (selectedShipping) {
      case "express":
        return 9.99;
      case "nextDay":
        return 19.99;
      default:
        return 0;
    }
  };
  const calculateTotal = () => {
    return (
      parseFloat(calculateSubtotal().toString()) +
      parseFloat(calculateTax()) +
      calculateShipping()
    ).toFixed(2);
  };
  const getEstimatedDeliveryDate = (method: string) => {
    const today = new Date();
    const deliveryDate = new Date(today);
    switch (method) {
      case "express":
        deliveryDate.setDate(today.getDate() + 3);
        break;
      case "nextDay":
        deliveryDate.setDate(today.getDate() + 1);
        break;
      default:
        deliveryDate.setDate(today.getDate() + 7);
    }
    return deliveryDate.toLocaleDateString("en-US", {
      weekday: "short",
      month: "short",
      day: "numeric",
    });
  };
  return (
    <div
      className="min-h-screen relative pb-32"
      style={{
        backgroundImage: `url('https://readdy.ai/api/search-image?query=Extremely%2520light%2520and%2520airy%2520luxury%2520background%2520with%2520delicate%2520geometric%2520patterns%252C%2520ultra%2520soft%2520pastel%2520tones%252C%2520predominantly%2520white%2520with%2520barely%2520visible%2520cream%2520and%2520lavender%2520undertones%252C%2520minimal%2520elegant%2520design%252C%2520ultra%2520high%2520resolution%252C%2520very%2520subtle%2520hexagonal%2520pattern%2520overlay%252C%2520professional%2520photography%2520background&width=375&height=800&seq=10&orientation=portrait')`,
        backgroundSize: "cover",
        backgroundPosition: "top",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Navigation Bar */}
      <div className="fixed top-0 w-full bg-white/80 backdrop-blur-sm shadow-sm z-50 px-4 py-3 flex items-center justify-between">
        <BackButton />
        <h1 className="text-base font-medium text-center flex-1 truncate mx-2">
          Checkout
        </h1>
        <div className="flex items-center space-x-4">
          <i className="fas fa-shopping-cart text-gray-700 cursor-pointer"></i>
        </div>
      </div>
      {/* Main Content */}
      <div className="pt-16 pb-24 px-4">
        {/* Shipping Address */}
        <div className="bg-white rounded-xl shadow-sm p-4 mb-4">
          <div className="flex justify-between items-center mb-3">
            <h2 className="text-lg font-semibold text-gray-900">
              Shipping Address
            </h2>
            <button
              onClick={() => (window.location.href = "/saved-addresses")}
              className="text-sm text-[#9641c1] cursor-pointer"
            >
              Manage addresses{" "}
              <i className="fas fa-chevron-right ml-1 text-xs"></i>
            </button>
          </div>
          <div className="mb-4 p-3 bg-gray-50 rounded-lg">
            <div className="flex items-start mb-3">
              <input
                type="radio"
                id="savedAddress1"
                name="savedAddress"
                className="mt-1 mr-2"
                defaultChecked
              />
              <label htmlFor="savedAddress1" className="flex-1 cursor-pointer">
                <div className="font-medium">Home</div>
                <div className="text-sm text-gray-600">John Anderson</div>
                <div className="text-sm text-gray-600">123 Main Street</div>
                <div className="text-sm text-gray-600">
                  San Francisco, CA 94105
                </div>
                <div className="text-sm text-gray-600">United States</div>
                <div className="text-sm text-gray-600">(415) 555-7890</div>
              </label>
            </div>
            <button
              onClick={() => (window.location.href = "/saved-addresses")}
              className="w-full mt-3 py-2 px-4 border border-[#9641c1] text-[#9641c1] rounded-lg text-sm font-medium flex items-center justify-center !rounded-button"
            >
              <i className="fas fa-plus mr-2"></i>
              Add New Address
            </button>
          </div>
          <div className="space-y-3">
            <div>
              <label
                htmlFor="fullName"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-[#9641c1] focus:border-[#9641c1] text-sm"
                placeholder="Enter your full name"
              />
            </div>
            <div>
              <label
                htmlFor="address"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Street Address
              </label>
              <input
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-[#9641c1] focus:border-[#9641c1] text-sm"
                placeholder="Enter your street address"
              />
            </div>
            <div>
              <label
                htmlFor="apartment"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Apartment, Suite, etc. (optional)
              </label>
              <input
                type="text"
                id="apartment"
                name="apartment"
                value={formData.apartment}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-[#9641c1] focus:border-[#9641c1] text-sm"
                placeholder="Apt, Suite, Unit, etc."
              />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label
                  htmlFor="city"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  City
                </label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-[#9641c1] focus:border-[#9641c1] text-sm"
                  placeholder="City"
                />
              </div>
              <div>
                <label
                  htmlFor="state"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  State/Province
                </label>
                <input
                  type="text"
                  id="state"
                  name="state"
                  value={formData.state}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-[#9641c1] focus:border-[#9641c1] text-sm"
                  placeholder="State"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label
                  htmlFor="zipCode"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  ZIP/Postal Code
                </label>
                <input
                  type="text"
                  id="zipCode"
                  name="zipCode"
                  value={formData.zipCode}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-[#9641c1] focus:border-[#9641c1] text-sm"
                  placeholder="ZIP Code"
                />
              </div>
              <div>
                <label
                  htmlFor="country"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Country
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="country"
                    name="country"
                    value={formData.country}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-[#9641c1] focus:border-[#9641c1] text-sm"
                    placeholder="Country"
                  />
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <i className="fas fa-chevron-down text-gray-400 text-xs"></i>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-[#9641c1] focus:border-[#9641c1] text-sm"
                placeholder="Enter your phone number"
              />
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="saveAddress"
                name="saveAddress"
                checked={formData.saveAddress}
                onChange={handleInputChange}
                className="h-4 w-4 text-[#9641c1] focus:ring-[#9641c1] border-gray-300 rounded"
              />
              <label
                htmlFor="saveAddress"
                className="ml-2 block text-sm text-gray-700 cursor-pointer"
              >
                Save this address for future purchases
              </label>
            </div>
          </div>
        </div>
        {/* Delivery Options */}
        <div className="bg-white rounded-xl shadow-sm p-4 mb-4">
          <h2 className="text-lg font-semibold text-gray-900 mb-3">
            Delivery Options
          </h2>
          <div className="space-y-3">
            <div
              className={`p-3 border rounded-lg cursor-pointer ${
                selectedShipping === "standard"
                  ? "border-[#9641c1] bg-[#9641c1]/5"
                  : "border-gray-200"
              }`}
              onClick={() => handleShippingChange("standard")}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="standard"
                    name="shipping"
                    checked={selectedShipping === "standard"}
                    onChange={() => {}}
                    className="h-4 w-4 text-[#9641c1] focus:ring-[#9641c1] border-gray-300"
                  />
                  <label
                    htmlFor="standard"
                    className="ml-2 block cursor-pointer"
                  >
                    <span className="font-medium text-gray-900">
                      Standard Delivery
                    </span>
                  </label>
                </div>
                <span className="font-medium text-gray-900">Free</span>
              </div>
              <div className="ml-6 text-sm text-gray-600">
                5-7 business days (Est. delivery:{" "}
                {getEstimatedDeliveryDate("standard")})
              </div>
            </div>
            <div
              className={`p-3 border rounded-lg cursor-pointer ${
                selectedShipping === "express"
                  ? "border-[#9641c1] bg-[#9641c1]/5"
                  : "border-gray-200"
              }`}
              onClick={() => handleShippingChange("express")}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="express"
                    name="shipping"
                    checked={selectedShipping === "express"}
                    onChange={() => {}}
                    className="h-4 w-4 text-[#9641c1] focus:ring-[#9641c1] border-gray-300"
                  />
                  <label
                    htmlFor="express"
                    className="ml-2 block cursor-pointer"
                  >
                    <span className="font-medium text-gray-900">
                      Express Delivery
                    </span>
                  </label>
                </div>
                <span className="font-medium text-gray-900">$9.99</span>
              </div>
              <div className="ml-6 text-sm text-gray-600">
                2-3 business days (Est. delivery:{" "}
                {getEstimatedDeliveryDate("express")})
              </div>
            </div>
            <div
              className={`p-3 border rounded-lg cursor-pointer ${
                selectedShipping === "nextDay"
                  ? "border-[#9641c1] bg-[#9641c1]/5"
                  : "border-gray-200"
              }`}
              onClick={() => handleShippingChange("nextDay")}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="nextDay"
                    name="shipping"
                    checked={selectedShipping === "nextDay"}
                    onChange={() => {}}
                    className="h-4 w-4 text-[#9641c1] focus:ring-[#9641c1] border-gray-300"
                  />
                  <label
                    htmlFor="nextDay"
                    className="ml-2 block cursor-pointer"
                  >
                    <span className="font-medium text-gray-900">
                      Next Day Delivery
                    </span>
                  </label>
                </div>
                <span className="font-medium text-gray-900">$19.99</span>
              </div>
              <div className="ml-6 text-sm text-gray-600">
                Next business day (Est. delivery:{" "}
                {getEstimatedDeliveryDate("nextDay")})
              </div>
            </div>
          </div>
        </div>
        {/* Payment Method */}
        <div className="bg-white rounded-xl shadow-sm p-4 mb-4">
          <div className="flex justify-between items-center mb-3">
            <h2 className="text-lg font-semibold text-gray-900">
              Payment Method
            </h2>
            <button
              onClick={() => setShowSavedPayments(!showSavedPayments)}
              className="text-sm text-[#9641c1] cursor-pointer"
            >
              {showSavedPayments ? "Hide saved" : "Saved methods"}
            </button>
          </div>
          {showSavedPayments && (
            <div className="mb-4 p-3 bg-gray-50 rounded-lg">
              <div className="flex items-start mb-3">
                <input
                  type="radio"
                  id="savedCard1"
                  name="savedPayment"
                  className="mt-1 mr-2"
                  defaultChecked
                />
                <label htmlFor="savedCard1" className="flex-1 cursor-pointer">
                  <div className="flex items-center">
                    <i className="fab fa-cc-visa text-blue-800 text-xl mr-2"></i>
                    <div className="font-medium">Visa ending in 4242</div>
                  </div>
                  <div className="text-sm text-gray-600">Expires 05/2026</div>
                </label>
              </div>
              <div className="flex items-start">
                <input
                  type="radio"
                  id="savedCard2"
                  name="savedPayment"
                  className="mt-1 mr-2"
                />
                <label htmlFor="savedCard2" className="flex-1 cursor-pointer">
                  <div className="flex items-center">
                    <i className="fab fa-cc-mastercard text-red-600 text-xl mr-2"></i>
                    <div className="font-medium">Mastercard ending in 8888</div>
                  </div>
                  <div className="text-sm text-gray-600">Expires 11/2025</div>
                </label>
              </div>
            </div>
          )}
          <div className="space-y-3">
            <div
              className={`p-3 border rounded-lg cursor-pointer ${
                selectedPayment === "credit"
                  ? "border-[#9641c1] bg-[#9641c1]/5"
                  : "border-gray-200"
              }`}
              onClick={() => handlePaymentChange("credit")}
            >
              <div className="flex items-center">
                <input
                  type="radio"
                  id="credit"
                  name="payment"
                  checked={selectedPayment === "credit"}
                  onChange={() => {}}
                  className="h-4 w-4 text-[#9641c1] focus:ring-[#9641c1] border-gray-300"
                />
                <label
                  htmlFor="credit"
                  className="ml-2 flex items-center cursor-pointer"
                >
                  <span className="font-medium text-gray-900 mr-2">
                    Credit / Debit Card
                  </span>
                  <div className="flex space-x-1">
                    <i className="fab fa-cc-visa text-blue-800"></i>
                    <i className="fab fa-cc-mastercard text-red-600"></i>
                    <i className="fab fa-cc-amex text-blue-500"></i>
                  </div>
                </label>
              </div>
              {selectedPayment === "credit" && (
                <div className="mt-3 ml-6 space-y-3">
                  <div>
                    <label
                      htmlFor="cardNumber"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Card Number
                    </label>
                    <input
                      type="text"
                      id="cardNumber"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-[#9641c1] focus:border-[#9641c1] text-sm"
                      placeholder="1234 5678 9012 3456"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label
                        htmlFor="expiry"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Expiry Date
                      </label>
                      <input
                        type="text"
                        id="expiry"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-[#9641c1] focus:border-[#9641c1] text-sm"
                        placeholder="MM/YY"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="cvc"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        CVC
                      </label>
                      <input
                        type="text"
                        id="cvc"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-[#9641c1] focus:border-[#9641c1] text-sm"
                        placeholder="123"
                      />
                    </div>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="savePayment"
                      name="savePayment"
                      checked={formData.savePayment}
                      onChange={handleInputChange}
                      className="h-4 w-4 text-[#9641c1] focus:ring-[#9641c1] border-gray-300 rounded"
                    />
                    <label
                      htmlFor="savePayment"
                      className="ml-2 block text-sm text-gray-700 cursor-pointer"
                    >
                      Save this card for future purchases
                    </label>
                  </div>
                </div>
              )}
            </div>
            <div
              className={`p-3 border rounded-lg cursor-pointer ${
                selectedPayment === "paypal"
                  ? "border-[#9641c1] bg-[#9641c1]/5"
                  : "border-gray-200"
              }`}
              onClick={() => handlePaymentChange("paypal")}
            >
              <div className="flex items-center">
                <input
                  type="radio"
                  id="paypal"
                  name="payment"
                  checked={selectedPayment === "paypal"}
                  onChange={() => {}}
                  className="h-4 w-4 text-[#9641c1] focus:ring-[#9641c1] border-gray-300"
                />
                <label
                  htmlFor="paypal"
                  className="ml-2 flex items-center cursor-pointer"
                >
                  <span className="font-medium text-gray-900 mr-2">PayPal</span>
                  <i className="fab fa-paypal text-blue-700"></i>
                </label>
              </div>
            </div>
            <div
              className={`p-3 border rounded-lg cursor-pointer ${
                selectedPayment === "applepay"
                  ? "border-[#9641c1] bg-[#9641c1]/5"
                  : "border-gray-200"
              }`}
              onClick={() => handlePaymentChange("applepay")}
            >
              <div className="flex items-center">
                <input
                  type="radio"
                  id="applepay"
                  name="payment"
                  checked={selectedPayment === "applepay"}
                  onChange={() => {}}
                  className="h-4 w-4 text-[#9641c1] focus:ring-[#9641c1] border-gray-300"
                />
                <label
                  htmlFor="applepay"
                  className="ml-2 flex items-center cursor-pointer"
                >
                  <span className="font-medium text-gray-900 mr-2">
                    Apple Pay / Google Pay
                  </span>
                  <div className="flex space-x-2">
                    <i className="fab fa-apple text-gray-800"></i>
                    <i className="fab fa-google text-blue-500"></i>
                  </div>
                </label>
              </div>
            </div>
          </div>
          <div className="mt-4 flex items-center text-sm text-gray-600">
            <i className="fas fa-lock mr-2 text-[#9641c1]"></i>
            <span>Your payment information is secure and encrypted</span>
          </div>
        </div>
        {/* Order Summary */}
        <div className="bg-white rounded-xl shadow-sm p-4 mb-4">
          <h2 className="text-lg font-semibold text-gray-900 mb-3">
            Order Summary
          </h2>
          <div className="flex items-start border-b border-gray-200 pb-4 mb-4">
            <div className="w-20 h-20 rounded-lg overflow-hidden bg-gray-100 flex-shrink-0">
              <img
                src="https://readdy.ai/api/search-image?query=Premium%2520wireless%2520headphones%2520with%2520noise%2520cancellation%2520in%2520matte%2520black%2520color%252C%2520professional%2520product%2520photography%2520on%2520simple%2520light%2520gray%2520background%252C%2520ultra%2520high%2520resolution%252C%2520detailed%2520texture%2520visible%252C%2520studio%2520lighting%252C%2520centered%2520composition%252C%2520photorealistic&width=80&height=80&seq=1&orientation=squarish"
                alt="Premium Wireless Headphones"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="ml-3 flex-1">
              <h3 className="font-medium text-gray-900">
                Premium Wireless Headphones
              </h3>
              <p className="text-sm text-gray-600">Color: Matte Black</p>
              <p className="text-sm text-gray-600">Quantity: 1</p>
              <p className="font-medium text-gray-900 mt-1">$129.99</p>
            </div>
          </div>
          <div className="mb-4">
            <div className="flex items-center">
              <input
                type="text"
                name="promoCode"
                value={formData.promoCode}
                onChange={handleInputChange}
                className="flex-1 px-3 py-2 border border-gray-300 rounded-l-lg focus:ring-[#9641c1] focus:border-[#9641c1] text-sm"
                placeholder="Promo code"
              />
              <button className="bg-gray-100 text-gray-700 px-4 py-2 rounded-r-lg border border-gray-300 border-l-0 text-sm font-medium !rounded-button">
                Apply
              </button>
            </div>
          </div>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-600">Subtotal</span>
              <span className="font-medium text-gray-900">
                ${calculateSubtotal().toFixed(2)}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Tax (8.25%)</span>
              <span className="font-medium text-gray-900">
                ${calculateTax()}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Shipping</span>
              <span className="font-medium text-gray-900">
                {calculateShipping() === 0
                  ? "Free"
                  : `$${calculateShipping().toFixed(2)}`}
              </span>
            </div>
            <div className="border-t border-gray-200 pt-2 mt-2">
              <div className="flex justify-between font-semibold">
                <span className="text-gray-900">Total</span>
                <span className="text-gray-900">${calculateTotal()}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Bottom Action Bar */}
      <AppNavigation />
      {/* Custom Styles */}
      <style>{`
        input[type="number"]::-webkit-inner-spin-button,
        input[type="number"]::-webkit-outer-spin-button {
          -webkit-appearance: none;
          margin: 0;
        }
        input[type="number"] {
          -moz-appearance: textfield;
        }
        @keyframes popup {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-popup {
          animation: popup 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  );
};
export default HeadphonesCheckoutPage;
