import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { coffees } from "../../datas/Coffees";
import StarIcons from "../../Icons/StarIcons";
import PlusIcon from "../../Icons/PlusIcon";
import styles from "./Detail.module.scss";

const Detail = ({ isLoggedIn, cart, setCart }) => {
  const { i } = useParams();
  const coffee = coffees[i];
  const navigate = useNavigate();

  const [selectedSize, setSelectedSize] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleAddToCart = () => {
    if (!isLoggedIn) {
      navigate("/login");
      return;
    }
    if (!selectedSize) {
      alert("Խնդրում ենք ընտրել չափսը։");
      return;
    }
    const alreadyInCart = cart.find(
      (item) => item.name === coffee.name && item.size === selectedSize
    );
    if (alreadyInCart) {
      alert("Սուրճը այդ չափսով արդեն զամբյուղում է։");
      return;
    }
    setCart([...cart, { ...coffee, size: selectedSize }]);
    alert("Սուրճը ավելացվեց զամբյուղում։");
  };

  return (
    <div className="container">
      <div className={styles.detail}>
        <img src={coffee.img} alt={coffee.name} />
        <h1>{coffee.name}</h1>
        <h5>{coffee.type}</h5>
        <h4>
          <StarIcons />
          {coffee.rating}
        </h4>
        <h3>Description</h3>
        <p>{coffee.description}</p>
        <h3>Size</h3>
        <div className={styles.sizes}>
          {coffee.size.map((s, idx) => (
            <button
              key={idx}
              className={selectedSize === s ? styles.active : ""}
              onClick={() => setSelectedSize(s)}
            >
              {s}
            </button>
          ))}
        </div>
        <h3>Put in a basket</h3>
        <button onClick={handleAddToCart}>
          <PlusIcon />
        </button>
      </div>
    </div>
  );
};

export default Detail;
