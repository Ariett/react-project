export default function YachtOwnerData({
    author
}) {
    return (
        <section>
            <h2>About {author?.companyName}</h2>
            <div>
                {author?.companyDescription}
            </div>
        </section>
    )
}