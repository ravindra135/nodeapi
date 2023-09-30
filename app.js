const express = require('express');
const app = express();
const morgan = require('morgan');

// app.get("/", function(req, res) {
//     res.send("Hello World from Node JS");
// });

// Routes Seperated;
const { getPosts } = require('./routes/post');

// Demo: Creating custom middleware
// const customMiddleware = (req, res, next) => {
//     console.log("middleware applied");
//     next();
// };

// Middleware using Morgan;
app.use(morgan("dev"));

// Demo
// app.use(customMiddleware);

// app.get('/', getPosts);
app.use('/', getPosts);
//-> Here `get` has been changed to `use` as now we are using express router;

//-> This way you can protect your individual route with middleware
// app.get('/', customMiddleware, getPosts);



// app.listen(8080);
const port = 8080;
app.listen(port, () => {
    console.log(`Node App listening on ${port}`);
});