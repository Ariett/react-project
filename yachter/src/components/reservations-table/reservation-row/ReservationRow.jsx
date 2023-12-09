import { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../../contexts/authContext";

import { formatDate } from "../../../utils/generalUtils";
import MemberActions from "./member-actions/MemberActions";
import YachtsOwnerActions from "./owner-actions/YachtsOwnerActions";

export default function ReservationRow({
    _id,
    _ownerId,
    yachtId,
    yachtName,
    yachtOwnerId,
    status,
    startDate,
    endDate,
    _createdOn,
    index
}) {
    const { userId } = useContext(AuthContext);


    return (
        <tr data-status={status.toLowerCase()}>
            <td>{index + 1}</td>
            <td>{yachtName}</td>
            <td><Link to={`/yachts/${yachtId}`}>Yacht details</Link></td>
            <td>{formatDate(startDate)}</td>
            <td>{formatDate(endDate)}</td>
            <td>{status}</td>

            <td>
                {status === "Created" && (
                    <>
                        {userId === _ownerId && (
                            <MemberActions reservationId={_id} />
                        )}

                        {userId === yachtOwnerId && (
                            <YachtsOwnerActions
                                reservationId={_id}
                                reservationOwnerId={_ownerId}
                            />
                        )}
                    </>
                )}

            </td>
        </tr>
    )
}