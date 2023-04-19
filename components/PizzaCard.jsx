import styles from '../src/styles/PizzaCard.module.css'
import img from '../public/image/margerita.png'
import Image from 'next/legacy/image';

const PizzaCard = () => {
    return (
        <div className={styles.container}>
            <Image className={styles.img} src={img} />
            <div className={styles.name}>MARGERITA</div>
            <div className={styles.price}>$19.90</div>
            <div className={styles.desc}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </div>
        </div>
    )
}

export default PizzaCard;