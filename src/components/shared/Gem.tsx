import React from "react";

interface GemProps {
  type: "common" | "uncommon" | "rare" | "unique" | "legendary";
}

export default function Gem({ type }: GemProps) {
  return (
    <div className={`gem ${type}`}>
      <img src={`images/${type}-icon.png`} alt={type} />
    </div>
  );
}
