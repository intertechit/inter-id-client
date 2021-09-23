import React from "react";

interface GemProps {
  type: "common" | "uncommon" | "rare" | "unique" | "legendary";
}

export default function ModalGem({ type }: GemProps) {
  return (
    <div className={`modal-rozet-${type}`}>
      <img src={`images/${type}-icon.png`} alt={type} />
    </div>
  );
}
