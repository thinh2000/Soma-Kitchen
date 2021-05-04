const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: false
    },
    recipePosts: [{
        type: Schema.Types.ObjectId,
        ref: 'RecipePost'
    }],
    cookingPosts: [{
        type: Schema.Types.ObjectId,
        ref: 'CookingPost'
    }]
});

UserSchema.pre('save', (next) => {
    const user = this;
    bcrypt.hash(user.password, 10, (err, encrypted) => {
        console.log(err);
        user.password = encrypted;
        next();
    })
});

const User = mongoose.model('User', UserSchema);
module.exports = User;
