import logo from "./logo.svg";
import "./App.css";
import GPTEditor from "./components/editor.js";
import PromptInput from "./components/PromptInput.js";
import { useState } from "react";
import { Button, Col, Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
function App() {
  const [prompt, setPrompt] = useState("");
  var OPENAI_API_KEY = "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";
  const promtpConfig =
    ' replace "useState" with "React.useState", delete export & import statements, Only respond with code';
  async function sendPrompt() {
    await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      body: JSON.stringify({
        model: "gpt-3.5-turbo-0301",
        prompt: prompt + promtpConfig,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        Authorization: "Bearer " + OPENAI_API_KEY,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }
  return (
    <div className="App">
      <header className="App-header">
        <Container>
          <Row>
            <Col>
              <PromptInput prompt={prompt} setPrompt={setPrompt}></PromptInput>{" "}
              <Button
                title="Generate"
                variant="primary"
                onClick={() => {
                  sendPrompt();
                }}
              >
                Generate
              </Button>
            </Col>
            <Col>
              <GPTEditor></GPTEditor>
            </Col>
          </Row>
        </Container>
      </header>
    </div>
  );
}

export default App;
