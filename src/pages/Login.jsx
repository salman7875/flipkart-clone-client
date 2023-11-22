import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Spinner from "../components/Spinner";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { authHandler } = useAuth();

  const loginHandler = async () => {
    const res = await authHandler("login", { email, password });
    if (res.success) {
      setEmail("");
      setPassword("");
      navigate("/");
    }
  };

  return (
    <div className="h-[91vh] flex items-center justify-center">
      <div className="w-[50%] h-[85%] mx-auto border-2 border-black flex">
        <div className="bg-blue-500 h-full flex-1 px-7 py-10 relative">
          <h1 className="text-white font-semibold text-3xl mb-4">Login</h1>
          <p className="text-slate-200 text-xl">
            Get access to your Orders, Wishlist and Recommendations
          </p>

          <img
            src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/flipkart-plus_8d85f4.png"
            alt=""
            className="w-32 absolute bottom-20 left-28"
          />
        </div>
        <div className="flex-1 p-5">
          <div className="mb-5">
            <label htmlFor="email" className="font-semibold">
              Email:{" "}
            </label>
            <input
              type="text"
              id="email"
              placeholder="Email..."
              className="outline-none border-b-2 border-blue-900 w-full"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-5">
            <label htmlFor="password" className="font-semibold">
              Password:{" "}
            </label>
            <input
              type="text"
              id="password"
              placeholder="Password"
              className="outline-none border-b-2 border-blue-900 w-full"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <p className="text-xs mb-4">
            By continuing, you agree to Flipkart's{" "}
            <span className="text-blue-500">Terms of Use</span> and{" "}
            <span className="text-blue-500">Privacy Policy</span>.
          </p>
          <button
            className="w-full bg-orange-500 mb-2 py-2 text-lg text-white font-semibold"
            onClick={loginHandler}
          >
            Log in
          </button>
          <button
            className="w-full mb-1 py-2 text-md text-blue-500 font-semibold shadow-xl shadow-blue-500/50"
            onClick={() => navigate("/signup")}
          >
            New to Flipkart? Create an account
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
