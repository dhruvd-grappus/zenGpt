/* eslint-disable react/jsx-filename-extension */
import "./App.css";
import { useState, React } from "react";

import PromptInput from "./components/PromptInput";
import GPTEditor from "./components/editor";
import { sendPrompt, promptConfig } from "./PromptController";

function App() {
  const [prompts, addPrompt] = useState([]);
  const [gptCode, setCode] = useState("<h1></h1>");
  const [lastPrompt, setLastPrompt] = useState("");
  const [loading, setLoading] = useState(false);
  const listItems =
    prompts.length == 0
      ? []
      : [...prompts, promptConfig].map((d) => (
          <ol type="1" key={d}>
            {d}
          </ol>
        ));

  return (
    <div className="block">
      <div className="App-header">
        <div className="prompt-container">
          <div style={{ fontSize: "12px" }}>{listItems}</div>
          <PromptInput
            setPrompt={setLastPrompt}
            currentPrompts={prompts}
            loading={loading}
            onGenerate={ () => {
              setLoading(true);
              sendPrompt({
                prompts: [...prompts, lastPrompt],
                setCode: setCode,
              }).then(() => setLoading(false));
              addPrompt((previousPrompt) => [...previousPrompt, lastPrompt]);
            }}
          />
        </div>

        <GPTEditor code={gptCode} setCode={setCode}  />
        <div style={{ flex: 2, padding: "100px" }}></div>
      </div>
      <footer></footer>
    </div>
  );
}

export default App;
