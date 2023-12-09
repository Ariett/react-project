import { useEffect, useState } from "react";

import { Row, Col } from 'react-bootstrap';

import * as yachtService from "../../../services/yachtService";
import YachtList from "../../yacht-list/YachtList";

export default function RelatedYachts({
    type = "all",
    excludedYachtId = false
}) {
    const [relatedYachts, setRelatedYachts] = useState([]);

    useEffect(() => {
        yachtService.getYachtsByType(type, excludedYachtId)
            .then(result => setRelatedYachts(result));
    }, [type, excludedYachtId]);

    return (
        <>
            {relatedYachts.length > 0 && (
                <Row className="marginTLg">
                    <Col>
                        <h2>Related yachts</h2>
                        <YachtList initialYachts={relatedYachts} wrapperPadding={false} />
                    </Col>
                </Row>
            )}
        </>
    )
}