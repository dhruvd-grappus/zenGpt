import React from "react";

export default function ActionBarIcons({ path, alt }) {
  return (
    <div className="action-icon rounded-full p-1 bg-orange-400">
      <img className="w-[10px]" src={path} alt={alt} />
    </div>
  );
}
