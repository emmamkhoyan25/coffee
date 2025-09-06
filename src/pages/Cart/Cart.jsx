import styles from './Cart.module.scss';

const Cart = ({ cart }) => {
 
  return (
    <div className={styles.container}>
      <h1>Coffee Basket</h1>
      {cart.length === 0 ? (
        <p className={styles["empty-message"]}>the basket is empty։</p>
      ) : (
        <>
          <ul>
            {cart.map((item, idx) => (
              <li key={idx}>
                <span>{item.name} - {item.size}</span>
                <span>${item.price}</span> 
              </li>
            ))}
          </ul>
          <div className={styles.total}>
          total amount: $
            {cart.reduce((sum, item) => sum + (item.price || 0), 0)}
          </div>
        </>
      )}
    </div>
  );
};
export default Cart;
