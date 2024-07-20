import logo from "@/assets/ah-logo.svg";
import styles from "../NavBar/NavBar.module.css";

const Logo: React.FC = () => {
  return (
    <div className={styles.navbarLogo}>
      <img src={logo} alt="Logo" />
    </div>
  );
};

export default Logo;
