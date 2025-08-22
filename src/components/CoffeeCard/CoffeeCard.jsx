import React, { useEffect } from 'react'
import styles from "./CoffeeCard.module.scss"
import PlusIcon from '../../Icons/PlusIcon'
import { useNavigate } from 'react-router';
const CoffeeCard = ({ coffeeInfo, index }) => {
  const navigate = useNavigate();
  return (

    <div onClick={()=> {navigate(`/detail/${index}`)}} className={styles.coffeeCard}>
      <img src={coffeeInfo.img} alt="" />
      <h2>{coffeeInfo.name}</h2>
      <h3>{coffeeInfo.type}</h3>
      <div>
        <span>$ {coffeeInfo.price}</span><PlusIcon />

      </div>
    </div>
  )
}

export default CoffeeCard