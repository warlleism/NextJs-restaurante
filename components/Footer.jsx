import Image from 'next/legacy/image';
import style from '../src/styles/Footer.module.css'
import img from '../public/image/vinho.png'

const Footer = () => {
    return (
        <div className={style.container}>
            <div className={style.container1}>
                <Image src={img} className={style.img} layout='fill' />
            </div>
            <div className={style.container2}>

                <div className={style.text1}>
                    Bem-vindo à nossa pizzaria! Nós somos apaixonados por pizza.
                </div>
                <div className={style.text}>
                    <div className={style.title}>ENDEREÇO</div>
                    <div className={style.content}>R. Itaboraí - Vila Velha, ES, 29102-195</div>
                    <div className={style.content}>R. Itabaiana, 343 - Vila Velha, ES, 29102-290</div>
                    <div className={style.content}>R. Otávio Queiroz, 28 - Vila Velha, ES, 29102-570</div>
                    <div className={style.content}>R. Itabapoana, 13 - Praia de Itaparica, Vila Velha - ES, 29102-020</div>
                </div>
                <div className={style.text}>
                    <div className={style.title}>HORARIOS</div>
                    <div className={style.content}>SEGUNDA - SEXTA 19:00 - 20:00</div>
                    <div className={style.content}>SABADO- DOMINGO 19:00 - 22:00</div>
                </div>

            </div>
        </div>
    )
}

export default Footer;