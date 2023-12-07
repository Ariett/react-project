import { useState, useEffect } from "react";

import * as yachtService from "../../../services/yachtService";

import { yachtTypes } from "../../../utils/yachtFormsUtils";

export default function YachtFilters() {
    const [yachts, setYachts] = useState([]);
    const [activeFilters, setActiveFilters] = useState([]);

    useEffect(() => {
        yachtService.getAll()
            .then(result => setYachts(result))
            .catch(error => {
                console.log(error);
            });
    }, []);

    const onChange = (e) => {
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

    return (
        <>
            <form>
                <fieldset className="formRow formTitle">
                    <div className="inputData">
                        <h2>Filter yachts</h2>
                    </div>
                </fieldset>


                {/* Yacht Type */}
                <fieldset className="formRow">
                    <div className="inputData">
                        <select name="yachtType" id="yachtType" onChange={onChange}>
                            <option value="none">All yacht types</option>
                            {Object.entries(yachtTypes).map((entry, index) => <option key={index} name={entry[0]} value={entry[0]}>{entry[1].label}</option>)}
                        </select>
                        <div className="underline"></div>
                    </div>
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