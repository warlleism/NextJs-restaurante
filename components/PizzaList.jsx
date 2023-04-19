import style from '../src/styles/PizzaList.module.css'
import PizzaCard from './PizzaCard';

const PizzaList = () => {
    return (
        <div className={style.container}>
            <h1 className={style.title}>MELHOR PIZZA DA CIDADE</h1>
            <p className={style.desc}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it to make a
                type specimen book. It has survived not only five centuries, but also the
                leap into electronic typesetting, remaining essentially unchanged. 
            </p>
            <div className={style.wrapper}>
                <PizzaCard />
                <PizzaCard />
                <PizzaCard />
                <PizzaCard />
                <PizzaCard />
                <PizzaCard />
                <PizzaCard />
                <PizzaCard />
            </div>
        </div>
    )
}

export default PizzaList;