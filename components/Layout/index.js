import { Navbar } from "../Navbar";
import { Footer } from "../footer";

import layoutStyles from "../../styles/Layout.module.css";

const Layout = ({ children }) => {
  return (
    <div className={`${layoutStyles.drm_layout__main} container-fluid`}>
      <Navbar />
      <div className={`${layoutStyles.white}`}>{children}</div>
      <Footer />
    </div>
  );
};

export { Layout };
