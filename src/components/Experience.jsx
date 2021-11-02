import React from "react";
import "./Experience.css";

const Experience = ({ experience }) => {
  return (
    <div>
      <div className="experience card">
        {experience.map((item) => {
          return (
            <div key={JSON.stringify(item)}>
              <p className="name"></p>
              
              <p>
              ▶    <a href={item.link}>
              {item.name} - {item.where} - {item.date}
          </a>
        </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Experience;
