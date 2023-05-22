/* eslint-disable react/jsx-filename-extension */
import "./App.css";
import { useState, React } from "react";

import PromptInput from "./components/PromptInput";
import GPTEditor from "./components/editor";
import {
  sendPrompt,
  promptConfig,
  noLambda,
  noComponent,
} from "./PromptController";

function App() {
  const [prompts, setPrompts] = useState([]);
  const [gptCode, setCode] = useState("<h1></h1>");
  const [lastPrompt, setLastPrompt] = useState("");
  const [loading, setLoading] = useState(false);
  const listItems =
    prompts.length == 0
      ? []
      : [...prompts, promptConfig, noLambda, noComponent].map((d) => (
          <ol type="1" key={d}>
            {d}
          </ol>
        ));

  return (
    <div className="block">
      <div className="App-header flex gap-[20px] w-full flex-col">
        <div className="header flex flex-col bg-[#011627] p-2">
          <h1 className="flex p-2 justify-center text-xl mb-3">
            Zen GPT Code Generator
          </h1>
          <div className="grid grid-cols-3 justify-items-center text-lg">
            <h2>Prompts</h2>
            <h2>Code</h2>
            <h2>Live preview</h2>
          </div>
        </div>
        {/* <div className="main-container grid grid-cols-3 h-[100vh]"> */}
        <div className="main-container flex h-[100vh]">
          <div className="prompt-container flex flex-col h-full items-top justify-top gap-[5px] px-[30px]">
            <div className={"text-[12px] mb-[10px]"}>{listItems}</div>
            <div>
              <PromptInput
                setLastPrompt={setLastPrompt}
                currentPrompts={prompts}
                loading={loading}
                setPrompts={setPrompts}
                lastPrompt={lastPrompt}
                className="my-[100px]"
                onGenerate={() => {
                  setLoading(true);
                  sendPrompt({
                    prompts: [...prompts, lastPrompt],
                    setCode: setCode,
                  }).then(() => setLoading(false));
                  setPrompts((previousPrompt) => [
                    ...previousPrompt,
                    lastPrompt,
                  ]);
                }}
              />
            </div>
          </div>

          <GPTEditor code={gptCode} setCode={setCode} />
          {/* <div style={{ flex: 2, padding: "100px" }}></div> */}
          {/* <div></div> */}
        </div>
      </div>
      <footer></footer>
    </div>
  );
}

export default App;
