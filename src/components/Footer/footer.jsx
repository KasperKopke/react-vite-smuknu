import styles from "./footer.module.css";
import {
  FaFacebook,
  FaInstagram,
  FaPinterest,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  const socialLinkComp = (socialLinkIcon) => {
    return (
      <li>
        <a href="#">{socialLinkIcon}</a>
      </li>
    );
  };

  return (
    <div className={styles.wrapper}>
      <ul className={styles.ul}>
        <li>{socialLinkComp(<FaFacebook />)}</li>
        <li>{socialLinkComp(<FaInstagram />)}</li>
        <li>{socialLinkComp(<FaPinterest />)}</li>
        <li>{socialLinkComp(<FaTwitter />)}</li>
        <li>{socialLinkComp(<FaYoutube />)}</li>
      </ul>
      <p>mail@smuk.nu</p>
      <p>+45 123 345 33</p>
    </div>
  );
};

export default Footer;
