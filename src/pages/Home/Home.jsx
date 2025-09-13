import React, { useState } from 'react'
import { coffees } from '../../datas/Coffees'
import styles from './Home.module.scss'
import CoffeeCard from '../../components/CoffeeCard/CoffeeCard'

const Home = () => {
  const [search, setSearch] = useState('')
  const [coffeesArr, setCoffeesArr] = useState(coffees)

  const handleSearch = () => {
    const filtered = coffees.filter((coffee) =>
      coffee.name.toLowerCase().includes(search.toLowerCase())
    )
    setCoffeesArr(filtered)
  }

  return (
    <div className={`container ${styles.home}`}>
      <div className={styles.inputWrapper}>
        <input
          type="text"
          value={search}
          placeholder="Search coffee... ⏎"
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={(e) => {
            if (e.code === 'Enter') handleSearch()
          }}
        />
        <span className={styles.enterIcon}>⏎</span>
      </div>

      <div className={styles.coffee_grid}>
        {coffeesArr.length > 0 ? (
          coffeesArr.map((coffee, i) => (
            <CoffeeCard key={i} coffeeInfo={coffee} index={i} />
          ))
        ) : (
          <p className={styles.noResult}>We don't have such an assortment.</p>
        )}
      </div>
    </div>
  )
}

export default Home
