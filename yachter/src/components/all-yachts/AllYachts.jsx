import { useEffect, useState } from "react";

import * as yachtService from "../../services/yachtService";

import Hero from "../hero/Hero";
import YachtCardsWrapper from "../yacht-cards-wrapper/YachtCardsWrapper";
import YachtCard from "../yacht-card/YachtCard";

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

            <YachtCardsWrapper>
                {yachts.map(yacht => (<YachtCard key={yacht._id} {...yacht} />))}
            </YachtCardsWrapper>
        </>
    )
}