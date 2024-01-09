import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const SignIn = () => {
  const [avatar, setAvatar] = useState("");
  const [name, setName] = useState("");
  const [role, setRole] = useState(0);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { authHandler, error } = useAuth();

  const navigate = useNavigate();

  const base64Converter = (e) => {
    const reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = () => {
      setAvatar(reader.result);
    };
    reader.onerror = (err) => {
      console.log(err);
    };
  };

  const signupHandler = async () => {
    const formData = { avatar, name, role, email, password };

    const res = await authHandler("signup", formData);
    if (res.success) {
      setAvatar("");
      setName("");
      setRole(0);
      setEmail("");
      setPassword("");
      navigate("/");
    }
  };

  return (
    <div className="h-[91vh] flex items-center justify-center">
      <div className="w-[50%] h-[85%] mx-auto border-2 border-black flex">
        <div className="bg-blue-500 h-full flex-1 px-7 py-10 relative">
          <h1 className="text-white font-semibold text-3xl mb-4">
            Looks like you're new here!
          </h1>
          <p className="text-slate-200 text-xl">
            Sign up with your mobile number to get started
          </p>

          <img
            src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/flipkart-plus_8d85f4.png"
            alt=""
            className="w-32 absolute bottom-20 left-28"
          />
        </div>
        <div className="flex-1 p-5">
          <div className="mb-5 border-b-2 border-blue-800">
            <label htmlFor="avatar" className="font-semibold">
              Avatar{" "}
            </label>
            <input type="file" id="avatar" hidden onChange={base64Converter} />
          </div>
          <div className="mb-5">
            <label htmlFor="name" className="font-semibold">
              Name:{" "}
            </label>
            <input
              type="text"
              id="name"
              placeholder="Name..."
              className="outline-none border-b-2 border-blue-900 w-full"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-5 w-full pb-4 outline-none border-b-2 border-blue-900">
            <select onChange={(e) => setRole(e.target.value)}>
              <option value="0">-- Select Your Role --</option>
              <option value="0">Normal</option>
              <option value="1">Seller</option>
            </select>
          </div>
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
          <p className="text-xs mb-2">
            By continuing, you agree to Flipkart's{" "}
            <span className="text-blue-500">Terms of Use</span> and{" "}
            <span className="text-blue-500">Privacy Policy</span>.
          </p>
          <button
            className="w-full bg-orange-500 mb-2 py-2 text-lg text-white font-semibold"
            onClick={signupHandler}
          >
            Sign in
          </button>
          <button
            className="w-full mb-1 py-2 text-lg text-blue-500 font-semibold shadow-xl shadow-blue-500/50"
            onClick={() => navigate("/login")}
          >
            Existing User? Log in
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
