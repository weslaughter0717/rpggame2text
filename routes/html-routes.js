// Requiring path to so we can use relative routes to our HTML files
var path = require("path");


module.exports = function(app) {
  app.get("/main", function(req, res) {
    // redirects to main page if just /
    if (req.user) {
      res.redirect("/");
    }
    res.sendFile(path.join(__dirname, "../html/main.html"));
  });
   // takes you to the main
  app.get("/myMob", function(req, res) {
    res.sendFile(path.join(__dirname, "../html/mymob.html"));
  });
  
  app.get("/jobs", function(req, res) {
    res.sendFile(path.join(__dirname, "../html/jobs.html"));
  });
  
  app.get("/stockPile", function(req, res) {
    res.sendFile(path.join(__dirname, "../html/stockpile.html"));
  });
  app.get("/fight", function(req, res) {
    res.sendFile(path.join(__dirname, "../html/fight.html"));
  });
};