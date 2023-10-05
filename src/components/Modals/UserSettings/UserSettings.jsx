import { Button } from "antd";

import styles from "./UserSettings.module.scss";
import { useAppDispatch } from "../../../store/hooks";
import { deleteUser, editUser, setEditMode } from "../../../store/userSlice";
import {
  successOpenModal,
  userSettingsCloseModal,
} from "../../../store/modalSlice";

export const UserSettings = ({ userId }) => {
  const dispatch = useAppDispatch();

  const removeUserHandler = () => {
    dispatch(deleteUser(userId));
    dispatch(successOpenModal(true));
    dispatch(userSettingsCloseModal(false));
  };

  const editUserHandler = () => {
    dispatch(setEditMode(true));
    // dispatch(editUser({ id: userId }));
  };

  return (
    <div className={styles.block}>
      <Button className={styles.block_btn} onClick={editUserHandler}>
        Изменить права доступа
      </Button>
      <Button className={styles.block_btn}>Отправить код повторно</Button>
      <Button className={styles.block_btn} onClick={removeUserHandler}>
        Удалить
      </Button>
    </div>
  );
};
