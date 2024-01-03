import React from 'react'


function LogoText({logo, textBottom}) {
  return (
    <div className="flex flex-col items-center">
              <img src={logo} alt="Logo php" className='hover:w-[4.5rem]'/>
              <b>{textBottom}</b>
            </div>
  )
}

export default LogoText