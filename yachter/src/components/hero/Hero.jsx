import styles from './Hero.module.scss'

export default function Hero({
    title,
    description = ''
}) {
    return (
        <section className={styles.heroSection}>
            <div className={styles.heroTextWrapper}>
                <h1>{title}</h1>
                {description && (
                    <p>{description}</p>
                )}
            </div>
        </section>
    )
}