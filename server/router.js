let router = require("express").Router();
let model = require("./models.js");

router
  .route("/cat")
  .get((req, res) => {
    model
      .getAllCategories()
      .then(data => {
        console.log("*** Successfully Sent Client All Exisiting Category Entries ***");
        res.send(data);
      })
      .catch(err => {
        console.error("!!! Error Sending Client All Existing Category Entries !!!");
        res.sendStatus(500);
      });
  })
  .post((req, res) => {
    model
      .addCategory(req.body)
      .then(data => {
        console.log("*** Successfully Sent Client Updated Categories ***");
        res.send(data);
      })
      .catch(err => {
        console.error("!!! Error Sending Client Updated Categories !!!");
        res.sendStatus(500);
      });
  })
  .put((req, res) => {
    model.editCategory(req.body).then(data => {
      // NEED TO CONDITIONALLY SEE IF IT IS A SPEND OR EDIT UPDATE
      //SEND BACK ALL CATEGORY DATA
    });
    res.send("PUT cat");
  })
  .delete((req, res) => {
    console.log(req.query);
    model
      .deleteCategory(req.query)
      .then(data => {
        console.log("*** Successfully Sent Client Non-Delted Categories ***");
        res.send(data);
      })
      .catch(err => {
        console.error("!!! Error Sending Client Non-Delted Categories !!!");
        res.sendStatus(500);
      });
  });

router
  .route("/funds")
  .get((req, res) => {
    // model.getFunds().then(data => {
    //   //SEND BACK NEW FUND TOTAL
    // });
    res.send("GET funds");
  })
  .put((req, res) => {
    model.editFunds().then(data => {
      //SEND BACK NEW FUND TOTAL
    });
    res.send("PUT funds");
  });

module.exports = router;
