import { createContext, useState } from "react";

export const BasketContextProvider = ({ children }) => {
  const [basket, setBasket] = useState([]);

  const addItem = (item) => {
    let isInBasket = basket.find((i) => i._id === item._id);

    console.log(item);

    console.log("is it in basket", isInBasket);

    if (isInBasket) {
      isInBasket.quantity = isInBasket.quantity + item.quantity;
      setBasket([...basket]);
    } else {
      setBasket([...basket, item]);
    }
  };

  const emptyBasket = () => {
    setBasket([]);
  };

  const deleteItem = (id) => {
    setBasket(basket.filter((item) => item._id !== id));
  };

  let exportValues = {
    basket,
    addItem,
    emptyBasket,
    deleteItem,
  };

  return (
    <BasketContext.Provider value={exportValues}>
      {children}
    </BasketContext.Provider>
  );
};

export const BasketContext = createContext();
