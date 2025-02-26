import { useLoaderData } from "react-router-dom";
import { Card } from "../components/UI/Card";

export const Movie =()=>{

    const movieData = useLoaderData();
    console.log(movieData);
    
    // return <h1> this is Movie Page Coming Soon....</h1>
    return(
    <>
    <ul className="container grid grid-four--cols">
    {movieData.Search.map((curMovie)=> {
        return <Card key={curMovie.imdbID}  curMovie={curMovie}/>
    })}
    </ul>
    </>
    );
}