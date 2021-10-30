var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mon site de test' });
});


router.get ('/api/test', (req,res,next) => {
  res.json ({
    list :["Test 1", "Test 2 ", "Test 3"],
  })
})

module.exports = router;
