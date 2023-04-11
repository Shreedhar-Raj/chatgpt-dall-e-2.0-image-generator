import React from 'react'

function PromptInput() {
  return (
    <div className='m-10 bg-black'>
        <form className='flex flex-col p-2 lg:flex-row shadow-xl shadow-slate-400/10 border rounded-md lg:divide-x'>
            <textarea placeholder='Enter what you wish to see...' className='bg-black flex-1 p-4 outline-none rounded-md' />
            <button type="submit" className='p-3'>Generate</button>
            <button type="button" className='p-3 rounded-xl bg-violet-400 text-white transition-colors duration-200 font-bold disabled:text-gray-300 disabled:cursor-not-allowed disabled:bg-gray-400'>Use Suggestion</button>
            <button type="button" className='p-3 bg-white text-violet-400 transition-colors duration-200 font-bold disabled:text-gray-300 disabled:cursor-not-allowed disabled:bg-gray-400 '>Randomise</button>
        </form> 
    </div>
  )
}

export default PromptInput