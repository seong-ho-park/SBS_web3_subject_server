var express = require('express');
var router = express.Router();
var fs = require('fs');

/* GET home page. */
router.get('/', function (req, res) {
  console.log('/', req.session);
  fs.readFile('views/index.html', function (err, html) {
    res.writeHead(200, {'Content-Type':'text/html'});
    res.end(html);
  });
});
module.exports = router;

router.get('/m', function (req, res) {
  console.log('/', req.session);
  fs.readFile('views/mindex.html', function (err, html) {
    res.writeHead(200, {'Content-Type':'text/html'});
    res.end(html);
  });
});
module.exports = router;

router.get('/JG', function (req, res) {
  console.log('/JG', req.session);
  fs.readFile('views/subpage/self5.html', function (err, html) {
    res.writeHead(200, {'Content-Type':'text/html'});
    res.end(html);
  });
});
module.exports = router;

router.get('/SW', function (req, res) {
  console.log('/SW', req.session);
  fs.readFile('views/subpage/Seonwoong.html', function (err, html) {
    res.writeHead(200, {'Content-Type':'text/html'});
    res.end(html);
  });
});
module.exports = router;

router.get('/login', function (req, res) {
  console.log('/login', req.session);
  fs.readFile('views/login.html', function (err, html) {
    res.writeHead(200, {'Content-Type':'text/html'});
    res.end(html);
  });
});
module.exports = router;

router.get('/intro', function (req, res) {
  console.log('/intro', req.session);
  fs.readFile('views/subpage/introduction.html', function (err, html) {
    res.writeHead(200, {'Content-Type':'text/html'});
    res.end(html);
  });
});
module.exports = router;

router.get('/zocbo', function (req, res) {
  console.log('/zocbo', req.session);
  fs.readFile('views/subpage/zocbo.html', function (err, html) {
    res.writeHead(200, {'Content-Type':'text/html'});
    res.end(html);
  });
});
module.exports = router;

router.get('/notice', function (req, res) {
  console.log('/notice', req.session);
  fs.readFile('views/subpage/notice.html', function (err, html) {
    res.writeHead(200, {'Content-Type':'text/html'});
    res.end(html);
  });
});
module.exports = router;

router.get('/freeBoard', function (req, res) {
  console.log('/freeBoard', req.session);
  fs.readFile('views/subpage/freeBoard.html', function (err, html) {
    res.writeHead(200, {'Content-Type':'text/html'});
    res.end(html);
  });
});
module.exports = router;