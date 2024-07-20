import styles from "./NavList.module.css";

interface IProps {
  children: React.ReactNode;
  withGap?: boolean;
}

const NavList: React.FC = ({ children, withGap = false }: IProps) => {
  return (
    <ul className={`${styles.navList} ${withGap ? styles.withGap : ""}`}>
      {children}
    </ul>
  );
};

export default NavList;
