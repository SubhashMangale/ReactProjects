import React from "react";
import c from "../assets/portfolio/logos/c.png";
import cpp from "../assets/portfolio/logos/cpp.png";
import css3 from "../assets/portfolio/logos/css3.png";
import express from "../assets/portfolio/logos/express.png";
import git from "../assets/portfolio/logos/git.png";
import github from "../assets/portfolio/logos/github.png";
import html5 from "../assets/portfolio/logos/html5.png";
import java from "../assets/portfolio/logos/java.png";
import javascript from "../assets/portfolio/logos/javascript.png";
import mongodb from "../assets/portfolio/logos/mongodb.png";
import nodejs from "../assets/portfolio/logos/nodejs.png";
import python from "../assets/portfolio/logos/python.png";
import react from "../assets/portfolio/logos/react.png";
import spring from "../assets/portfolio/logos/spring.png";
import sql from "../assets/portfolio/logos/sql.png";

const Skills = () => {
  const skill = [
    {
      id: 1,
      src: c,
      title: "C",
      style: "shadow-blue-500",
    },
    {
      id: 2,
      src: cpp,
      title: "C++",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: java,
      title: "Java",
      style: "shadow-red-500",
    },
    {
      id: 4,
      src: python,
      title: "Python",
      style: "shadow-yellow-500",
    },
    {
      id: 5,
      src: html5,
      title: "HTML5",
      style: "shadow-orange-500",
    },
    {
      id: 6,
      src: css3,
      title: "CSS3",
      style: "shadow-blue-500",
    },
    {
      id: 7,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 8,
      src: react,
      title: "ReactJS",
      style: "shadow-cyan-500",
    },
    {
      id: 9,
      src: nodejs,
      title: "NodeJS",
      style: "shadow-green-500",
    },
    {
      id: 10,
      src: express,
      title: "ExpressJS",
      style: "shadow-cyan-500",
    },
    {
      id: 11,
      src: sql,
      title: "SQL",
      style: "shadow-green-500",
    },
    {
      id: 12,
      src: mongodb,
      title: "MongoDB",
      style: "shadow-green-500",
    },
    {
      id: 13,
      src: spring,
      title: "Spring",
      style: "shadow-green-500",
    },
    {
      id: 14,
      src: git,
      title: "Git",
      style: "shadow-orange-500",
    },
    {
      id: 15,
      src: github,
      title: "GitHub",
      style: "shadow-cyan-500",
    },
  ];
  return (
    <div
      name="skills"
      className="bg-gradient-to-b from-gray-800 to-black 
    w-full hfull"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Technical skills
          </p>
          <p className="py-6"> These are the technologies on which I am working.</p>
        </div>

        <div className="w-full grid grid-cols-3 sm:grid-cols-5 gap-8 text-center py-8 px-12 ml-0 sm:px-0">
          {skill.map(({ id, src, title, style }) => (
            <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
        ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
