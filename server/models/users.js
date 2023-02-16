const mongoose = require('mongoose');

//instalation du package mongoose-unique-validator pour réduire les erreurs de mongodb
const uniqueValidator = require('mongoose-unique-validator')

const validateEmail = (email) => {
    const regexEmail = /^\w+(\[\+\.-\]?\w)*@\w+(\[\.-\]?\w+)*\.[a-z]+$/i;
    return regexEmail.test(email)
}



// creation de notre schema pour les users avec la fonction schema de mongoose
const userSchema = mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        validate: [validateEmail, 'Please fill a valid email address'],
        match: [/^\w+(\[\+\.-\]?\w)*@\w+(\[\.-\]?\w+)*\.[a-z]+$/i],
    },
    password: {
        type: String,
        required: true,
        // minlength: 8
    },
    isAdmin: { type: Boolean, default: false, require: true },
    role: { type: Boolean, default: false },
    bio: {
        type: String,
        default: '',
        maxlength: 130
    }
});

// permet de pas avoir plusieurs utilisateur avec la même adresse mail
userSchema.plugin(uniqueValidator);

module.exports = mongoose.model('User', userSchema);