import styles from "./Wrapper.module.scss";
import { CloseOutlined } from "@ant-design/icons";
import { useAppDispatch } from "../../../store/hooks";
import { sendCloseModal } from "../../../store/modalSlice";
export const Wrapper = ({ children, closeIcon = false }) => {
  const dispatch = useAppDispatch();
  const closeModalHAndler = () => {
    dispatch(sendCloseModal(false));
  };
  return (
    <div className={styles.block}>
      {closeIcon && (
        <div className={styles.block_icon} onClick={closeModalHAndler}>
          <CloseOutlined />
        </div>
      )}
      {children}
    </div>
  );
};
