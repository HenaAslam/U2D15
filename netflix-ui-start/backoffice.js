const url="https://striveschool-api.herokuapp.com/api/movies"


const postMovie=async (movieToPost)=>{
try{
    movieToPost.preventDefault();

    const name=document.querySelector("#movieName").value
    const description=document.querySelector("#movieDescription").value
    const category=document.querySelector("#movieCategory").value
    const imageUrl=document.querySelector("#movieImage").value
    const newMovie={name,description,category,imageUrl}
    console.log(newMovie)


    
        const options = {
                 method: "POST", 
                body: JSON.stringify(newMovie), 
                   headers: new Headers({
                   "Content-Type": "application/json", 
                   "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2NhNTdlM2U3MzczODAwMTUzNzQ2YjMiLCJpYXQiOjE2NzQyMDUxNTUsImV4cCI6MTY3NTQxNDc1NX0.jJ1EPinzZ6vr8H6n7Lmekw1F6MoVJ5_W7lrrXhhsMJ0"
                }),
               }

    let res=await fetch(url,options)
    

    if(res.ok){
        alert("movie added")
    }
    console.log(res.json())


}
catch(error){
    console.log(error )
}
}







