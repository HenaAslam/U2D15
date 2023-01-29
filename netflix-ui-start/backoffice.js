const url=" https://striveschool-api.herokuapp.com/api/movies"
 let allMovies = [];
 let movieToEdit;
const options={
    headers: {
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2NhNTdlM2U3MzczODAwMTUzNzQ2YjMiLCJpYXQiOjE2NzQ5MTQ5MDksImV4cCI6MTY3NjEyNDUwOX0.ErrhpOV2vLIxZGyxFjkI0z1wXjiYSYTPJAovrerz6Xs"     }
    }
const deleteMovie=async(id)=>{
    let res=await fetch(url+"/"+id, {
            method:"DELETE",
            headers: {
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2NhNTdlM2U3MzczODAwMTUzNzQ2YjMiLCJpYXQiOjE2NzQ5MTQ5MDksImV4cCI6MTY3NjEyNDUwOX0.ErrhpOV2vLIxZGyxFjkI0z1wXjiYSYTPJAovrerz6Xs"
                }
        })
    let movies = await res.json();
    onLoadActions();

}


const editMovieBtn = async (id) => {
  let movie = allMovies.find(
    (item) => item._id === id
  );
 document.getElementById("name").value=movie.name
 document.getElementById("description").value=movie.description
 document.getElementById("category").value=movie.category
 document.getElementById("imageUrl").value=movie.imageUrl


   movieToEdit = id;

};


const editMovies=async(submitEvent)=>{
    try{
        submitEvent.preventDefault()
        let name=document.getElementById("name").value
        let description=document.getElementById("description").value
        let category=document.getElementById("category").value
        let imageUrl=document.getElementById("imageUrl").value
        
        let editedMovie={name,description,category,imageUrl}

        let options={
                method:"PUT",
                body: JSON.stringify(editedMovie),
            headers:new Headers({
                "Content-Type": "application/json",
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2NhNTdlM2U3MzczODAwMTUzNzQ2YjMiLCJpYXQiOjE2NzQ5MTQ5MDksImV4cCI6MTY3NjEyNDUwOX0.ErrhpOV2vLIxZGyxFjkI0z1wXjiYSYTPJAovrerz6Xs"
            })
        }
        let res=await fetch(url+"/"+movieToEdit,options)
        let data=await res.json()
        onLoadActions();
    }
    catch(err){
        console.log(err)
    }
    
}

 const postMovies=async(submitEvent)=>{
    try{
        let alertmsg=document.querySelector('.alert-success')
        submitEvent.preventDefault()
                let name=document.getElementById("name").value
                let description=document.getElementById("description").value
                let category=document.getElementById("category").value
                let imageUrl=document.getElementById("imageUrl").value
                let newMovie={name,description,category,imageUrl}
           
        
        
                let options={
                        method:"POST",
                        body:JSON.stringify(newMovie),
                    headers: new Headers({
                              "Content-Type": "application/json", 
                              "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2NhNTdlM2U3MzczODAwMTUzNzQ2YjMiLCJpYXQiOjE2NzQ5MTQ5MDksImV4cCI6MTY3NjEyNDUwOX0.ErrhpOV2vLIxZGyxFjkI0z1wXjiYSYTPJAovrerz6Xs"
                            }),
                }
                let res=await fetch(url,options)
                let data=await res.json()
                console.log(data)
                onLoadActions();
                
                alertmsg.classList.replace("d-none","d-block")
                 setTimeout(() => {
                    alertmsg.classList.replace("d-block","d-none")
                 }, 3000);
    }
    catch(err){
        let alertmsg=document.querySelector('.alert-danger')
        alertmsg.classList.replace("d-none","d-block")
        setTimeout(() => {
           alertmsg.classList.replace("d-block","d-none")
        }, 3000);
    }
 }


const movieList = async (genres) => {
        let node = document.getElementById("heregoesgenres");
        node.innerHTML=""
        genres.forEach(async (genre) => {
          node.innerHTML += `<h2 class="text-danger mb-3">${genre}</h2>
          <ul id=${genre} class="list-group list-group-horizontal mb-5 mt-5" style="color:black">
          </ul>`
          let res= await fetch(url+`/${genre}`,options)
          let movies = await res.json();
          console.log(movies)
          let list =document.getElementById(genre)
          movies.forEach((movie) => {  
          allMovies.push(movie);
          list.innerHTML+=`
          <li class="list-group-item">${movie.name}</li>
          <li class="list-group-item"><img height="40" width="40" src=${movie.imageUrl}</li>
          <li class="list-group-item"><button type="button" class="btn btn-danger" onclick = "deleteMovie('${movie._id}')">Delete</button></li>
          <li class="list-group-item"><button type="button" class="btn btn-primary" onclick = "editMovieBtn('${movie._id}')">Edit</button></li>
          "\n"
          `
          });

         });
      
      };    
const onLoadActions = async () => {
    allMovies=[]
    try {
      let res = await fetch(url,options)
      let genres = await res.json();
      console.log(genres)
      movieList(genres);
    } catch (err) {
        console.log(err);
    }
};

window.onload =()=>{
    onLoadActions();
 
}
