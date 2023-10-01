const PostModel = require('../models/PostModel');

exports.getPosts = (req, res) => {
    // res.send("Hello World from Node JS!");
    res.json({
        posts: [
            {
                title: "Node JS First Post",
                author: "R Cube Dev",
                posted_on: "2023-09-30 10:28:15"
            },
            {
                title: "Node JS Second Post",
                author: "Kanhu",
                posted_on: "2023-09-26 02:04:45"
            }
        ]
    });
}

exports.createPost = (req, res) => {
    // const post = new PostModel(req.body);
    // console.log("Creating Post: ", req.body);

    /*
    * This approach has been deprecated in recent versions of mongoose;
    *
    post.save((err, result) => {
        if(err) {
            return res.status(400).json({
                error: err
            });
        }

        res.status(200).json({
            post: result
        });
    });
    */

    try {
        const post = new PostModel(req.body);
        post.save();
    } catch (e) {
        console.log(e.getMessage());
    }
}; 