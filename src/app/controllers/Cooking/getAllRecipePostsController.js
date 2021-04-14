const CookingPost = require('../../../models/CookingPost');

module.exports = (req, res) => {
    CookingPost.find({}, (err, docs) => {
        res.json(docs);
    })
}