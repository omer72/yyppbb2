/*
 * Serve JSON to our AngularJS client
 */

// For a real app, you'd make database requests here.
// For this example, "data" acts like an in-memory "database"
var data = {
    "posts": [
        {
            "title": "Lorem ipsum",
            "text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
        {
            "title": "Sed egestas",
            "text": "Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus."
        }
    ]
};

// GET

exports.posts = function (req, res) {
    var posts = [], i, post, text;
    for (i = 0; i < Math.min(data.posts.length, 5); i++) {
        post = data.posts[i];
        posts.push({
            id: i,
            title: post.title,
            text: post.text.substr(0, 50) + '...'
        });
    }
    res.json({
        posts: posts
    });
};

exports.post = function (req, res) {
    var id = req.params.id;
    if (id >= 0 && id < data.posts.length) {
        res.json({
            post: data.posts[id]
        });
    } else {
        res.json(false);
    }
};
/*
 http://172.23.34.52/requestgame.ashx?gametype=5&name=noy&email=noy.itzikowitz@alcatel-lucent.com

 */
var pingpong = new Array();
var basketball = new Array();
var foosball = new Array();
var xbox = new Array();
var cupofcoffee = new Array();
var pingpongname = new Array();
var basketballname = new Array();
var foosballname = new Array();
var xboxname = new Array();
var cupofcoffeename = new Array();

exports.registerToGame = function (req, res) {
    var email = req.params.email;
    var gametype = req.params.gametype;
    var name = req.params.name;

    switch(gametype)
    {
        case 'pingpong':
            pingpong.push(email);
            pingpongname.push(name);

            if (pingpong.length == 1) {
                res.json('pending');
            }
            else if (pingpong.length == 2) {
                var matcher = pingpongname[0];

                sendmail(pingpong[0], name);

                // clear array
                pingpong = [];
                pingpongname = [];

                // return first email
                res.json(matcher);
            }
            break;
        case 'basketball':
            basketball.push(email);
            basketballname.push(name);

            if (basketball.length == 1) {
                res.json('pending');
            }
            else if (basketball.length == 2) {
                var matcher = basketballname[0];

                sendmail(basketball[0], name);

                // clear array
                basketball = [];
                basketballname = [];

                // return first email
                res.json(matcher);
            }
            break;
        case 'foosball':
            foosball.push(email);
            foosballname.push(name);

            if (foosball.length == 1) {
                res.json('pending');
            }
            else if (foosball.length == 2) {
                var matcher = foosballname[0];

                sendmail(foosball[0], name);

                // clear array
                foosball = [];
                foosballname = [];

                // return first email
                res.json(matcher);
            }
            break;
        case 'cupofcoffee':
            cupofcoffee.push(email);
            cupofcoffeename.push(name);

            if (cupofcoffee.length == 1) {
                res.json('pending');
            }
            else if (cupofcoffee.length == 2) {
                var matcher = cupofcoffeename[0];

                sendmail(cupofcoffee[0], name);

                // clear array
                cupofcoffee = [];
                cupofcoffeename = [];

                // return first email
                res.json(matcher);
            }
            break;
        case 'xbox':
            xbox.push(email);
            xboxname.push(email);

            if (xbox.length == 1) {
                res.json('pending');
            }
            else if (xbox.length == 2) {
                var matcher = xboxname[0];

                sendmail(xbox[0], name);

                // clear array
                xbox = [];
                xboxname = [];

                // return first email
                res.json(matcher);
            }
            break;
        default:
            //code to be executed if n is different from case 1 and 2
    }


};

function sendmail(to, name) {
    var email   = require("../emailjs/email.js");
    var server  = email.server.connect({
        user:    "ppyybbcc",
        password:"alcatelucent",
        host:    "smtp.gmail.com",
        ssl:     true

    });

// send the message and get a callback with an error or details of the message that was sent
    server.send({
        text:    "Greetings from ppyybbcc Services, We are happy to inform you that we found a partner for your game.",
        from:    "ppyybbcc <ppyybbcc@gmail.com>",
        to:      "matcher <" + to + ">",
        subject: "<DO NOT REPLY> Go play"
    }, function(err, message) { console.log(err || message); });
}
// POST

exports.editPost = function (req, res) {
    var id = req.body.id,
        title = req.body.title,
        text = req.body.text;

    if (id >= 0 && id < data.posts.length) {
        data.posts[id].title = title;
        data.posts[id].text = text;
        res.json(true);
    } else {
        res.json(false);
    }
};

exports.deletePost = function (req, res) {
    var id = req.body.id;

    if (id >= 0 && id < data.posts.length) {
        data.posts.splice(id, 1);
        res.json(true);
    } else {
        res.json(false);
    }
};

exports.addPost = function (req, res) {
    data.posts.push(req.body);
    res.json(req.body);
};