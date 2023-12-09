import { useEffect, useState } from "react";

import * as likesService from "../../services/likesService";

import YachtList from "../yacht-list/YachtList";

import style from "./MostLikedYachts.module.scss";

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
                    <h2>Most liked</h2>
                    <div className={style.listWrapper}><YachtList initialYachts={mostLiked} /></div>
                </section>
            )}
        </>
    )
}