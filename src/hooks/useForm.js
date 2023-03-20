import { useState, useEffect } from "react";

export const useForm = (initialValues) => {
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState(initialValues);
    const [touched, setTouched] = useState(initialValues);
    const [disabled, setDisabled] = useState(true);

    function formValueChangeHandler(e) {
        setFormValues(state => ({ ...state, [e.target.name]: e.target.value }));
    };

    function formValidate(e) {
        // TODO FIX TOUCHED
        setTouched(state => ({ ...state, [e.target.name]: true }));
        
        const value = e.target.value;

        if (e.target.name === 'username' && value.length < 5) {
            setFormErrors(state => ({ ...state, username: 'Username must be at least 5 characters long' }));
        } else if (e.target.name === 'username') {
            setFormErrors(state => ({ ...state, username: '' }));
        }

        if (e.target.name === 'email' && value.length < 5) {
            setFormErrors(state => ({ ...state, email: 'Email must be at least 5 characters long' }));
        } else if (e.target.name === 'email'){
            setFormErrors(state => ({ ...state, email: '' }));
        }

        if (e.target.name === 'password' && value.length < 5) {
            setFormErrors(state => ({ ...state, password: 'Password must be at least 5 characters long' }));
        }
        else if (e.target.name === 'password') {
            setFormErrors(state => ({ ...state, password: '' }));
        }

        if (e.target.name === 'rePass' && value.length < 5) {
            setFormErrors(state => ({ ...state, rePass: 'Repeat password must be at least 5 characters long' }));
        } else if (e.target.name === 'rePass') {
            setFormErrors(state => ({ ...state, rePass: '' }));
        }
        console.log(formErrors);
    }

    useEffect(() => {
        if (
            (formErrors.username || formErrors.email || formErrors.password || formErrors.rePass)
            || (formValues.username === '' || formValues.email === '' || formValues.password === '' || formValues.rePass === '')
        ) {
            setDisabled(true);
        } else {
            setDisabled(false);
        }
    }, [formErrors.username, formErrors.email, formErrors.password, formErrors.rePass, formValues.username, formValues.email, formValues.password, formValues.rePass]);

    return {
        formValues,
        formErrors,
        disabled,
        touched,
        formValueChangeHandler,
        formValidate
    }
}