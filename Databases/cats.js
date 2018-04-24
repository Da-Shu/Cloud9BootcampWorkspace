var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/cat_app");

var catSchema = new mongoose.Schema({
    name: String,
    age: Number,
    temperament: String 
});
// "Cat" should be the name of the singular version of the model (it can translate "person" into "people" via a library)
var Cat = mongoose.model("Cat", catSchema);

// var spooky = new Cat({
//     name: "Spooky",
//     age: 3,
//     temperament: "Scared"
// });

// spooky.save(function(err, cat) {
//     if(err) {
//         console.log("SOMETHING WENT WRONG");
//     } else {
//         console.log("WE JUST SAVED A CAT TO THE DB");
//         console.log(cat);
//     }
// }); 

//ALTERNATIVE (BETTER) WAY TO ENTER OBJECTS
Cat.create({
    name: "Tyson",
    age: 14,
    temperament: "Weird"
}, function(err, cat) {
    if(err) {
        console.log(err);
    } else {
        console.log(cat);
    }
});

Cat.find({}, function(err, cats){
    if(err) {
        console.log("OH NO, ERROR!");
        console.log(err);
    } else {
        console.log("ALL THE CATS...");
        console.log(cats);
    }
});