import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";
import React from "react";
import { useState } from "react";
export default function GPTEditor() {
  return (
    <div
      style={{
        display: "flex",
        gap: "100px",
      }}
    >
      <LiveProvider code="<h1></h1>" scope={{ React, useState }}>
        <LiveEditor />
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
