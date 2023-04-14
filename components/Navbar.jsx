import styles from '../src/styles/Navbar.module.css'


const Navbar = () => {
    return (
        <div className={styles.container}>
            <div className={styles.containerNumber}>
                <div className={styles.containerNumberIcon}> 
                    <img className={styles.iconPhone} src="/image/phone.png" alt="" />
                </div>
                <div className={styles.containerInfoNumber}>
                    <span>Compra Agora!</span>
                    <span>995804151</span>
                </div>
            </div>
            <div className={styles.menuNav}>
                <a href="">início</a>
                <a href="">Products</a>
                <a href="">Menu</a>
                <a href="">Eventos</a>
                <a href="">Blog</a>
                <a href="">Contato</a>
            </div>
            <div className={styles.containerCart}>
                <img src="/image/cart.png" alt="" />
                <div>2</div>
            </div>
        </div>
    )
}

export default Navbar;