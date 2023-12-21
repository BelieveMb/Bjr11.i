import React, { useState } from 'react';
import logoBjr from '../../../public/images/logoBlack.png';

function Header() {

  const [burgerMenu, setburgerMenu ] = useState(false);
  
  function handleClick() {
    setburgerMenu(burgerMenu === 'false'? 'true' : 'false');
  }


  return (
    <div className="bg-gray-200 flex flex-wrap justify-between items-center  py-2 px-3 border-b-2 border-red-500 lg:px-14">
      <div>
        <img src={logoBjr} alt="logo"  className=' w-[6rem] lg:w-16' />
      </div>
      <div>
        {/* <svg onClick={handleClick}  className={burgerMenu === false ? "hidden" : "flex w-[4rem]"} viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" fill="#ef3f3f" stroke="#ef3f3f"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="#ef4444" d="M195.2 195.2a64 64 0 0 1 90.496 0L512 421.504 738.304 195.2a64 64 0 0 1 90.496 90.496L602.496 512 828.8 738.304a64 64 0 0 1-90.496 90.496L512 602.496 285.696 828.8a64 64 0 0 1-90.496-90.496L421.504 512 195.2 285.696a64 64 0 0 1 0-90.496z"></path></g></svg> */}
        <svg onClick={handleClick}  className={burgerMenu === true ? "hidden" : "flex w-[4rem] lg:hidden"} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ef4545"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M4 5C3.44772 5 3 5.44772 3 6C3 6.55228 3.44772 7 4 7H20C20.5523 7 21 6.55228 21 6C21 5.44772 20.5523 5 20 5H4ZM7 12C7 11.4477 7.44772 11 8 11H20C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13H8C7.44772 13 7 12.5523 7 12ZM13 18C13 17.4477 13.4477 17 14 17H20C20.5523 17 21 17.4477 21 18C21 18.5523 20.5523 19 20 19H14C13.4477 19 13 18.5523 13 18Z" fill="#ef4444"></path> </g></svg>
      </div>
      <nav  className={burgerMenu === false ? "hidden" : "flex flex-col w-full px-2  bg-gray-200 lg:flex-row lg:justify-between lg:items-center lg:w-auto"}>
      {/* <nav  className="flex  flex-col w-full px-2  bg-gray-200 lg:flex-row lg:justify-between lg:items-center lg:w-auto "> */}
        <a className="px-4 py-2 mt-2 text-xl font-bold text-gray-700  rounded-lg  lg:mt-0 hover:text-gray-50 focus:text-gray-100 hover:bg-red-500 focus:bg-red-600 focus:outline-none focus:shadow-outline" href="#" onClick={handleClick}>Expertise {burgerMenu} </a>
        <a className="px-4 py-2 mt-2 text-xl font-bold text-gray-700  rounded-lg  lg:mt-0 hover:text-gray-50 focus:text-gray-100 hover:bg-red-500 focus:bg-red-600 focus:outline-none focus:shadow-outline" href="#">Réalisations</a>
        <a className="px-4 py-2 mt-2 text-xl font-bold text-gray-700  rounded-lg  lg:mt-0 hover:text-gray-50 focus:text-gray-100 hover:bg-red-500 focus:bg-red-600 focus:outline-none focus:shadow-outline" href="#">A propos</a>
        <a className="px-4 py-2 mt-2 text-xl font-bold text-gray-700  rounded-lg  lg:mt-0 hover:text-gray-50 focus:text-gray-100 hover:bg-red-500 focus:bg-red-600 focus:outline-none focus:shadow-outline" href="#">Contact</a>
        <a className="px-4 py-2 mt-8 ml-0 text-xl font-bold text-gray-50 bg-red-500 rounded-lg  lg:mt-0 lg:ml-10 hover:text-red-500 focus:text-red-500 hover:bg-gray-200 focus:bg-gray-200 hover:border-2 hover:border-red-500 focus:outline-none focus:shadow-outline" href="#">Projet</a>

      </nav>
    </div>
  );
}


export default Header