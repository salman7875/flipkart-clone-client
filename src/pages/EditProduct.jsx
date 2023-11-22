import React from "react";

const CreateProduct = () => {
  return (
    <div className="h-[91vh] flex items-center justify-center">
      <div className="w-[50%] h-[85%] mx-auto border-2 border-black flex">
        <div className="bg-blue-500 h-full flex-1 px-7 py-10 relative">
          <h1 className="text-white font-semibold text-3xl mb-4">
            Welcome to Flipkar Business!
          </h1>
          <p className="text-slate-200 text-xl">
            Sell your Product from your Home...
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
              Product Image{" "}
            </label>
            <input type="file" id="avatar" hidden />
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
            />
          </div>
          <div className="mb-5">
            <label htmlFor="number" className="font-semibold">
              Price:{" "}
            </label>
            <input
              type="text"
              id="number"
              placeholder="Price..."
              className="outline-none border-b-2 border-blue-900 w-full"
            />
          </div>
          <div className="mb-5">
            <label htmlFor="description" className="font-semibold">
              Description:{" "}
            </label>
            <input
              type="text"
              id="description"
              placeholder="Password"
              className="outline-none border-b-2 border-blue-900 w-full"
            />
          </div>
          <p className="text-xs mb-2">
            By continuing, you agree to Flipkart's{" "}
            <span className="text-blue-500">Terms of Use</span> and{" "}
            <span className="text-blue-500">Privacy Policy</span>.
          </p>
          <button className="w-full bg-orange-500 mb-2 py-2 text-lg text-white font-semibold">
            Sign in
          </button>
          <button className="w-full mb-1 py-2 text-lg text-blue-500 font-semibold shadow-xl shadow-blue-500/50">
            Existing User? Log in
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateProduct;
