let db = require("../db");

model = {};

model.getAllCategories = () => {};

model.addCategory = () => {
  return db
    .asyncQuery('INSERT INTO categories (name, now, spent) VALUES ("junk", 1, 100);')
    .then(data => {
      console.log("*** Successfully Inserted Entry Into Categories ***");
      return db.asyncQuery("SELECT * FROM categories").then(data => {
        console.log("*** Successfully Returned All Category Data ***");
        return data;
      });
    })
    .catch(err => {
      console.error("!!! Error Inserting Category Entry !!!");
      return err;
    });
};

model.editCategory = () => {};

model.deleteCategory = () => {};

model.getFunds = () => {};

model.editFunds = () => {};

module.exports = model;
