import React from 'react';
import styles from './ShoppingCart.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart, closeCart } from '../../slices/cartSlice';

const ShoppingCart = () => {
	const items = useSelector((state) => state.cart.cart);
	const isOpen = useSelector((state) => state.cart.cartOpen);
	const dispatch = useDispatch();

	if (!isOpen) {
		return <></>;
	}

	const total = items.reduce(
		(acc, item) => acc + item.price * item.quantity,
		0
	);

	return (
		<div className={styles.shoppingCart}>
			<div
				className={styles.closeIcon}
				onClick={() => dispatch(closeCart())}
			>
				X
			</div>
			<h2>Items</h2>
			{items.map((item, i) => (
				<div key={`${item.id}${i}`}>
					<p>{item.title}</p>
					<img width='100' alt={item.title} src={item.image} />
					<div>
						<small>${item.price}</small>
					</div>

					<button onClick={() => dispatch(removeFromCart(item.id))}>
						Remove
					</button>
				</div>
			))}
			<h2>Total: ${total.toFixed(2)}</h2>
		</div>
	);
};

export default ShoppingCart;
