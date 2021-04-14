const RecipePost = require('../../../models/RecipePost.js');

module.exports = (req, res) => {
    RecipePost.find({}, (err, posts) => {
        res.json(posts);
    });
}