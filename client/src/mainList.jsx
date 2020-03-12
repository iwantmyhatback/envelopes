import React from "react";

import Category from "./category.jsx";
import NewCatForm from "./newCatForm.jsx";

const MainList = ({ categories, sanitize, updateCategoryHandler, updateFundsHandler, deleteHandler, addHandler }) => {
  {
    var catItems = categories.map(cat => {
      return (
        <div key={cat.id}>
          <Category
            category={cat}
            updateCategoryHandler={updateCategoryHandler}
            updateFundsHandler={updateFundsHandler}
            deleteHandler={deleteHandler}
            sanitize={sanitize}
          />
        </div>
      );
    });
  }
  return (
    <div>
      <h2 id="my-envelopes">My Envelopes:</h2>
      <br />
      <div id="main-list">
        <div className="box">
          <NewCatForm addHandler={addHandler} />
        </div>
        {catItems}
      </div>
    </div>
  );
};

export default MainList;
