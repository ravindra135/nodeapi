const express = require('express');
const app = express();

// app.get("/", function(req, res) {
//     res.send("Hello World from Node JS");
// });

const { getPosts } = require('./routes/post');

app.get('/', getPosts);

// app.listen(8080);
const port = 8080;
app.listen(port, () => {
    console.log(`Node App listening on ${port}`);
});