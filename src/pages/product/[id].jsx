import Image from "next/legacy/image";
import styles from "../../styles/Product.module.css"
import { useState } from "react";

const Product = () => {

    const [color, setColor] = useState(1)

    const pizza = {
        id: 1,
        img: "/image/margerita.png",
        name: "Margerita",
        price: 'R$23,90',
        desc: "orem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI."
    }

    return (
        <div className={styles.container}>
            <div className={styles.imgContainer}>
                <Image
                    className={styles.image}
                    src={pizza.img}
                    layout='fill' />
            </div>
            <div className={styles.right}>
                <div className={styles.name}>{pizza.name}</div>
                <div className={styles.price}>{pizza.price}</div>
                <div className={styles.desc}>{pizza.desc}</div>
                <div className={styles.container_size}>
                    <div className={styles.pizza_size} style={{ background: color == 1 ? '#ffcc6f' : '#ffa60015' }} onClick={() => setColor(1)}>
                        <Image className={styles.image_size_1} src={'/image/pizza-size-1.png'} layout="fill" />
                        <span>Pequena</span>
                    </div>
                    <div className={styles.pizza_size} style={{ background: color == 2 ? '#ffcc6f' : '#ffa60015' }} onClick={() => setColor(2)}>
                        <Image className={styles.image_size_2} src={'/image/pizza-size-1.png'} layout="fill" />
                        <span>Média</span>
                    </div>
                    <div className={styles.pizza_size} style={{ background: color == 3 ? '#ffcc6f' : '#ffa60015' }} onClick={() => setColor(3)}>
                        <Image className={styles.image_size_3} src={'/image/pizza-size-1.png'} layout="fill" />
                        <span>Grande</span>
                    </div>
                </div>
                <div className={styles.containerSelect}>
                    <h2>Escolha ingredientes adicionais</h2>
                    <div className={styles.containerInputs}>

                        <div>
                            <input
                                type="checkbox"
                                id="ingredient1"
                                name="ingredient1"
                                value="ingredient1"
                            />
                            <label htmlFor="ingredient1">Borda de catupiri</label>
                        </div>

                        <div>
                            <input
                                type="checkbox"
                                id="ingredient2"
                                name="ingredient2"
                                value="ingredient2"
                            />
                            <label htmlFor="ingredient2">Muçarela extra</label>
                        </div>
                        <div>
                            <input
                                type="checkbox"
                                id="extraIngredient"
                                name="extraIngredient"
                            />
                            <label htmlFor="extraIngredient">Cheddar extra</label>
                        </div>
                    </div>
                </div>

                <div className={styles.container_cart}>
                    <input
                        type="text"
                        id="extraIngredient"
                        name="extraIngredient"
                    />
                    <a href="http://localhost:3000/cart">Carrinho</a>
                </div>

            </div>
        </div >
    )
}
export default Product;