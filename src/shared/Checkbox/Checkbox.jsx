import { Controller } from "react-hook-form";
import { Checkbox as CheckboxAntd } from "antd";

const Checkbox = ({ control, name, title }) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <div>
          <label>
            <CheckboxAntd {...field} />
            {title}
          </label>
        </div>
      )}
    />
  );
};

export default Checkbox;
