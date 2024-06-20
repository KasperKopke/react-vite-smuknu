import { useBasket } from "../../hooks/useBasketHook";
import styles from "../../components/basket/basketItem.module.css";
import navStyles from "../Navigation/Navigation.module.css";

const BasketList = () => {
  const { basket, emptyBasket, deleteItem } = useBasket();

  const DebugBasket = ({ basket, deleteItem }) => {
    return (
      <div className={styles.debug}>
        <pre>{JSON.stringify(basket, null, 2)}</pre>
        <button onClick={() => deleteItem(basket._id)}>Fjern Product</button>
      </div>
    );
  };

  console.log(basket.length.toString());

  return (
    <div className={styles.list}>
      {basket.map((item) => {
        return (
          <li key={item} className={navStyles.listItem}>
            <img src={item.image} alt="" />
            <p className={navStyles.productTxt}>{item.title}</p>
            <div className={navStyles.priceTagItem}>
              <p>{item.price}kr</p>
            </div>
          </li>
        );
      })}
      {/*  <button className={styles.emptyBasket} onClick={emptyBasket}>
        Tøm Kurven
      </button> */}
    </div>
  );
};

export default BasketList;
