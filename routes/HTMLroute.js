  
const path = require("path");

pathsGet = (app) =>{
    
    // Route for notes page
    app.get("/notes", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/notes.html"));
    });

    // Route for index page
    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });
}

module.exports = pathsGet;