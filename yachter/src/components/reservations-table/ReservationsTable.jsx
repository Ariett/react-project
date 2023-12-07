import Table from 'react-bootstrap/Table';

import ReservationRow from './reservation-row/ReservationRow';

import style from "./ReservationsTable.module.scss";

export default function ReservationsTable({
    reservations = []
}) {
    return (
        <div className={style.reservationsWrapper}>
            {reservations.length === 0 && (
                <h2>No reservations to display.</h2>
            )}

            {reservations.length > 0 && (
                <Table responsive className={style.reservationsTable}>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Yacht name</th>
                            <th>Yacht link</th>
                            <th>Start date</th>
                            <th>End date</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {reservations.map((reservation, index) => <ReservationRow key={reservation._id} {...reservation} index={index} />)}
                    </tbody>
                </Table>
            )}
        </div>

    );
}