let router = require("express").Router();
let model = require("./models.js");

router
  .route("/cat")
  .get((req, res) => {
    model
      .getAllCategories()
      .then(data => {
        console.log("*** Successfully Sent All Exisiting Category Entries To Client ***");
        res.send(data);
      })
      .catch(err => {
        console.error("!!! Error Sending All Existing Category Entries To Client !!!");
        res.sendStatus(500);
      });
  })
  .post((req, res) => {
    model
      .addCategory(req.body)
      .then(data => {
        console.log("*** Successfully Sent Updated Categories To Client ***");
        res.send(data);
      })
      .catch(err => {
        console.error("!!! Error Sending Updated Categories To Client !!!");
        res.sendStatus(500);
      });
  })
  .put((req, res) => {
    console.log(req.body);
    model
      .editCategory(req.body)
      .then(data => {
        console.log("*** Successfully Sent Updated Category Values To Client ***");
        res.send(data);
      })
      .catch(err => {
        console.error("!!! Error Sending Updated Category Values To Client !!!");
        res.sendStatus(500);
      });
  })
  .delete((req, res) => {
    console.log(req.query);
    model
      .deleteCategory(req.query)
      .then(data => {
        console.log("*** Successfully Sent Non-Delted Categories To Client ***");
        res.send(data);
      })
      .catch(err => {
        console.error("!!! Error Sending Non-Delted Categories To Client !!!");
        res.sendStatus(500);
      });
  });

router
  .route("/funds")
  .get((req, res) => {
    model
      .getFunds()
      .then(data => {
        console.log(data);
        console.log("*** Successfully Sent Funds Data To Client ***");
        res.send(data);
      })
      .catch(err => {
        console.error("!!! Error Sending Funds Data To Client !!!");
        res.sendStatus(500);
      });
  })
  .put((req, res) => {
    console.log(req.body);
    model
      .editFunds(req.body)
      .then(data => {
        console.log("*** Successfully Sent Updated Funds Data To Client ***");
        res.send(data);
      })
      .catch(err => {
        console.error("!!! Error Sending Updated Funds Data To Client !!!");
        res.sendStatus(500);
      });
  });

module.exports = router;
