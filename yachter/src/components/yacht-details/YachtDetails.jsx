import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import { Container, Row, Col } from 'react-bootstrap';

import * as yachtService from '../../services/yachtService';
import CarouselComponent from "../carousel/CarouselComponent";
import Hero from "../hero/Hero";
import YachtOwnerData from "./yacht-owner-data/YachtOwnerData";

import style from "./YachtDetails.module.scss";

export default function YachtDetails() {
    const { id } = useParams();
    const [yacht, setYacht] = useState({});
    const [heroContent, setHeroContent] = useState({});

    useEffect(() => {
        yachtService.getOneWithOwnerData(id)
            .then(result => setYacht(result))
            .catch((err) => {
                console.log(err);
            });
    }, [id]);

    useEffect(() => {
        setHeroContent({
            title: yacht.name,
            description: yacht.description
        })
    }, [yacht]);


    return (
        <>
            <Hero {...heroContent} />

            <Container className={style.detailsContainer}>
                <Row className={style.detailsRow}>
                    <YachtOwnerData author={yacht.author} />
                </Row>

                <Row className={style.detailsRow}>
                    <h2>Yacht Details</h2>
                    <Col>
                        <ul>
                            {yacht.year && <li><i class="fa-solid fa-calendar-days"></i>Year: {yacht.year}</li>}
                            {yacht.people && <li><i class="fa-solid fa-person"></i>People: {yacht.people}</li>}
                        </ul>
                    </Col>
                    <Col>
                        <ul>
                            {yacht.cabins && <li><i class="fa-solid fa-door-open"></i>Cabins: {yacht.cabins}</li>}
                            {yacht.length && <li><i class="fa-solid fa-ruler"></i>Length: {yacht.length}ft</li>}
                        </ul>
                    </Col>
                </Row>
            </Container>


            {/* {(yacht && yacht.images) && <CarouselComponent images={yacht.images} />} */}
        </>
    )
}