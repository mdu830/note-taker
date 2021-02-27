const fs = require("fs");
const noteData = require("../db/db.json");
const { v4: uuidv4 } = require("uuid");

dataGet = (app) => {

    
    function saveToDb(notes){
    
        notes = JSON.stringify(notes);
        fs.writeFileSync("./db/db.json", notes, (err) => {
            if (err) {
                return console.log(err);
            }
        });
    }
    // get 
    app.get("/api/notes", (req, res) => {
        res.json(noteData);
        
    });
    // post
    app.post("/api/notes", (req, res) => {

        req.body.id = uuidv4();

        noteData.push(req.body);

        saveToDb(noteData);

        console.log(noteData);

        res.json(req.body);
    });
    // delete (currently not working)
    app.delete("/api/notes/:id", (req, res) => {

        

        for (i=0; i < noteData.length; i++){
           
            if (noteData[i].id == req.params.id){

                noteData.splice(i,1);
                break;
            }
        }

        saveToDb(noteData);
        res.json({ok: true});
    });

};

module.exports = dataGet;