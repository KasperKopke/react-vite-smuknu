import { useState, useEffect } from "react";
import styles from "./reviews.module.css";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  const getReviews = async () => {
    const response = await fetch("https://smuknu.webmcdm.dk/reviews");
    const data = await response.json();

    setReviews(data);
  };

  useEffect(() => {
    getReviews();
  }, []);

  return (
    <div className={styles.reviewWrapper}>
      {reviews.map((review) => {
        return (
          <article key={review._id} className={styles.review}>
            <img className={styles.reviewImage} src={review.image} alt="" />
            <p className={styles.disc}>{review.description}</p>
            <h3>{review.name}</h3>
            <p>{review.byline}</p>
            <hr />
          </article>
        );
      })}
    </div>
  );
};

export default Reviews;
