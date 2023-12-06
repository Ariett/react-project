import { useContext, useEffect, useState } from "react";

import MemberContext from "../../../contexts/memberContext";

import YachtList from "../../yacht-list/YachtList";

export default function MemberFavoriteYachts() {
    const { memberFavoriteYachts } = useContext(MemberContext);
    
    return (
        <>
            <YachtList initialYachts={memberFavoriteYachts} />
        </>
    )
}