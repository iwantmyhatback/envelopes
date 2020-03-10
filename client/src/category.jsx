import React from "react";

const Category = ({category, updateHandler, deleteHandler}) => {
  return (
  <div>
    <h4>{category.name}</h4>
    <div>${category.now}</div>
    <br />
    <button type="button" onClick={() => updateHandler(category.name, "now", 0)}>Clear</button>
    <button type="button" onClick={() => deleteHandler(category.name)}>Delete</button>
  </div>
  );
};

export default Category;