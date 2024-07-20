import styles from "./NavList.module.css";

interface IProps {
  children: React.ReactNode;
}

const NavList: React.FC = ({ children }: IProps) => {
  return <ul className={styles.navList}>{children}</ul>;
};

export default NavList;
