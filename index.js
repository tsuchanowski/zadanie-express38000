const express = require('express');
const app = express();
const hbs = require('express-handlebars');
app.use(express.static('public'));

app.engine('hbs', hbs.engine({ defaultLayout: 'main', extname: '.hbs' }));
app.set('view engine', 'hbs');

const user = require('./app/controllers/user.controller');

app.get('/uzytkownik', function (req, res) {

    user.list(function (err, users) {
        if (err) {
          res.send(err)  
        } 
        console.log(users);
        res.render('tabela', { users });
    });
});

app.listen(8080, function () {
    console.log('Serwer Node.js działa');
});