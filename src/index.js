const express = require('express');
const app = express();
const path = require('path');

//settings
app.set('port', 4000);
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));



//routes
app.use(require('./routes/index_routes'));

app.get('/', (req, res) => {
  // testing paths...res.sendFile(path.join(__dirname, 'views/index.html'));
  res.render('index.html', {title: 'My Little Website'});
});


//staticFiles
app.use(express.static(path.join(__dirname, 'public')));

app.listen(app.get('port'), () => {
  console.log('listening at http://localhost:4000',+ app.get('port'));
  }
);
