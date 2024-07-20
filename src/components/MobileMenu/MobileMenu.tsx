import { Menu, X } from "lucide-react";

import { actionItems, navItemsMobile } from "../NavBar/navItems";
import NavList from "../NavList/NavList";
import NavItem from "../NavItem/NavItem";
import styles from "./MobileMenu.module.css";

interface IProps {
  isOpen: boolean;
  toggleOpen: () => void;
}

const MobileMenu: React.FC = ({ isOpen, toggleOpen }: IProps) => {
  return (
    <>
      <div className={`${styles.navbarLinks} ${isOpen ? styles.open : ""}`}>
        <NavList>
          {navItemsMobile.map((item) => (
            <NavItem key={item.name} {...item} withIcon inList />
          ))}
        </NavList>
        <NavList className={styles.mobileActionItems}>
          {actionItems.map((item) => (
            <NavItem key={item.name} {...item} withIcon inList />
          ))}
        </NavList>
      </div>
      <button className={styles.mobileMenuBtn} onClick={toggleOpen}>
        {isOpen ? <X /> : <Menu />}
      </button>
    </>
  );
};
export default MobileMenu;
