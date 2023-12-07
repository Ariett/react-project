import Table from 'react-bootstrap/Table';
import ReservationRow from './reservation-row/ReservationRow';

export default function ReservationsTable({
    reservations = []
}) {

    console.log(reservations);

    return (
        <>
            {reservations.length > 0 && (
                <Table responsive>
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
        </>

    );
}