import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import NavBar from '../components/NavBar';
import axios from 'axios';

const Registration = () => {
    const navigate = useNavigate();
    const initialValues = { email: "", password: "", confirmPassword: "" };
    const [newUser, setNewUser] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [error, setError] = useState(null);
    const [isSubmit, setIsSubmit] = useState(false);
    const [data, setData] = useState({
        email: "",
        password: ""
    });

    //fonction handle on change pour les values des forms
    const handleOnChange = (e) => {
        const { name, value } = e.target
        setNewUser({ ...newUser, [name]: value })
        setData({ ...data, [e.target.name]: e.target.value });
    }

    //fonction handle on submit pour lorsque qu'on submit le formulaire et renvoi les erreurs s'ils y en a
    const handleOnSubmit = (e) => {
        e.preventDefault()
        setFormErrors(handleValidation(newUser))
        setIsSubmit(true);
        console.log(newUser);

        axios.post("http://localhost:3001/api/auth/signup", {
            email: data.email,
            password: data.password
        })
            .then((res) => {
                console.log("Server response: ", res);
                if (res.status === 200) {
                    navigate('/home')
                    localStorage.setItem('user', JSON.stringify(res.data))
                }
            })
            .catch((err) => {
                if (err.response) {
                    setError(err.response.data.message)
                }
            })
    }

    useEffect(() => {
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            console.log('submitted');
        } else {
            console.log('not submitted');
        }
    }, [formErrors, isSubmit, newUser])

    // fonction pour gerer les erreurs des formulaires
    const handleValidation = (values) => {
        const errors = {};
        const regexEmail = /^\w+(\[\+\.-\]?\w)*@\w+(\[\.-\]?\w+)*\.[a-z]+$/i;
        const regexHasUpper = /[A-Z]/;
        const regexHasLower = /[a-z]/;
        const regexHasNumber = /[0-9]/;
        const isLengthy = values.password.length > 9

        if (!regexEmail.test(values.email)) {
            errors.email = " Adresse mail invalide ! "
        }

        if (!regexHasUpper.test(values.password)) {
            errors.password = " Mot de passe doit contenir au moins une majuscule !  "
        }

        if (!regexHasLower.test(values.password)) {
            errors.password = " Mot de passe doit contenir au moins une minuscule !  "
        }

        if (!regexHasNumber.test(values.password)) {
            errors.password = " Mot de passe doit contenir au moins un chiffre !  "
        }

        if (!isLengthy) {
            errors.password = " Mot de passe doit contenir minimum 8 caractères !"
        }

        if (values.password !== values.confirmPassword) {
            errors.confirmPassword = "Les mots de passe ne correspondent pas !"
        }

        return errors;
    }

    return (
        <div className="form">
            <NavBar />
            <section className="form__section">
                <h1 className="form__title">Créer un compte</h1>
                <form className="form__form" onSubmit={handleOnSubmit}>
                    <div className="input-wrapper">
                        <input
                            type="email"
                            name="email"
                            value={newUser.email}
                            onChange={handleOnChange}
                            required />
                        <span className="underline"></span>
                        <p className="formErrorMsg" >
                            {formErrors.email} {error}
                        </p>
                        <label>Adresse Mail</label>
                    </div>
                    <div className="input-wrapper">
                        <input
                            type="password"
                            name="password"
                            value={newUser.password}
                            onChange={handleOnChange}
                            required />
                        <span className="underline"></span>
                        <p className="formErrorMsg" >
                            {formErrors.password}
                        </p>
                        <label>Mot de passe</label>
                    </div>
                    <div className="input-wrapper">
                        <input
                            type="password"
                            name="confirmPassword"
                            value={newUser.confirmPassword}
                            onChange={handleOnChange}
                            required />
                        <span className="underline"></span>
                        <p className="formErrorMsg" >
                            {formErrors.confirmPassword}
                        </p>
                        <label>Confirmer le mot de passe</label>
                    </div>
                    <div className="btn-wrapper">
                        <button className="submitBtn" type="submit">Confirmer</button>
                    </div>
                </form>
                <p className="form__phrase">Vous avez deja un compte?<Link className="form__link" to="/login">identifiez vous!
                </Link>
                </p>
            </section>
        </div>
    );
};

export default Registration;