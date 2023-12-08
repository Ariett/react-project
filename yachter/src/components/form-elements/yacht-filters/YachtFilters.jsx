import { useState, useEffect, useRef } from "react";

import { useLocation, useNavigate } from "react-router-dom";

import { yachtTypes } from "../../../utils/yachtFormsUtils";

export default function YachtFilters() {
    const location = useLocation();
    const navigate = useNavigate();
    let yachtType = useRef(location.search ? location.search.split('=')[1] : 'all');

    const [selectType, setSelectType] = useState();

    useEffect(() => {
        // Wait for the cards to render
        setTimeout(() => {
            filterYachts();
        }, 100);
        
        yachtType.current = location.search ? location.search.split('=')[1] : 'all';
        setSelectType(yachtType.current);
        navigate({ search: `?yachtType=${yachtType.current}` });
    }, [location.search]);

    const onTypeChange = (e) => {
        yachtType.current = e.target.value;
        setSelectType(yachtType.current);
        navigate({ search: `?yachtType=${yachtType.current}` });
    };

    const filterYachts = () => {
        document.querySelectorAll(`.card[data-yachttype]`).forEach(card => {
            if (yachtType.current === "all") {
                card.style.display = "block";
            } else {
                card.style.display = (card.dataset.yachttype !== yachtType.current) ? "none" : "block";
            }
        });

        let selectedYachts = document.querySelectorAll(`.card[data-yachttype=${yachtType.current}]`);
        let noYachtsTitle = document.querySelector(`.noYachts`);
        noYachtsTitle.style.display = (yachtType.current !== "all" && selectedYachts.length === 0) ? "block" : "none";
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
                        <select name="yachtType" id="yachtType" onChange={onTypeChange} value={selectType}>
                            <option value="all">All yacht types</option>
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