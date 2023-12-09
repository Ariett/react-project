import Carousel from 'react-bootstrap/Carousel';

import styles from './CarouselComponent.module.scss'

export default function CarouselComponent({
    images = []
}) {
    return (
        <>
            {images.length > 0 && (
                <Carousel className={styles.carouselComponent}>
                    {images.map((imageUrl, index) => (
                        <Carousel.Item interval={5000} key={index}>
                            <img src={imageUrl} alt="" className={styles.carouselComponentImg} />
                        </Carousel.Item>
                    ))}
                </Carousel>
            )}
        </>
    );
}