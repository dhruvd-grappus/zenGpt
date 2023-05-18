import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";
import React from "react";
import PropTypes from "prop-types";
import "./editor.css";
import { useState } from "react";
export default function GPTEditor(props) {
  return (
    <LiveProvider code={props.code} scope={{ React, useState }}>
      <div className="editor-preview">
        <div className="code-editor">
          <LiveEditor onChange={(s) => props.setCode(s)} />
        </div>

        <div className="preview">
          <LivePreview />
        </div>

        <LiveError />
      </div>
    </LiveProvider>
  );
}
GPTEditor.propTypes = {
  code: PropTypes.string,
  setCode: PropTypes.func,
};
