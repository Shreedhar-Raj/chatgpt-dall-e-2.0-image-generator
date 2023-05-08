"use client";
import fetchSuggestionFromChatGPT from '@/lib/fetchSuggestionFromChatGPT';
import { useState } from 'react';
import useSWR from "swr";

function PromptInput() {
  const [input, setInput] = useState("");
  const {data:suggestion, error, isLoading, mutate, isValidating} = useSWR('/api/suggestion', fetchSuggestionFromChatGPT, {
    revalidateOnFocus: false,
  })
  return (
    <div className='m-10 bg-white'>
        <form className='flex flex-col p-2 lg:flex-row shadow-xl shadow-slate-400/10 border rounded-md lg:divide-x'>
            <textarea value={input} onChange={(e) => setInput(e.target.value)} placeholder='Enter what you wish to see...' className='bg-white flex-1 p-4 outline-none rounded-md' />
            <button type="submit" disabled={!input} className={`p-4 ${input ? 'text-black' : 'text-gray-300 cursor-not-allowed'}`}>Generate</button>
            <button type="button" className='p-3 rounded-xl bg-violet-400 text-white transition-colors duration-200 font-bold disabled:text-gray-300 disabled:cursor-not-allowed disabled:bg-gray-400'>Use Suggestion</button>
            <button type="button" className='p-3 text-violet-400 transition-colors duration-200 font-bold disabled:text-gray-300 disabled:cursor-not-allowed disabled:bg-gray-400 '>Randomise</button>
        </form> 
    </div>
  )
}

export default PromptInput