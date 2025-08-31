import React, { useState } from 'react'
import { coffees } from '../../datas/Coffees';
import styles from "./Home.module.scss"
import CoffeeCard from '../../components/CoffeeCard/CoffeeCard';


const Home = () => {

    const [search, setSearch] = useState("");
    const [coffeesArr, setCoffeesArr] = useState(coffees);
    return (
        <div className={"container " + styles.home}>
            <input type="text" value={search}
                onChange={e => setSearch(e.target.value)}
                onKeyDown={(e) => {
                    if (e.code == "Enter") {
                        setCoffeesArr(coffees.filter(coffee => coffee.name.toLowerCase().includes(search.toLowerCase())))
                    }
                }} />
            <div className={styles.coffee_grid}>
               
                {coffeesArr.length ? coffeesArr.map((coffee, i) =>
                 <CoffeeCard key={i} coffeeInfo={coffee} index={i} />):"We dont have such an assortement"}
            </div>

        </div>
    )
}

export default Home