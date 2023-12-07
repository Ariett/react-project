import { useEffect, useState } from "react";

import * as yachtServer from "../../services/yachtService";
import * as likesService from "../../services/likesService";

import YachtList from "../yacht-list/YachtList";

import style from "./MostLikedYachts.module.scss";

export default function MostLikedYachts() {
    const [allYachts, setAllYachts] = useState([]);
    const [allLikes, setAllLikes] = useState([]);
    const [mostLiked, setMostLiked] = useState([]);

    useEffect(() => {
        yachtServer.getAll()
            .then(result => setAllYachts(result));
    }, []);

    useEffect(() => {
        likesService.getAllLikes()
            .then(result => setAllLikes(result));
    }, []);

    useEffect(() => {
        setMostLiked(likesService.getMostLiked(allLikes, allYachts));
    }, [allLikes, allYachts]);

    return (
        <section className={style.mostLikedWrapper}>
            <h2>Most liked</h2>
            {mostLiked.length > 0 && <div className={style.listWrapper}><YachtList initialYachts={mostLiked} /></div>}
        </section>
    )
}