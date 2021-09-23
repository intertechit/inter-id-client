import React from "react";
import Gem from "../../shared/Gem";
import Stars from "./Stars";

interface HeaderProps {
  type: "common" | "uncommon" | "rare" | "unique" | "legendary";
}

export default function Header({ type }: HeaderProps) {
  return (
    <div className="yorum-header">
      <div className="han-rozet-box">
        <Gem type={type} />
        <div className="icon">
          <img src="publishing-images/rozet/sample-icon.png" alt="" />
        </div>
      </div>

      <div className="rozet-header">
        <h6>Lorem Ipsum</h6>
      </div>

      <div className="rozet-header">
        <span className={type}>{type}</span>
      </div>

      <Stars score={3} />

      <div className="yorum-header-title">
        Deniz’in <b>Lorem Ipsum</b> rozeti için yapılan yorumlar.{" "}
        <a href="rozete-yorum.html">(Sen de Derya'nın bu rozetine yorum yap)</a>
      </div>
    </div>
  );
}
