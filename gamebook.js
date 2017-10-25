var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var db = require('./routes/db_operation');

var app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', express.static(path.join(__dirname, 'views')));

app.post('/upload', function(req, res) {
        db.upload(req, res);
        var game_description_json = [];
        game_description_json.push(
                        {
                                game_name: req.body.game_name,
                                genre: req.body.genre,
                                rating: req.body.rating,
                                review: req.body.review
                        }
                        );
        res.render("uploaded", {game: game_description_json});
        console.log(game_description_json);
});

app.listen(8080);
