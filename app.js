const express = require('express');
const app = express();
app.set('view engine', 'ejs');

const bodyParser = require('body-parser');
const https = require('https');
port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));
//app.use(express.static(__dirname + '/inc'))
const date = require(__dirname + "/functions.js");


let notes = ["I am First", "I am Second", "I am third"];
let works = [];

let day = date();

app.get('/', (req, res) => {

    res.render('index', {title: day, link: "/task", allnotes: notes});
})
app.get('/tasks', (req, res) => {

    res.render('index', {title: "Tasks", allnotes: works});
})
app.post('/', (req, res) => {
    var note = req.body.note;
    console.log(req.body);
    if(req.body.submit === "Tasks"){
        works.push(note);
        res.redirect('/tasks');
    }else{
        notes.push(note);
        res.redirect('/');
    }
})


app.post('/', (req, res) => {
    
})


// Listening to Port : Live Server
app.listen(port, function () {
    console.log('listening on port ' + port)
});