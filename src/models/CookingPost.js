const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CookingPostSchema = new Schema({
    video: String,
    notice: String,
    datePosted: {
        type: Date,
        default: new Date()
    },
});

const CookingPost = mongoose.model('CookingPost', CookingPostSchema);
module.exports = CookingPost;