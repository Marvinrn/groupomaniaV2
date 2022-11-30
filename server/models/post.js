const mongoose = require('mongoose');

// creation de notre schema pour les sauces avec la fonction schema de mongoose
const postSchema = mongoose.Schema({
    userId: { type: String, required: true },
    content: { type: String, required: true, maxLength: 280 },
    email: { type: String, required: true },
    imageUrl: { type: String },
    likes: { type: Number, default: 0 },
    usersLiked: { type: [String] },
    usersDisliked: { type: [String] },
});

module.exports = mongoose.model('Post', postSchema);