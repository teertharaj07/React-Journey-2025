*****20: CSS Modules in React: Scoped and Reusable Styles | React Tutorial in Hindi****
------------------------------------------

defination:-CSS Modules in React.js allow for modular and reusable styles by locally scoping CSS to individual components. This prevents style conflicts and promotes better maintainability. By using unique class names, CSS Modules ensure that styles are applied only where intended.

=======ppt slide 1------------
--CSS Modules-Rules to Keeo in Mind--

* Name your CSS module files with the .module.css or .module.scss
extension.
* Import the CSS module file in your React component. Access class
names as properties of the imported styles object.
* Access class names as properties of the imported styles object. |
* Combine multiple class names using template literals or the class
library.
* Dynamically apply class names based on component state

-------------------------------
step 1 make new file with name of netflix.module.css in components floder
step 2 import the this file in app.jsx 

import styles from "./Netflix.module.css"
 <li className={styles.card}>
      <div className={styles.cardContent}>
      <div className={styles["card-content"]}>





      ------------------ css module example in classname attribut---

      import styles from "./Netflix.module.css"



export const SeriesCard = ({ data }) => {
  const { img_url, name, rating, description, cast, genre, watch_url } = data;
  //inline css with object like
  const btn_style = {
    padding: "1.2rem 2.4rem",
    border: "none",
    fontSize: "1.6rem",
    // backgroundColor:"var(--bnt-hover-bg-color)",
    backgroundColor: `${rating >= 8.5 ? "#7dcea0" : "#f7dcbf"}`,

    color: "var( --bg-color)",
    fontWeight: "bold",
    cursor: "pointer",
  };

  const ratingClass = rating >= 8.5 ? styles.super_hit : styles.average;
  const paddingStyle = { margin: "1.2rem 0" };

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




is technique se ham ek hi class name  alag -alag components ke css file use kar sakte h 

example app.jsx---app.css---grid (classname) with different value working diffrent
example dj.jsx---dj.css---grid (classname) with different value working diffrent





-------------------ppet 2------------
  ---CSS Modules -important-----
  * When using CSS Modules, class names with hyphens can sometimes cause issues if not accessed correctly. In CSS Modules, you need to use bracket notation for class names with hyphens.
|
* <div className={styles['card-content’]}> |
« Explanation: |
* Using Bracket Notation: In JavaScript, when accessing object properties with special characters (like hyphens), you need to use bracket notation instead of dot notation.

* Dot Notation: styles.card-content will not work because . expects a valid javascript identifier, which cannot contain hyphens.

* Bracket Notation: styles['card-content'] correctly accesses the class na
imported styles object.


-------------------ppt 3------------

* Every time you import a CSS file in your react component, they are
regarded as global CSS.

*  CSS Modules help you keep styles specific to the component they're used in.

*  Each module encapsulates its styles, preventing unintended style conflicts with other modules.

*  The class names in CSS modules are often automatically generated, reducing the likelihood of naming clashes. )