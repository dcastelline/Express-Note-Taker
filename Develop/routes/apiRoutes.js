// require fs
const fs = require('fs');
const db = require("../db/db.json");

// require uniqid and turns on debug messages
module.uniqid_debug = true;
const uniqid = require("uniqid");

// module export
module.exports = function(app) {
  // gets and reads db.json
  app.get('/api/notes', function(req, res) {
    fs.readFile('./db/db.json', (err, data) => {
      if (err) {
        throw err;
      } else {
      res.json(JSON.parse(data));
      }
    })
  });

  // post a new note
  app.post("/api/notes", (req, res) => {
    fs.readFile("db/db.json", "utf8", (err, data) => {
      if (err) {
        throw err;
      } else {
        fs.writeFile("db/db.json", JSON.stringify(JSON.parse(data)), (err) => {
          if (err) throw (err);
          res.json(JSON.parse(data));
        });
      }
    })
  })

};