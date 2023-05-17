import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";

function PromptInput({ prompt, setPrompt }) {
  
  return (
    <label>
      Write your prompt:
      <textarea
        name="postContent"
        rows={4}
        cols={40}
        onChange={(e) => setPrompt(e.target.value)}
      />
    </label>
  );
}

export default PromptInput;
