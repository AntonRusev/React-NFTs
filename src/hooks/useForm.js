import { useState, useEffect } from "react";

import { useValidate } from "./useValidate";

export const useForm = (initialValues, onSubmitHandler) => {
    const [formValues, setFormValues] = useState(initialValues);
    const [disabled, setDisabled] = useState(true);

    const { formValidate, formErrors, touched } = useValidate({ formValues });

    function formValueChangeHandler(e) {
        setFormValues(state => ({ ...state, [e.target.name]: e.target.value }));
    };

    const changeValues = (newValues) => {
        setFormValues(newValues);
    };

    const onSubmit = (e) => {
        e.preventDefault();

        onSubmitHandler(e, formValues);

        setFormValues(initialValues);
    };

    useEffect(() => {
        if (
            (formErrors.username
                || formErrors.email
                || formErrors.password
                || formErrors.rePass
                || formErrors.nftName
                || formErrors.imageUrl
                || formErrors.price
                || formErrors.description
                || formErrors.comment)
            || (formValues.username === ''
                || formValues.email === ''
                || formValues.password === ''
                || formValues.rePass === ''
                || formValues.nftName === ''
                || formValues.imageUrl === ''
                || formValues.price === ''
                || formValues.description === ''
                || formValues.comment === '')
        ) {
            setDisabled(true);
        } else {
            if (formValues.rePass && (formValues.rePass !== formValues.password)) {
                setDisabled(true);
            } else {
                setDisabled(false);
            };
        };
    }, [formErrors.username,
    formErrors.email,
    formErrors.password,
    formErrors.rePass,
    formErrors.nftName,
    formErrors.imageUrl,
    formErrors.price,
    formErrors.description,
    formErrors.comment,
    formValues.username,
    formValues.email,
    formValues.password,
    formValues.rePass,
    formValues.nftName,
    formValues.imageUrl,
    formValues.price,
    formValues.description,
    formValues.comment]
    );

    return {
        onSubmit,
        formValueChangeHandler,
        formValues,
        changeValues,
        disabled,
        formValidate,
        formErrors,
        touched
    };
};