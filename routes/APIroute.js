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
    app.delete("/api/notes", (req, res) => {

        const id = req.params.id

        const noteId = req.params.id.remove({ _id: id });

        Promise.all([]).then(result => {
            
        })
        // router.delete("/:familyId", (req, res, next) => {
        //     const id = req.params.familyId;
        
        //     const family = Family.remove({ _id: id });
        //     const root = Root.remove({ familyId: id });
        //     const child = Child.remove({ familyId: id });
        
        //     Promise.all([family, root, child]).then(result => {
        //         console.log(result);
        //         res.status(200).json({
        //             message: 'deleted',
        //         });
        //     }).catch(err => {
        //         console.error(err);
        //         res.status(500).json({
        //             error: err
        //         });
        //     });
        // }); 
        saveToDB(notesData);
    });

};

module.exports = dataGet;