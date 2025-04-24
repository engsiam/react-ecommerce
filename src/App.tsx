import { Route, Routes } from "react-router-dom";
import "./App.css";

import '@fortawesome/fontawesome-free/css/all.min.css';
import AllFlashDeals from "./pages/AllFlashDeals";
import AllProductCategories from "./pages/AllProductCategories";
import EcommerceHomePage from "./pages/EcommerceHomePage";
import HeadphonesCheckoutPage from "./pages/HeadphonesCheckoutPage";
import ShoppingCartPage from "./pages/ShoppingCartPage";
import UserProfileManagement from "./pages/UserProfileManagement";
import PremiumWirelessHeadphonesDetails from "./pages/PremiumWirelessHeadphonesDetails";


function App() {
  return (
    <Routes>
      <Route path="/" element={<EcommerceHomePage />} />
      <Route path="/flash" element={<AllFlashDeals />} />
      <Route path="/Productsdetails" element={<PremiumWirelessHeadphonesDetails />} />
      <Route path="/category" element={<AllProductCategories />} />
      <Route path="/checkout" element={<HeadphonesCheckoutPage />} />
      <Route path="/cart" element={<ShoppingCartPage />} />
      <Route path="/profile" element={<UserProfileManagement />} />
    </Routes>
  );
}

export default App;
