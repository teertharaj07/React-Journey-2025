import styles from "./Netflix.module.css";
import styled from "styled-components";

export const SeriesCard = ({ data }) => {
  const { img_url, name, rating, description, cast, genre, watch_url } = data;

  // const btn_style={
  //   padding: "1.2rem 2.4rem",
  //   border: "none",
  //   fontSize: "1.6rem",
  //   backgroundColor: `${ rating >= 8.5 ? "#7dcea0" : "#f7dc6f"}`,
  //   color: "var( --bg-color)",
  //   fontWeight: "bold",
  //   cursor: "pointer",
  //   // backgroundColor:"blue",
  // }

  // *using object

  // const ButtonTeerth = styled.button(

  //   {
  //     padding: "1.2rem 2.4rem",
  //     border: "none",
  //     fontSize: "1.6rem",
  //     backgroundColor: `${ rating >= 8.5 ? "#7dcea0" : "#f7dc6f"}`,
  //     color: "var( --bg-color)",
  //     fontWeight: "bold",
  //     cursor: "pointer",
  //     // backgroundColor:"blue",
  //   }

  // );

  //*using template literls-----with dynamic value
  const ButtonTeerth = styled.button`
    padding: 1.2rem 2.4rem;
    border: none;
    font-size: 1.6rem;
    background-color: ${(props) =>
      props.rating >= 8.5 ? "#7dcea0" : "#f7dc6f"};
    color: "var( --bg-color)";
    font-weight: "bold";
    cursor: "pointer";
  `;

  // to write javascript logic in template literal(css):-In styled-components,you can pass a function within the template literal to dynamically set CSS praperties based on props or state;



  // template literal
  const Rating=styled.h3`
    font-size:1.6rem;
    color:#7dcea0;
    text-transform:capitalize;
  `;

  

  const ratingClass = rating >= 8.5 ? styles.super_hit : styles.average;
  // const paddingStyle = { margin: "1.2rem 0" };

  return (
    <li className={styles.card}>
      <div>
        <div>
          <img src={img_url} alt={name} width="40%" height="40%" />
        </div>
      </div>
      {/* <div className={styles["card-content"]}> */}
      <div className="flex flex-col gap-6 py-[3.2rem] px-[1.2rem]">
        <h2>Name:{name}</h2>

        {/* <h3 style={{ margin: "1.2rem 0" }}>
          Rating:
          <span className={`${styles.rating} ${ratingClass}`}>{rating}</span>
        </h3> */}

      <Rating>
          Rating:
          <span className={`${styles.rating} ${ratingClass}`}>{rating}</span>
        </Rating>
        

        <p className="text-3xl font-bold underline text-cyan-300">summary:{description}</p>

        <p>Genre:{genre.join(", ")}</p>
        <p>Cast:{cast.join(", ")}</p>
        <a href={watch_url} target="_blank">
          {/* <button style={btn_style}>watch now</button> */}
          {/* <ButtonTeerth>watch now</ButtonTeerth> */}
          <ButtonTeerth rating={ratingClass}>watch now</ButtonTeerth>
        </a>
     </div>
    </li>
  );
};
