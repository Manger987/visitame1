var express = require('express');
var bodyParser = require('body-parser');
var sessions = require('express-session');

var session;
var router = express.Router();

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended:true}));
router.use(sessions({
  secret: '!"·$%&"98',
  resave: false,
  saveUninitialized: true
}));

/* GET users listing. */
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
  if (req.body.username == 'admin' && req.body.password == 'admin') {
    session.id = req.body.username;
  }
  res.redirect('/redirects');
});
router.get('/redirects', function(req,res) {
  session = req.session;
  console.log(session.id);
  if(session.id){
    res.redirect('/admin');
  }else {
    res.end('who are you?');
  }
});

module.exports = router;
