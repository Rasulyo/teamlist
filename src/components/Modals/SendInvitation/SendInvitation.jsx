import { Button, Form, Input as InputAntd } from "antd";
import { Wrapper } from "../Wrapper/Wrapper";
import Input from "../../../shared/Input/Input";
import { useForm } from "react-hook-form";
import { userAccess } from "../../../constants";

import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { createUser } from "../../../store/userSlice";
import {
  checkboxOpenModal,
  emailOpenModal,
  sendCloseModal,
  selectCheckboxModal,
  checkboxCloseModal,
} from "../../../store/modalSlice";
import Checkbox from "../../../shared/Checkbox/Checkbox";

import styles from "./SendInvitation.module.scss";
import { ArrowIcon } from "../../../assets/ArrowIcon";

export const SendInvitation = () => {
  const dispatch = useAppDispatch();
  const isCheckboxModal = useAppSelector(selectCheckboxModal);
  const { handleSubmit, control } = useForm({
    mode: "all",
    defaultValues: {
      all: false,
      advertisement: false,
      support: false,
      customer_requests: false,
      analytics: false,
      stock: false,
      blog: false,
    },
  });
  const onSubmit = (data) => {
    dispatch(createUser(data));
    dispatch(sendCloseModal(false));
    console.log(data, "data");
  };

  const openEmailModal = () => {
    dispatch(emailOpenModal(true));
    dispatch(checkboxCloseModal(false));
  };

  const openCheckboxModal = () => {
    dispatch(checkboxOpenModal(true));
  };

  return (
    <Wrapper closeIcon={true}>
      <div className={styles.block}>
        <h2 className={styles.block_title}>Отправьте приглашение</h2>
        <Form className={styles.block_form} onFinish={handleSubmit(onSubmit)}>
          <Input
            className={styles.block_input}
            placeholder={"Email"}
            control={control}
            name={"email"}
            type={"text"}
          />
          <InputAntd
            className={styles.block_input}
            placeholder={"Выберите право доступа"}
            onClick={openCheckboxModal}
            suffix={<ArrowIcon />}
          />
          {isCheckboxModal && (
            <div className={styles.block_checkboxes}>
              {userAccess.map((elem, index) => (
                <Checkbox
                  key={index}
                  control={control}
                  name={elem.value}
                  title={elem.label}
                />
              ))}
            </div>
          )}
          <Button
            className={styles.block_btn}
            htmlType="submit"
            onClick={openEmailModal}
          >
            Отправить приглашение
          </Button>
        </Form>
      </div>
    </Wrapper>
  );
};
