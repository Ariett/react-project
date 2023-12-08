import { useEffect, useState } from "react";

import * as yachtService from "../../services/yachtService";

export default function YachtsLatest() {
    const [latest, setLatest] = useState([]);
    useEffect(() => {
        yachtService.getLatestYachts()
            .then(result => setLatest(result))
            .catch();
    }, []);

    // console.log(latest);


    return (
        <div>YachtsLatest</div>
    )
}