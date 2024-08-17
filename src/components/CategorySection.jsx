import React, { useContext } from "react";
import { generalContext } from "../context/GeneralContext";
import CategoryBtn from "./CategoryBtn";

const CategorySection = () => {
  const { categories } = useContext(generalContext);
  return (
    <section className="grid grid-cols-5 items-center justify-between gap-5  py-6">
      <CategoryBtn category={"All"} current={true} />
      {categories.map((category) => (
        <CategoryBtn key={category} category={category} current={false} />
      ))}
    </section>
  );
};

export default CategorySection;
