import { Button, Col, Container, Row } from "react-bootstrap";

import style from "./ServicesComponent.module.scss";
import { Link } from "react-router-dom";

export default function ServicesComponent() {
    return (
        <Container className={`marginBlockLg ${style.servicesWrapper}`}>
            <Row style={{ gap: "20px" }}>
                <Col className={style.colWrapper}>
                    <div className={style.iconHolder}>
                        <i className="fa-solid fa-sailboat"></i>
                    </div>
                    <h5>
                        Management Services
                    </h5>
                    <p>Effortlessly manage your fleet – register, create, update, and retire yachts with precision through our user-friendly platform.</p>
                </Col>

                <Col className={style.colWrapper}>
                    <i class="fa-solid fa-anchor"></i>
                    <h5>Member Privileges</h5>
                    <p>Unlock a world of privileges – from curating your list of favorite yachts to seamless reservations, your journey begins with exclusive member features.</p>
                </Col>

                <Col className={style.colWrapper}>
                    <div className={style.iconHolder}>
                        <i class="fa-solid fa-compass"></i>
                    </div>
                    <h5>Captain's Command</h5>
                    <p>Yacht owners, take the helm of reservations. Command the experience by updating statuses with confidence and authority.</p>
                </Col>
            </Row>
        </Container>
    )
}