import styles from "./NavItem.module.css";
import { INavItem } from "../types";

interface IProps extends INavItem {
  selected?: boolean;
  withIcon?: boolean;
  inList?: boolean;
}

const NavItem: React.FC = ({
  name,
  icon,
  link,
  selected = false,
  withIcon = false,
  inList = false,
}: IProps) => {
  return (
    <li
      className={`${styles.navbarItem} ${inList ? styles.navbarItemInList : ""}`}
    >
      <a key={name} href={link} className={styles.navbarLink}>
        {withIcon && icon}
        <span>{name}</span>
        {selected && <div className={styles.activeItemIndicator} />}
      </a>
    </li>
  );
};

export default NavItem;
