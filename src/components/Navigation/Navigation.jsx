import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.css";
import { useState, useEffect } from "react";
import { IoBasket } from "react-icons/io5";
import { FaBurger } from "react-icons/fa6";
import BasketList from "../basket/basketListItem";
import { useBasket } from "../../hooks/useBasketHook";

const Navigation = () => {
  const [isNavOpen, setNavOpen] = useState(false);
  const [isBasketOpen, setBasketOpen] = useState(false);
  const { basket } = useBasket();

  const handleNav = (e) => {
    e.preventDefault();
    setNavOpen(!isNavOpen);
    setBasketOpen(false);
  };

  const handleBasket = (e) => {
    setNavOpen(false);
    e.preventDefault();
    setBasketOpen(!isBasketOpen);
  };
  console.log(basket.length.toString());

  useEffect(() => {
    if (basket.length > 0) {
      setBasketOpen(true);
      setNavOpen(false);
    }
  }, [basket]);

  const handleCloseNav = () => {
    setNavOpen(false);
  };

  const totalPrice = basket.reduce((acc, item) => acc + item.price, 0);

  return (
    <nav className={styles.nav}>
      <ul className={styles.navTopUl}>
        <li>
          <a href="/">
            <img
              className={styles.smukNuLogo}
              src="../../public/smuknu_logo.png"
              alt="smuknu-logo"
            />
          </a>
        </li>

        <li>
          <div className={styles.topNumberWrapper}>
            <a href="#" onClick={(e) => handleBasket(e)}>
              <IoBasket className={styles.icon} />
            </a>
            <div className={styles.topNumber}>
              <p>{basket.length}</p>
            </div>
          </div>
        </li>

        <li>
          <a onClick={(e) => handleNav(e)} href="#">
            <FaBurger className={styles.icon} />
          </a>
        </li>
      </ul>

      {isNavOpen && (
        <ul className={styles.ul}>
          <NavLink className={styles.linkItems} onClick={handleCloseNav} to="/">
            FORSIDE
          </NavLink>
          <NavLink
            className={styles.linkItems}
            onClick={handleCloseNav}
            to="/Produkter"
          >
            VORES PRODUKTER
          </NavLink>
          <NavLink
            className={styles.linkItems}
            onClick={handleCloseNav}
            to="/spoerg-om-sundhed"
          >
            SPØRG OM SUNDHED
          </NavLink>

          <NavLink
            className={styles.linkItems}
            onClick={handleCloseNav}
            to="/bliv-medlem"
          >
            BLIV MEDLEM
          </NavLink>
        </ul>
      )}
      {isBasketOpen && (
        <ul className={styles.ulList}>
          <BasketList></BasketList>

          <div className={styles.priceWrapper}>
            <p className={styles.price}>i alt:</p>
            <p className={`${styles.price} ${styles.priceTag}`}></p>
            <p>{totalPrice} kr.</p>
          </div>
        </ul>
      )}
    </nav>
  );
};

export default Navigation;
