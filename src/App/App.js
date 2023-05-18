/* eslint-disable react/jsx-filename-extension */
import "./App.css";
import { useState, React } from "react";
import { Button } from "react-bootstrap";

import PromptInput from "./components/PromptInput";
import GPTEditor from "./components/editor";
import sendPrompt from "./PromptController";

function App() {
  const [prompts, addPrompt] = useState([]);
  const [gptCode, setCode] = useState("<h1></h1>");
  const [lastPrompt, setLastPrompt] = useState("");
  return (
    <div className="block">
      <div className="App-header">
        <div className="prompt-container">
          <PromptInput setPrompt={setLastPrompt} currentPrompts={prompts} />
          <Button
            title="Generate"
            variant="primary"
            style={{
              maxWidth: "100px",
            }}
            onClick={() => {
              sendPrompt({
                prompts: [...prompts, lastPrompt],
                setCode: setCode,
              });
              addPrompt((previousPrompt) => [...previousPrompt, lastPrompt]);
            }}
          >
            Generate
          </Button>
        </div>

        <GPTEditor code={gptCode} setCode={setCode} />
        <div style={{flex:2,padding:'100px'}}></div>
      </div>
    <footer></footer>
    </div>
  );
}

export default App;
