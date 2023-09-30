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