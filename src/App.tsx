import { useEffect, useState } from "react";
import NavBar from "./components/NavBar/NavBar";
import { DESKTOP_BREAKPOINT } from "./constants";

function App() {
  const [isMobile, setIsMobile] = useState(
    window.innerWidth < DESKTOP_BREAKPOINT,
  );

  useEffect(() => {
    // Handler to call on window resize
    const handleResize = () => {
      setIsMobile(window.innerWidth < DESKTOP_BREAKPOINT);
    };
    // Add event listener for resize
    window.addEventListener("resize", handleResize);
    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return <NavBar isMobile={isMobile} />;
}

export default App;
