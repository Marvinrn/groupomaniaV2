//installation du package bcrypt pour hasher les mdp
const bcrypt = require('bcrypt');

//installation du package jsonwebtoken pour creer des tokens et de les vérifier
const jwt = require('jsonwebtoken');

const User = require('../models/users');

require('dotenv').config();

exports.signup = (req, res,) => {
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
                                // isAdmin: user.isAdmin
                            },
                            userId: user.id,
                            token: jwt.sign(
                                { userId: user.id },
                                process.env.MY_TOKEN,
                                { expiresIn: '24h' }
                            )
                        })
                    }

                })
                .catch(error => res.status(401).json({ error }))
        })
        .catch(error => res.status(500).json({ error }));
};

exports.login = (req, res, next) => {

};