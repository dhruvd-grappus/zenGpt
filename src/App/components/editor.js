import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";
import React from "react";
import PropTypes from "prop-types";
import "./editor.css";
import { useState } from "react";
function filterMultilineString(str) {
  var lines = str.split('\n');

  // Remove the line with "jsx" in it
  lines = lines.filter(line => !line.includes('jsx'));
  lines = lines.filter(line => !line.includes('example'));
  lines = lines.filter(line => !line.includes('AI'));
  lines = lines.filter(line => !line.includes('Here'));
  // Remove all lines starting with import
  lines = lines.filter(line => !line.trim().startsWith('import'));

  // Remove all lines starting with export
  lines = lines.filter(line => !line.trim().startsWith('export'));

  // Remove the line with "```" in it
  lines = lines.filter(line => !line.includes('```'));

  return lines.join('\n');
}

export default function GPTEditor(props) {
  var filteredCode = filterMultilineString(props.code);
  return (
    <LiveProvider code={filteredCode} scope={{ React, useState }}>
      <div className="editor-preview">
        <LiveEditor
          className="code-editor"
          onChange={(s) => props.setCode(s)}
        />

        <div className="preview">
          <LivePreview />
          <LiveError style={{color:'red',fontSize:'12px'}} />
        </div>


      </div>
    </LiveProvider>
  );
}
GPTEditor.propTypes = {
  code: PropTypes.string,
  setCode:PropTypes.func
};
