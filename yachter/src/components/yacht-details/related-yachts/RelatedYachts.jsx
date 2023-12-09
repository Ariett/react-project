import { useEffect, useState } from "react";
import * as yachtService from "../../../services/yachtService";
import YachtList from "../../yacht-list/YachtList";

export default function RelatedYachts({
    type = "all",
    excludedYachtId = false
}) {
    const [relatedYachts, setRelatedYachts] = useState([]);

    useEffect(() => {
        yachtService.getYachtsByType(type, excludedYachtId)
            .then(result => setRelatedYachts(result));
    }, [type, excludedYachtId]);

    return (
        <>
            <h2>Related yachts</h2>
            <YachtList initialYachts={relatedYachts} wrapperPadding={false} />
        </>
    )
}