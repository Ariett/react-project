import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import Button from "react-bootstrap/esm/Button";

import * as yachtService from "../../../services/yachtService";
import Path from "../../../paths";
import Hero from "../../hero/Hero";
import AddNewImage from "../../form-elements/add-new-image/AddNewImage";
import YachtImagesWrapper from "./yacht-images-wrapper/YachtImagesWrapper";
import EquipmentFieldset from "../../form-elements/equipment-fieldset/EquipmentFieldset";

export default function YachtEdit() {
    const { id } = useParams();
    const [yacht, setYacht] = useState({
        _ownerId: "",
        name: "",
        year: "",
        people: "",
        cabins: "",
        length: "",
        type: "",
        equipment: {
            airCondition: {
                label: "Air Condition",
                isChecked: false
            },
            autopilot: {
                label: "Autopilot",
                isChecked: false
            },
            divingEquipment: {
                label: "Diving Equipment",
                isChecked: false
            },
            gameConsole: {
                label: "Game Console",
                isChecked: false
            },
            heating: {
                label: "Heating",
                isChecked: false
            },
            radar: {
                label: "Radar",
                isChecked: false
            },
            iceMaker: {
                label: "Ice Maker",
                isChecked: false
            },
            refrigerator: {
                label: "Refrigerator",
                isChecked: false
            },
        },
        images: [],
        description: "",
        _createdOn: "",
    });
    useEffect(() => {
        yachtService.getOne(id)
            .then(result => setYacht(result))
            .catch()
    }, [id]);

    const navigate = useNavigate();

    const onCheckboxChange = (e) => {
        setYacht(state => ({
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

    const submitHandler = async (e) => {
        e.preventDefault();

        try {
            let result = await yachtService.update(id, yacht);
            console.log(result);

            navigate(Path.OwnerYachts);
        } catch (error) {
            // Notification
            console.log('error', error);
        }
    };

    const imagesDeleteHandler = (imageIndex) => {
        setYacht(state => ({
            ...state,
            images: state.images.toSpliced(imageIndex, 1)
        }));
    };

    const addImageHandler = (imageUrl) => {
        setYacht(state => ({
            ...state,
            images: state.images.toSpliced(state.images.length, 0, imageUrl)
        }));
    };

    const onChange = (e) => {
        setYacht(yacht => ({
            ...yacht,
            [e.target.name]: e.target.value
        }));
    };

    const heroContent = {
        title: 'Edit',
        description: `Currently you are editing an yacht with name "${yacht.name}"`
    }

    return (
        <>
            <Hero {...heroContent} />

            {yacht && (
                <form id="create" onSubmit={submitHandler}>
                    <div className="container">
                        <EquipmentFieldset
                            onCheckboxChange={onCheckboxChange}
                            equipmentData={yacht.equipment}
                        />

                        <YachtImagesWrapper
                            images={yacht.images}
                            deleteHandler={imagesDeleteHandler}
                        />

                        <AddNewImage addImageHandler={addImageHandler} images={yacht.images} />

                        {/* Yacht description */}
                        <fieldset>
                            <div className="formRow">
                                <div className="inputData textarea">
                                    <textarea
                                        name="description"
                                        placeholder="Yacht description"
                                        value={yacht.description}
                                        onChange={onChange}
                                    ></textarea>
                                    <div className="underline"></div>
                                </div>
                            </div>
                        </fieldset>


                        {/* Submit */}
                        <Button variant="primary" type="submit" className="centeredBtnMgnBlock">Update Yacht</Button>
                    </div >
                </form >
            )}

        </>
    )
}