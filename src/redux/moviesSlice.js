import { createSlice } from "@reduxjs/toolkit"

const moviesSlice = createSlice({
    name:"movies",
    initialState:{
        nowPlayingMovies :null,
        trailerVideo : null,
        popularMovies:null,
        topRatedMovies:null,
        upcomingMovies:null,
        discoverMovies:null,
    },
    reducers:{
        addNowPlayingMovies : (state , action)=>{
            state.nowPlayingMovies = action.payload;
        },
        addPopularMovies : (state , action)=>{
            state.popularMovies = action.payload;
        },
        addTopRatedMovies : (state , action)=>{
            state.topRatedMovies = action.payload;
        },
        addUpcomingMovies : (state , action)=>{
            state.upcomingMovies = action.payload;
        },
        addDiscoverMovies : (state , action)=>{
            state.discoverMovies = action.payload;
        },
        addTrailerVideo :(state , action) => {
            state.trailerVideo = action.payload;
        },  
        removeNowPlayingMovies : (state , action)=>{
            return null;
        }
    }
});

export const {addNowPlayingMovies,addTrailerVideo,addPopularMovies,addTopRatedMovies,addUpcomingMovies,addDiscoverMovies, removeNowPlayingMovies} = moviesSlice.actions;
export default moviesSlice.reducer;