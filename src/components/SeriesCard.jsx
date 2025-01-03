import styles from "./Netflix.module.css";
// import styled from "styled-components";

export const SeriesCard = ({ data }) => {
  const { img_url, name, rating, description, cast, genre, watch_url } = data;


  const btn_style = {
    padding: "1.2rem 2.4rem",
    border: "none",
    fontSize: "1.6rem",
    backgroundColor: `${rating >= 8.5 ? "#7dcea0" : "#f7dcbf"}`,
    color: "var( --bg-color)",
    fontWeight: "bold",
    cursor: "pointer",
  };

  const ratingClass = rating >= 8.5 ? styles.super_hit : styles.average;
  // const paddingStyle = { margin: "1.2rem 0" };

  return (
    <li className={styles.card}>
      <div>
      <div>
        <img src={img_url} alt={name} width="40%" height="40%" />
      </div>
      </div>
      <div className={styles["card-content"] }>
        <h2>Name:{name}</h2>

        <h3 style={{ margin: "1.2rem 0" }}>
          Rating:
          <span className={`${styles.rating } ${ratingClass}`}>{rating}</span>
        </h3>

        <p style={paddingStyle}>summary:{description}</p>

        <p style={paddingStyle}>Genre:{genre.join(", ")}</p>
        <p style={paddingStyle}>Cast:{cast.join(", ")}</p>
        <a href={watch_url} target="_blank">
          <button style={btn_style}>watch now</button>
          {/* inline css with style keyword(props) */}
        </a>
      </div>
    </li>
  );
};
