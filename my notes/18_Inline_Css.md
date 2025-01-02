*****18: Inline CSS Styling in React.js: Essential Rules and Best Practices | React Tutorial in Hindi****
---------------------------------
## Inline Styles

Inline styles are applied directly to the HTML elements via the style attribute. This approach uses JavaScript objects to define the CSS properties and values.

# 1. JavaScript Object Syntax

Inline styles in React are specified using JavaScript objects. Property names are written in camelCase instead of the traditional CSS kebab-case.

const style = {
backgroundColor: 'blue',
fontSize: '16px',
};

# 2. Units

For most numeric values, you need to specify units as a string (e.g., '16px'). Some properties, like zIndex, can take numeric values directly.

const style = {
padding: '10px',
zIndex: 1,
};

# 3. Performance Considerations

Defining inline styles directly within the JSX can lead to performance issues because a new object is created on every render. To avoid this, define styles outside of the render method or as constants.

const buttonStyle = {
backgroundColor: 'blue',
color: 'white',
};

function MyButton() {
return <button style={buttonStyle}>Click Me</button>;
}


example:-
export const SeriesCard = ({ data }) => {
  const { img_url, name, rating, description, cast, genre, watch_url } = data;
//inline css with object like
  const style={backgroundColor: 'blue',
    fontSize: '16px',};

  return (
    <li className="card">
      <div>
        <img width="50%" height="50%" src={img_url} alt={name} />
      </div>
      <div className="card-content">
        <h2>Name:{name}</h2>
        <h3>Rating:{rating}</h3>
        <p>summary:{description}</p>

        <p>Genre:{genre}</p>
        <p>Cast:{cast}</p>
        <a href={watch_url} target="_blank">
          <button style={style}>watch now</button>
          {/* inline css with style keyword(props) */}
        </a>
      </div>
    </li>
  );
};
------sumary=======

js part
//inline css with object like
  const style={backgroundColor: 'blue',
    fontSize: '16px',};

jsx part
  <a href={watch_url} target="_blank">
          <button style={style}>watch now</button>
          {/* inline css with style keyword(props) */}
        </a>


