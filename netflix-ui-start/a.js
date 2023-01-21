const url = "https://striveschool-api.herokuapp.com/api/movies"


window.onload = async () => {
  await getMovies()
}

const getMovies = async () => {
  try {
    const options={
        headers: new Headers({
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2NhNTdlM2U3MzczODAwMTUzNzQ2YjMiLCJpYXQiOjE2NzQyMDUxNTUsImV4cCI6MTY3NTQxNDc1NX0.jJ1EPinzZ6vr8H6n7Lmekw1F6MoVJ5_W7lrrXhhsMJ0",
        }),
    }
    const res = await fetch(url,options)
    const movies = await res.json() 
    renderMovies(movies)
  } catch (error) {
    console.log(error)
  }
}

const renderMovies = (arrayOfMovies) => {
    const movieNode=document.getElementById("movieGoHere")
  arrayOfMovies.forEach((singleMovie) => {
    // const { name, description, imageUrl, category,_id} = singleMovie
    // console.log(singleMovie)
    movieNode.innerHTML += `<div class="col-6 col-md-3 px-1 mb-1 mb-lg-0">
    <div class="list-group-item w-50">
    <div class='row align-items-center justify-content-between p-3'>
      <div class='col col-6'>
      <h3> ${singleMovie.name} </h3>
            <p> ${singleMovie.description} </p>
            <span class="badge badge-pill badge-info">${singleMovie.category}</span>
      </div> 
      <img src=${singleMovie.imageUrl}/>

      </div>
      </div>`
  })
}





  

