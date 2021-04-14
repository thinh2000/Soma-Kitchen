const express = require('express');
const mongoose = require('mongoose');
const app = express();
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');
const expressSession = require('express-session');
const port = 9000;

/* ---------------------------------------------------- 
                Connect to database
---------------------------------------------------- */
mongoose.connect('mongodb://localhost/soma_kitchen', { useNewUrlParser: true, useUnifiedTopology: true });


/* ---------------------------------------------------- 
                    Middleware
---------------------------------------------------- */
app.use(bodyParser.json({ type: 'application/json' }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.raw());
app.use(fileUpload());




/* ---------------------------------------------------- 
            Declare folder of controller
---------------------------------------------------- */


// Recipe
const getAllRecipePostsController = require('./app/controllers/Recipe/getAllRecipePostsController');
const getRecipePostController = require('./app/controllers/Recipe/getRecipePostController')
const postRecipePostController = require('./app/controllers/Recipe/postRecipePostController');

/* ---------------------------------------------------- 
                    Request handler
---------------------------------------------------- */

// Recipes Post
app.get('/recipes', getAllRecipePostsController);
app.get('/recipes/:_id', getRecipePostController);
app.post('/recipes', postRecipePostController);

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))