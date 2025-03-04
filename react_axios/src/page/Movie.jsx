
import { useEffect, useState } from "react";
import { Card } from "../components/UI/Card";
import { getMovie } from "../services/GetService";

export const Movie = () => {
  const [data, setData] = useState([]);



  // data fatch using axios library
  // const res= await axios.get(API);

  const getMovieData = async () => {
    try {
      const res = await getMovie();

      console.log(res.data.Search);
      setData(res.data.Search);
    } catch (error) {
      console.log(error);
     console.error("Error Message:",error.message);
     console.error("Error Status:",error.response.status);
     console.error("Error data:",error.response.data);
    }
  };

  useEffect(() => {
    getMovieData();
  }, []);

  return (
    <ul className="container grid grid-four--cols">
      {data.map((curElem) => {
        return <Card key={curElem.imdbID} MovieData={curElem} />;
      })}
    </ul>
  );
};
