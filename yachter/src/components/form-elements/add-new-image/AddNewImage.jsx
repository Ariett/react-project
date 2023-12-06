import { useState } from "react";

import Button from "react-bootstrap/esm/Button";

import * as formUtils from "../../../utils/formsUtils";

import style from "./AddNewImage.module.scss";

export default function AddNewImage({
    addImageHandler,
    images = []
}) {
    const [addedImg, setAddedImg] = useState('');

    const handleImageChange = (event) => {
        formUtils.removeErrorMessage("newImageUrl");
        setAddedImg(event.target.value);
    };

    const handleAddImage = () => {
        if (addedImg.trim() !== '' && !images.includes(addedImg)) {
            addImageHandler(addedImg);
            setAddedImg('');
        } else {
            formUtils.setErrorMessage("newImageUrl", 'The image has been added already.');
        }
    };

    return (
        <fieldset>
            <div className="formRow">
                <div className="inputData">
                    <input
                        type="text"
                        placeholder="Enter image URL"
                        name="newImageUrl"
                        value={addedImg}
                        onChange={handleImageChange}
                    />
                    <div className="underline"></div>
                </div>
            </div>
            <div className="inputData">
                <Button variant="secondary" className={`small ${style.addImgBtn}`} onClick={handleAddImage}>Add new image</Button>
            </div>
        </fieldset>
    )
}