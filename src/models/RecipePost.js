const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const RecipePostSchema = new Schema({
    postId: String,
    title: String,
    body: String,
    ingredients: String,
    guide: String,
    username: String,
    image: String, 
    datePosted: {
        type: Date,
        default: new Date()
    }
});


const RecipePost = mongoose.model('RecipePost', RecipePostSchema);
module.exports = RecipePost;