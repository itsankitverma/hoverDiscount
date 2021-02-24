import React, { useState } from "react";
import "./App.css";

function App() {
  const [show, setshow] = useState(false);
  const [state, setstate] = useState(true);
  return (
    <div className="mainPage centerAt">
      {show ? (
        <>
          <div
            onMouseLeave={() => {
              setshow(!show);
            }}
            className="AfterHover"
          >
            &emsp;&emsp; 10% offer..
            <br />
            <br /> Click{" "}
            <button
              className="buttonBGC"
              onClick={() => {
                alert("Hurray !! You have claimed 10% offer");
              }}
            >
              Here
            </button>{" "}
            to avail it
          </div>
        </>
      ) : (
        <>
          <div
            onMouseEnter={() => {
              setshow(!show);
            }}
          >
           <span className="transitionOut">Discount available.. Come <span >here</span> to Avail</span> 
          </div>
        </>
      )}
      
    </div>
  );
}

export default App;
