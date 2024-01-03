import React from 'react'


function LogoText({logo, textBottom}) {
  return (
    <div className="flex flex-col items-center w-auto">
      <img src={logo} alt="Logo php" className='hover:w-[4.1rem] delay-700'/>
      <b>{textBottom}</b>
    </div>
  )
}

export default LogoText