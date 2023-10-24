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
        if(movieList[0]==='[]'){
            alert("Please, enter prompt related to movie suggestions only !");
            return
        }
        
        const promiseArray = movieList.map((movie)=>movieSearch(movie));
        const tmdbRes = await Promise.all(promiseArray);
        console.log(tmdbRes.length);
        dispatch(addGptMovieRes({movieNames:movieList , movieResults:tmdbRes}));
    }
  return (
        <div className='flex justify-center md:pt-[10%] pt-[45%] z-50'>
            <form className='mx-2 w-full md:w-1/2 grid grid-cols-12 bg-black ' onSubmit={(e)=>e.preventDefault()}>
                <input ref={searchText} type='text' className='col-span-9 p-4 m-4 hover:bg-gray-100' placeholder={lang[langName].gptsearchbartext} />
                <button className='text-white col-span-3 m-4 py-2 px-2 md:px-4 bg-red-700 md:hover:opacity-50' onClick={handleGptSearch}>{lang[langName].search}</button>
            </form>
        </div>

  )
}

export default SearchBarGpt;