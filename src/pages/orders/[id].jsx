import Image from "next/legacy/image";
import styles from "../../styles/Order.module.css"

const Order = () => {
    return (
        <div className={styles.container}>
            <div className={styles.left}>

                <div className={styles.leftContent}>

                    <div className={styles.containerInfo}>
                        <span>ID pedido</span>
                        <span>133323412</span>
                        <img className={styles.img} src={"/image/pagamento.png"} />
                        <span>Pagamento</span>
                        <img className={styles.img} src={"/image/check.png"} style={{ maxWidth: "14%" }} />
                    </div>

                    <div className={styles.containerInfo}>
                        <span>Cliente</span>
                        <span>Warllei Martins</span>
                        <img className={styles.img} src={"/image/preparando.png"} />
                        <span>Preparando</span>
                        <img className={styles.img} src={"/image/check.png"} style={{ maxWidth: "14%" }} />
                    </div>

                    <div className={styles.containerInfo}>
                        <span>Endereço</span>
                        <span>Av. São Pedro</span>
                        <img className={styles.img} src={"/image/caminho.png"} />
                        <span>A caminho</span>
                        <img className={styles.img} src={"/image/check.png"} style={{ maxWidth: "14%" }} />
                    </div>

                    <div className={styles.containerInfo}>
                        <span>Total</span>
                        <span>R$75,00</span>
                        <img className={styles.img} src={"/image/entregue.png"} />
                        <span>Entregue</span>
                        <img className={styles.img} src={"/image/check.png"} style={{ maxWidth: "14%" }} />
                    </div>

                </div>

            </div>
            <div className={styles.rigth}>
                <div className={styles.containerCheckout}>
                    <div>Total</div>
                    <div><strong>Subtotal:</strong> R$79,60</div>
                    <div><strong>Desconto:</strong> R$0,00</div>
                    <div><strong>Total:</strong> R$75,00</div>
                    <div>PEDIDO</div>
                </div>
            </div>
        </div>
    )
}

export default Order;