import React from 'react';
import lang from '../utils/langConsts';
import { useSelector } from 'react-redux';


const SearchBarGpt = () => {
    const langName = useSelector((store)=>store?.config?.language);
  return (
        <div className='flex justify-center pt-[10%] z-50'>
            <form className='w-1/2 grid grid-cols-12 bg-black '>
                <input type='text' className='col-span-9 p-4 m-4' placeholder={lang[langName].gptsearchbartext} />
                <button className='col-span-3 m-4 py-2 px-4 bg-red-700'>{lang[langName].search}</button>
            </form>
        </div>

  )
}

export default SearchBarGpt;