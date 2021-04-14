const CookingPost = require('../../../models/CookingPost');

module.exports = (req, res) => {
    CookingPost.findById(req.body._id, (err, detailCookingPost) => {
        res.json(detailCookingPost);
    })
}