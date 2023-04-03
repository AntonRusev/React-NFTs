import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { useForm } from '../../hooks/useForm';
import { NftContext } from '../../contexts/NftContext';


export const CreateNft = () => {
    const { onCreateNftSubmit } = useContext(NftContext);

    const navigate = useNavigate();

    const { onSubmit, formValues, formErrors, disabled, touched, formValueChangeHandler, formValidate } = useForm({
        nftName: '',
        imageUrl: '',
        price: '',
        description: '',
    }, onCreateNftSubmit);

    const onBackClick = () => {
        navigate('/gallery');
    };

    return (
        <main id="gallery">
            <div className="gallery-wrap">
                <h2>Add your NFT</h2>
                <form action="post" id="gallery-form" onSubmit={e => onSubmit(e, formValues)}>
                    <div className="nftName-wrap">
                        <label htmlFor="nftName"><i className={!touched.nftName ? 'fa-solid fa-user-large orange' : formErrors.nftName ? 'fa-solid fa-user-large red' : 'fa-solid fa-user-large green'}></i></label>
                        <input type="text" name='nftName' id="nftName" placeholder="Name" value={formValues.nftName} onChange={formValueChangeHandler} onBlur={formValidate} />
                    </div>
                    {/* Validation field */}
                    <div>
                        <p className={formErrors.nftName ? 'not-validated' : 'validated'}>
                            {(formErrors.nftName) ? `${formErrors.nftName}` : 'TEXT'}
                        </p>
                    </div>

                    <div className="imageUrl-wrap">
                        <label htmlFor="imageUrl"><i className={!touched.imageUrl ? 'fa-solid fa-at orange' : formErrors.imageUrl ? 'fa-solid fa-at red' : 'fa-solid fa-at green'}></i></label>
                        <input type="text" name='imageUrl' id="imageUrl" placeholder="Image URL" value={formValues.imageUrl} onChange={formValueChangeHandler} onBlur={formValidate} />
                    </div>
                    {/* Validation field */}
                    <div>
                        <p className={formErrors.imageUrl ? 'not-validated' : 'validated'}>
                            {(formErrors.imageUrl) ? `${formErrors.imageUrl}` : 'TEXT'}
                        </p>
                    </div>

                    <div className="price-wrap">
                        <label htmlFor="price"><i className={!touched.price ? 'fa-solid fa-at orange' : formErrors.price ? 'fa-solid fa-at red' : 'fa-solid fa-at green'}></i></label>
                        <input type="number" name='price' id="price" placeholder="Price" value={formValues.price} onChange={formValueChangeHandler} onBlur={formValidate} />
                    </div>
                    {/* Validation field */}
                    <div>
                        <p className={formErrors.price ? 'not-validated' : 'validated'}>
                            {(formErrors.price) ? `${formErrors.price}` : 'TEXT'}
                        </p>
                    </div>

                    <div className="description-wrap">
                        <label htmlFor="description"><i className={!touched.description ? 'fa-solid fa-unlock orange' : formErrors.description ? 'fa-solid fa-unlock red' : 'fa-solid fa-unlock green'}></i></label>
                        <textarea type="text" name='description' id="description" placeholder="Description" value={formValues.description} onChange={formValueChangeHandler} onBlur={formValidate} />
                    </div>
                    {/* Validation field */}
                    <div>
                        <p className={formErrors.description ? 'not-validated' : 'validated'}>
                            {(formErrors.description) ? `${formErrors.description}` : 'TEXT'}
                        </p>
                    </div>

                    <input type="submit" className={disabled ? 'button disabled' : 'button'} name="submit" value="Add" disabled={disabled} />
                    <input type="button" name="back" value="Back" onClick={onBackClick} />
                </form>
            </div>
        </main>
    );
};