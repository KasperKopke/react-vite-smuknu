import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.css";
import { useState } from "react";
import { IoBasket } from "react-icons/io5";
import { FaBurger } from "react-icons/fa6";

const Navigation = () => {
  const [isNavOpen, setNavOpen] = useState(false);
  const [count, setCount] = useState(0);

  const handleNav = () => {
    setNavOpen(!isNavOpen);
  };

  const handleCloseNav = () => {
    setNavOpen(false);
  };

  const handleIncrement = () => {
    setCount(count + 1);
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
          <a href="#" onClick={handleIncrement}>
            +1
          </a>
        </li>
        <li>
          <div className={styles.topNumberWrapper}>
            <a href="#">
              <IoBasket className={styles.icon} />
            </a>
            <div className={styles.topNumber}>
              <p>{count}</p>
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
    </nav>
  );
};

export default Navigation;
