var express = require("express");
var app = express(); 

//Visiting "/" should print "Hi there, welcome to my assingment!"
app.get("/", function(req, res) {
    res.send("Hi there, welcome to my assignment!");    
});

//Visiting "/speak/animal" should print "the [animal] says [sound]"
// app.get("/speak/pig/", function(req, res) {
//     res.send("The pig says Oink");
// });
app.get("/speak/:animalName", function(req, res) {
    var sounds = {
        cat: "Meow",
        dog: "Woof",
        snake: "SSSSSS",
        chicken: "Bock",
        fox: "...What does a fox say?"
    }
    var animal = req.params.animalName.toLowerCase();
    var sound = sounds[animal];
    //   if(animal === "CAT") {
    //       sound = "MEOW";
    //   } else if(animal === "DOG") {
    //         sound = "WOOF";  
    //   } else if(animal === "SNAKE") {
    //         sound = "SSSSSS";  
    //   } else if(animal === "CHICKEN") {
    //         sound = "BOCK";  
    //   } else if(animal === "FOX") {
    //         sound = "... WHAT DOES THE FOX SAY?!";  
    //   } else {
    //         sound = "Stop entering animals that aren't on the list.";
    //   }
    res.send("The " + animal + " says '" + sound + "'");
});

//Visiting "repeat/word/num" should print [word] [num]times
app.get("/repeat/:message/:times/", function(req, res) {
    var message = req.params.message;
    var times = Number(req.params.times);
    var result = "";
    
    for(var i = 0; i < times; i++) {
        result += message + " ";
    }
    res.send(result);
});
//Any unrecognized input should pring "Sorry, page not found... What are you doing with your life?"
app.get("*", function(req, res) {
    res.send("Sorry, page not found... What are you doing with your life?");
});

app.listen(process.env.PORT, process.env.IP, function() {
    console.log("Server has started");
})