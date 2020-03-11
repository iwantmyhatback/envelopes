import React from "react";

import AddMoneyForm from "./addMoneyForm.jsx";

const Category = ({category, updateCategoryHandler, updateFundsHandler, deleteHandler}) => {
  return (
  <div className="box">
    <h4>{category.name}</h4>
    <div>${category.now}</div>
    <br />
    <AddMoneyForm category={category} updateCategoryHandler={updateCategoryHandler} />
    <button type="button" onClick={() => {
      const clearAmount = category.now * -1;
      updateFundsHandler(clearAmount);
      updateCategoryHandler(category.id, "now", 0);
    }}>Clear</button>
    <button type="button" onClick={() => deleteHandler(category.id)}>Delete</button>
  </div>
  );
};

export default Category;