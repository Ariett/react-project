import { useContext } from 'react';
import { Link } from 'react-router-dom';

import Button from 'react-bootstrap/esm/Button';

import AuthContext from '../../contexts/authContext';
import Path from '../../paths';

import styles from './YachtCardsWrapper.module.scss';

export default function YachtCardsWrapper({
    children
}) {
    const { isYachtsOwner } = useContext(AuthContext);

    return (
        <section className={(children.length > 0) ? styles.yachtsHolder : styles.textHolder}>
            {children.length === 0 && (
                <>
                    <h2>No yachts to display.</h2>
                    {isYachtsOwner && (
                        <Button as={Link} to={Path.OwnerYachtsCreate}>Add new yacht</Button>
                    )}
                </>
            )}

            {children.length > 0 && children}
        </section>
    )
}