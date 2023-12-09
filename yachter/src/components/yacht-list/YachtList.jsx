import { useEffect, useState } from "react";

import YachtCardsWrapper from "../yacht-cards-wrapper/YachtCardsWrapper";
import YachtCard from "../yacht-card/YachtCard";

export default function YachtList({
    initialYachts,
    wrapperPadding = true
}) {
    const [yachts, setYachts] = useState(initialYachts);

    useEffect(() => {
        setYachts(initialYachts);
    }, [initialYachts]);

    return (
        <>
            {yachts && (
                <YachtCardsWrapper wrapperPadding={wrapperPadding}>
                    {yachts.map(yacht => <YachtCard key={yacht._id} {...yacht} />)}
                </YachtCardsWrapper>)
            }
        </>
    )
}