const express = require('express');
const mongoose = require('mongoose');
const app = express();
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');
const expressSession = require('express-session');
const port = 9000;

/* ---------------------------------------------------- 
            START: Connect to database
---------------------------------------------------- */

mongoose.connect('mongodb://localhost/soma_kitchen', { useNewUrlParser: true, useUnifiedTopology: true });

/* ---------------------------------------------------- 
            END: Connect to database
---------------------------------------------------- */


/* ---------------------------------------------------- 
                START: Middleware
---------------------------------------------------- */

app.use(bodyParser.json({ type: 'application/json' }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.raw());
app.use(fileUpload());

/* ---------------------------------------------------- 
                END: Middleware
---------------------------------------------------- */



/* ---------------------------------------------------- 
        START: Declare folder of controller
---------------------------------------------------- */

// Recipe
const getAllRecipePostsController = require('./app/controllers/Recipe/getAllRecipePostsController');
const getRecipePostController = require('./app/controllers/Recipe/getRecipePostController');
const postRecipePostController = require('./app/controllers/Recipe/postRecipePostController');

// Cooking Skills
const getAllCookingPostsController = require('./app/controllers/Cooking/getAllCookingPostsController');
const getCookingPostController = require('./app/controllers/Cooking/getCookingPostController');
const postCookingPostController = require('./app/controllers/Cooking/postCookingPostController');

/* ---------------------------------------------------- 
        END: Declare folder of controller
---------------------------------------------------- */


/* ---------------------------------------------------- 
                START: Request handler
---------------------------------------------------- */

// Recipes Post
app.get('/recipes', getAllRecipePostsController);
app.get('/recipes/:_id', getRecipePostController);
app.post('/recipes', postRecipePostController);


// Cooking Post
app.get('/cookings', getAllCookingPostsController);
app.get('/cookings/:_id', getCookingPostController);
app.post('/cookings', postCookingPostController);

/* ---------------------------------------------------- 
                END: Request handler
---------------------------------------------------- */


/* ---------------------------------------------------- 
                START: Port listener
---------------------------------------------------- */

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));

/* ---------------------------------------------------- 
                END: Port listener
---------------------------------------------------- */