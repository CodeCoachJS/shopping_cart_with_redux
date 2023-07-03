import React, { useEffect } from 'react';
import styles from './HomePage.module.css';
import { addToCart } from '../../slices/cartSlice';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../../slices/productsSlice';

const HomePage = () => {
	const { items, loading } = useSelector((state) => state.products);

	const dispatch = useDispatch();

	useEffect(() => {
		if (!items.length) {
			dispatch(fetchData());
		}
	}, [dispatch, items]);

	return (
		<div>
			<header className={styles.header}>
				<h1>Shopping</h1>
			</header>
			<section className={styles.productContainer}>
				{loading && <h2>Loading Products...</h2>}
				{items.map((product) => (
					<div className={styles.productCard} key={product.id}>
						<p>{product.title}</p>
						<img
							width='100'
							alt={product.title}
							src={product.image}
						/>
						<div>
							<small>${product.price}</small>
						</div>

						<button
							onClick={() => dispatch(addToCart(product))}
							className={styles.shopNow}
						>
							Buy
						</button>
					</div>
				))}
			</section>
		</div>
	);
};

export default HomePage;
