var express = require('express');
var router = express.Router();
var fs = require('fs');

/* GET home page. */
router.get('/', function (req, res) {
  console.log('/', req.session);
  res.redirect('https://psh4607.com/');
});
router.get('/true', function (req, res) {
  console.log('/', req.session);
  fs.readFile('views/portfolio/true.html', function (err, html) {
    res.writeHead(200, {'Content-Type':'text/html'});
    res.end(html);
  });
});


router.get('/login', function (req, res) {
  console.log('/login', req.session);
  fs.readFile('views/login.html', function (err, html) {
    res.writeHead(200, {'Content-Type':'text/html'});
    res.end(html);
  });
});

router.get('/intro', function (req, res) {
  console.log('/intro', req.session);
  fs.readFile('views/subpage/introduction.html', function (err, html) {
    res.writeHead(200, {'Content-Type':'text/html'});
    res.end(html);
  });
});

router.get('/notice', function (req, res) {
  console.log('/notice', req.session);
  fs.readFile('views/subpage/notice.html', function (err, html) {
    res.writeHead(200, {'Content-Type':'text/html'});
    res.end(html);
  });
});

router.get('/freeBoard', function (req, res) {
  console.log('/freeBoard', req.session);
  fs.readFile('views/subpage/freeBoard.html', function (err, html) {
    res.writeHead(200, {'Content-Type':'text/html'});
    res.end(html);
  });
});

module.exports = router;