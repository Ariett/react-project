import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

import * as yachtService from '../../../services/yachtService';
import * as yachtUtils from '../../../utils/yachtFormsUtils';
import * as yachtFormsUtils from '../../../utils/yachtFormsUtils';
import * as formUtils from '../../../utils/formsUtils';

import Path from '../../../paths';

import Hero from '../../hero/Hero';
import YachtImagesWrapper from '../yacht-edit/yacht-images-wrapper/YachtImagesWrapper';
import AddNewImage from '../../form-elements/add-new-image/AddNewImage';
import EquipmentFieldset from '../../form-elements/equipment-fieldset/EquipmentFieldset';

export default function YachtCreate() {
    const [yachtData, setYachtData] = useState(yachtFormsUtils.getEmptyYachtObject());

    const navigate = useNavigate();

    const createYachtSubmitHandler = async (e) => {
        e.preventDefault();

        const isFormValid = yachtUtils.validateForm(e.target);
        if (isFormValid) {
            try {
                let result = await yachtService.create(yachtData);
                console.log(result);

                navigate(Path.OwnerYachts);
            } catch (error) {
                // Notification
                console.log(error);
            }
        }
    };

    const imagesDeleteHandler = (imageIndex) => {
        setYachtData(state => ({
            ...state,
            images: state.images.toSpliced(imageIndex, 1)
        }));
    };

    const addImageHandler = (imageUrl) => {
        setYachtData(state => ({
            ...state,
            images: state.images.toSpliced(state.images.length, 0, imageUrl)
        }));
    };

    const onChange = (e) => {
        formUtils.removeErrorMessage(e.target.name);
        setYachtData(yacht => ({
            ...yacht,
            [e.target.name]: e.target.value
        }));
    };

    const onCheckboxChange = (e) => {
        setYachtData(state => ({
            ...state,
            equipment: {
                ...state.equipment,
                [e.target.name]: {
                    isChecked: e.target.checked,
                    label: e.target.previousElementSibling.innerHTML,
                }
            }
        }));
    };

    const handleYachtTypeClick = (e) => {
        e.target.firstChild.setAttribute("disabled", "");
    };

    const onSelectChangeChange = (e) => {
        setYachtData(state => ({
            ...state,
            typeName: e.target.value,
            typeLabel: yachtFormsUtils.yachtTypes[e.target.value].label,
            type: {
                name: e.target.value,
                label: yachtFormsUtils.yachtTypes[e.target.value].label,
            }
        }));
    };

    const heroContent = {
        title: "Add new yacht ",
        description: "Here you can add new yachts"
    };

    return (
        <>
            <Hero {...heroContent} />

            <section style={{ paddingTop: "50px" }}>
                <form
                    id="create"
                    onSubmit={createYachtSubmitHandler}
                    noValidate
                    data-requiredmessage="This field is required!"
                >
                    <div className="container">
                        {/* Yacht name */}
                        <fieldset className="formRow">
                            <div className="inputData">
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    placeholder="Yacht name *"
                                    required
                                    onChange={onChange}
                                />
                                <div className="underline"></div>
                            </div>
                        </fieldset>

                        {/* Yacht year and people */}
                        <fieldset className="formRow">
                            <div className="inputData">
                                <input
                                    type="number"
                                    id="year"
                                    name="year"
                                    placeholder="Yacht year"
                                    onChange={onChange}
                                />
                                <div className="underline"></div>
                            </div>
                            <div className="inputData">
                                <input
                                    type="number"
                                    id="people"
                                    name="people"
                                    placeholder="People"
                                    onChange={onChange}
                                />
                                <div className="underline"></div>
                            </div>
                        </fieldset>

                        {/* Yacht cabins and length */}
                        <fieldset className="formRow">
                            <div className="inputData">
                                <input
                                    type="number"
                                    id="cabins"
                                    name="cabins"
                                    placeholder="Cabins"
                                    onChange={onChange}
                                />
                                <div className="underline"></div>
                            </div>
                            <div className="inputData">
                                <input
                                    type="number"
                                    id="length"
                                    name="length"
                                    placeholder="Length"
                                    onChange={onChange}
                                />
                                <div className="underline"></div>
                            </div>
                        </fieldset>


                        {/* Yacht type */}
                        <fieldset className="formRow">
                            <div className="inputData">
                                <select name="type" id="type" onChange={onSelectChangeChange} onClick={handleYachtTypeClick} required>
                                    <option defaultValue="none">Select type *</option>
                                    {Object.entries(yachtFormsUtils.yachtTypes).map((entry, index) => <option key={index} name={entry[0]} value={entry[0]}>{entry[1].label}</option>)}
                                </select>
                                <div className="underline"></div>
                            </div>
                        </fieldset>

                        {/* Yacht equipment */}
                        <EquipmentFieldset
                            onCheckboxChange={onCheckboxChange}
                            equipmentData={yachtData.equipment}
                        />

                        {/* Yacht images */}
                        <YachtImagesWrapper
                            images={yachtData.images}
                            deleteHandler={imagesDeleteHandler}
                        />

                        <AddNewImage
                            addImageHandler={addImageHandler}
                            images={yachtData.images}
                        />

                        {/* Yacht description */}
                        <fieldset>
                            <div className="formRow">
                                <div className="inputData textarea">
                                    <textarea
                                        name="description"
                                        placeholder="Yacht description"
                                        onChange={onChange}
                                    >

                                    </textarea>
                                    <div className="underline"></div>
                                </div>
                            </div>
                        </fieldset>

                        {/* Submit */}
                        <fieldset className="formRow">
                            <Button variant="primary" type="submit">Create Yacht</Button>
                        </fieldset>
                    </div >
                </form >
            </section >
        </>

    )
}