import { useState } from "react";
import { Menu, X } from "lucide-react";

import NavItem from "@/components/NavItem/NavItem";
import NavList from "../NavList/NavList";
import { userName } from "@/constants";
import { actionItems, navItems } from "./navItems";
import logo from "@/assets/ah-logo.svg";
import styles from "./NavBar.module.css";

const NavBar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header>
      <nav className={styles.navbar}>
        {isMobileMenuOpen ? (
          <span className={styles.userName}>{userName}</span>
        ) : (
          <>
            <div className={styles.navbarLogo}>
              <img src={logo} alt="Logo" />
            </div>
            <NavItem name="Home" link="#" selected />
          </>
        )}
        <div
          className={`${styles.navbarLinks} ${isMobileMenuOpen ? styles.open : ""}`}
        >
          <NavList>
            {navItems.map((item) => (
              <NavItem
                key={item.name}
                name={item.name}
                link={item.link}
                icon={item.icon}
                withIcon
                inList
              />
            ))}
          </NavList>
          <NavList>
            {actionItems.map((item) => (
              <NavItem
                key={item.name}
                name={item.name}
                link={item.link}
                icon={item.icon}
                withIcon
                inList
              />
            ))}
          </NavList>
        </div>
        <button className={styles.mobileMenuBtn} onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </nav>
    </header>
  );
};

export default NavBar;
