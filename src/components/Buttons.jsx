import React from "react";

const Buttons = ({ onclick, children }) => {
  return (
    <button
      onClick={onclick}
      className="group relative mb-2 me-2 inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-blue-500 to-green-400 p-0.5 text-sm font-medium text-gray-900 focus:outline-none focus:ring-4"
    >
      <span className="relative rounded-md bg-white px-5 py-2.5 transition-all duration-75 ease-in group-hover:bg-gradient-to-br group-hover:from-blue-500 group-hover:to-green-400 group-hover:text-white">
        {children}
      </span>
    </button>
  );
};

export default Buttons;
