import Carousel from 'react-bootstrap/Carousel';

import styles from './CarouselComponent.module.scss'

export default function CarouselComponent(props) {
    return (
        <Carousel className={styles.carouselComponent}>
            {props.images.map((imageUrl, index) => (
                <Carousel.Item interval={5000} key={index}>
                    <img src={imageUrl} alt="" className={styles.carouselComponentImg} />
                    {/* <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption> */}
                </Carousel.Item>
            ))}
        </Carousel>
    );
}