import { Link } from 'react-router-dom';

import { useForm } from '../../hooks/useForm';

import '../LoginAndRegister.css'

export const Login = () => {

    const { formValues, formErrors, disabled, touched, formValueChangeHandler, formValidate } = useForm({
        username: '',
        password: ''
    });

    function onLoginClick() {
        console.log(formValues);
        console.log(formErrors);
        console.log(disabled)
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
                        <label htmlFor="username"><i className={!touched.username ? 'fa-solid fa-user-large orange' : formErrors.username ? 'fa-solid fa-user-large red' : 'fa-solid fa-user-large green'}></i></label>
                        <input type="text" name='username' id="username" placeholder="Username" value={formValues.username} onChange={formValueChangeHandler} onBlur={formValidate} />
                    </div>
                    {/* Validation field */}
                    <div>
                        <p className={formErrors.username ? 'not-validated' : 'validated'}>
                            {(formErrors.username) ? `${formErrors.username}` : 'Username must be at least 5 characters long'}
                        </p>
                    </div>

                    <div className="password-wrap">
                        <label htmlFor="password"><i className={!touched.password ? 'fa-solid fa-unlock orange' : formErrors.password ? 'fa-solid fa-unlock red' : 'fa-solid fa-unlock green'}></i></label>
                        <input type="password" name='password' id="password" placeholder="Password" value={formValues.password} onChange={formValueChangeHandler} onBlur={formValidate} />
                    </div>
                    {/* Validation field */}
                    <div>
                        <p className={formErrors.password ? 'not-validated' : 'validated'}>
                            {(formErrors.password) ? `${formErrors.password}` : 'Password must be at least 5 characters long'}
                        </p>
                    </div>

                    <input type="button" className={disabled ? 'button disabled' : 'button'} name="submit" value="Login" disabled={disabled} onClick={onLoginClick} />

                    <p>
                        Don't have an account?
                        <Link to='/register'>Register</Link>
                    </p>
                </form>
            </div>
        </main>
    );
}