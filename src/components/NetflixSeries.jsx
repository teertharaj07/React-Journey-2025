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
