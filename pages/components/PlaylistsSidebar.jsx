import React from 'react'

function PlaylistsSidebar() {
  return (
    <div className='border-t border-[#282828] w-full h-32 flex flex-col pt-6 mt-6 pl-6' >
        <ul className='text-sm' >
            <li className='cursor-pointer font-book my-3 text-[#B3B3B3] hover:text-white' >Jamalul wujud (2)</li>
            <li className='cursor-pointer font-book my-3 text-[#B3B3B3] hover:text-white' >Coding</li>
            <li className='cursor-pointer font-book my-3 text-[#B3B3B3] hover:text-white' >This Is Ludovico Einaudi</li>
            <li className='cursor-pointer font-book my-3 text-[#B3B3B3] hover:text-white' >Coding Mode</li>
        </ul>
    </div>
  )
}

export default PlaylistsSidebar