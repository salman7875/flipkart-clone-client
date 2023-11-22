import React from "react";

const Spinner = () => {
  return (
    <div className="flex justify-center items-center h-full my-24">
      <div className="border-t-4 border-e-4 border-s-2 border-b-4 border-gray-500 rounded-full w-12 h-12 animate-spin"></div>
    </div>
  );
};

export default Spinner;
