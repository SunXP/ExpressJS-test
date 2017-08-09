var express = require("express");

var app = express();

app.get("/", function(req, res){
    res.send("Hi there, welcome to my assignment!");
});

app.get("/speak/:animal", function(req, res){
    var animal = req.params.animal.toLowerCase();
    var sounds = {
        pig: "Oink",
        cow: "Moo",
        dog: "Woof",
        cat: "meow",
        goldfish: ".."
    };
    var sound = sounds[animal];

    res.send("The "+animal+" says '" + sound+"'");
});

app.get("/repeat/:greet/:number", function(req, res){
    var greet = req.params.greet;
    var number = Number(req.params.number);
    var result = "";

    for (var i=0; i<number; i++){
        result+=greet + " ";

    }
    res.send(result);
    
});

app.get("*", function(req, res){
    res.send("Sorry page not found..");
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server has started");
});
