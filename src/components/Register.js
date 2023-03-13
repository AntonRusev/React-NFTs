import { useState } from 'react';
import { Link } from 'react-router-dom';

import './LoginAndRegister.css'

export const Register = () => {

    const [formValues, setFormValues] = useState({
        username: '',
        email: '',
        password: '',
        rePass: ''
    });

    function onFormValueChange(e) {
        setFormValues(state => ({...state, [e.target.name]: e.target.value}));
    }
    // TODO - Check the proper spelling of rePass!

    function onRegisterClick() {
        console.log(formValues);
    }

    return (
        <main id="register">
        <div className="register-side">
            <img className="side-img" src="https://images.unsplash.com/photo-1646758489059-cddff648a193?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />
        </div>
        <div className="register-wrap">
            <h2>Join us</h2>
            <form action="post" id="register-form">
                <div className="username-wrap">
                    <label htmlFor="username"><i className="fa-solid fa-user-large"></i></label>
                        <input type="text" name='username' id="username" placeholder="Username" value={formValues.username} onChange={onFormValueChange} />
                        <div className="reject-accept">
                            <i className="fa-solid fa-circle-check accepted"></i>
                            <i className="fa-solid fa-ban rejected"></i>
                        </div>
                </div>
                <div className="email-wrap">
                    <label htmlFor="email"><i className="fa-solid fa-at"></i></label>
                        <input type="text" name='email' id="email" placeholder="Email" value={formValues.email} onChange={onFormValueChange} />
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
                <div className="rePass-wrap">      
                    <label htmlFor="rePass"><i className="fa-solid fa-unlock-keyhole"></i></label>
                        <input type="password" name='rePass' id="rePass" placeholder="Repeat password" value={formValues.rePass} onChange={onFormValueChange} />
                        <div className="reject-accept">
                            <i className="fa-solid fa-circle-check accepted"></i>
                            <i className="fa-solid fa-ban rejected"></i>
                        </div>
                </div>

                <input type="button" className='button' name="submit" value="Register" onClick={onRegisterClick} />

                <p>
                    Already have an account?
                    <Link to='/login'>Login</Link>
                </p>
            </form>
        </div>
    </main>
    );
}