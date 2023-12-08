import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import * as yachtService from '../../services/yachtService';
import CarouselComponent from "../carousel/CarouselComponent";
import Hero from "../hero/Hero";
import YachtOwnerData from "./yacht-owner-data/YachtOwnerData";

export default function YachtDetails() {
    const { id } = useParams();
    const [yacht, setYacht] = useState({});
    const [heroContent, setHeroContent] = useState({});

    useEffect(() => {
        yachtService.getOneWithOwnerData(id)
            .then(result => {
                setYacht(result)

                console.log('RESULT', result);
                setHeroContent({
                    title: result.name,
                    description: result.description
                })
            })
            .catch((err) => {
                console.log(err);
            });
    }, [id]);


    return (
        <>
            <Hero {...heroContent} />

            <YachtOwnerData author={yacht.author} />


            {/* {(yacht && yacht.images) && <CarouselComponent images={yacht.images} />} */}
        </>
    )
}