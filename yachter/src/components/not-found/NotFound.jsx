import { Link } from "react-router-dom";
import Hero from "../hero/Hero";
import Path from "../../paths";
import { Col, Container, Row } from "react-bootstrap";
import MostLikedYachts from "../most-liked-yachts/MostLikedYachts";

export default function NotFound() {
    return (
        <>
            <Hero title="Not Found" description="Something went wrong" />

            <Container className="marginBlockLg" style={{ textAlign: "center" }}>
                <Row>
                    <Col>
                        <p>
                            It seems we've hit rough seas and stumbled upon the dreaded 404 island. <br />
                            Fret not, for even the bravest captains navigate the occasional storm. <br />
                            Hoist the anchor and set sail back to the <Link to={Path.Home}>homepage</Link> to continue our grand adventure together!
                        </p>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <MostLikedYachts />
                    </Col>
                </Row>
            </Container>
        </>
    )
}