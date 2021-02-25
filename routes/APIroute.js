const fs = require("fs");
const noteData = require("../db/db.json");

dataGet = (app) => {


    function saveToDb(notes){
    
        notes = JSON.stringify(notes);
        fs.writeFileSync("./db/db.json", notes, (err) => {
            if (err) {
                return console.log(err);
            }
        });
    }

    app.get("/api/notes", (req, res) => {
        res.json(noteData);
        
    });

    app.post("/api/notes", (req, res) => {

        if (noteData.length = 0){
            req.body.id = "0";
        } else{
            req.body.id = JSON.stringify(JSON.parse(noteData[noteData.length - 1].id) + 1);
        }
        
        noteData.push(req.body);

        saveToDb(noteData);
        console.log(noteData);
        
        res.json(req.body);
    });

};

module.exports = dataGet;