import React from 'react'

function Buttons({textContent}) {
  return (
    <div>
        <button className='bg-red-500 text-gray-200 border-2 hover:bg-gray-200 hover:text-red-500 hover:border-red-500 ease-in duration-500 font-bold py-2 px-4 rounded-xl lg:text-2xl'>{textContent}</button>
    </div>
  )
}

export default Buttons