/* NPMs */
const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const requestIP = require('request-ip');
const session = require('express-session');
const https = require('https');
const fs = require('fs');

var randomstring = require("randomstring");

const port = 3000;

// Paths
app.use(express.static(path.join(__dirname, 'public')));

/* Use */
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'locked')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(session({
  secret: "xapplex",
  resave: false,
  saveUninitialized: true
}));

/* Post */
// Something Goes Here

/* Get */
// Redirects Users From "/" to "/home"
app.get('/', function(req, res) {
    res.redirect("/home");
});

app.get('/home', function(req, res) {
    res.sendFile(path.join(__dirname, 'public', '_home/index.html'));
});

//Invalid Path Redirects To /home
app.get('*', function(req, res) {
    res.redirect("/home");
})

/* Port */
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
