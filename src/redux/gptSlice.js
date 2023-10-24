import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name : 'gpt',
    initialState : {
        showGptsearch : false,
        movieNames:null,
        movieResults : null,

    },
    reducers : {   
        toggleGptSearchView : (state , action)=>{
            state.showGptsearch = !state.showGptsearch;
        },
        addGptMovieRes : (state , action) =>{
            const {movieNames , movieResults} = action.payload;
            state.movieNames = movieNames;
            state.movieResults = movieResults;
        },

    },
});


export const {toggleGptSearchView , addGptMovieRes} = gptSlice.actions;
export default gptSlice.reducer;