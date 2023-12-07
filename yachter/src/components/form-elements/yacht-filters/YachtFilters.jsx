import { useState } from "react";

import { yachtTypes, equipmentItemsObjects } from "../../../utils/yachtFormsUtils";

export default function YachtFilters() {
    const [equipment, setEquipment] = useState([]);

    const onEquipmentChange = (e) => {
        console.log(cards);
        if (e.target.checked) {
            setEquipment(state => [...state, e.target.name]);
        } else {
            setEquipment(state => state.filter(item => item !== e.target.name));
        }

        // document.querySelectorAll(`.card[data-yachttype]`).forEach(card => {
        //     if (e.target.value === "none") {
        //         card.style.display = "block";
        //     } else {
        //         card.style.display = (card.dataset.yachttype !== e.target.value) ? "none" : "block";
        //     }
        // });

        // let selectedYachts = document.querySelectorAll(`.card[data-yachttype=${e.target.value}]`);
        // let noYachtsTitle = document.querySelector(`.noYachts`);

        // noYachtsTitle.style.display = (e.target.value !== "none" && selectedYachts.length === 0) ? "block" : "none";
    };

    const onTypeChange = (e) => {
        document.querySelectorAll(`.card[data-yachttype]`).forEach(card => {
            if (e.target.value === "none") {
                card.style.display = "block";
            } else {
                card.style.display = (card.dataset.yachttype !== e.target.value) ? "none" : "block";
            }
        });

        let selectedYachts = document.querySelectorAll(`.card[data-yachttype=${e.target.value}]`);
        let noYachtsTitle = document.querySelector(`.noYachts`);

        noYachtsTitle.style.display = (e.target.value !== "none" && selectedYachts.length === 0) ? "block" : "none";

    };

    console.log(equipment);
    // console.log(Object.entries(equipmentItemsObjects));

    return (
        <>
            <form>
                <fieldset className="formRow formTitle">
                    <div className="inputData">
                        <h2>Filter yachts</h2>
                    </div>
                </fieldset>


                {/* Yacht Type and equipment */}
                <fieldset className="formRow">
                    <div className="inputData">
                        <select name="yachtType" id="yachtType" onChange={onTypeChange}>
                            <option value="none">All yacht types</option>
                            {Object.entries(yachtTypes).map((entry, index) => <option key={index} name={entry[0]} value={entry[0]}>{entry[1].label}</option>)}
                        </select>
                        <div className="underline"></div>
                    </div>
                </fieldset>

                <fieldset className="formRow filtersSelect">
                    {Object.entries(equipmentItemsObjects).map((entry, index) => {
                        return (
                            <div className="checkbox" key={index}>
                                <div className="inputData">
                                    <input
                                        type="checkbox"
                                        onChange={onEquipmentChange}
                                        name={entry[0]}
                                        id={entry[0]}
                                    />
                                    <label htmlFor={entry[0]}>{entry[1].label}</label>
                                </div>
                            </div>
                        )
                    })}
                </fieldset>
            </form>

            <h2
                className="noYachts"
                style={{
                    textAlign: "center",
                    display: "none"
                }}
            >No yachts to display.</h2>
        </>
    )
}