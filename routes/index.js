const express = require('express');
const router = express.Router();
const Contact = require ('../model/Contacts')


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mon site de test' });
});


router.get ('/api/test', (req,res,next) => {
  res.json ({
    list :["Test 1", "Test 2 ", "Test 3"],
  })
})

router.post('/contact', (req,res,next) => {

  const {name, message} = req.body;

  const newContact = new Contact ({
    name,
    message,
  })

  newContact.save((err) => {
    if(err) {
      res.send("Une erreur s'est produite");
      return ;
    }
    console.log(newContact);

    res.send ('Message envoyé');
  });
});


 
module.exports = router;
