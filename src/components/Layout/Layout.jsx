import { SideNavigation } from "../SideNavigation/SideNavigation";
import { Content } from "../Content/Content";
import styles from "./Layout.module.scss";

export const Layout = () => {
  return (
    <div className={styles.block}>
      <SideNavigation />
      <Content />
    </div>
  );
};
