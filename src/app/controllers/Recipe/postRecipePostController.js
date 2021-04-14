const RecipePost = require('../../../models/RecipePost');
const path = require('path');

module.exports = (req, res) => {
    RecipePost.create({
        ...req.body,
    })
    res.status(201).send("ok");
}
