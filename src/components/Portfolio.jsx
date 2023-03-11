import React from "react";

import bank from "../assets/portfolio/bank.png";
import chat from "../assets/portfolio/chat.png";
import robot from "../assets/portfolio/robot.png";
import portf from "../assets/portfolio/portfolios.png";

const Portfolio = () => {
  const portfolio = [
    // image size is modified: 400px * 266px so it can fit in the container.
    {
      id: 1,
      src : bank
    },
    {
      id: 2,
      src : chat
    },
    {
      id: 3,
      src : robot
    },
    {
      id: 4,
      src : portf
    }
  ]
  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 
    w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work here...</p>
        </div>

        {/* Here i'll add the js code for array of images using map()*/}
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 sm:px-0">
        {portfolio.map(({id, src}) =>
        ( 
          <div   key = {id} className="shadow-md shadow-gray-600 rounded-lg">
            <img 
              src = {src}
              alt = ""
              className="rounded-md duration-200 hover:scale-105"
            />
            <div className="flex items-center justify-center">
              <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                Demo
              </button>
              <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                Code
              </button>
            </div>
          </div>
        )
        )
        }
        </div>
        </div>
    </div>
  );
};

export default Portfolio;
