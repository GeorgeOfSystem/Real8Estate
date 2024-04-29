import { ChangeEventHandler } from "react";
import style from "./index.module.css";
import { theme } from "../../assets/theme";

interface Props {
  name: string;
  type?: string;
  placeholder?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  value?: string | number;
  styles?: React.CSSProperties;
  hasError?: boolean;
  errorMsg?: object[];
}
const Input = (props: Props) => {
  const {
    name,
    type,
    placeholder,
    value,
    onChange,
    styles,
    hasError,
    errorMsg,
  } = props;
  return (
    <div className={style.container}>
      <input
        name={name}
        value={value}
        onChange={onChange}
        type={type ?? "text"}
        className={style.input}
        placeholder={placeholder ?? ""}
        style={{ backgroundColor: `${theme.palette.primary_50}`, ...styles }}
      />
      {hasError &&
        errorMsg?.map((errorInfo: any, index: number) => (
          <h6
            key={index}
            className={style.errMsg}
            style={{
              color: `${theme.palette.error_600}`,
            }}
          >
            {errorInfo.msg}
          </h6>
        ))}
    </div>
  );
};

export default Input;
