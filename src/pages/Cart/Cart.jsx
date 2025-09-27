import styles from './Cart.module.scss';
import { useCart } from '../../context/CartContext';

const Cart = () => {
  const { cart, removeFromCart } = useCart();

  const getTotal = () => {
    return cart.reduce((sum, item) => sum + (item.price || 0), 0).toFixed(2);
  };

  return (
    <div className={styles.container}>
      <h1>Coffee Basket 🧺</h1>

      {cart.length === 0 ? (
        <p className={styles.emptyMessage}>Your basket is empty 😕</p>
      ) : (
        <>
          <ul className={styles.cartList}>
            {cart.map((item) => (
              <li key={`${item.id}-${item.size || 'default'}`} className={styles.cartItem}>
                <div>
                  <span className={styles.name}>{item.name}</span>
                  {item.size && <span className={styles.size}> ({item.size})</span>}
                </div>
                <div>
                  <span className={styles.price}>${item.price.toFixed(2)}</span>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className={styles.removeBtn}
                    aria-label={`Remove ${item.name}`}
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>

          <div className={styles.total}>
            <strong>Total amount:</strong> ${getTotal()}
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
