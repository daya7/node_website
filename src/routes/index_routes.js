const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
  // testing paths...res.sendFile(path.join(__dirname, 'views/index.ejs'));
  res.render('index.html', {title: 'My Little Website'});
});


router.get('/contact', (req, res) => {
 
  res.render('contact.html', {title: 'Website Contacts'});
});

router.get('/pictures', (req, res) => {
 
  res.render('pictures_one.html', {title: 'Website Pictures'});
});
module.exports = router;