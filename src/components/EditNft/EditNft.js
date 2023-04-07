import { useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import * as nftsService from '../../services/nftsService';

import { NftContext } from "../../contexts/NftContext";
import { useForm } from "../../hooks/useForm";

export const EditNft = () => {
    const { onEditNftSubmit } = useContext(NftContext);

    const { nftId } = useParams();

    const navigate = useNavigate();

    const { formValues, formErrors, disabled, touched, formValueChangeHandler, formValidate, changeValues } = useForm({
        nftName: '',
        imageUrl: '',
        price: '',
        description: ''
    });

    useEffect(() => {
        nftsService.getOne(nftId)
            .then(result => {
                changeValues(result);
            })
            .catch(err => console.log(err));
    }, [nftId]);




    const onBackClick = () => {
        navigate(`/gallery/${nftId}`);
    };

    return (
        <main id="create">
            <div className="create-side">
                <img className="side-img" src={formValues.imageUrl} alt="" />
            </div>
            <div className="create-wrap">
                <h2>Edit NFT</h2>
                <form action="post" id="create-form" onSubmit={e => onEditNftSubmit(e, nftId, formValues)}>
                    <div className="nftName-wrap">
                        <label htmlFor="nftName"><i className={!touched.nftName ? 'fa-solid fa-tag orange' : formErrors.nftName ? 'fa-solid fa-tag red' : 'fa-solid fa-tag green'}></i></label>
                        <input type="text" name='nftName' id="nftName" placeholder="Name" value={formValues.nftName} onChange={formValueChangeHandler} onBlur={formValidate} />
                    </div>
                    {/* Validation field */}
                    <div>
                        <p className={formErrors.nftName ? 'not-validated' : 'validated'}>
                            {(formErrors.nftName) ? `${formErrors.nftName}` : 'TEXT'}
                        </p>
                    </div>

                    <div className="imageUrl-wrap">
                        <label htmlFor="imageUrl"><i className={!touched.imageUrl ? 'fa-solid fa-image orange' : formErrors.imageUrl ? 'fa-solid fa-image red' : 'fa-solid fa-image green'}></i></label>
                        <input type="text" name='imageUrl' id="imageUrl" placeholder="Image URL" value={formValues.imageUrl} onChange={formValueChangeHandler} onBlur={formValidate} />
                    </div>
                    {/* Validation field */}
                    <div>
                        <p className={formErrors.imageUrl ? 'not-validated' : 'validated'}>
                            {(formErrors.imageUrl) ? `${formErrors.imageUrl}` : 'TEXT'}
                        </p>
                    </div>

                    <div className="price-wrap">
                        <label htmlFor="price"><i className={!touched.price ? 'fa-brands fa-bitcoin orange' : formErrors.price ? 'fa-brands fa-bitcoin red' : 'fa-brands fa-bitcoin green'}></i></label>
                        <input type="number" name='price' id="price" placeholder="Price" value={formValues.price} onChange={formValueChangeHandler} onBlur={formValidate} />
                    </div>
                    {/* Validation field */}
                    <div>
                        <p className={formErrors.price ? 'not-validated' : 'validated'}>
                            {(formErrors.price) ? `${formErrors.price}` : 'TEXT'}
                        </p>
                    </div>

                    <div className="description-wrap">
                        <label htmlFor="description"><i className={!touched.description ? 'fa-solid fa-pen orange' : formErrors.description ? 'fa-solid fa-pen red' : 'fa-solid fa-pen green'}></i></label>
                        <textarea type="text" name='description' id="description" placeholder="Description" value={formValues.description} onChange={formValueChangeHandler} onBlur={formValidate} />
                    </div>
                    {/* Validation field */}
                    <div>
                        <p className={formErrors.description ? 'not-validated' : 'validated'}>
                            {(formErrors.description) ? `${formErrors.description}` : 'TEXT'}
                        </p>
                    </div>

                    <input type="submit" className={disabled ? 'button disabled' : 'button'} name="submit" value="Save" disabled={disabled} />
                    <input type="button" className="button" name="back" value="Back" onClick={onBackClick} />
                </form>
            </div>
        </main>
    );
}