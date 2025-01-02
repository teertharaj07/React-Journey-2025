****19: Conditional Styling for Dynamic UIs in React.js | When and Why to Use It in React App****
------------------------
Welcome, We will see what is Conditional Styling in React JS. Conditional styling in React.js enables dynamic visual updates based on component state or props. This can be achieved through conditional class names and inline styles. Using techniques like ternary operators and libraries like classnames, developers can easily manage and optimize these dynamic styles.


01:-using classname & 
02:-inline



# CSS conditional stylings in React js

You can use ternary operators to add conditional stylings to your CSS.


''''''''SeriesData.jsx'''''''''

export const SeriesCard = ({ data }) => {
  const { img_url, name, rating, description, cast, genre, watch_url } = data;
//inline css with object like
  const btn_style={
    padding:"1.2rem 2.4rem",
    border:"none",
    fontSize:"1.6rem",
    backgroundColor:"var(--bnt-hover-bg-color)",
    color:"var( --bg-color)"
  };
    const paddingStyle={margin:"1.2rem 0"};

  return (
    <li className="card">
      <div>
        <img width="50%" height="50%" src={img_url} alt={name} />
      </div>
      <div className="card-content">
        <h2>Name:{name}</h2>
        <h3 style={{margin:"1.2rem 0"}}>
          Rating: <span className={rating >=8.6?"super_hit":"average"}      >{rating}</span>
          </h3>
        <p  style={paddingStyle}>summary:{description}</p>

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




 <h3 style={{margin:"1.2rem 0"}}>
          Rating: <span className={rating >=8.6?"super_hit":"average"}      >{rating}</span>
          </h3>



          export const SeriesCard = ({ data }) => {
  const { img_url, name, rating, description, cast, genre, watch_url } = data;
//inline css with object like
  const btn_style={
    padding:"1.2rem 2.4rem",
    border:"none",
    fontSize:"1.6rem",
    backgroundColor:"var(--bnt-hover-bg-color)",
    color:"var( --bg-color)"
  };
    const paddingStyle={margin:"1.2rem 0"};

  return (
    <li className="card">
      <div>
        <img width="50%" height="50%" src={img_url} alt={name} />
      </div>
      <div className="card-content">
        <h2>Name:{name}</h2>
        <h3 style={{margin:"1.2rem 0"}}>
          Rating:
           <span className={`rating ${rating >=8.6?"super_hit":"average"} `} >{rating}</span>
          </h3>
        <p  style={paddingStyle}>summary:{description}</p>

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



<h3 style={{margin:"1.2rem 0"}}>
          Rating:
           <span className={`rating ${rating >=8.6?"super_hit":"average"} `} >{rating}</span>
          </h3>







====================final code=============
export const SeriesCard = ({ data }) => {
  const { img_url, name, rating, description, cast, genre, watch_url } = data;
//inline css with object like
  const btn_style={
    padding:"1.2rem 2.4rem",
    border:"none",
    fontSize:"1.6rem",
    // backgroundColor:"var(--bnt-hover-bg-color)",
    backgroundColor:`${rating >=8.5?"#7dcea0":"#f7dcbf"}`,

    color:"var( --bg-color)",
    fontWeight:"bold",
    cursor:"pointer",
  };

  const ratingClass=rating >=8.5?"super_hit":"average";
    const paddingStyle={margin:"1.2rem 0"};

  return (
    <li className="card">
      <div>
        <img width="50%" height="50%" src={img_url} alt={name} />
      </div>
      <div className="card-content">
        <h2>Name:{name}</h2>
        {/* <h3 style={{margin:"1.2rem 0"}}>
          Rating:
           <span className={`rating ${rating >=8.6?"super_hit":"average"} `} >{rating}</span>
          </h3> */}

<h3 style={{margin:"1.2rem 0"}}>
          Rating:
           <span className={`rating ${ratingClass}`} >{rating}</span>
          </h3>

        <p  style={paddingStyle}>summary:{description}</p>

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
