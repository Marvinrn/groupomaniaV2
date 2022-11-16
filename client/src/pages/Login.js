import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar';

const Login = () => {
    return (
        <div className="form">
            <NavBar />
            <section className="form__section">
                <h1 className="form__title">Se connecter</h1>
                <form className="form__form">
                    <div className="input-wrapper">
                        <input type="email" name="email" required />
                        <span className="underline"></span>
                        <label>Adresse Mail</label>
                    </div>
                    <div className="input-wrapper">
                        <input type="password" name="password" required />
                        <span className="underline"></span>
                        <label>Mot de passe</label>
                    </div>
                    <div className="btn-wrapper">
                        <button className="submitBtn" type="submit">Se connecter</button>
                    </div>
                </form>
                <p className="form__phrase">Vous êtes pas encore inscrit?
                    <Link className="form__link" to="/">Créer un compte </Link>
                </p>
            </section>
        </div>
    );
};

export default Login;