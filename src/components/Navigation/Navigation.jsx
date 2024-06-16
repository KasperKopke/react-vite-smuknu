import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.css";
import { useState } from "react";
import { IoBasket } from "react-icons/io5";
import { FaBurger } from "react-icons/fa6";

const Navigation = () => {
  const [isNavOpen, setNavOpen] = useState(false);
  const [isBasketOpen, setBasketOpen] = useState(false);

  const handleNav = () => {
    setNavOpen(!isNavOpen);
  };

  const handleBasket = () => {
    setBasketOpen(!isBasketOpen);
  };

  const handleCloseNav = () => {
    setNavOpen(false);
  };

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
            <a href="#" onClick={handleBasket}>
              <IoBasket className={styles.icon} />
            </a>
            <div className={styles.topNumber}>
              <p>0</p>
            </div>
          </div>
        </li>

        <li>
          <a onClick={handleNav} href="#">
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
          <li className={styles.listItem}>
            <img src="./headers/front.jpg" alt="" />
            <p className={styles.productTxt}>
              Forlængende vandafvisende mascara
            </p>
            <div className={styles.priceTagItem}>
              <p>100 kr</p>
            </div>
          </li>

          <div className={styles.priceWrapper}>
            <p className={styles.price}>i alt:</p>
            <p className={`${styles.price} ${styles.priceTag}`}> 100 kr</p>
          </div>
        </ul>
      )}
    </nav>
  );
};

export default Navigation;
