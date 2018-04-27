var express                 = require("express"),
    mongoose                = require("mongoose"),
    passport                = require("passport"),
    bodyParser              = require("body-parser"),
    User                    = require("./models/user"),
    LocalStrategy           = require("passport-local"),
    passportLocalMongoose   = ("passport-local-mongoose");

mongoose.connect("mongodb://localhost/auth_demo_app");

var app = express();
app.set("view engine", "ejs");
app.use(require("express-session")({
    secret: "Argos is way too big",
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

//==============
//ROUTES
//==============

app.get("/", function(req, res){
    res.render("home");
});

app.get("/secret", function(req, res){
    res.render("secret");
});

//AUTH ROUTE
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("SERVER IS RUNNING");
});