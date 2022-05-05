const express = require('express');
const path = require('path');
const router = express.Router();
const fs = require('fs');

const dbPath = path.join(__dirname, '..', 'db', 'db.json');

function getNotes(){
    return JSON.parse(fs.readFileSync(dbPath, 'utf-8'));

}


router.get('/api/notes', (req, res) => {

    res.json(getNotes())

});

router.post('/api/notes', (req, res) => {

    //create a new note
    console.log(req.body); 
    //read the request body for the note title and text
    const title = req.body.title;
    const text = req.body.text;
    //generate an ID to the new note

    //save the new note to the end of the existing note array
})



module.exports = router;