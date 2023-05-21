import React from "react";

export default function ActionBarIcons({ path, alt, onClick}) {
  return (
    <div className="action-icon rounded-full p-1 bg-orange-400" onClick={onClick}>
      <img className="w-[10px]" src={path} alt={alt} />
    </div>
  );
}
