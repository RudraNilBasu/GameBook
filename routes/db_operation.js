var mysql = require('mysql');
var db_info = require('./db_info').db_info();

var connection = mysql.createConnection({
        host: 'localhost',
        user: db_info.user,
        password: db_info.password,
        database: db_info.database
});

connection.connect(function (err) {
        if (!err)
                console.log("Database connected");
        else
                console.log("Error in connecting database: " + err);
});

exports.upload = function(req, res) {
        var game_info = {
                name: req.body.game_name,
                genre: req.body.genre,
                Rating: req.body.rating,
                review: req.body.review
        }
        console.log(game_info);

        connection.query('INSERT INTO Games SET ?', game_info, function(err, results, fields) {
                if (err)
                        console.log("Error in inserting the elements: " + err);
                else
                        console.log("Record(s) added.");
        });
}
