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
        console.log(e.target.value);
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
        </>
    )
}