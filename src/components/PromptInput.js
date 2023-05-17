import { React } from "react";
import PropTypes from "prop-types";

function PromptInput(props) {
  function handleChange(e) {
    const inputValue = e.target.value;
    const { setPrompt } = props;
    const updatedPrompt = inputValue;
    setPrompt(updatedPrompt);
  }

  return (
    <label>
      Write your prompt:
      <textarea name="postContent" rows={4} cols={40} onChange={handleChange} />
    </label>
  );
}
PromptInput.propTypes = {
  setPrompt: PropTypes.func.isRequired,
};
export default PromptInput;
