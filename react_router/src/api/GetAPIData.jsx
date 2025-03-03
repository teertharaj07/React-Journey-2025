export const getMovieData=async()=>{
    try {
        // const response=await fetch("http://www.omdbapi.com/?i=tt3896198&apikey=46e38d76");
 

        // const response=await fetch("http://www.omdbapi.com/?i=tt3896198&apikey=46e38d76&s=titanic&page=1");
        //   console.log(import.meta.env.VITE_API_KEY);
          

        // const response=await fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=${import.meta.env.VITE_API_KEY}&s=titanic&page=1`);
        const response=await fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=${import.meta.env.VITE_API_KEY}&s=titanic&page=1`);
       
        const data =await response.json();
        return data;


    } catch (error) {
        console.log(error);
        
    }
}