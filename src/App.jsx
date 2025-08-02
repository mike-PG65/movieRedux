import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addMovie, removeMovie, isWatched } from './movieSlice'

function App() {

  const [newMovie, setNewMovie] = useState("")

  const movies = useSelector((state) => state.moviesR.movies)
  const dispatch = useDispatch()

  const handleAddMovie = () => {
   if (newMovie){
     dispatch(addMovie(newMovie))
    setNewMovie("")
   }
  }

  const handleRemoveMovie = (id) => {

    const confirmDeletion = window.confirm("Are you sure you want to delete!!")

    if (confirmDeletion){
      dispatch(removeMovie(id))
    }    
  }

  const handleToggleWatched = (id) => {
      dispatch(isWatched(id))
    }

  return (
    <>

    <input type="text" onChange = {(e) => setNewMovie(e.target.value)} value={newMovie}/>
    <button onClick={handleAddMovie}> Add Movie </button>

    <h1> Movie List </h1>


    {
      movies.map((movie) =>(
        <div key={movie.id}>
          <p> {movie.name}</p>
          <button onClick={() => handleRemoveMovie(movie.id)}> Delete </button>
          <button onClick={() => handleToggleWatched(movie.id)}>
            {movie.isWatched ? "Watched" : "unWatched"}
          </button>
        </div>
      ))
    }
    </>
  )
}

export default App
