import React from "react";
import useCategoryStore from "../store/useCategoryStore";

const CategoryBtn = ({ category: { id, name, isActive } }) => {
  const { activeCategory } = useCategoryStore();
  const handleCategoryBtn = () => {
    activeCategory(id);
  };
  return (
    <button
      onClick={handleCategoryBtn}
      className={`border-2 border-neutral-700 rounded font-bold px-4 md:px-0  py-1  md:py-2 text-nowrap ${
        isActive && "bg-neutral-700 text-neutral-100"
      }`}
    >
      {name}
    </button>
  );
};

export default CategoryBtn;
