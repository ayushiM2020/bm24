import React, { useState } from "react";

import "./App.css";

function App() {
  const [textInput, setTextInput] = useState("");
  const [numberInput, setNumberInput] = useState(0);

  const handleTextInputChange = (event) => {
    setTextInput(event.target.value);
  };

  const handleNumberInputChange = (event) => {
    setNumberInput(Number(event.target.value));
  };

  const handleGenerateClick = () => {
    // Handle generate button click logic here
    console.log("Text input:", textInput);
    console.log("Number input:", numberInput);
    setTextInput("");
    setNumberInput(0);
  };
  return (
    <div className="ExploreEase">
      <h1>ExploreEase</h1>
      <div className="input-container">
        <input
          type="text"
          value={textInput}
          onChange={handleTextInputChange}
          className="input-box"
          placeholder="Enter text"
        />
        <input
          type="number"
          value={numberInput}
          onChange={handleNumberInputChange}
          className="input-box"
          placeholder="Enter number"
        />
        <button className="generate-button" onClick={handleGenerateClick}>
          Generate
        </button>
      </div>
    </div>
  );
}

export default App;
