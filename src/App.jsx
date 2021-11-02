import React from "react";
import { useState } from "react";
import "./App.css";
import { Hero, About, Education, Experience, Habilities } from "./components";
import { CV } from "./CV/CV";

const { hero, about, education, experience, habilities } = CV;

function App() {
  const [showEducation, setShowEducation] = useState(true);
  return (
    <div className="App">
        <Hero hero={hero} />
        <About about={about} />
        
        <button
              className="custom-btn btn-4"
              onClick={() => setShowEducation(true)}
            >

         LAST GIGS

        </button>

        <button
              className="custom-btn btn-4"
              onClick={() => setShowEducation(false)}
            >
        
         RECORD SETS

        </button>

        <div>
        {showEducation ? (
          <Education education={education} />
        ) : (
          <Experience experience={experience} />
        )}
      </div>
        
        
        <Habilities habilities={habilities} />
        
	      
    </div>
  );
}

export default App;
