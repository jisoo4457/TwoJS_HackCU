// Load the modules
var express = require('express'); //Express - a web application framework that provides useful utility functions like 'http'
// var session = require('express-session');
var app = express();
var bodyParser = require('body-parser'); // Body-parser -- a library that provides functions for parsing incoming requests
app.use(bodyParser.json());              // Support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // Support encoded bodies
const axios = require('axios');
const qs = require('query-string');

// Set the view engine to ejs
app.set('view engine', 'ejs');
// app.use(express.static(__dirname + '/'));// Set the relative path; makes accessing the resource directory easier
app.use(express.static("public"));



// Home page - DON'T CHANGE
app.get('/', function(req, res) {
  res.render('pages/home.ejs', {
    my_title: "NYTimes search",
    items: '',
    error: false,
    message: ''
  });
});


app.get('/mini_games', function(req, res) {
  res.render('pages/mini_games.ejs', {
    my_title: "NYTimes search",
    items: '',
    error: false,
    message: ''
  });
});

app.get('/your_games', function(req, res) {
  res.render('pages/your_games.ejs', {
    my_title: "NYTimes search",
    items: '',
    error: false,
    message: ''
  });
});

app.get('/explore', function(req, res) {
  res.render('pages/explore.ejs', {
    my_title: "profile page",
    items: '',
    error: false,
    message: ''
  });
  });

app.get('/my_profile', function(req, res) {
  res.render('pages/my_profile.ejs', {
    my_title: "profile page",
    items: '',
    error: false,
    message: ''
  });
  });


app.get('/featured_games', function(req, res) {
  res.render('pages/featured_games.ejs', {
    my_title: "profile page",
    items: '',
    error: false,
    message: ''
  });
  });


  app.get('/login', function(req, res){
    res.render('login.ejs',{ 
        my_title: "Login page",
        error: false,
    })
    sess = req.session;
    sess.username;
   
});

app.post('/signup', function(req, res) { // sign up and displaying it on the profile have a different function, use post for account to display

  res.render('pages/my_profile.ejs',{ 
    my_title: "profile",
    error: false,
    });
})

app.post('/login', function(req, res) { // sign up and displaying it on the profile have a different function, use post for account to display

  res.render('pages/my_profile.ejs',{ 
    my_title: "profile",
    error: false,
    });
})
app.get('/account', function(req, res) { // sign up and displaying it on the profile have a different function, use post for account to display

    // console.log(username);
    sess = req.session;
    if (sess.username) {
        var account_user = sess.username;
    }
    else
    {
        console.log('error'); 
    }
    
    var select_all = "SELECT * FROM users WHERE username = '" + account_user + "';"

    db.task('get-everything', task => {
        return task.batch([
            task.any(select_all) // info[0]
        ]);
    })
    .then(info => {
        res.render('account.ejs',{
                my_title: "Profile Page",
                First_name: info[0][0].first_name,
                Last_name: info[0][0].last_name,
                Username: info[0][0].username,
                Email: info[0][0].email,
                Password: info[0][0].password,
                error: false,
                hidden: ""
            })
    })
    .catch(err => {
            console.log('error', err);
            res.render('account.ejs', {
                my_title: "Profile Page",
                First_name: '',
                Last_name: '',
                Username: '',
                Email: '',
                Password: '',
                error: true,
                hidden: "hidden"

            })
    });
})

app.listen(3000);
console.log('3000 is the magic port');
