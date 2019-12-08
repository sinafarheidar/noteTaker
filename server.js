// Dependencies
// =============================================================
var express = require("express");
var path = require("path");
var fs = require("fs");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


let notes = []

// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "./public/index.html"));
});

app.get("/viewnotes", function(req, res) {
  res.sendFile(path.join(__dirname, "./public/viewnotes.html"));
});

app.get("/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "./public/notes.html"));
  });


// Displays a single character, or returns false
app.get("/api/notes", function(req, res) {

//  const notes = getNotes();
  res.json(notes);

  // res.send("notes")
});

app.post("/api/notes/", function(req, res) {

    let newNote = req.body;
    notes.push(newNote);

    console.log("Successfully Posted Note!")


    // fs.writeFile("db.json", JSON.stringify(notes), function(error) {

    //     if (error) {
    //       return console.log(error);
    //     }
      
        res.send("Data successfully posted");
      
    //   });
});

app.post("/api/clear", function(req, res) {
  // Empty out the arrays of data
  notes.length = 0;

  res.json({ ok: true });
});

// function getNotes() {
  // fs.readFile("db.json", "utf8", function(error, data) {

  //   let parsedNotes;
  //     // If notes isn't an array or can't be turned into one, send back a new empty array
  //     try {
  //       parsedNotes = [].concat(JSON.parse(notes));
  //     } catch (err) {
  //       parsedNotes = [];
  //     }
  //     return parsedNotes;

  //   if (error) {
  //     return console.log(error);
  //   }
  
  //   // if (data.length > 0)
  //   //   return data
  //   // else
  //   //   return []

  // });
// }
// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
