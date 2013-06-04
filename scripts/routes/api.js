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

var pingpong = new Array();
var basketball = new Array();
var foosball = new Array();

exports.registerToGame = function (req, res) {
    var email = req.params.email;
    var game = req.params.game;

    switch(game)
    {
        case 'pingpong':
            pingpong.push(email);
            if (pingpong.length == 1) {
                res.json(email);
            }
            else if (pingpong.length == 2) {
                var matcher = pingpong[0];

                // TODO: send email

                // clear array
                pingpong = [];

                // return first email
                res.json(matcher);
            }
            break;
        case 'basketball':
            break;
        case 'foosball':
            break;
        default:
            //code to be executed if n is different from case 1 and 2
    }


};

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