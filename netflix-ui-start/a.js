
const url=" https://striveschool-api.herokuapp.com/api/movies"
const options={
    headers: {
    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2NhNTdlM2U3MzczODAwMTUzNzQ2YjMiLCJpYXQiOjE2NzQ5MTQ5MDksImV4cCI6MTY3NjEyNDUwOX0.ErrhpOV2vLIxZGyxFjkI0z1wXjiYSYTPJAovrerz6Xs"     }
   }




const renderSections = async (genres) => {
  try{

    let container = document.getElementById("fetch")
      genres.forEach(async (genre) => {
        container.innerHTML += 
        
        `<h4 class = "text-white mb-4 mt-4">${genre}</h4>
        <div id="${genre}" class="row row-cols-2  row-cols-md-4">
        </div>`;
        let res= await fetch(url+`/${genre}`,options)
        let moviesofGenre = await res.json();
        console.log(moviesofGenre)
        let row = document.getElementById(genre);
        moviesofGenre.forEach((movie) => {
           row.innerHTML += `<div class="px-1 mb-1 mb-lg-0">
           <div class="movie-card">
             <img class="w-100" src="${movie.imageUrl}" alt="" />
             <div class="infos-container w-100 mt-2">
               <div class="d-flex mb-3 mt-4 align-items-center">
                 <i class="bi bi-play-circle  px-1"></i>
                 <i class="bi bi-hand-thumbs-up px-1 "></i>
                 <div id="alertvisible"><i class="bi bi-plus-circle px-1"></i></div> 
                 <div class="alert alert-dark addtolist" role="alert">
                   Add to your list
                 </div>
                 <h6 class="pt-2 pl-1">${movie.name}</h6>
                 <i class="bi bi-chevron-down ml-auto "></i>
   
               </div>
               <div class="deeet d-flex justify-content-around align-items-start">
               <h6 >98% Match</h6>
               <h6 class="pr-1">12</h6>
             
               <h6 class="pb-0">HD</h6>
             </div>
   
             
               <div class="card-movie-footer d-flex align-items-center">
                 <span class="mr-2">${movie.category}</span>
                 
                 
               </div>
             </div>
           </div>
         </div>`;
         });
       });

  }
  catch(err){
      console.log(err)
  }
      
  };

const getMovies=async()=>{
    try{
        let res= await fetch(url,options)
        let data=await res.json()
        console.log(data)
        renderSections(data)
    }
    catch(err){
        console.log(err)
    }
}

   window.onload=()=>{
    getMovies();
   }























