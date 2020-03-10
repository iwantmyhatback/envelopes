let router = require("express").Router();

router
  .route("/cat")
  .get((req, res) => {
    res.send("GET cat");
  })
  .post((req, res) => {
    res.send("POST cat");
  })
  .put((req, res) => {
    res.send("PUT cat");
  })
  .delete((req, res) => {
    res.send("DELETE cat");
  });

router.get("/funds", (req, res) => {
  res.send("GET funds");
});

module.exports = router;
