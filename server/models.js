let db = require("../db");

model = {};

model.getAllCategories = () => {
  return db
    .asyncQuery("SELECT * FROM categories")
    .then(data => {
      console.log("*** Successfully Returned All Category Entries From DB ***");
      return data;
    })
    .catch(err => {
      console.error("!!! Error Returning All Category Entries From DB !!!");
      return err;
    });
};

model.addCategory = () => {
  return db
    .asyncQuery('INSERT INTO categories (name, now, spent) VALUES ("junk", 1, 100);')
    .then(data => {
      console.log("*** Successfully Inserted New Category Entry Into DB ***");
      return db
        .asyncQuery("SELECT * FROM categories")
        .then(data => {
          console.log("*** Successfully Returned All Updated Category Entries from DB ***");
          return data;
        })
        .catch(err => {
          console.error("!!! Error Returning All Updated Category Entries from DB !!!");
          return err;
        });
    })
    .catch(err => {
      console.error("!!! Error Inserting New Category Entry Into DB !!!");
      return err;
    });
};

model.editCategory = () => {};

model.deleteCategory = () => {};

model.getFunds = () => {};

model.editFunds = () => {};

module.exports = model;
