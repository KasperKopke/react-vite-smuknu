import { useState, useEffect } from "react";
import styles from "./products.module.css";
import { useBasket } from "../../hooks/useBasketHook";

const Products = () => {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const response = await fetch("https://smuknu.webmcdm.dk/products");
    const data = await response.json();

    setProducts(data);
  };

  useEffect(() => {
    getProducts();
  }, []);

  const { basket, addItem } = useBasket();

  const addToBasket = (product) => () => {
    addItem({
      "title": product.title,
      "price": product.price,
      "image": product.image,

      "_id": product._id,
      "quantity": 1,
    });
  };

  return (
    <div className={styles.wrapper}>
      {products.map((product) => {
        return (
          <div className={styles.product} key={product._id}>
            <div className={styles.imageWrapper}>
              <img className={styles.productImage} src={product.image} alt="" />
              {product.discountInPercent > 0 && (
                <div className={styles.discount}>
                  <p>{product.discountInPercent}%</p>
                  <p>Rabat</p>
                </div>
              )}
            </div>
            <div className={styles.bottomSection}>
              <h3 className={styles.productTitle}>{product.title}</h3>
              <div className={styles.bottomProduct}>
                <p className={styles.price}>{product.price} kr.</p>
                <button
                  onClick={addToBasket(product)}
                  className={styles.buyBtn}
                >
                  Køb
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Products;
