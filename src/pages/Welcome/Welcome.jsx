import React from 'react'
import styles from "./Welcome.module.scss"
import { useNavigate } from 'react-router'

const Welcome = () => {
    const navigate=useNavigate();
    return (
        <div className="container">
            <div className={styles.welcome}>
                <img src="/coffee.png"  />
                <div>
                <h2>Fall in Love with Coffee in Blissful Delight!</h2>
                <p>Welcome to our cozy coffee corner, where every cup is a delightful for you.</p>
                <button onClick={()=> {navigate("/home")}}>Get Started</button>
                </div>
            </div>
        </div>
    )
}

export default Welcome