import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import { Container, Row, Col } from 'react-bootstrap';

import * as yachtService from '../../services/yachtService';
import * as yachtFormsUtils from '../../utils/yachtFormsUtils';


import Path from '../../paths';

import Hero from "../hero/Hero";
import CarouselComponent from "../carousel/CarouselComponent";
import RelatedYachts from "./related-yachts/RelatedYachts";

import style from "./YachtDetails.module.scss";

export default function YachtDetails() {
    const { id } = useParams();
    const [yacht, setYacht] = useState(yachtFormsUtils.getEmptyYachtObjectWithAuthor());
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
            description: ""
        })
    }, [yacht]);

    return (
        <>
            <Hero {...heroContent} />

            <Container className={`marginBlockLg ${style.detailsContainer}`}>
                {/* Type and description */}
                <Row>
                    <Col>
                        <h2>About the yacht</h2>
                        <Link className='noLine' to={`${Path.AllYachts}?yachtType=${yacht.type.name}`} >
                            <i className="fa-solid fa-sailboat"></i>
                            {yacht.type.label}
                        </Link>
                        <br />
                        {yacht.description}
                    </Col>
                </Row>

                {/* Details and equip */}
                <Row className="marginTSm">
                    <Col>
                        <h4>Details</h4>
                        <ul>
                            {yacht.year && <li><i className="fa-solid fa-calendar-days"></i>Year: {yacht.year}</li>}
                            {yacht.people && <li><i className="fa-solid fa-person"></i>People: {yacht.people}</li>}
                            {yacht.cabins && <li><i className="fa-solid fa-door-open"></i>Cabins: {yacht.cabins}</li>}
                            {yacht.length && <li><i className="fa-solid fa-ruler"></i>Length: {yacht.length}ft</li>}
                        </ul>
                    </Col>
                    <Col>
                        <h4>Equipment</h4>
                        <ul>
                            {yacht.equipment && (
                                Object.values(yacht.equipment).map((item, index) => (
                                    item.isChecked && <li key={index}><i className="fa-regular fa-square-check"></i>{item.label}</li>
                                ))
                            )}
                        </ul>
                    </Col>
                </Row>
                
                {/* Gallery */}
                <Row className="marginTSm">
                    <Col>
                        <CarouselComponent images={yacht.images}></CarouselComponent>
                    </Col>
                </Row>

                {/* Related yachts */}
                <Row className="marginTLg">
                    <Col>
                        {(yacht.type.name && yacht._id) && <RelatedYachts type={yacht.type.name} excludedYachtId={yacht._id} />}
                    </Col>
                </Row>

                {/* Yacht owner info */}
                <Row className="marginTLg">
                    <h2>About {yacht.author.companyName}</h2>
                    <div>
                        {yacht.author.companyDescription}
                    </div>
                </Row>

                <Row className="marginTSm">
                    <Col>
                        <h4>Contacts</h4>
                        <ul>
                            {yacht.author.companyPhone && (
                                <li>
                                    <i className="fa-solid fa-phone"></i>
                                    Phone: <a href={`tel:${yacht.author.companyPhone}`}>{yacht.author.companyPhone}</a>
                                </li>
                            )}

                            {yacht.author.email && (
                                <li>
                                    <i className="fa-solid fa-envelope"></i>
                                    Email: <a href={`mailto:${yacht.author.email}`}>{yacht.author.email}</a>
                                </li>
                            )}
                        </ul>
                    </Col>

                    <Col>
                        <h4>Address</h4>
                        <ul>
                            {yacht.author.companyCountry && (
                                <li>
                                    <i className="fa-solid fa-map-location-dot"></i>
                                    {yacht.author.companyStreet}, {yacht.author.companyCountry}
                                </li>
                            )}
                        </ul>
                    </Col>
                </Row>
            </Container>
        </>
    )
}