import { Wrapper } from "../Wrapper/Wrapper";
import { Button } from "antd";

import styles from "./Success.module.scss";

export const Success = ({ btn_title, title, closeModal }) => {
  return (
    <Wrapper>
      <div className={styles.block}>
        <h2>{title}</h2>
        <Button className={styles.block_btn} onClick={closeModal}>
          {btn_title}
        </Button>
      </div>
    </Wrapper>
  );
};
