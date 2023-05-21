import { React } from "react";
import PropTypes from "prop-types";
import { Button } from "react-bootstrap";
import Spinner from "react-bootstrap/Spinner";
function PromptInput(props) {
  function handleChange(e) {
    const inputValue = e.target.value;
    const { setPrompt } = props;
    const updatedPrompt = inputValue;
    setPrompt(updatedPrompt);
  }
  var button = <div></div>;
  if (props.loading) {
    button = <Spinner animation="grow" />;
  } else {
    button = (
      <Button
        title="Generate"
        variant="primary"
        style={{
          maxWidth: "100px",
        }}
        onClick={() => {
          props.onGenerate();
        }}
      >
        Generate
      </Button>
    );
  }
  return (
    <form className={"flex flex-col gap-[20px] items-center"}>
      <textarea
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
  setPrompt: PropTypes.func.isRequired,
  onGenerate: PropTypes.func.isRequired,
  loading: PropTypes.bool,
};
export default PromptInput;
