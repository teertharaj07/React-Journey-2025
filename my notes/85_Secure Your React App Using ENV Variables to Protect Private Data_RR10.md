****85:Secure Your React App: Using ENV Variables to Protect Private Data 85 video RR10****
In this video, we’ll explore how to secure your React app by using environment variables (.env files). You’ll learn the importance of protecting sensitive data, the correct syntax for defining variables, and how to access these variables across different pages. By the end, you’ll have a solid understanding of how to keep your private data safe in your React projects. Real-life examples included! 💸
---------------------

today we will dicuss about the .env file and how to secure the private data in the code 
so using env file we can do that

so let's do that 

step 1 create .env file in root folder :; click on the folder name and create file using name of .env and write variable name 

example here:-

VITE_API_KEY="123456732as"
VITE_API_KEY=123456732
VITE_API_KEY=true


note :- env variable must be uppercase

step 2:- how to use and where
    //   console.log(import.meta.env.VITE_API_KEY);
    
`http://www.omdbapi.com/?i=tt3896198&apikey=${import.meta.env.VITE_API_KEY}&s=titanic&page=1`




Ensure the .env file is located at the root of your project,
at the same level as vite.config.js. This is crucial for Vite
to automatically load the environment variables.


all code here:
export const getMovieData=async()=>{
    try {
        // const response=await fetch("http://www.omdbapi.com/?i=tt3896198&apikey=46e38d76");
 

        // const response=await fetch("http://www.omdbapi.com/?i=tt3896198&apikey=46e38d76&s=titanic&page=1");
        //   console.log(import.meta.env.VITE_API_KEY);
          

        const response=await fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=${import.meta.env.VITE_API_KEY}&s=titanic&page=1`);
       
        const data =await response.json();
        return data;


    } catch (error) {
        console.log(error);
        
    }
}