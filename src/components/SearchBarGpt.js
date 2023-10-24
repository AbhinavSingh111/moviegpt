import React, { useRef } from 'react';
import lang from '../utils/langConsts';
import { useSelector } from 'react-redux';
import openai from "../utils/openAi";
import {PROMPT, SEARCH_MOVIE} from "../utils/constants";
import { API_OPTIONS } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { addGptMovieRes } from '../redux/gptSlice';


const SearchBarGpt = () => {
    const langName = useSelector((store)=>store?.config?.language);
    const searchText = useRef(null);
    const dispatch = useDispatch();
   
    const movieSearch = async (movie) => {
        const query_link = SEARCH_MOVIE+movie;
        const data = await fetch(query_link, API_OPTIONS);
        const json = await data.json();
        return json.results;
    }
    

    const handleGptSearch = async ()=>{
        
        const gptPrompt = PROMPT+searchText.current.value+"```";

        const chatCompletion = await openai.chat.completions.create({
            messages: [{ role: 'user', content: gptPrompt }],
            model: 'gpt-3.5-turbo',
          });
        const movieList = chatCompletion.choices?.[0]?.message?.content?.split(",");
        console.log(movieList);
        if(movieList[0]==='[]'){
            alert("Please, enter prompt related to movie suggestions only !");
            return
        }
        
        const promiseArray = movieList.map((movie)=>movieSearch(movie));
        const tmdbRes = await Promise.all(promiseArray);
        console.log(tmdbRes.length);
        dispatch(addGptMovieRes({movieNames:movieList , movieResults:tmdbRes}));
        
        // alert("enter prompt related to movie suggestions only !")
    }
  return (
        <div className='flex justify-center pt-[10%] z-50'>
            <form className='w-1/2 grid grid-cols-12 bg-black ' onSubmit={(e)=>e.preventDefault()}>
                <input ref={searchText} type='text' className='col-span-9 p-4 m-4 hover:bg-gray-100' placeholder={lang[langName].gptsearchbartext} />
                <button className='col-span-3 m-4 py-2 px-4 bg-red-700 hover:opacity-50' onClick={handleGptSearch}>{lang[langName].search}</button>
            </form>
        </div>

  )
}

export default SearchBarGpt;