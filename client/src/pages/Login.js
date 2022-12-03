import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import NavBar from '../components/NavBar';
import axios from 'axios';

const Login = () => {
    const navigate = useNavigate();
    const initialValues = { email: "", password: "" };
    const [user, setUser] = useState(initialValues);
    const [error, setError] = useState(null);
    const [data, setData] = useState({
        email: "",
        password: ""
    });

    //fonction handle on change pour les values des forms
    const handleOnChange = (e) => {
        const { name, value } = e.target
        setUser({ ...user, [name]: value })
        setData({ ...data, [e.target.name]: e.target.value });
    }

    const handleOnSubmit = (e) => {
        e.preventDefault()
        // setIsSubmit(true);

        axios.post("http://localhost:3001/api/auth/login", {
            email: data.email,
            password: data.password
        })
            .then((res) => {
                console.log("Server response: ", res);
                if (res?.status === 200) {
                    navigate('/home')
                    localStorage.setItem('user', JSON.stringify(res.data))
                    localStorage.setItem('token', JSON.stringify(res.data.token))
                }
            })
            .catch((err) => {
                // console.log("Server respondend with error: ", err);
                if (err.response) {
                    setError(err.response.data.message)
                }
            })
    }



    return (
        <div className="form">
            <NavBar />
            <section className="form__section">
                <h1 className="form__title">Se connecter</h1>
                <form className="form__form" onSubmit={handleOnSubmit}>
                    <div className="input-wrapper">
                        <input
                            type="email"
                            name="email"
                            value={user.email}
                            onChange={handleOnChange}
                            required />
                        <span className="underline"></span>
                        <p className="formErrorMsg">{error}</p>
                        <label>Adresse Mail</label>
                    </div>
                    <div className="input-wrapper">
                        <input
                            type="password"
                            name="password"
                            value={user.password}
                            onChange={handleOnChange}
                            required />
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