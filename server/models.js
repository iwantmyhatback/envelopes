let db = require("../db");

model = {};

model.getAllCategories = () => {};

model.addCategory = () => {
  return db
    .asyncQuery('INSERT INTO categories (name, now, spent) VALUES ("junk", 1, 100);')
    .then(data => {
      console.log(data);
      return data;
    })
    .catch(err => {
      console.error(err);
      return err;
    });
};

model.editCategory = () => {};

model.deleteCategory = () => {};

model.getFunds = () => {};

model.editFunds = () => {};

module.exports = model;
