import { Link, useNavigate } from "react-router-dom";

const BakcButtob = () => {
    const navigate = useNavigate();
  return (
    <Link
      onClick={() => navigate(-1)}
      data-readdy="true"
      className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors cursor-pointer"
    >
      <i className="fas fa-arrow-left text-gray-700"></i>
    </Link>
  );
};

export default BakcButtob;
