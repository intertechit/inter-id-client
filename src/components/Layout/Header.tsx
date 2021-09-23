import React from "react";
import useTheme from "../../hooks/useTheme";
import Search from "./Search";

export default function Header() {
  const theme = useTheme();

  return (
    <div className="game-row">
      <div className="logo">
        <img src="/images/logo.png" alt="" />
      </div>
      <div className="dark-theme" onClick={() => theme.setDark(true)}>
        <img src="/images/dark-gem.png" width="30" height="31" alt="" />
      </div>
      <div className="light-theme" onClick={() => theme.setDark(false)}>
        <img src="/images/light-gem.png" width="30" height="31" alt="" />
      </div>

      <Search />

      <div className="clear" />
    </div>
  );
}
