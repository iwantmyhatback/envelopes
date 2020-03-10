import React from "react";

import AddMoneyForm from "./addMoneyForm.jsx";

const Category = ({category, updateHandler, deleteHandler}) => {
  return (
  <div className="box">
    <h4>{category.name}</h4>
    <div>${category.now}</div>
    <br />
    <AddMoneyForm updateHandler={updateHandler} />
    <button type="button" onClick={() => updateHandler(category.id, "now", 0)}>Clear</button>
    <button type="button" onClick={() => deleteHandler(category.id)}>Delete</button>
  </div>
  );
};

export default Category;