import React from "react";

const NavSubMenu = ({ links, showMenu }) => {
  return (
    <ul className={showMenu ? "nav-submenu" : "nav-submenu hide-menu"}>
      {links.map((l) => (
        <li key={l} className="submenu-item">
          {l}
        </li>
      ))}
    </ul>
  );
};

export default NavSubMenu;
