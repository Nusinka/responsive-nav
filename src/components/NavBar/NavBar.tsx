import React, { useState } from "react";

import NavItem from "../NavItem/NavItem";
import NavList from "../NavList/NavList";
import UserMenu from "../ActionMenu/ActionMenu";
import Logo from "../Logo/Logo";
import MobileMenu from "../MobileMenu/MobileMenu";
import { USER_NAME } from "../../constants";
import { navItems } from "./navItems";
import styles from "./NavBar.module.css";

interface IProps {
  isMobile: boolean;
}

const renderNavItem = navItems.map((item) => (
  <NavItem key={item.name} {...item} selected={item.name === "Home"} />
));

const NavBar: React.FC = ({ isMobile }: IProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header>
      {isMobile ? (
        <nav className={`${styles.navbar} ${styles.mobileNavbar}`}>
          {isMobileMenuOpen ? (
            <span className={styles.userName}>{USER_NAME}</span>
          ) : (
            <>
              <Logo />
              <NavItem name="Home" link="#" selected />
            </>
          )}
          <MobileMenu isOpen={isMobileMenuOpen} toggleOpen={toggleMobileMenu} />
        </nav>
      ) : (
        <nav className={`${styles.navbar} ${styles.desktopNavbar}`}>
          <Logo />
          <NavList withGap>{renderNavItem}</NavList>
          <UserMenu />
        </nav>
      )}
    </header>
  );
};

export default NavBar;
