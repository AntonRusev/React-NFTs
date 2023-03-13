import { useState } from 'react';
import { Link } from 'react-router-dom';

import './LoginAndRegister.css'

export const Login = () => {

    const [formValues, setFormValues] = useState({
        username: '',
        password: ''
    });

    function onFormValueChange(e) {
        setFormValues(state => ({...state, [e.target.name]: e.target.value}));
    }

    function onLoginClick() {
        console.log(formValues);
    }

    return (
        <main id="login">
            <div className="login-side">
                <img className="side-img" src="https://images.unsplash.com/photo-1589652717521-10c0d092dea9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGFuaW1hbCUyMGNvbXB1dGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" />
            </div>
            <div className="login-wrap">
                <h2>Welcome back</h2>
                <form action="post" id="login-form">
                    <div className="username-wrap">
                        <label htmlFor="username"><i className="fa-solid fa-user-large"></i></label>
                            <input type="text" name='username' id="username" placeholder="Username" value={formValues.username} onChange={onFormValueChange} />
                            <div className="reject-accept">
                                <i className="fa-solid fa-circle-check accepted"></i>
                                <i className="fa-solid fa-ban rejected"></i>
                            </div>
                    </div>
                    <div className="password-wrap">      
                        <label htmlFor="password"><i className="fa-solid fa-unlock"></i></label>
                            <input type="password" name='password' id="password" placeholder="Password" value={formValues.password} onChange={onFormValueChange} />
                            <div className="reject-accept">
                                <i className="fa-solid fa-circle-check accepted"></i>
                                <i className="fa-solid fa-ban rejected"></i>
                            </div>
                    </div>

                    <input type="button" className='button' name="submit" value="Login" onClick={onLoginClick} />
                    
                    <p>
                        Don't have an account?
                        <Link to='/register'>Register</Link>
                    </p>
                </form>
            </div>
        </main>
    );
}