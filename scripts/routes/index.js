/*
 * GET home page.
 */

exports.index = function(req, res){
    res.render('index',{title:"Yo"});
};

exports.login = function(req, res){
    res.render('login');
};

exports.partials = function (req, res) {
    var name = req.params.name;
    res.render('partials/' + name);
};

exports.registerToGame = function (req, res) {
    var email = req.params.email;
    var game = req.params.game;
    res.render('registerToGame/');
};