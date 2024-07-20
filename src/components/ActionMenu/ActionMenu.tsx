import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

import NavList from "../NavList/NavList";
import { actionItems } from "../NavBar/navItems";
import NavItem from "../NavItem/NavItem";
import styles from "./ActionMenu.module.css";

const ActionMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.userMenu}>
      <button onClick={toggleMenu} className={styles.userMenuButton}>
        <span>Your username</span>
        <ChevronDown className={isOpen ? styles.rotate : ""} />
      </button>
      {isOpen && (
        <div className={styles.menu}>
          <NavList>
            {actionItems.map((item) => (
              <NavItem key={item.name} {...item} withIcon inMenu />
            ))}
          </NavList>
        </div>
      )}
    </div>
  );
};

export default ActionMenu;
