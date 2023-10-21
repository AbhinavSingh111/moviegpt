import { createSlice } from "@reduxjs/toolkit"

const moviesSlice = createSlice({
    name:"movies",
    initialState:{
        nowPlayingMovies :null,
        trailerVideo : null,
    },
    reducers:{
        addNowPlayingMovies : (state , action)=>{
            state.nowPlayingMovies = action.payload;
        },
        addTrailerVideo :(state , action) => {
            state.trailerVideo = action.payload;
        },  
        removeNowPlayingMovies : (state , action)=>{
            return null;
        }
    }
});

export const {addNowPlayingMovies,addTrailerVideo, removeNowPlayingMovies} = moviesSlice.actions;
export default moviesSlice.reducer;