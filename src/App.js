import Navbar from "./components/Navbar";
import { useState } from "react";
import "./App.css";
import Button from "./components/Button";
function App() {
  const [text, setText] = useState("");
  const [darkMode, setDarkMode] = useState("");

  const inputChangeHandler = (event) => {
    setText(event.target.value);
  };

  const uppercaseChangeHandler = () => {
    setText((prev) => {
      const upper = prev.toUpperCase();
      return upper;
    });
  };

  const lowercaseChangeHandler = () => {
    setText((prev) => {
      const lower = prev.toLowerCase();
      return lower;
    });
  };

  const cleartextHandler = () => {
    setText("");
  };

  const removeExtraSpaceHandler = () => {
    setText((prev) => {
      return prev.replace(/\s{2,}/g, " ").trim();
    });
  };

  let characters = text.length;
  let words = 1;

  for (let i = 0; i < text.length; i++) {
    if (text[i] !== " " && text[i - 1] === " ") {
      words++;
    }
  }

  let readTime;

  if (text[text.length - 1] !== " ") {
    readTime = text.length * 0.08;
  }

  const copyHandler = () => {
    navigator.clipboard.writeText(text);
    alert("Text copied!");
  };

  const darkModeSetUp = (dark) => {
    setDarkMode(`${dark}App`);
  };

  return (
    <div className={`${darkMode} main-div`}>
      <Navbar darkModeHandler={darkModeSetUp} />
      <h1>Enter the text to analyze below</h1>
      <textarea
        onChange={inputChangeHandler}
        value={text}
        className="textarea"
      />
      <div className="btn-div">
        <Button onClick={uppercaseChangeHandler}>Convert to UPPERCASE</Button>
        <Button onClick={lowercaseChangeHandler}>Convert to lowercase</Button>
        <Button onClick={cleartextHandler}>Clear text</Button>
        <Button onClick={copyHandler}>Copy text</Button>
        <Button onClick={removeExtraSpaceHandler}>Remove extra space</Button>
      </div>
      <h1>Your text summary</h1>
      <p>
        {words} word and {characters} characters
      </p>
      <p>{readTime} secs read</p>
      <h1>Preview</h1>
      <p>{text}</p>
    </div>
  );
}

export default App;