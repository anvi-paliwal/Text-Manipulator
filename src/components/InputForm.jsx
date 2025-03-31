import React, { useState } from "react";

const InputForm = ({ mode, showAlert }) => {
  const [text, setText] = useState("");

  const handleInputChange = (e) => {
    setText(e.target.value);
  };
  const handleSentenceCase = () => {
    let sentenceT = text
      .trim()
      .split(/([.!?]\s*)/)
      .map((el) => {
        if (el.trim().length > 0) {
          return el.charAt(0).toUpperCase() + el.slice(1).toLowerCase();
        }
        return el;
      })
      .join("");
    setText(sentenceT);
    showAlert("Converted to Sentence case", "success");
  };
  const handleUpperCase = () => {
    setText(text.toUpperCase());
    showAlert("Converted to Upercase", "success");
  };
  const handleLowerCase = () => {
    setText(text.toLowerCase());
    showAlert("Converted to lowercase", "success");
  };
  const handleCapCase = () => {
    let newT = text
      .split(" ")
      .map((c) => c.charAt(0).toUpperCase() + c.slice(1).toLowerCase())
      .join(" ");
    setText(newT);
    showAlert("Converted to Capitalized case", "success");
  };
  const handleReverse = () => {
    let strArr = text.split("");
    strArr.reverse();
    let newText = strArr.join("");
    setText(newText);
    showAlert("Content reversed", "success");
  };
  const handleTextToSpeech = () => {
    const Speech = new SpeechSynthesisUtterance();
    const message = document.getElementById("text-box").value;
    Speech.text = message;
    Speech.lang = "eng";
    window.speechSynthesis.speak(Speech);
    showAlert("Converted to Speech", "success");
  };
  const handleExtraSpace = () => {
    setText(text.trim().replace(/\s+/g, " "));
    showAlert("Removed extra spaces", "success");
  };
  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    showAlert("Copied to Clipboard", "success");
  };
  const handleClear = () => {
    setText("");
    showAlert("Content cleared successfully", "success");
  };
  const handleDownload = (filename, text) => {
    // Create a txt object with the text content
    const txt = new Blob([text], { type: "text/plain" });
    const link = document.createElement("a");
    link.download = filename;
    link.href = URL.createObjectURL(txt);
    link.click();
    // Clean up the object URL to free up memory
    URL.revokeObjectURL(link.href);
  };
  const calculateReadingTime = (text) => {
    const words = text
      .trim()
      .split(/\s+/)
      .filter((el) => el.length > 0).length;

    // Average reading speed is approximately 200 words per minute
    const wordsPerMinute = 200;
    const readingTime = words / wordsPerMinute;
    return [words, readingTime];
  };
  const calculateSentences = (text) => {
    return text
      .trim()
      .split(/[.!?]+/)
      .filter((el) => el.trim().length > 0).length;
  };
  const sentences = calculateSentences(text);
  const [words, readingTime] = calculateReadingTime(text);

  return (
    <>
      <div className="form-floating mb-3 ">
        <textarea
          className={`form-control bg-${mode}`}
          placeholder="Leave a comment here"
          id="text-box"
          style={{
            height: 250,
            color: mode === "light" ? "black" : "white",
          }}
          value={text}
          onChange={handleInputChange}
        ></textarea>
        <label htmlFor="text-box">Type or paste your content here...</label>
      </div>
      <div className=" d-flex flex-wrap gap-2">
        <button
          disabled={text.length === 0}
          type="button"
          className="btn btn-primary"
          onClick={handleSentenceCase}
        >
          Sentence case
        </button>
        <button
          disabled={text.length === 0}
          type="button"
          className="btn btn-primary"
          onClick={handleUpperCase}
        >
          UPPER CASE
        </button>
        <button
          disabled={text.length === 0}
          type="button"
          className="btn btn-primary"
          onClick={handleLowerCase}
        >
          lower case
        </button>
        <button
          disabled={text.length === 0}
          type="button"
          className="btn btn-primary"
          onClick={handleCapCase}
        >
          Capitalized Case
        </button>
        <button
          disabled={text.length === 0}
          type="button"
          className="btn btn-primary"
          onClick={handleExtraSpace}
        >
          Remove Extra Space
        </button>
        <button
          disabled={text.length === 0}
          type="button"
          className="btn btn-primary"
          onClick={handleTextToSpeech}
        >
          Text to Speech
        </button>
        <button
          disabled={text.length === 0}
          type="button"
          className="btn btn-primary"
          onClick={handleReverse}
        >
          Reverse Text
        </button>
        <button
          disabled={text.length === 0}
          type="button"
          className="btn btn-primary"
          onClick={handleCopy}
        >
          Copy to Clipboard
        </button>
        <button
          disabled={text.length === 0}
          type="button"
          className="btn btn-primary"
          onClick={() => {
            handleDownload("textmanipulator.txt", text);
          }}
        >
          Download Text
        </button>
        <button
          disabled={text.length === 0}
          type="button"
          className="btn btn-primary"
          onClick={handleClear}
        >
          Clear
        </button>
      </div>
      <div style={{ color: mode === "light" ? "black" : "white" }}>
        <h5 className="my-3">Details</h5>
        <p>
          Words:
          {words}
        </p>
        <p>characters: {text.length} </p>
        <p>Sentences: {sentences}</p>
        <p>Reading Time: {readingTime} minutes</p>
      </div>
    </>
  );
};

export default InputForm;
