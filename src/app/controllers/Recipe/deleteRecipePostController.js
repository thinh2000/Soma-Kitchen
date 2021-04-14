const RecipePost = require('../../../models/RecipePost');

module.exports = (req, res) => {
    RecipePost.deleteOne({ _id: req.params._id }, (err, docs) => {
        if(err !== null){
            console.log(`Error in delete 1 recipe: ${err}`);
        } else {
            res.json(docs);
        }
    })
}