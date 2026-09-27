import React from "react";

const Loader = () => {
  return (
    <div className="w-screen h-screen flex items-center justify-center bg-gray-950">
      <div className="spinner">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>

      </div>
    </div>
  );
};

export default Loader;
