const RecipePost = require('../../../models/RecipePost.js');

module.exports = (req, res) => {
    RecipePost.find({})
    .then((docs) => {
        res.json(docs);
    }).catch((err) => {
        console.log(`Error in all recipe: ${err}`);
        res.send(err);
    });
}