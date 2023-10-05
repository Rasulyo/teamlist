import { Select as SelectAntd } from "antd";

import styles from "./Select.module.scss";
export const Select = ({ placeholder, onClick }) => {
  return (
    <SelectAntd
      onClick={onClick}
      className={styles.select}
      placeholder={placeholder}
      size="large"
    />
  );
};
