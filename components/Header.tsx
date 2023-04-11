import Image from 'next/image'
import React from 'react'

function Header() {
  return (
    <header className='flex border-t border-l border-r border-white border-4 p-5 justify-between sticky top-0 bg-black text-white z-50'>
        <div className="flex space-x-2 items-center">
            <Image
                src="https://external-preview.redd.it/0HIWCLmnG_k0qhlW32yxlq8yUJu6Ye-gxBbtUAIapBM.jpg?auto=webp&s=81df818782f0611f6ed7c665d4cba5988343e4fe"
                alt="logo"
                width={30}
                height={30}
            />
            <div className='font-bold'>
                <h1>Image<span className='text-violet-500'>GPT</span></h1>
                <h2 className="text-xs text-white">Powered by ChatGPT, Dall-E 2.0 & Microsoft Azure</h2>
            </div>
        </div>
        <div className='text-xs md:text-base'>
            <h1>Made By: Shreedhar Raj</h1>
        </div>
    </header>
  )
}

export default Header