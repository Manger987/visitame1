var express = require('express');
var bodyParser = require('body-parser');
var sessions = require('express-session');
const passport = require('passport');

var session;
var router = express.Router();

//auth login
router.get('/login',(req,res) => {
  res.render('login');
});
//auth logout
router.get('/logout',(req,res) => {
  //handle with passport
  res.send('loggin out');
});

//auth with google
router.get('/google',passport.authenticate('google',{
  scope:['profile']
}));

//callback route for google to redirect to
router.get('/google/redirect', passport.authenticate('google'),(req,res) => {
  res.send('you reached the callback URI');
});

/*
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended:true}));
router.use(sessions({
  secret: '!"·$%&"98',
  resave: false,
  saveUninitialized: true
}));

router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/dataUsers',function(req, res, next){
  res.send('Almacena los datos del usuario');
});

router.get('/login',function(req, res, next){
  //res.sendFile('login.ejs',{root: __dirname});
  res.render('login', { title: 'Hey', message: 'Hello there!'});
});

router.post('/login',function(req, res, next){
  //res.end(JSON.stringify(req.body));
  session = req.session;
  if (session.id) {
    res.redirect('./redirects');
  }
  if (req.body.username == 'admin' && req.body.password == 'admin') {
    session.uniqueID = req.body.username;
  }
  res.redirect('/redirects');
});

router.get('/logout',function(req,res){
  req.session.destroy(function(error){
    console.log(error);
    res.redirect('./login');
  });
});

router.get('/redirects', function(req,res) {
  session = req.session;
  if(session.uniqueID){
    console.log(session.uniqueID);
    res.redirect('/admin');
  }else {
    res.end('who are you? <a href="/logout">KILL SESSION</a>');
  }
});*/

module.exports = router;
