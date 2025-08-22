import React, { useEffect } from 'react'
import { coffees } from '../../datas/Coffees';
import styles from "./Home.module.scss"
import CoffeeCard from '../../components/CoffeeCard/CoffeeCard';

const Home = () => {
    useEffect(() => (console.log(coffees)), []);
    return (
        <div className={"container "+ styles.home}>
            <div className={styles.coffee_grid}>
                {coffees.map((coffee,i) => <CoffeeCard key={i} coffeeInfo={coffee} index={i} />)}
            </div>

        </div>
    )
}

export default Home