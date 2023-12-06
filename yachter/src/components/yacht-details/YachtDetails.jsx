import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import * as yachtService from '../../services/yachtService'
import CarouselComponent from "../carousel/CarouselComponent";

export default function YachtDetails() {
    const { id } = useParams();
    const [yacht, setYacht] = useState({});

    useEffect(() => {
        yachtService
            .getOne(id)
            .then(res => setYacht(res))
            .catch((err) => {
                console.log(err);
            })
    }, [id]);

    return (
        <>
            {(yacht && yacht.images) && <CarouselComponent images={yacht.images} />}
        </>
    )
}