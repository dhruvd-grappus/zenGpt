import { React } from "react";
import PropTypes from "prop-types";
import { Button } from "react-bootstrap";
import Spinner from "react-bootstrap/Spinner";
function PromptInput(props) {
  function handleChange(e) {
    const inputValue = e.target.value;
    const updatedPrompt = inputValue;
    props.setLastPrompt(updatedPrompt);
  }
  var button = <div></div>;
  if (props.loading) {
    button = <Spinner animation="grow" />;
  } else {
    button = (
      <div className={"gap-2 flex flex-row"}>
        <Button
          title="Generate"
          variant="primary"
          className="my-[10px]"
          style={{
            maxWidth: "100px",
          }}
          onClick={() => {
            props.setLastPrompt("");
            props.onGenerate();
          }}
        >
          Generate
        </Button>
        <Button
          title="Generate"
          variant="primary"
          className="my-[10px]"
          style={{
            maxWidth: "100px",
          }}
          onClick={() => {
            props.setLastPrompt("");
            props.setPrompts([]);
          }}
        >
          Reset
        </Button>
      </div>
    );
  }
  return (
    <form className={"flex flex-col gap-[20px] items-center"}>
      <textarea
        value={props.lastPrompt}
        className={"text-[14px] text-black p-2"}
        // style={{ fontSize: "14px" }}
        name="postContent"
        rows={2}
        cols={50}
        autoFocus
        onChange={handleChange}
      />
      {button}
    </form>
  );
}
PromptInput.propTypes = {
  setLastPrompt: PropTypes.func.isRequired,
  onGenerate: PropTypes.func.isRequired,
  loading: PropTypes.bool,
  lastPrompt: PropTypes.string,
  setPrompts: PropTypes.func.isRequired,
};
export default PromptInput;
