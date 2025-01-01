****13 Props in React JS - Making Netflix Cards Reusable🔥React Tutorial in Hindi*****


just like html attribute

* React props (properties) facilitate data transfer from parent to child
components.

* Data flows unidirectionally, ensuring a clear direction of information in
React applications.

+*Props are immutable, meaning child components cannot modify the
data received from parents.

* Child components access props through their function parameter.

* You can also pass JSX as props to another component. "


-----------seriesCard.jsx-------


export const SeriesCard = (props) => {
    console.log(props);
    
  return (
    <li>
      <div>
        <img
          width="50%"
          height="50%"
          src={props.data.img_url}
          alt={props.data.name}
        />
        <h2>Name:{props.data.name}</h2>
        <h3>Rating:{props.data.rating}</h3>
        <p>summary:{props.data.description}</p>

        <p>Genre:{props.data.genre}</p>
        <p>Cast:{props.data.cast}</p>
        <a href={props.data.watch_url} target="_blank">
          <button>watch now</button>
        </a>
      </div>
    </li>
  );
};
-----------------NetflixSeries.jsx---------------
import seriesData from "../api/seriesData.json";
import { SeriesCard } from "./SeriesCard";
//* Netflix components
const NetflixSeries = () => {
  return (
    <ul>
      {seriesData.map((curElem) => (
        <SeriesCard  key={curElem.id} data={curElem}/>
      
      ))}
    </ul>
  );
};

export default NetflixSeries;
