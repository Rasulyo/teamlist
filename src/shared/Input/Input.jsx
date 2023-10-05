import { Controller } from "react-hook-form";
import { Form, Input as InputAntd } from "antd";

const Input = ({ control, name, placeholder, type, className }) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ ...field }) => {
        return (
          <Form.Item>
            <InputAntd
              className={className}
              type={type}
              placeholder={placeholder}
              size="large"
              {...field.field}
            />
          </Form.Item>
        );
      }}
    />
  );
};
export default Input;
