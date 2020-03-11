import React from "react";

import AddMoneyForm from "./addMoneyForm.jsx";

const Category = ({category, updateCatHandler, updateFundsHandler, deleteHandler}) => {
  return (
  <div className="box">
    <h4>{category.name}</h4>
    <div>${category.now}</div>
    <br />
    <AddMoneyForm category={category} updateHandler={updateHandler} />
    <button type="button" onClick={() => {
      const clearAmount = category.now * -1;
      updateFundsHandler(clearAmount);
      updateCatHandler(category.id, "now", 0);
    }}>Clear</button>
    <button type="button" onClick={() => deleteHandler(category.id)}>Delete</button>
  </div>
  );
};

export default Category;