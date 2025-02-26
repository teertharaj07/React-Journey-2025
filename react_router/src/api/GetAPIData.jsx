export const getMovieData=async()=>{
    try {
        // const response=await fetch("http://www.omdbapi.com/?i=tt3896198&apikey=46e38d76");
 

        const response=await fetch("http://www.omdbapi.com/?i=tt3896198&apikey=46e38d76&s=titanic&page=1");
       
        const data =await response.json();
        return data;


    } catch (error) {
        console.log(error);
        
    }
}