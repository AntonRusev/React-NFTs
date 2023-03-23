import { useState } from "react";

export const useValidate = (initialValues) => {
    const [formErrors, setFormErrors] = useState(initialValues);
    const [touched, setTouched] = useState(initialValues);

    const {formValues} = initialValues;

    function formValidate(e) {
        setTouched(state => ({ ...state, [e.target.name]: true }));

        const value = e.target.value;

        if (e.target.name === 'username' && value === '') {
            setFormErrors(state => ({ ...state, username: 'Username is required' }));
        } else if (e.target.name === 'username' && value.length < 5) {
            setFormErrors(state => ({ ...state, username: 'Username must be at least 5 characters long' }));
        } else if (e.target.name === 'username') {
            setFormErrors(state => ({ ...state, username: '' }));
        }

        if (e.target.name === 'email' && value === '') {
            setFormErrors(state => ({ ...state, email: 'Email is required' }));
        } else if (e.target.name === 'email' && value.length < 5) {
            setFormErrors(state => ({ ...state, email: 'Email must be at least 5 characters long' }));
        } else if (e.target.name === 'email') {
            setFormErrors(state => ({ ...state, email: '' }));
        }

        if (e.target.name === 'password' && value === '') {
            setFormErrors(state => ({ ...state, password: 'Password is required' }));
        } else if (e.target.name === 'password' && value.length < 5) {
            setFormErrors(state => ({ ...state, password: 'Password must be at least 5 characters long' }));
        } else if (e.target.name === 'password') {
            setFormErrors(state => ({ ...state, password: '' }));
        }

        if (e.target.name === 'rePass' && value !== formValues.password) {
            setFormErrors(state => ({ ...state, rePass: 'Password and Repeat password do not match' }));
        } else if (e.target.name === 'rePass') {
            setFormErrors(state => ({ ...state, rePass: '' }));
        }

        if (e.target.name === 'nftName' && value === '') {
            setFormErrors(state => ({ ...state, nftName: 'Name is required' }));
        } else if (e.target.name === 'nftName' && value.length < 5) {
            setFormErrors(state => ({ ...state, nftName: 'The name must be at least 5 characters long' }));
        } else if (e.target.name === 'nftName') {
            setFormErrors(state => ({ ...state, nftName: '' }));
        }

        if (e.target.name === 'imageUrl' && value === '') {
            setFormErrors(state => ({ ...state, imageUrl: 'Image URL is required' }));
        } else if (e.target.name === 'imageUrl' && value.length < 5) {
            setFormErrors(state => ({ ...state, imageUrl: 'Image URL must be at least 5 characters long' }));
        } else if (e.target.name === 'imageUrl') {
            setFormErrors(state => ({ ...state, imageUrl: '' }));
        }

        if (e.target.name === 'price' && value === '') {
            setFormErrors(state => ({ ...state, price: 'Price is required and must be a positive number' }));
        } else if (e.target.name === 'price' && value <= 0) {
            setFormErrors(state => ({ ...state, price: 'Price must be a positive number' }));
        } else if (e.target.name === 'price') {
            setFormErrors(state => ({ ...state, price: '' }));
        }

        if (e.target.name === 'description' && value === '') {
            setFormErrors(state => ({ ...state, description: 'Description is required' }));
        } else if (e.target.name === 'description' && value.length < 10) {
            setFormErrors(state => ({ ...state, description: 'Description must be at least 10 characters long' }));
        } else if (e.target.name === 'description') {
            setFormErrors(state => ({ ...state, description: '' }));
        }
    }

    return {
        formValidate,
        formErrors,
        touched
    };
};