import React from "react";

import Category from "./category.jsx";
import NewCatForm from "./newCatForm.jsx";


const MainList = ({categories, updateHandler, deleteHandler, addHandler}) => {

  {var catItems = categories.map((cat) => {
    return (
      <div key={cat.name} className="box">
        <Category category={cat} updateHandler={updateHandler} deleteHandler={deleteHandler} />
      </div>
    );
  })}
  return (
  <div>
    <div className="box">
      <NewCatForm addHandler={addHandler} />
    </div>
    {catItems}
  </div>
  );
};

export default MainList;