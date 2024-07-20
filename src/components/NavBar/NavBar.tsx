import { useState } from "react";

import NavItem from "@/components/NavItem/NavItem";
import NavList from "@/components/NavList/NavList";
import UserMenu from "@/components/ActionMenu/ActionMenu";
import Logo from "@/components/Logo/Logo";
import MobileMenu from "@/components/MobileMenu/MobileMenu";
import { userName } from "@/constants";
import { navItems } from "./navItems";
import styles from "./NavBar.module.css";

const renderNavItem = navItems.map((item) => (
  <NavItem key={item.name} {...item} selected={item.name === "Home"} />
));

const NavBar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header>
      <nav className={`${styles.navbar} ${styles.desktopNavbar}`}>
        <Logo />
        <NavList withGap>{renderNavItem}</NavList>
        <UserMenu />
      </nav>

      <nav className={`${styles.navbar} ${styles.mobileNavbar}`}>
        {isMobileMenuOpen ? (
          <span className={styles.userName}>{userName}</span>
        ) : (
          <>
            <Logo />
            <NavItem name="Home" link="#" selected />
          </>
        )}
        <MobileMenu isOpen={isMobileMenuOpen} toggleOpen={toggleMobileMenu} />
      </nav>
    </header>
  );
};

export default NavBar;
