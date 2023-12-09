import { useEffect, useState } from "react";

import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import * as likesService from "../../services/likesService";

import YachtList from "../yacht-list/YachtList";

import style from "./MostLikedYachts.module.scss";
import Path from "../../paths";

export default function MostLikedYachts() {
    const [mostLiked, setMostLiked] = useState([]);

    useEffect(() => {
        likesService.getMostLiked()
            .then(result => setMostLiked(result));
    }, []);

    return (
        <>
            {mostLiked.length > 0 && (
                <section className={style.mostLikedWrapper}>
                    <h2>Our best yachts</h2>
                    <div className={style.listWrapper}><YachtList initialYachts={mostLiked} /></div>

                    <div style={{textAlign: "center"}}>
                        <Button variant="primary" as={Link} to={Path.AllYachts} className="centeredBtn">View all</Button>
                    </div>
                </section>
            )}
        </>
    )
}