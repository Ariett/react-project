import style from "./YachtOwnerData.module.scss";

export default function YachtOwnerData({
    author
}) {

    console.log('author', author);


    return (
        <section className={style.ownerSection}>
            <h2>About {author.companyName}</h2>
            <div className={style.ownerDescription}>
                {author.companyDescription}
            </div>
        </section>
    )
}