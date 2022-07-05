import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleCart, removeFromCart } from '../../ducks/shopping.ducks';
import styles from './ShoppingCart.module.css';

const ShoppingCart = () => {
    const dispatch = useDispatch();
    const { cart } = useSelector((state) => state);

    if (!cart.isOpen) {
        return <></>;
    }

    const { items = {} } = cart;
    const total = Object.keys(items).reduce((acc, cur) => {
        acc += items[cur].price * (items[cur].qty || 1);
        return acc;
    }, 0);

    return (
        <div className={styles.shoppingCart}>
            <div
                className={styles.closeIcon}
                onClick={() => dispatch(toggleCart(false))}
            >
                X
            </div>
            <h2>Items</h2>
            {Object.values(items).map((item) => (
                <div key={item.id}>
                    <p>{item.title}</p>
                    <img width="100" alt={item.title} src={item.image} />
                    <div>
                        <small>${item.price}</small>
                        <small>
                            <b> QTY: {item.qty}</b>
                        </small>
                    </div>

                    <button
                        data-testid={`remove-item${item.id}`}
                        onClick={() => dispatch(removeFromCart(item.id))}
                    >
                        Remove
                    </button>
                </div>
            ))}
            <h2>Total: ${total.toFixed(2)}</h2>
        </div>
    );
};

export default ShoppingCart;
