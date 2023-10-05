import { Avatar, Button, List } from "antd";
import { useEffect, useState } from "react";
import Search from "antd/es/input/Search";
import { SendInvitation } from "../Modals/SendInvitation/SendInvitation";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import {
  fetchInitialData,
  selectData,
  selectEditMode,
} from "../../store/userSlice";
import {
  emailCloseModal,
  selectEmailModal,
  selectSendModal,
  selectSuccessModal,
  selectUserModal,
  sendOpenModal,
  successCloseModal,
  userSettingsOpenModal,
} from "../../store/modalSlice";
import { UserSettings } from "../Modals/UserSettings/UserSettings";
import { Success } from "../Modals/Success/Success";
import { SearchIcon } from "../../assets/SearchIcon";
import { PointsIcon } from "../../assets/PointsIcon";

import styles from "./Content.module.scss";
import { userOptionsAll } from "../../constants";

export const Content = () => {
  const dispatch = useAppDispatch();
  const isSendModal = useAppSelector(selectSendModal);
  const isUserSettingsModal = useAppSelector(selectUserModal);
  const isSuccessModal = useAppSelector(selectSuccessModal);
  const isEmailModal = useAppSelector(selectEmailModal);
  const users = useAppSelector(selectData);
  const editMode = useAppSelector(selectEditMode);
  const [searchField, setSearchField] = useState(false);

  useEffect(() => {
    dispatch(fetchInitialData());
  }, [dispatch]);
  const changeSearch = () => {
    setSearchField(true);
  };

  const hideSearch = () => {
    setSearchField(false);
  };

  const openModalHandler = () => {
    dispatch(sendOpenModal(true));
  };

  const openUserSettingsModal = () => {
    dispatch(userSettingsOpenModal(true));
  };

  const closeRemoveModalSuccess = () => {
    dispatch(successCloseModal(false));
  };

  const closeEmailModal = () => {
    dispatch(emailCloseModal(false));
  };

  return (
    <>
      <div className={styles.block}>
        <div className={styles.block_header}>
          <h2>Команда</h2>
          <div className={styles.block_header_left}>
            {searchField ? (
              <Search
                className={`${styles.block_search} ${styles.block_input}`}
                placeholder={"Поиск по Email"}
                onSearch={hideSearch}
              />
            ) : (
              <SearchIcon onClick={changeSearch} />
            )}
            <Button className={styles.block_btn} onClick={openModalHandler}>
              Добавить пользователя
            </Button>
          </div>
        </div>

        <List
          itemLayout="horizontal"
          dataSource={users}
          renderItem={(item, index) => (
            <List.Item>
              <List.Item.Meta
                avatar={
                  <Avatar
                    className={styles.block_image}
                    src={
                      item.image ||
                      "https://media.istockphoto.com/id/1442495175/photo/beauty-portrait-and-natural-face-of-black-woman-with-healthy-freckle-skin-texture-touch.jpg?s=1024x1024&w=is&k=20&c=RQrG556WAN9D42c_UUJWXk2LpS_kx9DntlsZ910RgkY="
                    }
                  />
                }
                title={
                  <span className={styles.block_name}>
                    {item.email}
                    <span
                      className={`${styles.block_name} ${styles.block_email}`}
                    >
                      {item.email}
                    </span>
                  </span>
                }
                description={
                  <>
                    {item.all &&
                      userOptionsAll.map((elem, index) => (
                        <Button key={index} className={styles.block_btn_grey}>
                          {elem}
                        </Button>
                      ))}
                    {item.advertisement && (
                      <Button className={styles.block_btn_grey}>
                        Модерация объявлений
                      </Button>
                    )}
                    {item.support && (
                      <Button className={styles.block_btn_grey}>
                        Тех поддержка
                      </Button>
                    )}
                    {item.customer_requests && (
                      <Button className={styles.block_btn_grey}>
                        Обращения клиентов
                      </Button>
                    )}
                    {item.analytics && (
                      <Button className={styles.block_btn_grey}>
                        Аналитика
                      </Button>
                    )}
                    {item.stock && (
                      <Button className={styles.block_btn_grey}>Акции</Button>
                    )}
                    {item.blog && (
                      <Button className={styles.block_btn_grey}>Блог</Button>
                    )}
                    {item.permissions &&
                      item.permissions.map((elem, index) => (
                        <Button className={styles.block_btn_grey} key={index}>
                          {elem}
                        </Button>
                      ))}
                  </>
                }
              />
              <PointsIcon onClick={openUserSettingsModal} />
              {isUserSettingsModal && <UserSettings userId={index} />}
            </List.Item>
          )}
        />
      </div>

      {isEmailModal && (
        <Success
          closeModal={closeEmailModal}
          btn_title={"Закрыть"}
          title={"Приглашение отправлено на почту example@email.com"}
        />
      )}
      {isSendModal && <SendInvitation />}
      {isSuccessModal && (
        <Success
          closeModal={closeRemoveModalSuccess}
          title={"Пользователь успешно удален"}
          btn_title={"Закрыть"}
        />
      )}
    </>
  );
};
