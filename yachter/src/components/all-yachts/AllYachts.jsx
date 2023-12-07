import { useEffect, useState } from "react";

import * as yachtService from "../../services/yachtService";

import Hero from "../hero/Hero";
import YachtCardsWrapper from "../yacht-cards-wrapper/YachtCardsWrapper";
import YachtCard from "../yacht-card/YachtCard";
import YachtFilters from "../form-elements/yacht-filters/YachtFilters";
import YachtList from "../yacht-list/YachtList";

export default function AllYachts() {
    const [yachts, setYachts] = useState([]);

    useEffect(() => {
        yachtService.getAll()
            .then(result => setYachts(result))
            .catch(error => {
                console.log(error);
            });
    }, []);

    const heroContent = {
        title: "All Yachts",
    }

    return (
        <>
            {heroContent && <Hero {...heroContent} />}

            <YachtFilters />

            <YachtList initialYachts={yachts} />
        </>
    )
}