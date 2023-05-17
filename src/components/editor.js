import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";
import React from "react";
import PropTypes from "prop-types";

import { useState } from "react";
export default function GPTEditor(props) {
  
  return (
    <div
      style={{
        display: "flex",
        gap: "100px",
      }}
    >
      <LiveProvider code={props.code} scope={{ React, useState }}>
        <LiveEditor onChange={(s) => props.setCode(s)} />
        <div
          className="square border border-success"
          style={{
            padding: "100px",
          }}
        >
          <LivePreview />
        </div>

        <LiveError />
      </LiveProvider>
    </div>
  );
}
GPTEditor.propTypes = {
  code: PropTypes.string,
  setCode: PropTypes.func,
};
