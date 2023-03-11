import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

// Use rafce for generate arrow function boilerplate code
const NavBar = () => {

  const [nav, SetNav] = useState(false);

  var links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "portfolio",
    },
    {
      id: 4,
      link: "skills",
    },
    {
      id: 5,
      link: "contact",
    }
  ]
  return (
    <div
      className="flex justify-between items-center w-full 
    h-20 px-4 text-white bg-black fixed"
    >
      <div>
        <h1 className="text-5xl font-signature ml-2">Subhash</h1>
      </div>
      <ul className=" hidden md:flex">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="px-4 cursor-pointer capitalize font-medium
         text-gray-500 hover:scale-105 duration-200 ">
            
          <Link to={link} smooth duration={500}>{link}</Link>

          </li>
        ))}
      </ul>
        
      {/*Here we change the FaBar(three lines to cross on clicking...) */}
      <div onClick = {()=> SetNav(!nav)} className="cursor-pointer pr-4 z-10 text-grey-500 md:hidden">
          {nav ? <FaTimes size={30}></FaTimes> : <FaBars size={30}></FaBars>}
      </div>
      
      {/* After clicking on Fabars I try to displyed Navbar iterms on page in horizontal mode */}
      {nav && 
      (
      <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen 
      bg-gradient-to-b from-black to-gray-700 text-gray-500">

      {links.map(({ id, link }) => (
        <li
          key={id}
          className="px-4 py-5 cursor-pointer capitalize text-4xl">
          <Link 
          onClick={() => SetNav(!nav)} 
          to = {link} 
          smooth 
          duration={500}>
          {link}
          </Link>
        </li>
      ))}
      </ul>
      )
      }
    </div>
  );
};

export default NavBar;
