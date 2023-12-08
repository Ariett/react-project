import { useState, useEffect } from "react";

import { yachtTypes } from "../../../utils/yachtFormsUtils";

export default function YachtFilters() {
    const [yachtType, setYachtType] = useState(() => {
        const currentUrl = new URL(window.location.href);
        return currentUrl.searchParams.get('yachtType') || 'all';
    });

    useEffect(() => {
        setTimeout(() => {
            filterYachts();
        }, 100);

        // Update URL with query parameter
        const currentUrl = new URL(window.location.href);
        currentUrl.searchParams.set('yachtType', yachtType);
        window.history.pushState({}, '', currentUrl);
    }, [yachtType]);

    const onTypeChange = (e) => {
        setYachtType(e.target.value);
    };

    const filterYachts = () => {
        document.querySelectorAll(`.card[data-yachttype]`).forEach(card => {
            if (yachtType === "all") {
                card.style.display = "block";
            } else {
                card.style.display = (card.dataset.yachttype !== yachtType) ? "none" : "block";
            }
        });

        let selectedYachts = document.querySelectorAll(`.card[data-yachttype=${yachtType}]`);
        let noYachtsTitle = document.querySelector(`.noYachts`);
        noYachtsTitle.style.display = (yachtType !== "all" && selectedYachts.length === 0) ? "block" : "none";
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
                        <select name="yachtType" id="yachtType" onChange={onTypeChange} value={yachtType}>
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