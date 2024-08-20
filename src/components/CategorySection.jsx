import React, { useContext } from "react";
import CategoryBtn from "./CategoryBtn";
import Container from "./Container";
import useCategoryStore from "../store/useCategoryStore";

const CategorySection = () => {
  const { categories } = useCategoryStore();
  return (
    <section className="  py-6  text-sm md:text-base">
      <Container>
        <div className="flex flex-row overflow-scroll md:grid md:grid-cols-5 items-center justify-between gap-2.5 lg:gap-5  category-btn-group">
          {categories.map((category, index) => (
            <CategoryBtn key={index} category={category} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default CategorySection;
