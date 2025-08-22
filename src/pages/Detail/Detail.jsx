import React from 'react'
import { useParams } from 'react-router'
import { coffees } from '../../datas/Coffees';
import StarIcons from '../../Icons/StarIcons';
import styles from "./Detail.module.scss"
import BicycleIcon from '../../Icons/BicycleIcon';

const Detail = () => {
    const { i } = useParams();
    const coffee = coffees[i]
    return (
        <div className="container">Detail
            <div>
                <img src={coffee.img} alt="" />
                <h1>{coffee.name}</h1>
                <h5>{coffee.type}</h5>
            <h4><StarIcons/>{coffee.rating}</h4>
           <h3>Description </h3> <p>  {coffee.description}</p>
            <h3>Size</h3><h6>{coffee.size}</h6>
            </div>
        </div>
    )
}

export default Detail