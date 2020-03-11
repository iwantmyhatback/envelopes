import React from "react";

import AddMoneyForm from "./addMoneyForm.jsx";

const Category = ({category, updateCategoryHandler, updateFundsHandler, deleteHandler}) => {
  return (
  <div className="box">
    <h4>{category.name}</h4>
    <h2>${category.now}</h2>
    <br />
    <AddMoneyForm category={category} updateCategoryHandler={updateCategoryHandler} updateFundsHandler={updateFundsHandler} />
    <button type="button" onClick={() => {
      const addAmount = category.now;
      updateFundsHandler(addAmount);
      updateCategoryHandler(category, "now", category.now * -1);
    }}>Clear</button>
    <button type="button" onClick={() => {
      const addAmount = category.now;
      updateFundsHandler(addAmount);
      deleteHandler(category.id);
    }}>Delete</button>
  </div>
  );
};

export default Category;