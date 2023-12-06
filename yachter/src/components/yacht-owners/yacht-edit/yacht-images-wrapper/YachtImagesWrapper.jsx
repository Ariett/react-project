import style from './YachtImagesWrapper.module.scss'

export default function YachtImagesWrapper({
    images,
    deleteHandler
}) {
    const onDeleteClick = (e) => {
        e.preventDefault();
        deleteHandler(e.target.dataset.index);
    };

    return (
        <div className={style.imagesFormRow}>
            {images.length > 0 && images.map((imageUrl, index) => (
                <div className={style.imageWrapper} key={index}>
                    <button className={style.imageWrapperCloseBtn} data-index={index} onClick={onDeleteClick}>X</button>
                    <img src={imageUrl} alt={`image-${index}`} />
                </div>
            ))}
        </div>
    )
}