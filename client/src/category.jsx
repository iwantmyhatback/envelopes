import React from "react";

import AddMoneyForm from "./addMoneyForm.jsx";

const Category = ({ category, sanitize, updateCategoryHandler, updateFundsHandler, deleteHandler }) => {
  return (
    <div className="box">
      <h3>{category.name}</h3>
      <h2>${category.now}</h2>
      <AddMoneyForm
        category={category}
        sanitize={sanitize}
        updateCategoryHandler={updateCategoryHandler}
        updateFundsHandler={updateFundsHandler}
      />
      <button
        type="button"
        onClick={() => {
          const addAmount = category.now;
          updateFundsHandler(addAmount);
          updateCategoryHandler(category, "now", category.now * -1);
        }}
      >
        Clear
      </button>
      <button
        type="button"
        onClick={() => {
          const addAmount = category.now; // get money back into funds before deleting
          updateFundsHandler(addAmount);
          deleteHandler(category.id);
        }}
      >
        Delete
      </button>
    </div>
  );
};

export default Category;
