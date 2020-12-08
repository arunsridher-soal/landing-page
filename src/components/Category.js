import React from "react";
import Card from "./common/Card";

const Category = ({ category }) => {
  return <Card title={category.headerTitle} items={category.listItem} />;
};

export default Category;
