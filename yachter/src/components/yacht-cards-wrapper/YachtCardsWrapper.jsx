import { useContext } from 'react';
import { Link } from 'react-router-dom';

import Button from 'react-bootstrap/esm/Button';

import AuthContext from '../../contexts/authContext';
import Path from '../../paths';

import styles from './YachtCardsWrapper.module.scss';

export default function YachtCardsWrapper({
    children,
    wrapperPadding
}) {
    const { isYachtsOwner } = useContext(AuthContext);

    let wrapperClasses = styles.yachtsWrapper;
    wrapperClasses += (children.length > 0) ? '' : ` ${styles.textHolder}`;
    wrapperClasses += wrapperPadding ? ` ${styles.withPadding}` : '';


    return (
        <section className={wrapperClasses}>
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