import { useEffect, useState } from 'react';
import styles from '../src/styles/Navbar.module.css'


const Navbar = () => {

    const [scrollParaBaixo, setScrollParaBaixo] = useState(false);

    useEffect(() => {
        function handleScroll() {
            const scrollAtual = window.pageYOffset;
            const scrollAnterior = scrollRef.current || 0;

            if (scrollAtual > scrollAnterior) {
                setScrollParaBaixo(true);
            } else {
                setScrollParaBaixo(false);
            }

            scrollRef.current = scrollAtual;
        }

        const scrollRef = { current: window.pageYOffset };
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={styles.container} style={{
            transform: scrollParaBaixo ? 'translateY(-100%)' : 'translateY(0%)'
        }}>
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
                <a href="">Produtos</a>
                <a href="">Menu</a>
                <a href="">Eventos</a>
                <a href="">Blog</a>
                <a href="">Contato</a>
            </div>
            <div className={styles.containerCart}>
                <div className={styles.containerCartInfo}>
                    <img src="/image/cart.png" alt="" />
                    <div>2</div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;