import { useContext, useEffect, useState } from "react"

import AuthContext from "../../../contexts/authContext"
import * as yachtService from '../../../services/yachtService'

import Hero from "../../hero/Hero";
import YachtCardsWrapper from "../../yacht-cards-wrapper/YachtCardsWrapper"
import YachtCard from "../../yacht-card/YachtCard";


export default function OwnerYachts() {
    const [provYachts, setProvYachts] = useState([]);
    const { userId } = useContext(AuthContext);

    useEffect(() => {
        yachtService.getAllByYachtOwnerId(userId)
            .then(result => setProvYachts(result))
            .catch(err => {
                console.log(err);
            });
    }, []);
    
    const deleteYachtHandler = async (_id, name) => {
        const hasConfirmed = confirm(`Are you sure you want to delete ${name}`);
        if (hasConfirmed) {
            await yachtService.remove(_id);
            setProvYachts(provYachts.filter(yacht => yacht._id !== _id));
        }
    };

    const heroContent = {
        title: "My Yachts",
        description: "Here you can manage your yachts"
    }

    return (
        <>
            <Hero {...heroContent} />

            <YachtCardsWrapper wrapperPadding={true}>
                {provYachts.map(yacht => (
                    <YachtCard key={yacht._id} {...yacht} deleteYachtHandler={deleteYachtHandler} />
                ))}
            </YachtCardsWrapper>
        </>
    )
}