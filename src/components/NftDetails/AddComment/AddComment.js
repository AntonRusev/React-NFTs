import { useForm } from "../../../hooks/useForm";

import '../../InputsAndForms.css';

export const AddComment = ({
    onCommentSubmit
}) => {
    const { onSubmit, formValues, formErrors, disabled, touched, formValueChangeHandler, formValidate } = useForm({
        comment: '',
    }, onCommentSubmit);

    return (
        <div id="create">
            <article className="create-wrap">
                <label className="title-add">Add new comment:</label>
                
                <form action="post" id="create-form" onSubmit={e => onSubmit(e, formValues)}>
                    <div className="comment-wrap">
                        <label htmlFor="comment"><i className={!touched.comment ? 'fa-regular fa-comment orange' : formErrors.comment ? 'fa-regular fa-comment red' : 'fa-regular fa-comment green'}></i></label>
                        <input type="text" name='comment' id="comment" placeholder="Your comment" value={formValues.comment} onChange={formValueChangeHandler} onBlur={formValidate} />
                    </div>
                    {/* Validation field */}
                    <div>
                        <p className={formErrors.comment ? 'not-validated' : 'validated'}>
                            {(formErrors.comment) ? `${formErrors.comment}` : 'TEXT'}
                        </p>
                    </div>

                    <input type="submit" className={disabled ? 'button disabled' : 'button'} name="submit" value="Add" disabled={disabled} />
                </form>
            </article>
        </div>
    );
};