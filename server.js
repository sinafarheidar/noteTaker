// Dependencies
// =============================================================
var express = require("express");
var path = require("path");
var fs = require("fs");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

let notes= [{
  noteTitle: "bruh",
  noteText: "huh"
}]

// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "./public/index.html"));
});

app.get("/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "./public/notes.html"));
  });


// Displays a single character, or returns false
app.get("/api/notes/", function(req, res) {

    // fs.readFile("db.json", "utf8", function(error, data) {

    //     if (error) {
    //       return console.log(error);
    //     }
      
    //     console.log(data);
    //     return res.json(data)
      
    //   });
    return res.json(notes)
});

app.post("/api/notes/", function(req, res) {

    let newNote = res.body

    // fs.appendFile("db.json", res.json(newNote), function(error) {

    //     if (error) {
    //       return console.log(error);
    //     }
      
    //     console.log("Data successfully posted");
      
    //   });
    notes.push(newNote);
    res.json(true);
    console.log(notes)
});


// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
