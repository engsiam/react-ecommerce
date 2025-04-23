import { Link, useLocation } from "react-router-dom";

const AppNavigation = () => {
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Home", icon: "fa-home" },
    { path: "/category", label: "Categories", icon: "fa-th-large" },
    { path: "/cart", label: "Cart", icon: "fa-shopping-cart" },
    { path: "/profile", label: "Profile", icon: "fa-user" },
  ];

  return (
    <div className="bg-white shadow-lg fixed bottom-0 w-full grid grid-cols-4 py-3 border-t border-gray-100 z-40">
      {navItems.map(({path, label, icon}) => (
        <Link
          to={path}
          key={path}
          data-readdy="true"
          className={`flex flex-col items-center justify-center  cursor-pointer ${
            location.pathname === path ? "bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent" : "text-gray-500"
          }`}
        >
          <i className={`fas ${icon} text-xl`}></i>
          <span className="text-xs mt-1">{label}</span>
        </Link>
      ))}
    </div>
  );
};

export default AppNavigation;
