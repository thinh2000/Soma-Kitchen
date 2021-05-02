const RecipePost = require('../../../models/RecipePost');

module.exports = (req, res) => {
    RecipePost.find({})
    // .populate('postedBy')
    .then((docs) => {
        // res.json(docs);
        res.send(docs);
        return
    }).catch((err) => {
        console.log(`Error in all recipe: ${err}`);
        res.send(err);
        return
    });
}