import { Col, Container, Row } from "react-bootstrap";

import style from "./ServicesComponent.module.scss";
import { Link } from "react-router-dom";
import Path from "../../paths";

export default function ServicesComponent() {
    return (
        <Container className={`marginBlockLg ${style.servicesWrapper}`}>
            <Row style={{ gap: "20px" }}>
                <Col className={style.colWrapper}>
                    <div className={style.iconHolder}>
                        <i className="fa-solid fa-compass"></i>
                    </div>
                    <h5>
                        Unleash Your Inner Explorer
                    </h5>
                    <p>Browse our curated collection of the most liked yachts, and get inspired for your next maritime adventure. Start exploring today – no registration required!</p>
                </Col>

                <Col className={style.colWrapper}>
                    <i className="fa-solid fa-anchor"></i>
                    <h5>Member Privileges</h5>
                    <p>Unlock a world of privileges – from curating your list of favorite yachts to seamless reservations, your journey begins with exclusive member features.</p>
                    <Link to={Path.MemberRegister} className='noLine withArrow'>Register now</Link>
                </Col>

                <Col className={style.colWrapper}>
                    <div className={style.iconHolder}>
                        <i className="fa-solid fa-sailboat"></i>
                    </div>
                    <h5>Captain's Command</h5>
                    <p>Effortlessly manage your fleet – register, create, update, and retire yachts with precision through our user-friendly platform.</p>
                    <Link to={Path.OwnerRegister} className='noLine withArrow'>Register now</Link>
                </Col>
            </Row>
        </Container>
    )
}