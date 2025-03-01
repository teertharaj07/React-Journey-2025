export const getMovieDetails = async ({ params }) => {
    console.log(params);
    // params is hooks but never spcific calling in react router in hooks
    const id = params.movieID;
  
    try {
      // const response = await fetch(
      //   `https://www.omdbapi.com/?i=${id}&apikey=${import.meta.env.VITE_API_KEY}&s=titanic&page=1`
      // );
      const response = await fetch(
        `https://www.omdbapi.com/?i=${id}&apikey=${import.meta.env.VITE_API_KEY}`
      );
      const data = response.json();
      console.log(data);
      
      return data;
    } catch (error) {
      console.log(error);
    }
  };
  