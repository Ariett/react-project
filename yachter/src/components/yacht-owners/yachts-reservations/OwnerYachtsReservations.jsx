import { useContext, useEffect, useState } from "react"

import AuthContext from "../../../contexts/authContext";
import YatchsContext from "../../../contexts/yachtsContext";

import Hero from "../../hero/Hero"
import ReservationsTable from "../../reservations-table/ReservationsTable"

export default function OwnerYachtsReservations() {
    const { userId } = useContext(AuthContext);
    const { getYachtsOwnerReservations } = useContext(YatchsContext);
    const [ownerYachtsReservations, setOwnerYachtsReservations] = useState([]);

    useEffect(() => {
        setOwnerYachtsReservations(getYachtsOwnerReservations(userId));
    }, [getYachtsOwnerReservations, userId]);

    const heroContent = {
        title: 'Reservations',
        description: 'Manage yachts reservations statuses'
    }

    console.log(ownerYachtsReservations);

    return (
        <div>
            <Hero {...heroContent} />

            <ReservationsTable reservations={ownerYachtsReservations} />
        </div>
    )
}