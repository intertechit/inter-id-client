import React, { ReactNode } from "react";

import Header from "./Header";
import Menu from "./Menu";
import User from "./User";

interface LayoutProps {
  children: ReactNode;
}

export default function index({ children }: LayoutProps) {
  return (
    <div className="gamification-main-container">
      <Header />

      <User />

      <div className="main-content">
        <Menu />
        {children}
      </div>

      <div className="game-footer">@ Intertech 2021</div>
    </div>
  );
}
