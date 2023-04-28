import styles from '../src/styles/PizzaCard.module.css'
import img from '../public/image/margerita.png'
import Image from 'next/legacy/image';

const PizzaCard = () => {
    return (
        <a href='http://localhost:3000/product/213' className={styles.container}>
            <Image className={styles.img} src={img} />
            <div className={styles.name}>MARGERITA</div>
            <div className={styles.price}>$19.90</div>
            <div className={styles.desc}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </div>
        </a>
    )
}

export default PizzaCard;