const RecipePost = require('../../../models/RecipePost');

module.exports = (req, res) => {
    RecipePost.findById(req.params._id, (err, detailRecipePost) => {
        res.json(detailRecipePost);
    });
}