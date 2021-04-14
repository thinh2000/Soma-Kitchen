const express = require('express');
const mongoose = require('mongoose');
const app = express();
const bodyParser = require('body-parser');
const expressSession = require('express-session');
const port = 9000;

/* ---------------------------------------------------- */
// Connect to database
mongoose.connect('mongodb://localhost/soma_kitchen', { useNewUrlParser: true, useUnifiedTopology: true });


/* ---------------------------------------------------- */
// Middleware
app.use(bodyParser.json({ type: 'application/json' }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.raw());



/* ---------------------------------------------------- */
// Declare folder of controller

// Util
const uploadController = require("./app/controllers/Util/uploadController");

// Recipe
const getAllRecipePostsController = require('./app/controllers/Recipe/getAllRecipePostsController');
const getRecipePostController = require('./app/controllers/Recipe/getRecipePostController')
const postRecipePostController = require('./app/controllers/Recipe/postRecipePostController');

/* ---------------------------------------------------- */
// Request handler

// Recipes Post
app.get('/recipes', getAllRecipePostsController);
app.get('/recipes/:_id', getRecipePostController);
app.post('/recipes', uploadController.multiUpload, postRecipePostController);

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))