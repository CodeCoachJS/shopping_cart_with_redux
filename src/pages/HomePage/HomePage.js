import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../ducks/shopping.ducks';
import styles from './HomePage.module.css';

const HomePage = () => {
    const dispatch = useDispatch();
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const fetchProducts = async () => {
            setIsLoading(true);
            window
                .fetch('https://fakestoreapi.com/products?limit=10')
                .then((res) => res.json())
                .then((json) => {
                    setIsLoading(false);
                    setProducts(json);
                })
                .catch((err) => {
                    setIsLoading(false);
                    throw err;
                });
        };
        fetchProducts();
    }, []);

    return (
        <div>
            <header className={styles.header}>
                <h1>Shopping</h1>
            </header>
            <section className={styles.productContainer}>
                {isLoading && <h2>Loading Products...</h2>}
                {products.map((product) => (
                    <div className={styles.productCard} key={product.id}>
                        <p>{product.title}</p>
                        <img
                            width="100"
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
