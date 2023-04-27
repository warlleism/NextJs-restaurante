import Image from "next/legacy/image";
import styles from "../styles/Cart.module.css"

const Cart = () => {
    return (
        <div className={styles.container}>
            <div className={styles.left}>
                
                <div className={styles.leftContent}>
                    <div className={styles.containerInfo}>
                        <span>Produto</span>
                        <img className={styles.img} src={"/image/margerita.png"} />
                    </div>
                    <div className={styles.containerInfo}>
                        <span>Nome</span>
                        <div style={{ color: "#ff6600", fontWeight: 700 }}>Margerita</div>
                    </div>
                    <div className={styles.containerInfo}>
                        <span>Extra</span>
                        <div>Borda de catupiri, muçarela extra</div>
                    </div>
                    <div className={styles.containerInfo}>
                        <span>Preço</span>
                        <div>R$39,90</div>
                    </div>
                    <div className={styles.containerInfo}>
                        <span>Quantidade</span>
                        <div>2</div>
                    </div>
                    <div className={styles.containerInfo}>
                        <span>Total</span>
                        <div style={{ color: "#ff6600", fontWeight: 900 }}>R$75,00</div>
                    </div>
                </div>

                <div className={styles.leftContent}>
                    <div className={styles.containerInfo}>
                        <span>Produto</span>
                        <img className={styles.img} src={"/image/margerita.png"} />
                    </div>
                    <div className={styles.containerInfo}>
                        <span>Nome</span>
                        <div style={{ color: "#ff6600", fontWeight: 700 }}>Margerita</div>
                    </div>
                    <div className={styles.containerInfo}>
                        <span>Extra</span>
                        <div>Borda de catupiri, muçarela extra</div>
                    </div>
                    <div className={styles.containerInfo}>
                        <span>Preço</span>
                        <div>R$39,90</div>
                    </div>
                    <div className={styles.containerInfo}>
                        <span>Quantidade</span>
                        <div>2</div>
                    </div>
                    <div className={styles.containerInfo}>
                        <span>Total</span>
                        <div style={{ color: "#ff6600", fontWeight: 900 }}>R$75,00</div>
                    </div>
                </div>

                <div className={styles.leftContent}>
                    <div className={styles.containerInfo}>
                        <span>Produto</span>
                        <img className={styles.img} src={"/image/margerita.png"} />
                    </div>
                    <div className={styles.containerInfo}>
                        <span>Nome</span>
                        <div style={{ color: "#ff6600", fontWeight: 700 }}>Margerita</div>
                    </div>
                    <div className={styles.containerInfo}>
                        <span>Extra</span>
                        <div>Borda de catupiri, muçarela extra</div>
                    </div>
                    <div className={styles.containerInfo}>
                        <span>Preço</span>
                        <div>R$39,90</div>
                    </div>
                    <div className={styles.containerInfo}>
                        <span>Quantidade</span>
                        <div>2</div>
                    </div>
                    <div className={styles.containerInfo}>
                        <span>Total</span>
                        <div style={{ color: "#ff6600", fontWeight: 900 }}>R$75,00</div>
                    </div>
                </div>

            </div>
            <div className={styles.rigth}>
                <div className={styles.containerCheckout}>
                    <div>Total</div>
                    <div><strong>Subtotal:</strong> R$79,60</div>
                    <div><strong>Desconto:</strong> R$0,00</div>
                    <div><strong>Total:</strong> R$75,00</div>
                    <div>CHECKOUT</div>
                </div>
            </div>
        </div>
    )
}

export default Cart;