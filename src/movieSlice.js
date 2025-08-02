import { createSlice } from "@reduxjs/toolkit";



const initialState = {
    movies: [  {
        id: 1,
        name: "Inception",
        isWatched:false
    },
    {
        id: 2,
        name: "The Dark Knight",
        isWatched:false
    },
    {
        id: 3,
        name: "Interstellar",
        isWatched:false
    }],
}

const movieSlice = createSlice({
    name: "movies",
    initialState,
    reducers: {
        addMovie: (state, action) => {

            const newMovie = {
                id: state.movies[state.movies.length - 1]?.id + 1,
                name: action.payload
            }
            state.movies.push(newMovie)
        },

        removeMovie: (state, action) => {
            state.movies = state.movies.filter(movie => movie.id !== action.payload)
        },
        isWatched: (state, action) => {
            const movie = state.movies.find(movie => movie.id === action.payload)
            if (movie){
                movie.isWatched = !movie.isWatched
            }

        },
    }
})

export const {addMovie,removeMovie, isWatched} = movieSlice.actions
export default movieSlice.reducer