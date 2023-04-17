import Image from 'next/legacy/image';
import styles from '../src/styles/carousel.module.css'
import { useState } from 'react';

const Carousel = () => {

    const [index, setIndex] = useState(0)

    const images = [
        "/image/featured1.png",
        "/image/featured2.png",
        "/image/featured3.png",
    ]

    function handleArrow(direction) {
        if (direction === "1") {
            setIndex(index !== 0 ? index - 1 : 2)
        }
        if (direction === "r") {
            setIndex(index !== 2 ? index + 1 : 0)
        }
    }

    return (
        <div className={styles.container}>
            <div className={styles.arrowContainer} style={{ left: 0 }}>
                <Image className={styles.arrow} src="/image/arrowLeft.png" alt="" layout='fill' objectFit='contain' onClick={() => handleArrow("1")} />
            </div>
            <div className={styles.wrapper} style={{ transform: `translateX(${-100 * index}vw)` }}>
                {
                    images.map((img, i) => (
                        <div className={styles.imgConteiner}>
                            <Image className={styles.img} src={img} key={i} alt="" layout='fill' />
                        </div>
                    ))
                }
            </div>
            <div className={styles.arrowContainer} style={{ right: 0 }}>
                <Image className={styles.arrow} src="/image/arrowRight.png" alt="" layout='fill' objectFit='contain' onClick={() => handleArrow("r")} />
            </div>
        </div>
    )
}

export default Carousel;