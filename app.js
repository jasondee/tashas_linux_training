var express = require("express");
var app = express();

app.use(express.static("public"));

app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.render("home");
});

app.get("/boot", function(req, res){
    res.render("boot");
});

app.get("/about", function(req, res){
    res.render("about");
});

app.get("/bewbs", function(req, res){
    res.render("bewbs");
});

app.get("/contact", function(req, res){
    res.render("contact");
});

app.get("*", function(req, res){
    res.render("Undefined Path: You have ventured beyond the map.");
});

app.listen(process.env.PORT, process.env.IP);

console.log("This jankety ass server is rattling on.");