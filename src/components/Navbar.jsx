import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logoutUser } from "../redux/AuthSlice";
import { useEffect, useState } from "react";

const Navbar = () => {
  const { user, token } = useSelector((state) => state.auth);
  const [search, setSearch] = useState("");
  const [key, setKey] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const time = setTimeout(() => {
      if (key === "Space") {
        navigate(`/products?type=${search}&page=1&sort=relevance&filter=0`);
      }
    }, 200);

    return () => {
      clearTimeout(time);
    };
  }, [search]);

  return (
    <nav className="fixed top-0 h-16 w-screen bg-blue-500 flex items-center gap-4 justify-center overflow-hidden">
      <div>
        <img
          src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/flipkart-plus_8d85f4.png"
          alt=""
          className="w-20"
        />
        <Link to="/" className="font-semibold text-white italic">
          Explore <span className="text-yellow-300">Plus</span>
        </Link>
      </div>
      <input
        type="text"
        placeholder="Search for products, brands and more"
        className="h-10 px-5 w-[35vw]"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onKeyDown={(e) => setKey(e.code)}
      />
      {token ? (
        <button
          onClick={() => dispatch(logoutUser())}
          className="bg-white px-6 py-1 font-bold text-blue-500"
        >
          Logout
        </button>
      ) : (
        <button
          onClick={() => navigate("/login")}
          className="bg-white px-6 py-1 font-bold text-blue-500"
        >
          Login
        </button>
      )}
      {user.role == "1" ? (
        <Link to="/create/product">Upload Product for Sale</Link>
      ) : (
        ""
      )}
      <div className="flex items-center gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
          />
        </svg>
        <Link to="/cart" className="text-white text-xl">
          Cart
        </Link>

        <div>
          <img
            src={`${user.avatar}`}
            alt={user.name}
            className="w-14 h-14 object-cover rounded-full"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
