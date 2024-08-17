import React from "react";

const CategoryBtn = ({ category, current }) => {
  return (
    <button
      className={`border-2 border-neutral-700 rounded font-bold  py-2 ${
        current && "bg-neutral-700 text-neutral-100"
      }`}
    >
      {category}
    </button>
  );
};

export default CategoryBtn;
