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

model.addCategory = postBody => {
  let instance = [postBody.name, 0, 0];
  return db
    .asyncQuery("INSERT INTO categories (name, now, spent) VALUES (?,?,?);", instance)
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

model.deleteCategory = deleteQuery => {
  let instance = [deleteQuery.id]
    .asyncQuery("DELETE FROM categories WHERE id=?", instance)
    .then(data => {
      console.log("*** Successfully Deleted Category Entry From DB ***");
      return db
        .asyncQuery("SELECT * FROM categories")
        .then(data => {
          console.log("*** Successfully Returned All Non-Deleted Category Entries from DB ***");
          return data;
        })
        .catch(err => {
          console.error("!!! Error Returning All Non-Deleted Category Entries from DB !!!");
          return err;
        });
    })
    .catch(err => {
      console.error("!!! Error Deleting Category Entry From DB !!!");
      return err;
    });
};

model.getFunds = () => {};

model.editFunds = () => {};

module.exports = model;
