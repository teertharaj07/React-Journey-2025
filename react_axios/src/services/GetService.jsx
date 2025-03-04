import axios from "axios";

const api=axios.create({
    // baseURL:  "http://www.omdbapi.com/?i=tt3896198&apikey=46e38d76&s=titanic&page=1",
    baseURL:  "http://www.omdbapi.com/",
})


// creating a get req function
export const getMovie=()=>{
    return api.get("?i=tt3896198&apikey=46e38d76&s=titanic&page=1")
}

// Http methods
// Create--->POST-----api.post()
// Read --> GET-------api.get()
// Update--PUT-----api.put()
// Delete-->DELETE-----api.delete()-----api.delete("/:id")-