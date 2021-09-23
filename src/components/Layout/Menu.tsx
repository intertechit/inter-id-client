import React from "react";
import { Link, useLocation } from "react-router-dom";

interface NavItemProps {
  to: string;
  text: string;
}

function NavItem({ to, text }: NavItemProps) {
  const { pathname } = useLocation();
  return (
    <li className={pathname === to ? "active" : ""}>
      <Link to={to}>
        <span>{text}</span>
      </Link>
    </li>
  );
}

export default function Menu() {
  return (
    <div className="menu">
      <ul>
        <NavItem text="ROZETLERİ" to="/" />
        <NavItem text="HAN" to="/han" />
        <NavItem text="SIRALAMALAR" to="/siralamalar" />
        <NavItem text="TÜM ROZETLER" to="/tum-rozetler" />
      </ul>
    </div>
  );
}
