import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar';

const Login = () => {
    return (
        <div class="form">
            <NavBar />
            <section class="form__section">
                <h1 class="form__title">Se connecter</h1>
                <form class="form__form">
                    <div class="input-wrapper">
                        <input type="email" name="email" required />
                        <span class="underline"></span>
                        <label>Adresse Mail</label>
                    </div>
                    <div class="input-wrapper">
                        <input type="password" name="password" required />
                        <span class="underline"></span>
                        <label>Mot de passe</label>
                    </div>
                    <div class="btn-wrapper">
                        <button class="submitBtn" type="submit">Se connecter</button>
                    </div>
                </form>
                <p class="form__phrase">Vous êtes pas encore inscrit?
                    <Link class="form__link" to="/">Créer un compte </Link>
                </p>
            </section>
        </div>
    );
};

export default Login;