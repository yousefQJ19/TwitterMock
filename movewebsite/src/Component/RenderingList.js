import data from '../DataFolder/Movies.json'





export function RenderLIST(){
    return(
        data.map(movie=>{
            if (`${movie.catagory}`==="action"){
                return(
                    <div key={movie.id}>
                        <h1>{movie.name}</h1>
                        <h1>{movie.character}</h1>
                    </div>
                )
            }
            else{
               return null; 
            }
        })
    )

}