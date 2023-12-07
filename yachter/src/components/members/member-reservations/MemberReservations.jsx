import { useContext, useEffect, useState } from "react"

import MemberContext from "../../../contexts/memberContext";

import Hero from "../../hero/Hero"
import ReservationsTable from "../../reservations-table/ReservationsTable"

export default function MemberReservations() {
    const { memberReservations } = useContext(MemberContext);
    const [reservations, setReservations] = useState([]);

    useEffect(() => {
        setReservations(memberReservations);
    }, [memberReservations]);

    const heroContent = {
        title: 'Reservations',
        description: 'Manage your reservations'
    }

    return (
        <>
            <Hero {...heroContent} />

            <ReservationsTable reservations={reservations} />
        </>
    )
}