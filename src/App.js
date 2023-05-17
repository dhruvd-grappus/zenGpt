/* eslint-disable react/jsx-filename-extension */
import "./App.css";
import { useState, React } from "react";
import { Button, Col, Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import PromptInput from "./components/PromptInput";
import GPTEditor from "./components/editor";
import sendPrompt from "./PromptController";

function App() {
  const [prompts, addPrompt] = useState([]);
  const [gptCode, setCode] = useState("<h1></h1>");
  const [lastPrompt, setLastPrompt] = useState("");
  return (
    <div className="App">
      <header className="App-header">
        <Container>
          <Row>
            <Col>
              <PromptInput setPrompt={setLastPrompt} currentPrompts={prompts} />
              <Button
                title="Generate"
                variant="primary"
                onClick={() => {
                  sendPrompt({
                    prompts: [
                      ...prompts,
                      lastPrompt,
                    ],
                    setCode: setCode,
                  });
                  addPrompt((previousPrompt) => [
                    ...previousPrompt,
                    lastPrompt,
                  ]);

                }}
              >
                Generate
              </Button>
            </Col>
            <Col>
              <GPTEditor code={gptCode} setCode={setCode} />
            </Col>
          </Row>
        </Container>
      </header>
    </div>
  );
}

export default App;
