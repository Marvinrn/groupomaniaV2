//installation du package bcrypt pour hasher les mdp
const bcrypt = require('bcrypt');

//installation du package jsonwebtoken pour creer des tokens et de les vérifier
const jwt = require('jsonwebtoken');

const validator = require('validator')

const User = require('../models/users');

require('dotenv').config();

exports.signup = (req, res,) => {
    if (!validator.isStrongPassword(req.body.password)) {
        throw Error('password not strong enough')
    } else {
        // on cherche si un utilisateur à deja la même adresse mail, si oui on envoi un erreur
        User.findOne({ email: req.body.email })
            .then(user => {
                if (user) {
                    return res.status(401).json({ message: 'Adresse email déjà utilisée !' })
                }
                bcrypt.hash(req.body.password, 10)
                    .then(hash => {
                        const user = new User({
                            email: req.body.email,
                            password: hash,
                        })
                        user.save()
                            .then(response => {
                                if (response) {
                                    res.status(200).json({
                                        user: {
                                            email: user.email,
                                            userId: user.id,
                                            role: user.role
                                            // isAdmin: user.isAdmin
                                        },
                                        token: jwt.sign(
                                            { userId: user.id, isAdmin: user.isAdmin },
                                            process.env.MY_TOKEN,
                                        )
                                    })
                                }

                            })
                            .catch(error => res.status(401).json({ error }))
                    })
                    .catch(error => res.status(500).json({ error }));
            })
            .catch(error => res.status(500).json({ error }));
    }
};

exports.login = (req, res,) => {
    //on récupère le user dans la base correspondant au mail entré
    User.findOne({ email: req.body.email })
        .then(user => {
            //renvoie une erreur si le user n'est pas bon
            if (!user) {
                return res.status(401).json({ message: 'Utilisateur non trouvé' })
            }
            // si l'utilisateur est trouvé, on va comparer les mdp hashés
            bcrypt.compare(req.body.password, user.password)
                .then(valid => {
                    // si comparaison n'est pas bonne, on renvoi une erreur
                    if (!valid) {
                        return res.status(401).json({ message: 'Mot de passe invalide' })
                    }
                    // si comparaison est bonne, on renvoi son userId et un token d'authentification
                    res.status(200).json({
                        user: {
                            email: user.email,
                            userId: user.id,
                            role: user.role
                            // isAdmin: user.isAdmin
                        },
                        token: jwt.sign(
                            { userId: user.id, isAdmin: user.isAdmin },
                            process.env.MY_TOKEN,
                        )
                    });
                })
                .catch(error => res.status(500).json({ error }));
        })
        .catch(error => res.status(500).json({ error }));
};

exports.updateBio = (req, res) => {
    User.updateOne({ _id: req.params.id }, { bio: req.body.bio })
        .then(() => res.status(200).json({ message: 'Bio modifiée !' }))
        .catch(error => res.status(400).json({ error }))
    console.log(req.body.bio);
}


// exports.updateBio = (req, res) => {
//     User.findOne({ _id: req.params.id })
//         .then((bio) => {
//             if (bio.userId != req.auth.user) {
//                 res.status(401).jscon({ error })
//             } else {
//                 User.updateOne({ _id: req.params.bio })
//                     .then(() => res.status(200).json({ message: 'Bio modifiée !' }))
//                     .catch(error => res.status(400).json({ error }))
//             }
//         })
//         .catch(error => res.status(400).json({ error }))
// }