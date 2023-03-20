import { Link } from 'react-router-dom';

import { useForm } from '../../hooks/useForm';

import '../LoginAndRegister.css'

export const Register = () => {

    const { formValues, formErrors, disabled, touched, formValueChangeHandler, formValidate } = useForm({
        username: '',
        email: '',
        password: '',
        rePass: ''
    });

    function onRegisterClick() {
        console.log(formValues);
        console.log(formErrors);
        console.log(disabled)
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
                        <label htmlFor="username"><i className={!touched.username ? 'fa-solid fa-user-large orange' : formErrors.username ? 'fa-solid fa-user-large red' : 'fa-solid fa-user-large green'}></i></label>
                        <input type="text" name='username' id="username" placeholder="Username" value={formValues.username} onChange={formValueChangeHandler} onBlur={formValidate} />
                    </div>
                    {/* Validation field */}
                    <div>
                        <p className={formErrors.username ? 'not-validated' : 'validated'}>
                            {(formErrors.username) ? `${formErrors.username}` : 'TEXT'}
                        </p>
                    </div>

                    <div className="email-wrap">
                        <label htmlFor="email"><i className={!touched.email ? 'fa-solid fa-at orange' : formErrors.email ? 'fa-solid fa-at red' : 'fa-solid fa-at green'}></i></label>
                        <input type="text" name='email' id="email" placeholder="Email" value={formValues.email} onChange={formValueChangeHandler} onBlur={formValidate} />
                    </div>
                    {/* Validation field */}
                    <div>
                        <p className={formErrors.email ? 'not-validated' : 'validated'}>
                            {(formErrors.email) ? `${formErrors.email}` : 'TEXT'}
                        </p>
                    </div>

                    <div className="password-wrap">
                        <label htmlFor="password"><i className={!touched.password ? 'fa-solid fa-unlock orange' : formErrors.password ? 'fa-solid fa-unlock red' : 'fa-solid fa-unlock green'}></i></label>
                        <input type="password" name='password' id="password" placeholder="Password" value={formValues.password} onChange={formValueChangeHandler} onBlur={formValidate} />
                    </div>
                    {/* Validation field */}
                    <div>
                        <p className={formErrors.password ? 'not-validated' : 'validated'}>
                            {(formErrors.password) ? `${formErrors.password}` : 'TEXT'}
                        </p>
                    </div>

                    <div className="rePass-wrap">
                        <label htmlFor="rePass"><i className={!touched.rePass ? 'fa-solid fa-unlock-keyhole orange' : formErrors.rePass ? 'fa-solid fa-unlock-keyhole red' : 'fa-solid fa-unlock-keyhole green'}></i></label>
                        <input type="password" name='rePass' id="rePass" placeholder="Repeat password" value={formValues.rePass} onChange={formValueChangeHandler} onBlur={formValidate} />
                    </div>
                    {/* Validation field */}
                    <div>
                        <p className={formErrors.rePass ? 'not-validated' : 'validated'}>
                            {(formErrors.rePass) ? `${formErrors.rePass}` : 'TEXT'}
                        </p>
                    </div>

                    <input type="button" className={disabled ? 'button disabled' : 'button'} name="submit" value="Register" disabled={disabled} onClick={onRegisterClick} />

                    <p>
                        Already have an account?
                        <Link to='/login'>Login</Link>
                    </p>
                </form>
            </div>
        </main>
    );
}