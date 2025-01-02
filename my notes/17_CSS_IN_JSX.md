****17: Add CSS Styling in React: Class vs ClassName Explained in React JS****
-----------------------------

01.inline css:- className="" in component 
import seriesData from "../api/seriesData.json";
import { SeriesCard } from "./SeriesCard";
//* Netflix components
const NetflixSeries = () => {
  return (
    <ul className="grid grid-three--cols">
      {seriesData.map((curElem) => (
        <SeriesCard  key={curElem.id} data={curElem}/>
      
      ))}
    </ul>
  );
};

export default NetflixSeries;
------------------

02.
when we creating  the new css file importing another file components
absolute path.---address
relative path


-----components/netflix.css------
import "./components/netflix.css";
-------------App.jsx-------------
import NetflixSeries from "./components/NetflixSeries";
import "./components/netflix.css"

const App = () => {
  return <section className="container">
    <h1 className="card-heading">List of Best Netfkix Series</h1>
    <NetflixSeries />
  </section>
     };

export default App;
--------------------------------