const fs = require('fs');
var data = JSON.parse(fs.readFileSync("./db/db.json", "utf-8"));

module.exports = (app) => {
  // GET
  app.get('/api/notes', (req, res) => res.json(data));
  app.get('/api/notes/:id', (req, res) => {
    res.json(data);
  })

  // POST
  app.post('/api/notes', (req, res) => {
    let newNote = req.body;
    let noteId = (data.length).toString();
    console.log(noteId);
    data.push(newNote);
  
    fs.writeFileSync('./db/db.json', JSON.stringify(data), (err) => {
      if (err) throw (err);
    });

    res.json(data);
  });

};
