import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar';

const Registration = () => {
    return (
        <div class="form">
            <NavBar />
            <section class="form__section">
                <h1 class="form__title">Créer un compte</h1>
                <form class="form__form">
                    <div class="input-wrapper">
                        <input type="email" name="email" required />
                        <span class="underline"></span>
                        <p class="formErrorMsg" >
                            Adresse mail invalide !
                        </p>
                        <label>Adresse Mail</label>
                    </div>
                    <div class="input-wrapper">
                        <input type="password" name="password" required />
                        <span class="underline"></span>
                        <p class="formErrorMsg" >
                            Mot de passe trop faible !
                        </p>
                        <label>Mot de passe</label>
                    </div>
                    <div class="input-wrapper">
                        <input type="password" name="confirmPassword" required />
                        <span class="underline"></span>
                        <p class="formErrorMsg" >
                            Mot de passe ne correspond pas !
                        </p>
                        <label>Confirmer le mot de passe</label>
                    </div>
                    <div class="btn-wrapper">
                        <button class="submitBtn" type="submit">Confirmer</button>
                    </div>
                </form>
                <p class="form__phrase">Vous avez deja un compte?<Link class="form__link" to="/login">identifiez vous!
                </Link>
                </p>
            </section>
        </div>
    );
};

export default Registration;