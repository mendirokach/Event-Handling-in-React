import React, { useState } from "react";

function App() {
  const [color, setColor] = useState("white");
  const [name, setName] = useState(null);
  const [isClicked, setClicked] = useState(false);

  const buttonStyle = {
    backgroundColor: color
  };

  function changeColor() {
    setColor("black");
  }

  function handleOnMouseOut() {
    setColor("white");
  }

  function handleInput(e) {
    setName(e.target.value);
    setClicked(false);
  }

  function handleOnSubmit() {
    setClicked(true);
  }
  return (
    <div className="container">
      <h1>Hello {isClicked && name}</h1>
      <input
        type="text"
        placeholder="What's your name?"
        onChange={handleInput}
        value={name}
      />
      <button
        onClick={handleOnSubmit}
        onMouseOver={changeColor}
        onMouseOut={handleOnMouseOut}
        style={buttonStyle}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
