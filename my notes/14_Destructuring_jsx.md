*****14: React Destructuring Props in JSX | React Tutorial in Hindi*****

--------------------example 01-----------------------
export const SeriesCard = (props) => {
  // console.log(props);
  // const {data}=props;
  // const {id,img_url,name,rating,description,cast,genre,watch_url}=props.data;
  const { id, img_url, name, rating, description, cast, genre, watch_url } = data;

  return (
    <li>
      <div>
        <img width="50%" height="50%" src={img_url} alt={props.data.name} />
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

------------example 2=================
export const SeriesCard = (props) => {

  // const {data}=props;


  return (
    <li>
      <div>
        <img width="50%" height="50%" src={img_url} alt={data.name} />
        <h2>Name:{data.name}</h2>
        <h3>Rating:{data.rating}</h3>
        <p>summary:{data.description}</p>

        <p>Genre:{data.genre}</p>
        <p>Cast:{data.cast}</p>
        <a href={data.watch_url} target="_blank">
          <button>watch now</button>
        </a>
      </div>
    </li>
  );
};


---------------example 3---------------

export const SeriesCard = (props) => {

  // const {id,img_url,name,rating,description,cast,genre,watch_url}=props.data;
 

  return (
    <li>
      <div>
        <img width="50%" height="50%" src={img_url} alt={name} />
        <h2>Name:{name}</h2>
        <h3>Rating:{rating}</h3>
        <p>summary:{description}</p>

        <p>Genre:{genre}</p>
        <p>Cast:{cast}</p>
        <a href={watch_url} target="_blank">
          <button>watch now</button>
        </a>
      </div>
    </li>
  );
};



------------------------final code-----------------

------------------------ seriesData.jsx----------------
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

------------------- SeriesCard.jsx -----------
export const SeriesCard = ({data}) => {
  // console.log(props);
  // const {data}=props;
  // const {id,img_url,name,rating,description,cast,genre,watch_url}=props.data;
  const { id, img_url, name, rating, description, cast, genre, watch_url } = data;

  return (
    <li>
      <div>
        <img width="50%" height="50%" src={img_url} alt={name} />
        <h2>Name:{name}</h2>
        <h3>Rating:{rating}</h3>
        <p>summary:{description}</p>

        <p>Genre:{genre}</p>
        <p>Cast:{cast}</p>
        <a href={watch_url} target="_blank">
          <button>watch now</button>
        </a>
      </div>
    </li>
  );
};