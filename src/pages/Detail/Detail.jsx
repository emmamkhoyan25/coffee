import React, { useEffect } from 'react'
import {  useNavigate, useParams } from 'react-router'
import { coffees } from '../../datas/Coffees';
import StarIcons from '../../Icons/StarIcons';
import styles from "./Detail.module.scss"
import PlusIcon from './../../Icons/PlusIcon';

const Detail = () => {
    const { i } = useParams();
    const coffee = coffees[i]
  const navigate = useNavigate();
  useEffect(()=>{
    window.scrollTo(0,0);
  },[])
    return (
        <div className="container">
            <div className={styles.detail} >
                <img src={coffee.img} alt="" />
                <h1>{coffee.name}</h1>
                <h5>{coffee.type}</h5>
                <h4><StarIcons />{coffee.rating}</h4>
                <h3>Description </h3> <p>  {coffee.description}</p>
                <h3>Size</h3><h6>{coffee.size}</h6>
                <h3>Put in a basket</h3>
              <button  onClick={() => { navigate("/login") }}> <PlusIcon  /></button> 
            </div>
        </div>
    )
}

export default Detail