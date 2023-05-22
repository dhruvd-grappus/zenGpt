import { LivePreview, LiveError } from "react-live";
import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import ActionBarIcons from "./ActionBarIcons";
export const CodePreview = () => {
  const [isMax, setMax] = useState(false);
  var basePreview = (
    <div className="preview">
      <div className="browserTitle flex gap-[5px] justify-end bg-[gray] p-2">
        <ActionBarIcons
          path="/icons/close.png"
          alt="close-icon"
          onClick={() => setMax(false)}
        />
        <ActionBarIcons
          path="/icons/maximize.png"
          alt="maximize-icon"
          onClick={() => setMax(true)}
        />
        <ActionBarIcons
          path="/icons/minimize.png"
          alt="minimize-icon"
          onClick={() => setMax(false)}
        />
      </div>
      <LivePreview />
      <LiveError style={{ color: "red", fontSize: "12px" }} />
    </div>
  );
  return (
    <div >
      {basePreview}
      <Modal show={isMax} fullscreen={true}  >{basePreview}</Modal>
    </div>
  );
};
